$(document).ready(function(){

    const $slider = $(".slider");
    const $sliderInner = $slider.find(".slider-inner");
    const $sliderItems = $slider.find(".slider-item");
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