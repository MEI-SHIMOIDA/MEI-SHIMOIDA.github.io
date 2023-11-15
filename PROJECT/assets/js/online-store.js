$(document).ready(function(){
    const $slider = $(".slider-1");
    const $sliderInner = $slider.find(".slider-inner-1");
    const $sliderItems = $slider.find(".slider-online-1");
    const $prevA = $slider.find(".slider-1-prev");
    const $nextA = $slider.find(".slider-1-next");

    let currentIndex = 0;
    const numVisibleSlides = 3;
    const totalSlides = $sliderItems.length;

    const slideWidth = $sliderItems.eq(0).outerWidth(true) * numVisibleSlides;

    function showSlide(index){
        if(index < 0){
            index = totalSlides - numVisibleSlides;
        }else if(index > totalSlides - numVisibleSlides){
            index = 0;
        }

        $sliderInner.css("transform",`translateX(-${index * slideWidth}px)`);
        currentIndex = index;
    }

    $prevA.on("click",function(){
        showSlide(currentIndex -1);
        // alert("previus");
    });
    $nextA.on("click",function(){
        showSlide(currentIndex +1);
    });
console.log($sliderItems);
});
// $(function() {
//     if (window.matchMedia("(max-width: 480px)").matches) {
//         const numVisibleSlides = 1;//画面横幅が480px以下のときの処理
//     } else {
//         const numVisibleSlides = 3;//画面横幅が480px以上のときの処理
//     };
//   });

// new arrivals
$(document).ready(function(){
    const $slider = $(".slider-2");
    const $sliderInner = $slider.find(".slider-inner2");
    const $sliderItems = $slider.find(".slider-online-2");
    const $prevA = $slider.find(".slider-left");
    const $nextA = $slider.find(".slider-right");

    let currentIndex = 0;
    const numVisibleSlides = 3;
    const totalSlides = $sliderItems.length;

    const slideWidth = $sliderItems.eq(0).outerWidth(true) * numVisibleSlides;

    function showSlide(index){
        if(index < 0){
            index = totalSlides - numVisibleSlides;
        }else if(index > totalSlides - numVisibleSlides){
            index = 0;
        }

        $sliderInner.css("transform",`translateX(-${index * slideWidth}px)`);
        currentIndex = index;
    }

    $prevA.on("click",function(){
        showSlide(currentIndex -1);
        // alert("previus");
    });
    $nextA.on("click",function(){
        showSlide(currentIndex +1);
    });
console.log($sliderItems);
});

//ranking
$(document).ready(function(){
    const $slider = $(".slider-3");
    const $sliderInner = $slider.find(".slider-inner3");
    const $sliderItems = $slider.find(".slider-online-3");
    const $prevA = $slider.find(".slider-right2");
    const $nextA = $slider.find(".slider-left2");

    let currentIndex = 0;
    const numVisibleSlides = 5;
    const totalSlides = $sliderItems.length;

    const slideWidth = $sliderItems.eq(0).outerWidth(true) * numVisibleSlides;

    function showSlide(index){
        if(index < 0){
            index = totalSlides - numVisibleSlides;
        }else if(index > totalSlides - numVisibleSlides){
            index = 0;
        }

        $sliderInner.css("transform",`translateX(-${index * slideWidth}px)`);
        currentIndex = index;
    }

    $prevA.on("click",function(){
        showSlide(currentIndex -1);
        // alert("previus");
    });
    $nextA.on("click",function(){
        showSlide(currentIndex +1);
    });
console.log($sliderItems);
});

