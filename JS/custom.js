/*JS Document */

/*************************
Slider
**************************/



$(window).scroll(function(e){
    var vitri=$('body,html').scrollTop()
    
    if(vitri>=500)
    {
        $(".top-bar").css({
            "opacity":"0",
            "transition": "1s",
            "height":"0px"
            
        });
        $(".nav-menu-header").css({
            "padding": "1.5em",
            "background": "rgba(49, 18, 75, 0.8)",
            "transition": "1.5s"
            
        })
        
       
    }
    else{
        $(".top-bar").css({
            "display": "block",
             "opacity":"1",
            "transition": "1s",
            "height": "38px"
        });
        $(".nav-menu-header").css({
            "padding": "2.5rem 1rem",
             "background": "#00000040",
             "transition": "1.5s", 
              "z-index":"13"
                     })

    }
})





//slider//
$('.home_slider_owl .owl-carousel').owlCarousel({
    navigation : true,
    singleItem : true,
    animateOut: 'fadeOut',
    dots:false,
    loop:true,
    nav:true,
    items:1,
    autoplay:true
})
$('#owl_tesimonials').owlCarousel({
    loop:true,
    dots:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.Hotels .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

//Text-svg//

var cdtimeline = anime.timeline();
cdtimeline.add({
    targets:'.text_svg g path',
    strokeDashoffset:[anime.setDashoffset,0],
    duration:2000,
  
    easing:'easeOutSine',
    direction:'alternate',
    loop:true
})

//counter js 

const counters = document.querySelectorAll('.counter-count');
const speed = 1000; 
var temp = 1 ; 
$(window).scroll(function(e){
    var vitri_1=$('body,html').scrollTop()
    console.log(vitri_1);
    if (vitri_1 >1000)
    {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = + counter.getAttribute('data-target');
                const count = + counter.innerText;
                const inc = target / speed;
                if (count < target) {
                    counter.innerText = count + inc;
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }
})

//-----Login-------//
$(".email-signup").hide();
$("#signup-box-link").click(function(){
  $(".email-login").fadeOut(100);
  $(".email-signup").delay(100).fadeIn(100);
  $("#login-box-link").removeClass("active");
  $("#signup-box-link").addClass("active");
});
$("#login-box-link").click(function(){
  $(".email-login").delay(100).fadeIn(100);;
  $(".email-signup").fadeOut(100);
  $("#login-box-link").addClass("active");
  $("#signup-box-link").removeClass("active");
});
$(function () {
    $('#login').click(function (e) { 
      //xử lý class
      $('.dangnhap').addClass('noidunghienra');
      //xử lý class cho nền
      $('.lot').addClass('lothienra');
      $('body').css("overflow-y" ,"hidden");
        
    });
    $('.lot').click(function (e) { 
        $('.dangnhap').removeClass('noidunghienra');
        $('.lot').removeClass('lothienra');
        $('body').css("overflow-y" ,"scroll");
        console.log(1);
        
    });
  
  });










