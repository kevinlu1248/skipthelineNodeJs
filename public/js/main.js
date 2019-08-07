'use strict';

// CKEDITOR.replace( 'editor' );
//
// CKEDITOR.editorConfig = function(config) {
//     config.language = 'en';
//     config.height = '100%';
//     config.toolbar = [
//         ['Copy', 'Paste', '-', 'Undo', 'Redo']
//     ]
// };

// CKEDITOR.replace( 'editor' );

CKEDITOR.replace( 'editor', {
    language: 'en',
    height: '100%',
    toolbar: [
        ['Table'],
        ['Copy', 'Paste', '-', 'FontSize', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'BulletedList', 'NumberedList', 'Indent', 'Outdent', 'Blockquote', '-', 'TextColor', 'BGColor', '-', 'SpecialChar', '-', 'Undo', 'Redo']
    ],
    font_defaultLabel: '',
    colorButton_colors: '000,eee0,f00,00f,75f013,ec56bc,dbf52c,50ccfc,8a52fc',
    colorButton_enableAutomatic: false,
    disableNativeSpellChecker: false,
    removePlugins: 'magicline'
    // disallowedContent: 'h1 h2 h3 p',
    // allowedContent: 'ul ol li span'
});

CKEDITOR.plugins.addExternal( 'abbr', '/myplugins/abbr/', 'plugin.js' );

$(document).ready(function() {
    // console.log(Array.from( editor.ui.componentFactory.names()));
    // Array.from( editor.ui.componentFactory.names() );
    $("body.cke_editable").css("font-family", '"Times New Romans", Times, serif');
    // $.get("http://www.google.com/", '', function(data, status, jqxhr) {
    //     console.log(data);
    // }, 'html');
});
