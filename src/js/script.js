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

lazyShowTop('.header', 0, 750);
lazyShowFade('.main', 250, 750)

$(document).ready(function(){

        parallax('.news__decoration', -60, 0.6);
        parallax('.form__decoration-1', 0, 0.4);
        parallax('.form__decoration-2', -40, 0.8);

})
