$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.__move').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });

    $('.main_slide').slick({
        arrows: false,
        dots: true,
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    const vdo = $('.itm01 #bgndVideo').YTPlayer({
        videoURL: '03j_Wx6HTVM',
        containment: '.video',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });

    // $('.main_prem .arrows .left').on('click', function () {
    //     $('.prem_slide').slick('slickPrev');
    // });
    // $('.main_prem .arrows .right').on('click', function () {
    //     $('.prem_slide').slick('slickNext');
    // });

    // $('.family_site span').on('click', function () {
    //     $(this).toggleClass('on');
    //     $(this).next().toggleClass('on');
    // })

    $('.btn_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});