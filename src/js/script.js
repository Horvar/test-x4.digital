import $ from 'jquery';

function parallax(target, start, speed) {
    var scrolled = $(window).scrollTop();
    $(target).css('top',(start+(scrolled*speed))+'px');
    $(window).scroll(function(){
        scrolled = $(window).scrollTop();
        $(target).css('top',(start+(scrolled*speed))+'px');
    })
}
function lazyShowTop(target, delay, speed){
    setTimeout(() => {
        $(target).css({
            'transition': ''+speed/1000+'s ease-out',
            'transform': 'translateY(0)',
        })
    }, delay);
}
function lazyShowFade(target, delay, speed){
    setTimeout(() => {
        $(target).css({
            'transition': ''+speed/1000+'s ease-out',
            'opacity': 1,
        })
    }, delay);
}

lazyShowTop('.header', 0, 750)
lazyShowFade('.main', 250, 750)
lazyShowFade('.decoration', 750, 750)

$(document).ready(function(){

        parallax('.news__decoration', -60, 0.8)
        parallax('.form__decoration-1', 0, 0.6)
        parallax('.form__decoration-2', -40, 0.2)

        $('.hamburger').click(function(){
            $(this).toggleClass('hamburger_active')
            $('.mobile-menu').toggleClass('mobile-menu_active')
        })

        // input masks
        $('.feedback__input[name="name"]').inputmask({ regex: "[а-яА-Я- ]*" });
        $('.feedback__input[name="email"]').inputmask({
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
            greedy: false,
            onBeforePaste: function (pastedValue, opts) {
              pastedValue = pastedValue.toLowerCase();
              return pastedValue.replace("mailto:", "");
            },
            definitions: {
              '*': {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                casing: "lower"
              }
            }
        });
        $('.feedback__input[name="phone"]').inputmask("+9 (999) 999-99-99");



})
