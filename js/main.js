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
        fade: true,
    });

    $('.main_vi .arrows .up').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_vi .arrows .down').on('click', function () {
        $('.main_slide').slick('slickNext');
    });


    $('.fund_site span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })
    $('.child_site span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })

    $('.btn_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});