$(document).ready(function(){
    var editor = editormd('editor', {
        width: '96%',
        height: '91%',
        emoji: true,
        taskList: true,
        syncScrolling: true,
        path: 'editor.md/lib/',
        tex: false,
        searchRepace: true,
        htmlDecode: true,
        htmlDecode: 'center,br,sup,sub,img,iframe|*',
        pageBreak: true,
        gotoLine: true
    });

    editormd.katexURL = {
        js : './katex/katex.min',
        css: './katex/katex.min'
    };
    
    editormd.emoji = {
        // path: './emoji/',
        path: 'http://www.webpagefx.com/tools/emoji-cheat-sheet/graphics/emojis/',
        ext: '.png'
    }

    $('#editormd-theme-select').change(function(){
        let toolbar_theme = $(this).find('option:selected').text();
        //console.log($(this).find('option:selected').text());
        editor.setTheme(toolbar_theme);
    });

    $('#editor-area-theme-select').change(function(){
        let edit_area_theme = $(this).find('option:selected').text();
        editor.setEditorTheme(edit_area_theme);
    });

    $('#preview-area-theme-select').change(function(){
        let preview_area_theme = $(this).find('option:selected').text();
        editor.setPreviewTheme(preview_area_theme);
    });
});