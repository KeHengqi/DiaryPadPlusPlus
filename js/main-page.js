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

    let toolFatherWidth = parseInt($('#page-container').css('width'));

    let toolFatherWidth120 = 1.2 * toolFatherWidth;
    let toolFatherWidth95 = 0.95 * toolFatherWidth;

    let sub1 = parseFloat($('.tool').css('left')) - toolFatherWidth120;
    let sub2 = parseFloat($('.tool').css('left')) - toolFatherWidth95;
    let heiSubAbs = Math.abs(scrollHeight - hei);
    let heiSub = hei - scrollHeight;
    
    if(heiSub > 0) {
        $('.tool').removeClass('tool-move-in');
        $('.tool').addClass('tool-move-out');
    } else if (heiSub <= 0) {
        $('.tool').removeClass('tool-move-out');
        $('.tool').addClass('tool-move-in');
    }

    if(scrollHeight >= 500){
        $('#back-to-top-button').addClass('show');
    } else {
        $('#back-to-top-button').removeClass('show');
    }
};


$('#down-arrow-container').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#recommendation-head').offset().top - 10
    }, 790, 'easeInOutQuad'
    );
});

$('#back-to-top-button').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 300, 'easeInOutQuad');
});



