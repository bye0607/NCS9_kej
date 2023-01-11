// visual 영역을 창크기로 확대
// window 객체(웹브라우저의 창(window))의 width(), height()로 지정
$(window).resize(function(){
    //visual영역의 이미지가 길어지지 않도록 $(window).height()에서 header의 높이를 구해서 뺌
    var headerheight = $('header').height()+7;
    // console.log(headerheight);
    $('.visual_bg').width($(window).width()).height($(window).height()-headerheight);
});

setTimeout(function(){
    $(window).resize()
}, 1000);

// visual 영역에 vegas jquery plugin 배경이미지 슬라이드 효과
$(".visual_bg").vegas({
    animation: 'random',
    delay: 5000,
    slides: [
        { src: '../img/main_bg01.jpg' },
        { src: '../img/main_bg02.jpg' },
        { src: '../img/main_bg03.jpg' },
        { src: '../img/main_bg04.jpg' }
    ],
    overlay: '../img/vegas_overlay_04.png'  //배경이미지 위에 dot pattern 이미지 적용
});

// 이벤트배너 영역에 Owl Carousel로이미지 슬라이드 효과 적용
$('.imgslide').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})