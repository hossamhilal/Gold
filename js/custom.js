/*global $ */
(function($) {
    "use strict";

    $(window).on('load', function(){
        $('body').addClass('stopScroll');
        $('.loader').fadeOut(500, function () {
            $(this).remove();
            $('body').removeClass('stopScroll');
        }); 
    });

     // OPEN SIDE  MENU 
     $('.menuBtn').on('click', function(){
        $(this).addClass('open');
        $('.navMenu').toggleClass('show');
        $('.bodyOverlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.bodyOverlay').on('click', function(){
        $(this).removeClass('show');
        $('.navMenu').removeClass('show'); 
        $('.menuBtn').removeClass('open'); 
        $('body').removeClass('stopScroll');  
    });

    $(window).on('scroll', function(){
        let sticky = $('#about').offset().top;
        // let sticky = 400;
        if ($(window).scrollTop() >= sticky) {
            $('.headerBox').addClass('sticky');
        } else {
            $('.headerBox').removeClass('sticky');
        }
    });

    var rtlVal = true ;    
    if($('body').hasClass('en')) {
        rtlVal = false;
    }
    else{
        rtlVal = true;
    }
 
    // Header OWL 
    var owlHeader = $('.owlHeader');
    owlHeader.owlCarousel({
        rtl: rtlVal ,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots: true,
        center: true,
        autoplaySpeed : 3000,
        autoplayTimeout : 5000,
        smartSpeed: 3000 ,
        animateOut: 'fadeOut',
        animateIn: 'bounceIn',
        navText: ["<img src='images/arrow-right.png'>", "<img src='images/arrow-left.png'>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });

    // Preview Active Image As Bacground
    let ActiveSrc = $('.owlHeader .owl-item.active.center .slideImg').attr('src');
    $('.owlHeader').parents('.header').css('background' , 'url('+ ActiveSrc +')');

    owlHeader.on('changed.owl.carousel',function(elem){
        let current = elem.item.index;
        let ActiveSrc = $(elem.target).find(".owl-item").eq(current).find(".slideImg").attr('src');
        console.log('Image current is ' + ActiveSrc);
        $('.owlHeader').parents('.header').css('background' , 'url('+ ActiveSrc +')');
    });
    
    $(document).on('click','.owlHeader .owl-prev , .owlHeader .owl-next', function(){
        let ActiveSrc = $('.owlHeader .owl-item.active.center .slideImg').attr('src');
        $('.owlHeader').parents('.header').css('background' , 'url('+ ActiveSrc +')');
    });

    // Works OWL 
    $('.owlWorks').owlCarousel({
        rtl: rtlVal ,
        margin: 20,
        autoplay: true,
        loop: false,
        nav: true,
        dots: false,
        center : false ,
        autoplaySpeed : 5000,
        autoplayTimeout : 5000,
        smartSpeed: 5000 ,
        navText: ["<img src='images/arrow-right.png'>", "<img src='images/arrow-left.png'>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // Filter Tab
    $('.filterTab').on('click', function(e) {
        e.preventDefault();
        $('.filterTab').removeClass('active');
        $(this).addClass('active');
        
        var itemId = $(this).attr("href"); 
        $('.tabContent').removeClass('show'); 
        $(itemId).addClass('show');  
    });

    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

