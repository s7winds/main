$(document).ready(function(){


    $('.slider-1').slick({
      dots: false,
      speed: 300,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });

    $('.slider-2').slick({
      dots: false,
      speed: 300,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1
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


});
