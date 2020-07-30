$(document).ready(() => {
  
  
//  Slider products
  $('.slider_container').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    speed: 200,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  // Slider section testimonials

  $('.testimonials').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: false
  });

    // Active nav_menu

  $('.nav').click((e) => {

    let li = $(".nav_items");

    $(li).each(function (e) {

      li.removeClass("active");

    });

     li = $(e.target);
     console.log(li);
    li.addClass('active');
  });

  // Akkordion

  $('.questions__list  .item_question ').on('click', toggleAnswer);
 

    
  // Scroll

  $("a[href^='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
      scrollTop: position
    }, 2000);
  });

  // Tabs

  $(".tabs__header li").on("click", function (event) {
    let li = $('.tab');
    let content = $('.description_container');
    li.removeClass('active');
    content.removeClass('active');
    
});

$(".tab").on("click", function (event) {
    $(this).addClass('active');
    
    let liAttr = $(this).attr('data-id');
    console.log(liAttr);

    let activeTab = $('.description_container[data-id="' + liAttr + '"]');

    activeTab.addClass('active');
    
        
});
  // Tabs end

// Nav fixed when scroll

  $( window ).on('scroll',function() {
    $(".header__nav").addClass("fixed");
     
  });
  
   $( window ).on('click',function() {
    
     $(".header__nav").removeClass("fixed");
});
 

});

function toggleAnswer(e) {
  //скрываем все кроме того, что должны открыть
  $('.questions__list .item_description').not($(this).next()).slideUp(800);
  // открываем или скрываем блок под заголовком, по которому кликнули
  console.log(this);
  
  console.log(this.previousElementSibling);
    $(this).next().slideToggle(1000);
}


 
