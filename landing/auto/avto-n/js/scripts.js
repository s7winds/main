$(document).ready(function(){

new ScrollFlow();

  $('.form-phone').mask('+7 (999) 999-99-99');

  $(function() {
      $('.b-2-item-inn').matchHeight({
        byRow: false,
        property: 'height',
        target: null,
        remove: false
      });
  });
  $(function() {
      $('.b-3-item').matchHeight({
        byRow: false,
        property: 'height',
        target: null,
        remove: false
      });
  });









  $('.rev-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  });


  $('.fn-slider-1 .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.fn-slider-1 .slider-nav'
  });
  $('.fn-slider-1 .slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.fn-slider-1 .slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true
  });

  $('.fn-slider-2 .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.fn-slider-2 .slider-nav'
  });
  $('.fn-slider-2 .slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.fn-slider-2 .slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true
  });

  $('.fn-slider-3 .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.fn-slider-3 .slider-nav'
  });
  $('.fn-slider-3 .slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.fn-slider-3 .slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true
  });

  $('.fn-slider-4 .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.fn-slider-4 .slider-nav'
  });
  $('.fn-slider-4 .slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.fn-slider-4 .slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true
  });

  $('.fn-slider-5 .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.fn-slider-5 .slider-nav'
  });
  $('.fn-slider-5 .slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.fn-slider-5 .slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true
  });





  $(".modalbox").fancybox();
  $(".fancybox").fancybox();


          $(".f_contact").submit(function(e){
            e.preventDefault();
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: $(this).serialize()
                }).done(function() {
                    $.fancybox( $('#modal-thanks'), {
                        padding: 0,
                        fitToView: false
                    } );
                    setTimeout(function() {
                        $.fancybox.close();
                    }, 3000);
                });
                 return false;
          });





});
