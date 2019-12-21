// $('.tool').css('visibility','hidden');

$('#to-edit-page').click(function () {
    window.location.href = './editor.html';
});

$('#to-user-interface-page').click(function (e) {
    e.preventDefault();
    window.location.href = './user-interface.html';
});

let top_pos = $('.tool').css('top');
top_pos = Number(top_pos.substring(0, top_pos.indexOf('p')));
window.onscroll = function () {
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    $('.tool').css('top', top_pos + top + 'px');

    let scrollHeight = $(document).scrollTop();
    let hei = $('#recommendation-head').offset().top - 11;
    console.log('scrollHeight = ' + scrollHeight);
    console.log('hei = ' + hei);

    let toolFatherWidth = parseInt($('#page-container').css('width'));
    console.log('page height: ' + $('#page-container').css('width'));

    let toolFatherWidth120 = 1.2 * toolFatherWidth;
    let toolFatherWidth95 = 0.95 * toolFatherWidth;
    console.log($('.tool').css('left'));
    console.log(toolFatherWidth120);
    console.log(toolFatherWidth95);



    let sub1 = parseFloat($('.tool').css('left')) - toolFatherWidth120;
    let sub2 = parseFloat($('.tool').css('left')) - toolFatherWidth95;
    let heiSubAbs = Math.abs(scrollHeight - hei);
    let heiSub = hei - scrollHeight;
    console.log('heiSubAbs: ' + heiSubAbs);
    console.log('heiSub: ' + heiSub);
    
    if(heiSub > 0) {
        $('.tool').removeClass('tool-move-in');
        $('.tool').addClass('tool-move-out');
    } else if (heiSub <= 0) {
        $('.tool').removeClass('tool-move-out');
        $('.tool').addClass('tool-move-in');
    }
};


$('#down-arrow-container').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#recommendation-head').offset().top - 10
    }, 790, 'easeInOutQuad'
    );
});

$(document).scroll(function () {

});