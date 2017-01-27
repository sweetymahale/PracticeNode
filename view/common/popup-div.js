function positionInfo(object) {

  var p_elm = object;

  this.getElementLeft = getElementLeft;
  function getElementLeft() {
    var x = 0;
    var elm;
    if(typeof(p_elm) == "object"){
      elm = p_elm;
    } else {
      elm = document.getElementById(p_elm);
    }
    while (elm != null) {
      x+= elm.offsetLeft;
      elm = elm.offsetParent;
    }
    return parseInt(x);
  }

  this.getElementWidth = getElementWidth;
  function getElementWidth(){
    var elm;
    if(typeof(p_elm) == "object"){
      elm = p_elm;
    } else {
      elm = document.getElementById(p_elm);
    }
    return parseInt(elm.offsetWidth);
  }

  this.getElementRight = getElementRight;
  function getElementRight(){
    return getElementLeft(p_elm) + getElementWidth(p_elm);
  }

  this.getElementTop = getElementTop;
  function getElementTop() {
    var y = 0;
    var elm;
    if(typeof(p_elm) == "object"){
      elm = p_elm;
    } else {
      elm = document.getElementById(p_elm);
    }
    while (elm != null) {
      y+= elm.offsetTop;
      elm = elm.offsetParent;
    }
    return parseInt(y);
  }

  this.getElementHeight = getElementHeight;
  function getElementHeight(){
    var elm;
    if(typeof(p_elm) == "object"){
      elm = p_elm;
    } else {
      elm = document.getElementById(p_elm);
    }
    return parseInt(elm.offsetHeight);
  }

  this.getElementBottom = getElementBottom;
  function getElementBottom(){
    return getElementTop(p_elm) + getElementHeight(p_elm);
  }
}

function trim(stringToTrim)
{
  return stringToTrim.replace(/^\s+|\s+$/g,"");
}


function setElementProperty(p_property, p_value, p_elmId)
{
  var p_elm = p_elmId;
  var elm = null;

  if(typeof(p_elm) == "object"){
    elm = p_elm;
  } else {
    elm = document.getElementById(p_elm);
  }
  if((elm != null) && (elm.style != null)){
    elm = elm.style;
    elm[ p_property ] = p_value;
  }
}


function createFormDiv(currentFieldId, html, width, height, xOffset, yOffset)
{
  createFormDivOption(currentFieldId, html, width, height, xOffset, yOffset, 1);
}

function createFormDivOption(currentFieldId, html, width, height, xOffset, yOffset, showClose)
{
  //alert(currentFieldId + len + width);
  if(showClose)
  {
    htmlInner = "<img src='/images/closePopup.gif' onclick='javascript:hidePopup();' style=\"position:absolute;left:"+(width-11)+"px; top:"+2+"px\">" + html;
  }
  else
  {
    htmlInner = html;
  }

  var formDivId = "PopupFormDiv";
  if(document.getElementById)
  {
    var formDiv = document.getElementById(formDivId);

    formDiv.innerHTML = htmlInner;
    //formDiv.style.display = '';
    setElementProperty('display', 'block', formDivId);

    var fieldPos = new positionInfo(currentFieldId);

    var x = (fieldPos.getElementLeft() + fieldPos.getElementRight() - width)/2 + xOffset;
    var y = fieldPos.getElementBottom() + yOffset;
    //alert(x+ " "+ y);
    setElementProperty('left', x + "px", formDivId);
    setElementProperty('top', y + "px", formDivId);
    if(width!=0)
    {
      setElementProperty('width', width + "px", formDivId);
    }
    if(height!=0)
    {
      setElementProperty('height', height + "px", formDivId);
    }
  }
}

function blurrBackground()
{
  var fieldPos = new positionInfo(document.body);
  wrapperDiv = document.getElementById('PopupWrapperDiv');
  setElementProperty('display', 'block', wrapperDiv);
  setElementProperty('height', fieldPos.getElementHeight()+"px", wrapperDiv);
  setElementProperty('width', fieldPos.getElementWidth()+"px", wrapperDiv);

  setElementProperty('left', '0', wrapperDiv);
  setElementProperty('top', '0', wrapperDiv);
}

function hidePopup()
{
  var formDiv = document.getElementById('PopupFormDiv');
  setElementProperty('width', '0px', formDiv);
  setElementProperty('height', '0px', formDiv);
  setElementProperty('display', 'none', formDiv);

  wrapperDiv = document.getElementById('PopupWrapperDiv');
  setElementProperty('display', 'none', wrapperDiv);
  setElementProperty('width', '0px', wrapperDiv);
  setElementProperty('height', '0px', wrapperDiv);
}



function signInMsg(currentFieldId, msg)
{
  html = '\
  <table class=popupTable width=100%> \
    <tr><td colspan=2 class="popupTd bottomSpc">\
    Please do a quick <a href="/sendMsg/register">Sign Up</a> to '+msg+'.<br/>Its all FREE!</td></tr>\
  </table>';

  createFormDiv(currentFieldId, html, 345, 0, 0, 2);
}




function togglechecked()
{
  for (var i = 0; i < document.emailForm.elements.length; i++)
  {
    var e = document.emailForm.elements[i];
    if ((e.disabled == false) && (e.name != 'allbox') && (e.type == 'checkbox'))
    {
      e.checked = document.emailForm.allbox.checked;
    }
  }
}

function toggleselect()
{
  document.emailForm.allbox.checked = !document.emailForm.allbox.checked;
    togglechecked();
}


var IE = document.all?true:false
// If NS -- that is, !IE -- then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE);
// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var tempX = 0
var tempY = 0

function getMouseXY(e) {
  if (IE) { // grab the x-y pos.s if browser is IE
    tempX = event.clientX + document.body.scrollLeft
    tempY = event.clientY + document.body.scrollTop
  } else {  // grab the x-y pos.s if browser is NS
    tempX = e.pageX
    tempY = e.pageY
  }
  // catch possible negative values in NS4
  if (tempX < 0){tempX = 0}
  if (tempY < 0){tempY = 0}

  return true;
}

var w = 1;
var h = 1;
function getMouseXYNew(e)
{
    var xcoord=20
    var ycoord=20

    if (typeof e != "undefined")
    {
      xcoord+=e.pageX
      ycoord+=e.pageY
    }
    else if (typeof window.event !="undefined")
    {
      xcoord+=truebody().scrollLeft+event.clientX
      ycoord+=truebody().scrollTop+event.clientY
    }

    var docwidth=document.all? truebody().scrollLeft+truebody().clientWidth : pageXOffset+window.innerWidth-15
    var docheight=document.all? Math.max(truebody().scrollHeight, truebody().clientHeight) : Math.max(document.body.offsetHeight, window.innerHeight)

    if (xcoord+w+3>docwidth)
    xcoord=xcoord-w-(20*2)

    if (ycoord-truebody().scrollTop+h>truebody().clientHeight)
    ycoord=ycoord-h-20;

    tempX = ycoord;
    tempY = xcoord;
}

function pupupDisplayImg(currentFieldId, img, width, height, xOffset, yOffset)
{
  w = width;
  h= height;

  var htmlInner = '<img class=popupImg src="'+img+'" />';

  var formDivId = "PopupImgDiv";
  if(document.getElementById)
  {
    var formDiv = document.getElementById(formDivId);

    formDiv.innerHTML = htmlInner;
    //formDiv.style.display = '';
    setElementProperty('display', 'block', formDivId);


    var fieldPos = new positionInfo(currentFieldId);

    var x = 100;
    var y = 100;

    if((fieldPos.getElementLeft() - width) > 1)
    {
      x = fieldPos.getElementLeft() - width - 1;
    }
    else
    {
      x = fieldPos.getElementRight() + 1;
    }

    if((tempY - height) > 0)
    {
      y = tempY - height + 80;
    }
    else
    {
      y = tempY;
    }

    //alert(x+ " "+ y);
    setElementProperty('left', x + "px", formDivId);
    setElementProperty('top', y + "px", formDivId);
    if(width!=0)
    {
      setElementProperty('width', width + "px", formDivId);
    }
    if(height!=0)
    {
      setElementProperty('height', height + "px", formDivId);
    }
  }
}

function pupupHideImg()
{
  var imgDiv = document.getElementById('PopupImgDiv');
  setElementProperty('display', 'none', imgDiv);
}


document.write("<div id='PopupWrapperDiv' style='display:none; border:0px solid red; background:#cccccc; opacity: 0.25; filter:alpha(opacity=25); position:absolute'></div>");
document.write("<div id='PopupFormDiv' style='display:none; padding:3px 3px 3px 3px; border:2px solid #bbbbbb; background:white; position:absolute;'></div>");
document.write("<div id='PopupImgDiv' style='display:none; padding:0; border:1px solid lightgreen; background:white; position:absolute;'></div>");


function referFriendWithAddrBook(currentFieldId, isloggedIn, fname, basket_seq)
{
  blurrBackground();
  setTimeout('referFriendWithAddrBookP("'+currentFieldId+'", '+isloggedIn+', "'+fname+'", "'+basket_seq+'")', 500);
}

function referFriendWithAddrBookP(currentFieldId, isloggedIn, fname, basket_seq)
{
  setElementProperty('background', 'white', 'PopupFormDiv');
  html = '\
  <form name="referFriendForm" id="referFriendForm" ><table class=popupInviteTable width=100%>\
    <tr><td align=center class=topSpc>\
      Emails of Friends/Family To Send Gifts To:\
    </td></tr>\
  ';
  if(isloggedIn != 1)
  {
    html = html + '    <tr><td class=popupInviteTd align=center>\
                Your name\
              </td></tr>\
              <tr><td class="popupInviteTd bottomSpc" align=center>\
                <input type=text name=sender_fname maxlength="32" style="width:280px;"/>\
              </td></tr>';
  }
  else
  {
    html = html + '<input type=hidden name=sender_fname value="'+fname+'"/>';
  }
  html = html + '\
    <tr><td id=referFriendErr class="popupInviteTd commonErrMsg boldtxt" align=center></td></tr>\
    <tr><td class=popupInviteTd align=center>\
      (Enter emails separated by comma)\
    </td></tr>\
    <tr><td class=popupInviteTd align=center>\
      <textarea name=addresses style="width:300px;height:60px;" /></textarea>\
    </td></tr>\
    <tr><td class="popupInviteTd topSpc bottomSpc" align=center>\
      <input type=hidden name=formSubmitted value="1"/>\
      <input type=hidden name=directEmails value="1"/>\
      <input type=hidden name=basket_seq value="'+basket_seq+'"/>\
      <input type=hidden name=referToFriendsQuiz value="1"/>\
      <input type=button class=cuteInviteButton value="Send The Gift Basket" name=send onclick="javascript:submitFormParseErr(\'referFriendForm\',\'referFriendErr\', \'/my/invites/sendInvitation\',\'referFriendForm\');">\
    </td></tr>\
    <tr><td colspan=2 align=center>\
       <h3> OR </h3>\
    </td></tr>\
  </table></form>\
  <table border=0  class=popupInviteTable width=100%>\
    <tr><td colspan=2 align=center>\
       Select Your Friends\' Email Addresses From Address Book of:\
    </td></tr>     \
    <tr><td align=center class=inviteImgTd>\
       <img src="/images/invite/gmail_small.png" /> <br/> <input type=button class=cuteInviteButton value="Select" name=Select onclick="javascript:referLoginForm(\'gmail\',\''+currentFieldId+'\',\''+basket_seq+'\');"/>\
      </td>\
      <td align=center class=inviteImgTd>\
      <img src="/images/invite/yahoo_small.png" />  <br/> <input type=button class=cuteInviteButton value="Select" name=Select onclick="javascript:referLoginForm(\'yahoo\',\''+currentFieldId+'\',\''+basket_seq+'\');"/>\
    </td></tr>\
    <tr><td align=center class=inviteImgTd>\
       <img src="/images/invite/aol_small.png" />  <br/> <input type=button class=cuteInviteButton value="Select" name=Select onclick="javascript:referLoginForm(\'aol\',\''+currentFieldId+'\',\''+basket_seq+'\');"/>\
      </td>\
      <td align=center class=inviteImgTd>\
      <img src="/images/invite/msn_small.png" />  <br/> <input type=button class=cuteInviteButton value="Select" name=Select onclick="javascript:referLoginForm(\'msn\',\''+currentFieldId+'\',\''+basket_seq+'\');"/>\
    </td></tr>\
  </table>\
  <table border=0  class=popupInviteTable width=100%>\
    <tr><td align=left class="popupInviteTd noteMsg">\
  Note: Your email and password information is never stored on our system, it is temporarily used only to fetch your address book.\
    </td></tr>\
  </table>';

  createFormDiv(currentFieldId, html, 412, 540, -200, -110);
}



function referLoginForm(addrBookType, currentFieldId, basket_seq)
{
  var emailTxt;
  if(addrBookType == 'gmail')
  {
    emailTxt = "Gmail";
  }
  else if(addrBookType == 'yahoo')
  {
    emailTxt = "Yahoo!";
  }
  else if(addrBookType == 'aol')
  {
    emailTxt = "Aol";
  }
  else if(addrBookType == 'msn')
  {
    emailTxt = "Hotmail or Msn";
  }
  html = '\
  <form name=emailForm id=emailForm><table border=0  class=popupInviteTable width=100%>\
    <tr><td align=center class=popupInviteTd colspan=2>\
      <h3 class=addressBookMsg>Please enter the following information:</h3> We will fetch your address book and then you can select your friends\' email addresses to invite them. \
    </td></tr>\
    <tr><td colspan=2>&nbsp;</td></tr>\
    <tr><td align=center id=emailErr class="popupInviteTd commonErrMsg boldtxt" colspan=2></td></tr>\
    <tr><td align=center>\
        <img src="/images/invite/'+addrBookType+'_small.png" />\
      </td>\
      <td class=popupInviteTd>\
        '+emailTxt+' email address<br/>\
        <input type=\"text\" class=tdValInput id=\"username\" name=\"username\" maxlength=\"80\" />\
        <br/>'+emailTxt+' password<br/>\
        <input type=\"password\" class=tdValInput id=\"password\" name=\"password\" maxlength=\"80\" />\
        <br/><br/> \
        <input type=\"hidden\" name=\"emailType\" maxlength=\"80\" value=\"'+addrBookType+'\" />\
        <input type=\"hidden\" name=\"basket_seq\" maxlength=\"80\" value=\"'+basket_seq+'\" />\
        <input type=\"hidden\" name=\"emailFormFetch\" maxlength=\"80\" value=\"1\" />\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type=button class=cuteInviteButton value="Continue" onclick="javascript:submitFormParseErr(\'emailForm\', \'emailErr\', \'/my/invites/fetchAddressBook\', \'emailForm\')" />\
    </td></tr>\
  </table>\
  <table border=0  class=popupInviteTable width=100%>\
    <tr><td align=left class="popupInviteTd noteMsg">\
     Note: Your email and password information is never stored on our system, it is temporarily used only to fetch your address book.\
    </td></tr>\
  </table></form>';

  createFormDiv(currentFieldId, html, 412, 0, -200, -110);
}


function emailUser(currentFieldId, to_user, to_user_seq, rand)
{
  html = '\
  <form name="emailUserForm" id="emailUserForm" class=popupForm ><table class=popupTable width=100%> \
    <tr><td class=popupTd>\
      To: </td><td class=popupTd>\
      <b>' + to_user + '</b>\
    </td></tr>\
    <tr><td class=popupTd >\
      Subject: </td><td class=popupTd>\
      <input type=text name=subject maxlength="120" style="width:400px;"/>\
    </td></tr>\
    <tr><td class=popupTd colspan=2>\
      <textarea name="msg" style="width:488px;height:120px"></textarea>\
      <input type=hidden name=sessid value="'+ rand +'"/>\
      <input type=hidden name=who value="'+ to_user +'"/>\
      <input type=hidden name=who_seq value="'+ to_user_seq +'"/>\
      <input type=hidden name=sendEmailMsg value="1"/>\
      <input type=hidden name=formSubmitted value="1"/>\
    </td></tr>\
    <tr><td class=popupTd colspan=2 align=center>\
      <input type=button class=cuteEmailButton value="Send" name=send onclick="javascript:submitform(\'emailUserForm\',\'inbox/processRequest\',\'emailUserForm\');">\
    </td></tr>\
  </table></form>';

  createFormDiv(currentFieldId, html, 510, 0, 0, 2);
}