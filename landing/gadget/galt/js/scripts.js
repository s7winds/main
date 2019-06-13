$(document).ready(function(){


  $('#menu1').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu1').offset().top}, 800);
    return false;
  });
  $('#menu2').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu2').offset().top}, 800);
    return false;
  });
  $('#menu3').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu3').offset().top}, 800);
    return false;
  });
  $('#menu4').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu4').offset().top}, 800);
    return false;
  });
  $('#menu5').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $('#go-menu5').offset().top}, 800);
    return false;
  });



  $('.form-phone').mask('+9 (999) 999-99-99');

	 $('.slider-flight').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1
    //autoplay: true,
    //autoplaySpeed: 3000
	});


    $(".modalbox").fancybox();

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


    $(document).ready(function(){
      $(".tabs").lightTabs();
    });

    (function($){
      jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
          tabs = this;
          i = 0;

          showPage = function(i){
            $(tabs).children("div").children("div").hide();
            $(tabs).children("div").children("div").eq(i).show();
            $(tabs).children("ul").children("li").removeClass("active");
            $(tabs).children("ul").children("li").eq(i).addClass("active");
          }

          showPage(0);

          $(tabs).children("ul").children("li").each(function(index, element){
            $(element).attr("data-page", i);
            i++;
          });

          $(tabs).children("ul").children("li").click(function(){
            showPage(parseInt($(this).attr("data-page")));
          });
        };
        return this.each(createTabs);
      };
    })(jQuery);


});
