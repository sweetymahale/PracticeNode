
$(document).ready(
  function()
  {
      var sec_seq = $('#sec_seq').val();
      var subject_seq = $('#subject_seq').val();
      processSection('standard', 'section', 'board', 'stream', sec_seq);
      processSubject('standard', 'subject', 'board', 'stream', subject_seq);
  }
);


function processClodeDiv()
{
  $('div#sms_receiver_list').css("display","none");
        return false;
}

function processCheck_all_user()
{
  if ($('#check_all_user').is(':checked'))
  {
    $('input[name=check_all_user]').attr('checked', true);
    $('input[name=check_user]').attr('checked', true);
  }
  else
  {
    $('input[name=check_all_user]').attr('checked', false);
    $('input[name=check_user]').attr('checked', false);

  }
}

function processSubject(ele_id,sub_id,board_id,stream_id,subject_seq)
{
  var board_seq=$("#"+board_id+" option:selected").val();
  var stream_seq=$("#"+stream_id+" option:selected").val();
  var std=$("#"+ele_id+" option:selected").val();

  if(std!="0" && board_seq!="0" && stream_seq!="0")
  {
    $.post('/my/assignment/processRequest', {cmd:"add_subject",std:std,board_seq:board_seq,stream_seq:stream_seq,subject_seq:subject_seq,random:random_int()},
    function(response)
    {
   //   alert(response);
      if(response!="")
      {
        $('#'+sub_id+' > option ').remove();
        $('#'+sub_id).append('<option value="0"> Select Subject </option>');
        $('#'+sub_id).append(response);
      }
      else
      {
        $('#'+sub_id+'> option ').remove();
        $('#'+sub_id).append('<option value="0"> Select Subject </option>');
      }
     });
  }
  else
  {
    $('#'+sub_id+'> option ').remove();
    $('#'+sub_id).append('<option value="0"> Select Subject </option>');
  }

}

function processSection(ele_id,sec_id,board_id,stream_id,sec_seq)
{
  var board_seq=$("#"+board_id+" option:selected").val();
  var stream_seq=$("#"+stream_id+" option:selected").val();
  var std=$("#"+ele_id+" option:selected").val();
  if(std!=0 && board_seq!=0 && stream_seq!=0)
  {
    $.post('/my/assignment/processRequest', {cmd:"add_section",std:std,board_seq:board_seq,stream_seq:stream_seq,sec_seq:sec_seq,random:random_int()},
    function(response)
    {
//      alert(response);
      if(response!="")
      {
        $('#'+sec_id+' > option ').remove();
        $('#'+sec_id).append('<option value="0"> Select Section </option>');
        $('#'+sec_id).append('<option value="0"> All </option>');
        $('#'+sec_id).append(response);
      }
      else
      {
        $('#'+sec_id+' > option ').remove();
        $('#'+sec_id).append('<option value="0"> Select Section </option>');
        $('#'+sec_id).append('<option value="0"> All </option>');
      }
    });
  }
  else
  {
     $('#'+sec_id+' > option ').remove();
     $('#'+sec_id).append('<option value="0"> Select Section </option>');
     $('#'+sec_id).append('<option value="0"> All </option>');
  }
}

function processAssignment()
{
   var board_seq=$("#board option:selected").val();
   var stream_seq=$("#stream option:selected").val();
   var std_seq=$("#standard option:selected").val();
   var section_seq=$("#section option:selected").val();
   var subject_seq=$("#subject option:selected").val();
   var sub=$("#sub").val();
   var message=$("#message").val();
   var sender_seq=$("#sender_seq").val();
   var due_date=$("#datepicker").val();
   var selected_option=[];
   var checkBoxes = $("input[name=checked_option[]]:checked");
   var file=$("input[name=file]").val();
   var current_date=$("#current_date").val();

  if(board_seq=="0")
  {
    alert("Please select the Board");
    return false;
  }
  else if(stream_seq=="0")
  {
    alert("Please select the Stream");
    return false;
  }
  else if(std_seq=="0")
  {
    alert("Please select the Class");
    return false;
  }
 /* else if(subject_seq=="0")
  {
    alert("Please select subject");
    return false;
  }*/
  else if(due_date == "")
  {
    alert("Please select the Due Date");
    return false;
  }
  else if(Date.parse(due_date) < Date.parse(current_date) )
  {
    alert("Due date must be equal to or greater than today's date");
  }
  else if(sub == "")
  {
	alert("Please enter the Subject");
	return false;
  }
  else
  {

    var option_checked_length=$("input[name=checked_option]:checked").length;

    $.each(checkBoxes, function()
    {
       selected_option.push($(this).val());

    });

    $.post('/my/assignment/processRequest', {cmd:"display_list_popup",board_seq:board_seq,stream_seq:stream_seq,std_seq:std_seq,section_seq:section_seq,subject_seq:subject_seq,sub:sub,message:message,sender_seq:sender_seq,selected_option:selected_option,due_date:due_date,random:random_int()},
      function(response)
      {
//       alert(response);
         $('div#sms_receiver_list').css("display","");
         $("#popup_content").html(response);
         $('div#facebox1').css("position","absolute");
         // window.location.href=window.location.href;
          return false;
      });

     //$('#assignment_form').submit();

  }

}

function processCancelAssignment()
{
  if(!confirm('Do you really want to delete this Assignment?')) return false;
  var ass_seq = $('#assignment_rec_seq').val();
  $.post('/my/assignment/processRequest', {cmd:"cancelAssignment",ass_seq:ass_seq,random:random_int()},
  function(response)
  {
    alert('Cancelled');
    window.location.href='/my/sent_assignments';
  });
  //alert(ass_seq);

}

function processPopup()
{
    var selected_parent=[];
    var selected_stud_seqArr = [];
    var option_checked_length=$("input[name=check_user]:checked").length;
    var checkBoxes = $("input[name=check_user]:checked");
    $.each(checkBoxes, function()
    {
       selected_parent.push($(this).val());
       var cur_id = $(this).attr('id');
       var idArr = cur_id.split("user");

       var studSeq = $("#check_stud"+idArr[1]).val();
       selected_stud_seqArr.push(studSeq);
    });

 //  alert(selected_parent);
    $("#selected_parent_id").val(selected_parent);
    $("#selected_stud_seq_str").val(selected_stud_seqArr);
    processClodeDiv();
    $('#assignment_form').submit();

}

var attachmentCount = 1;
function processAddRow()
{
  //  alert("hikkk");
   ++attachmentCount;
   var id = 'tr_id' + attachmentCount;
   var content='<tr id="'+id+'"><td valign="top" class="web_text_gray_bold">Attachment :</td><td colspan="2" valign="top"><input name="file'+attachmentCount+'" type="file" style="background-color:#FFFFFF; border:solid 1px; color:#CCCCCC;" size="50"> &nbsp;<a href="#" onclick="deleteRow(\'#'+id+'\');return false;">- Delete</a></td></tr>';
    //$('#tbl_sub tr:last').before(content);
    $('#tr_last').before(content);
}

function deleteRow(id)
{
  $(id).remove();
}

function processDisplay()
{
  $("#processDisplay").css('display','');
  $("#processEntry").css('display','none');
  $("#processEdit").css('display','none');
}

function processEntry()
{
  $("#processDisplay").css('display','none');
  $("#processEntry").css('display','');
  $("#processEdit").css('display','none');
}

function processEdit( holidaySeq )
{

}


function processAssApproval()
{
  var board_seq=$("#board option:selected").val();
   var stream_seq=$("#stream option:selected").val();
   var std_seq=$("#standard option:selected").val();
   var section_seq=$("#section option:selected").val();
   var subject_seq=$("#subject option:selected").val();
   var sub=$("#sub").val();
   var message=$("#message").val();
   var sender_seq=$("#sender_seq").val();
   var due_date=$("#datepicker").val();
   var selected_option=[];
   var checkBoxes = $("input[name=checked_option[]]:checked");
   var file=$("input[name=file]").val();
   var current_date=$("#current_date").val();

  if(board_seq=="0")
  {
    alert("Please select the Board");
    return false;
  }
  else if(stream_seq=="0")
  {
    alert("Please select the Stream");
    return false;
  }
  else if(std_seq=="0")
  {
    alert("Please select the Class");
    return false;
  }
 /* else if(subject_seq=="0")
  {
    alert("Please select subject");
    return false;
  }*/
  else if(due_date == "")
  {
    alert("Please select the Due Date");
    return false;
  }
  else if(Date.parse(due_date) < Date.parse(current_date) )
  {
    alert("Due date must be equal to or greater than today's date");
  }
  else if(sub == "")
  {
    alert("Please enter the Subject");
    return false;
  }
  else
  {
      $('#assignment_form').submit();

  }
}

function processRemoveAttachment(assignment_rec_seq, attachment_link, aLink)
{
  $.post('/my/assignment/processRequest', {cmd:"removeAttachment",assignment_rec_seq:assignment_rec_seq,attachment_link:attachment_link,aLink:aLink,random:random_int()},
    function(response)
    {
      if(response == "SUCCESS")
      {
        window.top.location = window.top.location;
      }
      else
      {
        alert('Could not able to remove it. Try again!');
      }

    });
}

function processSmsToTeacher(senderSeq)
{
   var sms_text = jQuery.trim($("#message_text").val());
   var length = sms_text.length;
   if(sms_text == '')
   {
     alert('Please enter SMS text');
     return false;
   }
   else if(length > 160)
   {
     alert('Only 160 characters are allowed');
     return false;
   }
   else
   {

     $.post('/my/assignment/processRequest', {cmd:"smsToTeacher",sms_text:sms_text,senderSeq:senderSeq,random:random_int()},
     function(response)
     {
        if(response.match('ERROR'))
        {
          text = response.split(':');
          alert(text[1]);
        }
        else if(response.match('SUCCESS'))
        {
           alert('SMS send successfully.');
        }
        else
        {
          alert('Could not able to send it. Try again!');
        }

     });
   }


}