$(document).ready(function(){

    new WOW().init();

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
                link.href = 'presentation.html';
                link.download = 'presentation.html';
                link.dispatchEvent(new MouseEvent('click'));
        });
         return false;
     });


$('.vid1').click(function(){
  $('.b-vid1').addClass('show');
});
$('.vid1_b').click(function(){
  $('.b-vid1').removeClass('show');
});

$('.vid2').click(function(){
  $('.b-vid2').addClass('show');
});
$('.vid2_b').click(function(){
  $('.b-vid2').removeClass('show');
});

$('.vid3').click(function(){
  $('.b-vid3').addClass('show');
});
$('.vid3_b').click(function(){
  $('.b-vid3').removeClass('show');
});

$('.vid4').click(function(){
  $('.b-vid4').addClass('show');
});
$('.vid4_b').click(function(){
  $('.b-vid4').removeClass('show');
});

   $('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  });


new ScrollFlow();










});
