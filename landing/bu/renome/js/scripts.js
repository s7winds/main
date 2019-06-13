$(document).ready(function(){


    $('.form-phone').mask('+7 (999) 999-99-99');


$('.modalbox').fancybox();
$('.modalbox2').fancybox({
    afterShow: function() {
        $( window ).resize();
        $('.slider-kv').slick('setPosition');
    }

});

$('.slider-kv').not('.slick-initialized').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   dots: false,
   infinite: true,
   centerMode: false
});

  $(window).load(function() {
        $('.slider-kv').on('setPosition', function () {
        $(this).find('.slick-slide').height('auto');
        var slickTrack = $(this).find('.slick-track');
        var slickTrackHeight = $(slickTrack).height();
        $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
        });
  })


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


    $(".f_contact.f_contact2").submit(function(e){
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
                var link = document.createElement('a');
                link.href = 'presentation.pdf';
                link.download = 'presentation.pdf';
                link.dispatchEvent(new MouseEvent('click'));
        });
         return false;
     });








});
