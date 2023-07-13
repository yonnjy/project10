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

    $('.cam_slide').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
    });

    $('.main_cam .arrows .left').on('click', function () {
        $('.cam_slide').slick('slickPrev');
    });
    $('.main_cam .arrows .right').on('click', function () {
        $('.cam_slide').slick('slickNext');
    });

    $('.count_num').each(function(){
        var $this = $(this),
        countTo = $this.attr('data-count');

        $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 2000,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
          });
    });

    $('.story_wrap>*').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
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