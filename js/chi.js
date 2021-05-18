$(document).ready(function(){

    $(".menu-wrap-list>.ham-btn").click(function(){

        if( $(".menu-wrap-list>.ham-btn").hasClass("active") ) {
            $(".menu-wrap-list>.ham-btn").removeClass("active");
            $(".ham-btn-menu").css({"max-height":"0px","transition":"0.5s","border-top":"0px solid gray"});
        } else {
            $(".menu-wrap-list>.ham-btn").addClass("active");
            $(".ham-btn-menu").css({"max-height":"750px","transition":"0.5s","border-top":"1px solid gray","z-index":"100"});
        }

    });
    
    $(".slider-wrap1").slick({
        
        arrows: true ,
        dots: true,
        prevArrow:"<i class='prev-icon fas fa-chevron-circle-left'></i>",
        nextArrow:"<i class='next-icon fas fa-chevron-circle-right'></i>",
        fade:true,
        autoplay:true,
        autoplaySpeed:5000,
        
    });
    
    $(".stopicon").click(function(){
        
        $(".stopicon").removeClass("active");
        $(".playicon").addClass("active");
        $(".slider-wrap1").slick("slickPause");
        
    });
    $(".playicon").click(function(){
        
        $(".playicon").removeClass("active");
        $(".stopicon").addClass("active");
        $(".slider-wrap1").slick("slickPlay");
        
    });
    
    $(".slider-wrap2-box>.slider-wrap2").slick({
        
        infinite: true ,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false ,
        dots: false,
        autoplay: true,
        autoplaySpeed: 500 ,
        
    });
    
    $(".slider-wrap3").slick({
        
        infinite: true ,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false ,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0 ,
        fade:true,
    });
    
    $(".him-wrap").slick({
        
        infinite: true ,
        centerMode: true ,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed:500,
        prevArrow:"<i class='pppp fas fa-chevron-circle-left'></i>",
        nextArrow:"<i class='nnnn fas fa-chevron-circle-right'></i>",
    });
    
    
    $(".sixth-box>.sixth-wrap>.box1>.ul-box>ul>li:nth-child(1)").mouseover(function(){
        $(".sixth-box>.sixth-wrap>.box2>.box2-1").css({"display":"block"});
    })
    $(".sixth-box>.sixth-wrap>.box1>.ul-box>ul>li:nth-child(1)").mouseleave(function(){
        $(".sixth-box>.sixth-wrap>.box2>.box2-1").css({"display":"none"});
    })
    $(".sixth-box>.sixth-wrap>.box1>.ul-box>ul>li:nth-child(2)").mouseover(function(){
        $(".sixth-box>.sixth-wrap>.box2>.box2-2").css({"display":"block"});
    })
    $(".sixth-box>.sixth-wrap>.box1>.ul-box>ul>li:nth-child(2)").mouseleave(function(){
        $(".sixth-box>.sixth-wrap>.box2>.box2-2").css({"display":"none"});
    })
    $(".sixth-box>.sixth-wrap>.box1>.ul-box>ul>li:nth-child(3)").mouseover(function(){
        $(".sixth-box>.sixth-wrap>.box2>.box2-3").css({"display":"block"});
    })
    $(".sixth-box>.sixth-wrap>.box1>.ul-box>ul>li:nth-child(3)").mouseleave(function(){
        $(".sixth-box>.sixth-wrap>.box2>.box2-3").css({"display":"none"});
    })
    $(".sixth-box>.sixth-wrap>.box1>.ul-box>ul>li:nth-child(4)").mouseover(function(){
        $(".sixth-box>.sixth-wrap>.box2>.box2-4").css({"display":"block"});
    })
    $(".sixth-box>.sixth-wrap>.box1>.ul-box>ul>li:nth-child(4)").mouseleave(function(){
        $(".sixth-box>.sixth-wrap>.box2>.box2-4").css({"display":"none"});
    })

    $(".fixed22>.quick-box>.top-btn").click(function(){
        
       $("html, body").animate({scrollTop: 0}); 
        
    });

    $(".fixed-box>.fixed-boxa>.boxaaa").click(function(){
        
       $(".fixed-box").toggleClass("active"); 
        $(".fixed-box>.fixed-boxa>.boxaaa>.on-up").toggleClass("active");
        $(".fixed-box>.fixed-boxa>.boxaaa>.on-down").toggleClass("active");
        
    });

    $(".pop-up-box1>.box1>.box1-2").click(function(){
        $(".pop-up-box1").css({"display":"none"});
    })
    $(".pop-up-box2>.box1>.box1-2").click(function(){
        $(".pop-up-box2").css({"display":"none"});
    })
    
    
    $(".seventh-box>.seventh-wrap>.list-box").slick({
            autoplay:true,			
			slidesToShow    : 5,
			slidesToScroll : 1,
			dots: false,
			arrows:false,
			autoplaySpeed : 0,
			speed : 6000,
			infinite: true,
			cssEase : 'linear',
            variableWidth:true,
    });
    
    $(".p-btn").click(function(){
       
        $(".set").toggleClass("active");
        $(".p-btn").toggleClass("active");
    });
    
    $(".slider-a").slick({
        arrows:false,
        dots: true,
        infinite: true ,
        fade:true,
        autoplay:true,
        autoplaySpeed : 5000,
    });
    
    $(".slick-second").slick({
        infinite: true ,
        arrows:false,
        dots: false,
        autoplay:true,
        autoplaySpeed : 200,
    });
    
    $(".third-wrap").slick({
        infinite: true ,
        arrows:false,
        dots: false,
        autoplay:true,
        autoplaySpeed : 0,
        fade:true,
    });
    
    
    
    
    
});
    
$(window).scroll(function(){
    
   var scroll = $(this).scrollTop();
    
    console.log(scroll);
    
    if(scroll > 600){
        $(".fixed-box").css({"display":"block"});
    } else {
        $(".fixed-box").css({"display":"none"});
    }
    
});
    
    
