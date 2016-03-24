/**
 * Created by Administrator on 2015/4/7.
 */
require.config({
    waitSeconds : 45,
    paths: {
        "jquery": "jquery-2.1.4.min",
        "swiper":"swiper-3.3.1.jquery.min",
        "swiperAnimate":"swiper.animate1.0.2.min"
    },
    map: {
        '*': {
            'css': 'css.min'
        }
    },
    shim : {
        "jquery": {
            exports: "jQuery"
        },
        "swiper":{
            deps: ["jquery"]
        },
        "swiperAnimate":{
            deps: ["swiper"]
        }
    }
});




require(["jquery"],function($){

    $('.swiper-slide,.swiper-container,#loading').css({
        height: $(window).height()
    });

    $(window).on('resize',function(){
        $('.swiper-slide,.swiper-container,#loading').css({
            height: $(window).height()
        });
    });

    require(["css!../planbook_css/animate.min.css","css!../planbook_css/swiper-3.3.1.min.css","swiperAnimate","swiper"],function(){
        var mySwiper = new Swiper('.swiper-container',{
            setWrapperSize :true,
            direction:"vertical",
            speed : 1000,
            longSwipesRatio : 0.3,
            grabCursor:true,
            nextButton:'#btn2',
            mousewheelControl : true,
            lazyLoading : true,
            lazyLoadingInPrevNext : true,
            lazyLoadingOnTransitionStart : true,
            watchSlidesProgress : true,
            onInit: function(swiper){
                 swiper.myactive = 0;
                setTimeout(function(){
                    $("#loading").remove();
                    $(".swiper-container").css({"opacity":"1"});
                    swiperAnimateCache(swiper);
                    swiperAnimate(swiper);
                },1000);

                $(".swiper-slide").click(function(){
                    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                        window.location.href="https://itunes.apple.com/cn/app/gong-e-mi-ce/id1039227334?l=zh&ls=1&mt=8";
                    }else{
                        window.location.href="http://downfile2.tgbusdata.cn/app/pcgame/android/pcgame.apk";
                    }
                });
            },
            onSlideChangeEnd: function(swiper){
                // console.log(swiper)
                swiperAnimate(swiper);
                if(swiper.activeIndex==1){
                    setTimeout(function(){
                        $('.title-once').addClass('fadeOutRight')
                        ;$('.text-once').addClass('fadeOutLeft')
                    },1000)
                }else{
                    $('.title-once').removeClass('fadeOutRight')
                    ;$('.text-once').removeClass('fadeOutLeft')
                }
                if(swiper.activeIndex==7){
                    setTimeout(function() {
                       $('.phone').addClass('hinge')
                    },2000)
                }else{
                    $('.phone').removeClass('hinge')
                }

                
            },
            onTransitionEnd: function(swiper){
                swiperAnimate(swiper);
                swiper.myactive = swiper.activeIndex;
            }
            ,
            onProgress: function(swiper, progress){
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slide = swiper.slides[i];
                    var progress = slide.progress;
                    var translate, boxShadow;
                    translate = progress * swiper.height * 0.8;
                    scale = 1 - Math.min(Math.abs(progress * 0.2), 1);
                    boxShadowOpacity = 0;
                    slide.style.boxShadow = '0px 0px 10px rgba(0,0,0,' + boxShadowOpacity + ')';
                    if (i == swiper.myactive) {
                        es = slide.style;
                        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + (translate) + 'px,0) scale(' + scale + ')';
                        es.zIndex=0;
                    }else{
                        es = slide.style;
                        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform ='';
                        es.zIndex=1;
                    }
                 }
            },
            onSetTransition: function(swiper,speed){
                for (var i = 0; i < swiper.slides.length; i++) {
                    es = swiper.slides[i].style;
                    es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
                 }
            }
        });
    });

});