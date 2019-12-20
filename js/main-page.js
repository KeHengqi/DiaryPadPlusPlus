// document.getElementById('to-edit-page').addEventListener('click',function(){
//     window.location.href='./editor.html'
// });

$('#to-edit-page').click(function(){
    window.location.href = './editor.html';
});

$('#to-user-interface-page').click(function (e) { 
    e.preventDefault();
    window.location.href = './user-interface.html';
});

let top_pos = $('.tool').css('top');
top_pos = Number(top_pos.substring(0, top_pos.indexOf('p')));
window.onscroll = function(){
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    $('.tool').css('top',top_pos + top + 'px');
};
