$(document).scroll(function(){
    if($(this).scrollTop() > 700)
    {   
        $("header").addClass('class-add');
    }else{
        $("header").removeClass('class-add');
    }
    if($(this).scrollTop() > 1500)
    {   
        $("header").addClass('class');
    }else{
        $("header").removeClass('class');
    }
    if($(this).scrollTop() > 2000)
    {   
        $("header").addClass('clas');
    }else{
        $("header").removeClass('clas');
    }
    if($(this).scrollTop() > 3000)
    {   
        $("header").addClass('classs');
    }else{
        $("header").removeClass('classs');
    }
});







$('.percent1').percentageLoader({
    valElement: 'p',
    strokeWidth: 20,
    bgColor: '#d9d9d9',
    ringColor: '#cc3399',
    textColor: '#cc3399',
    fontSize: '30px',
    fontWeight: 'normal',
   
  });
  $('.percent2').percentageLoader({
    valElement: 'p',
    strokeWidth: 20,
    bgColor: '#d9d9d9',
    ringColor: '#d74680',
    textColor: '#d74680',
    fontSize: '30px',
    fontWeight: 'normal',
   
  });
  $('.percent3').percentageLoader({
    valElement: 'p',
    strokeWidth: 20,
    bgColor: '#d9d9d9',
    ringColor: '#15c7a8',
    textColor: '#15c7a8',
    fontSize: '30px',
    fontWeight: 'normal',
   
  });
  $('.percent4').percentageLoader({
    valElement: 'p',
    strokeWidth: 20,
    bgColor: '#d9d9d9',
    ringColor: '#eb7d4b',
    textColor: '#eb7d4b',
    fontSize: '30px',
    fontWeight: 'normal',
   
  });
  
  
new WOW().init();





$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:2,
      margin:30,
      loop:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive:{
        0 : {
            items: 1,
        },
        701 : {
            items: 1,
        },
        1201 : {
           items:1,
        }
    }
    });
  
  });




  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
});
$(".scrollup").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
});








