$(document).on('ready', function() { 
  $(".variable").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000, 
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
  
});


   // 點擊按鈕，選單縮放
   $("button.hamburger").on("click", function(){$("nav.main_nav").slideToggle();
            
  });


  // jQuery 版本
  $(function(){
  
  $("button.hamburger").on("click", function(){
      $(this).toggleClass("is-active");
  });

  });
