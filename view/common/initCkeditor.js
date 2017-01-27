var ed;
function initEditor(id, absUrl)
{
  var useAbsUrl;
  if(!absUrl)
  {
    useAbsUrl = '';
  }
  else
  {
    useAbsUrl = '&absoluteUrl=1';
  }
	// alert(CKEDITOR.instances.length);
	if (CKEDITOR.instances[id])
	{
		// alert('ys');
		CKEDITOR.instances[id].destroy(true);
		// delete CKEDITOR.instances[id];
	}
    
    
    CKEDITOR.on('dialogDefinition', function(ev) {
    var dialogName = ev.data.name,
        dialogDefinition = ev.data.definition;
    if (dialogName === 'image') {
        dialogDefinition.removeContents('Upload');
    }
    });

CKEDITOR.on('dialogDefinition', function(ev) {
    var dialogName = ev.data.name,
        dialogDefinition = ev.data.definition;
    if (dialogName === 'image') {
        dialogDefinition.removeContents('Upload');
    }
  });
  
  
	ed = CKEDITOR.replace(id,
	{
	   filebrowserBrowseUrl : '/fm/index.php?type=files'+useAbsUrl,
	   filebrowserImageBrowseUrl : '/fm/index.php?type=images'+useAbsUrl,
	   filebrowserFlashBrowseUrl : '/fm/index.php?type=flash'+useAbsUrl,
	   filebrowserUploadUrl : '/fm/index.php?type=files'+useAbsUrl,
	   filebrowserImageUploadUrl : '/fm/index.php?type=images'+useAbsUrl,
	   filebrowserFlashUploadUrl : '/fm/index.php?type=flash'+useAbsUrl,
		skin : 'kama',
		toolbar : [
				[ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print', 'SpellChecker', 'Scayt' ],
				[ 'Undo', 'Redo' ],
				[ 'Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript' ],
				[ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent',	'Blockquote' ],
				[ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ],
				[ 'Link', 'Unlink', 'Anchor', 'MediaEmbed', 'Flash', 'Image', 'Smiley' ],
				[ 'Table', 'HorizontalRule', 'SpecialChar' ],
				[ 'Styles', 'Format', 'Font', 'FontSize', 'BGColor' ],
				[ 'Preview', 'Templates', 'Maximize', 'Source' ]
		],
		toolbarCanCollapse : true,
		height : '200px',
		scayt_sLang : 'pt_PT',
		uiColor : '#EBEBFB'
	});
}

function initEditor_web(id, absUrl)
{
  var useAbsUrl;
  if(!absUrl)
  {
    useAbsUrl = '';
  }
  else
  {
    useAbsUrl = '&absoluteUrl=1';
  }
	// alert(CKEDITOR.instances.length);
	if (CKEDITOR.instances[id])
	{
		// alert('ys');
		CKEDITOR.instances[id].destroy(true);
		// delete CKEDITOR.instances[id];
	}
	ed = CKEDITOR.replace(id,
	{
	   filebrowserBrowseUrl : '/fm/index.php?type=files'+useAbsUrl,
	   filebrowserImageBrowseUrl : '/fm/index.php?type=images'+useAbsUrl,
	   filebrowserFlashBrowseUrl : '/fm/index.php?type=flash'+useAbsUrl,
	   filebrowserUploadUrl : '/fm/index.php?type=files'+useAbsUrl,
	   filebrowserImageUploadUrl : '/fm/index.php?type=images'+useAbsUrl,
	   filebrowserFlashUploadUrl : '/fm/index.php?type=flash'+useAbsUrl,
		skin : 'kama',
		toolbar : [
				[ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print', 'SpellChecker', 'Scayt' ],
				[ 'Undo', 'Redo' ],
				[ 'Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript' ],
				[ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent',	'Blockquote' ],
				[ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ],
				[ 'Link', 'Unlink', 'Anchor', 'Image', 'Smiley' ],
				[ 'Table', 'HorizontalRule', 'SpecialChar' ],
				[ 'Styles', 'Format', 'Font', 'FontSize', 'BGColor' ],
				[ 'Preview', 'Source', 'Templates', 'Maximize' ]
		],
		toolbarCanCollapse : true,
		height : '400px',
        width : '710px',
		scayt_sLang : 'pt_PT',
		uiColor : '#EBEBFB'
	});
}


function initEditor_basic(id, absUrl)
{
  var useAbsUrl;
  if(!absUrl)
  {
    useAbsUrl = '';
  }
  else
  {
    useAbsUrl = '&absoluteUrl=1';
  }
	// alert(CKEDITOR.instances.length);
	if (CKEDITOR.instances[id])
	{
		// alert('ys');
		CKEDITOR.instances[id].destroy(true);
		// delete CKEDITOR.instances[id];
	}
	ed = CKEDITOR.replace(id,
	{
	   filebrowserBrowseUrl : '/fm/index.php?type=files'+useAbsUrl,
	   filebrowserImageBrowseUrl : '/fm/index.php?type=images'+useAbsUrl,
	   filebrowserFlashBrowseUrl : '/fm/index.php?type=flash'+useAbsUrl,
	   filebrowserUploadUrl : '/fm/index.php?type=files'+useAbsUrl,
	   filebrowserImageUploadUrl : '/fm/index.php?type=images'+useAbsUrl,
	   filebrowserFlashUploadUrl : '/fm/index.php?type=flash'+useAbsUrl,
		skin : 'kama',
		toolbar : [
					['Bold', 'Italic', 'Underline', '-', 'NumberedList', 'BulletedList', 'Outdent', 'Indent', '-', 'Link', 'Unlink','-', 'MediaEmbed','Flash', 'Image', 'Smiley','-','Font', 'FontSize', 'TextColor', 'BGColor','-','SpellChecker','Preview', 'Maximize' ]
				  ],
		toolbarCanCollapse : true,
		height : '200px',
		scayt_sLang : 'pt_PT',
		uiColor : '#EBEBFB'
	});
}


function initEditor_note(id, absUrl)
{
  var useAbsUrl;
  if(!absUrl)
  {
    useAbsUrl = '';
  }
  else
  {
    useAbsUrl = '&absoluteUrl=1';
  }

	// alert(CKEDITOR.instances.length);
	if (CKEDITOR.instances[id])
	{
		// alert('ys');
		CKEDITOR.instances[id].destroy(true);
		// delete CKEDITOR.instances[id];
	}
	ed = CKEDITOR.replace(id,
	{
	   filebrowserBrowseUrl : '/fm/index.php?type=files'+useAbsUrl,
	   filebrowserImageBrowseUrl : '/fm/index.php?type=images'+useAbsUrl,
	   filebrowserFlashBrowseUrl : '/fm/index.php?type=flash'+useAbsUrl,
	   filebrowserUploadUrl : '/fm/index.php?type=files'+useAbsUrl,
	   filebrowserImageUploadUrl : '/fm/index.php?type=images'+useAbsUrl,
	   filebrowserFlashUploadUrl : '/fm/index.php?type=flash'+useAbsUrl,

		skin : 'kama',
		toolbar : [
				[ 'Bold', 'Italic', 'Underline', '-', 'Subscript', 'Superscript' ],
				[ 'NumberedList', 'BulletedList', '-' ],
				[ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ],
				[ 'BGColor'] ,
				[ 'Link', 'Unlink'],
				[ 'MediaEmbed', 'swf', 'Flash', 'Image', 'Smiley'],
				[ 'Table', 'SpecialChar' ],
				[ 'Styles', 'Format', 'Font', 'FontSize'],
				[ 'Preview', 'Templates', 'Source' ],
				['SpellChecker', 'Maximize']
		],
		toolbarCanCollapse : true,
		height : '300px',
		scayt_sLang : 'pt_PT',
		uiColor : '#EBEBFB'
	});
}

function initEditor_full(id, absUrl)
{
  var useAbsUrl;
  if(!absUrl)
  {
    useAbsUrl = '';
  }
  else
  {
    useAbsUrl = '&absoluteUrl=1';
  }
	// alert(CKEDITOR.instances.length);
	if (CKEDITOR.instances[id])
	{
		// alert('ys');
		CKEDITOR.instances[id].destroy(true);
		// delete CKEDITOR.instances[id];
	}
	ed = CKEDITOR.replace(id,
	{
	   filebrowserBrowseUrl : '/fm/index.php?type=files'+useAbsUrl,
	   filebrowserImageBrowseUrl : '/fm/index.php?type=images'+useAbsUrl,
	   filebrowserFlashBrowseUrl : '/fm/index.php?type=flash'+useAbsUrl,
	   filebrowserUploadUrl : '/fm/index.php?type=files'+useAbsUrl,
	   filebrowserImageUploadUrl : '/fm/index.php?type=images'+useAbsUrl,
	   filebrowserFlashUploadUrl : '/fm/index.php?type=flash'+useAbsUrl,

		skin : 'kama',
		toolbar :[
		[ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ],
		[ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ],
		[ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ],
		[ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ],
		[ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] ,
		[ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ],
		[ 'Link','Unlink','Anchor' ],
		[ 'MediaEmbed','Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] ,
		[ 'Styles','Format','Font','FontSize' ] ,
		[ 'TextColor','BGColor' ] ,
		[ 'Maximize', 'ShowBlocks','-','About' ]
	],
		toolbarCanCollapse : true,
		height : '300px',
		scayt_sLang : 'pt_PT',
		uiColor : '#EBEBFB'
	});
}


function initAllEditors(classname, absUrl)
{
  var useAbsUrl;
  if(!absUrl)
  {
    useAbsUrl = '';
  }
  else
  {
    useAbsUrl = '&absoluteUrl=1';
  }
	CKEDITOR.replaceAll( function(textarea, config) {
    if (textarea.className != classname) return false;
    
       config.filebrowserBrowseUrl = '/fm/index.php?type=files'+useAbsUrl;
	   config.filebrowserImageBrowseUrl = '/fm/index.php?type=images'+useAbsUrl;
	   config.filebrowserFlashBrowseUrl = '/fm/index.php?type=flash'+useAbsUrl;
	   config.filebrowserUploadUrl = '/fm/index.php?type=files'+useAbsUrl;
	   config.filebrowserImageUploadUrl = '/fm/index.php?type=images'+useAbsUrl;
	   config.filebrowserFlashUploadUrl = '/fm/index.php?type=flash'+useAbsUrl;
       
	  //config.filebrowserBrowseUrl = '/folders/browse.php?type=files'+useAbsUrl;
//	  config.filebrowserImageBrowseUrl = '/folders/browse.php?type=images'+useAbsUrl;
//	  config.filebrowserFlashBrowseUrl = '/folders/browse.php?type=flash'+useAbsUrl;
//	  config.filebrowserUploadUrl = '/folders/upload.php?type=files'+useAbsUrl;
//	  config.filebrowserImageUploadUrl = '/folders/upload.php?type=images'+useAbsUrl;
//	  config.filebrowserFlashUploadUrl = '/folders/upload.php?type=flash'+useAbsUrl;
    config.skin = 'kama';
    config.toolbar = [
            ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
            ['Undo','Redo'],
            ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
            ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
            ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
            ['Link','Unlink','Anchor'],
            ['MediaEmbed', 'Flash', 'Image', 'Smiley'],
            ['Table','HorizontalRule','SpecialChar'],
            ['Styles','Format','Font','FontSize','BGColor'],
            ['Preview','Templates','Maximize','-','Source']
        ];
    config.toolbarCanCollapse = true;
    config.height = '200px';
    config.scayt_sLang = 'pt_PT';
    config.uiColor = '#EBEBFB';
  });
}

function initEditorPopupMaster(id, absUrl)
{
  var useAbsUrl;
  if(!absUrl)
  {
    useAbsUrl = '';
  }
  else
  {
    useAbsUrl = '&absoluteUrl=1';
  }
	// alert(CKEDITOR.instances.length);
	if (CKEDITOR.instances[id])
	{
		// alert('ys');
		CKEDITOR.instances[id].destroy(true);
		// delete CKEDITOR.instances[id];
	}
	ed = CKEDITOR.replace(id,
	{
	   filebrowserBrowseUrl : '/fm/index.php?type=files'+useAbsUrl,
	   filebrowserImageBrowseUrl : '/fm/index.php?type=images'+useAbsUrl,
	   filebrowserFlashBrowseUrl : '/fm/index.php?type=flash'+useAbsUrl,
	   filebrowserUploadUrl : '/fm/index.php?type=files'+useAbsUrl,
	   filebrowserImageUploadUrl : '/fm/index.php?type=images'+useAbsUrl,
	   filebrowserFlashUploadUrl : '/fm/index.php?type=flash'+useAbsUrl,

		skin : 'kama',
		toolbar : [				
				[ 'Bold', 'Italic', 'Underline', '-', 'Subscript', 'Superscript' ],
				[ 'NumberedList', 'BulletedList', '-' ],
				[ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ],
				[ 'BGColor'] ,
				['Link', 'Unlink'],
				[ 'Image', 'Smiley'],
				[ 'Table', 'SpecialChar' ],
				[ 'Styles', 'Format', 'Font', 'FontSize'],
				[ 'Preview', 'Templates', 'Maximize' ]
		],
		toolbarCanCollapse : true,
		height : '300px',
		scayt_sLang : 'pt_PT',
		uiColor : '#EBEBFB'
	});
} 