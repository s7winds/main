$(document).ready(function(){
        function windowResize(){var winWidth = Number($(window).width());
        $('body').removeClass('w-320').removeClass('w-768');
        if(winWidth < 768){$('body').addClass('w-320');}
        else if(winWidth < 1010){$('body').addClass('w-768');}}
        windowResize();$(window).resize(function(){windowResize();});
});
$(function(){
        $('a[href="#header"], a[href="#show-icon"], a[href="#block-yellow"], a[href="#about-team"], a[href="#block-yellowTwo"], a[href="#reviews"], a[href="#team"], a[href="#product-list"], a[href="#callback-block"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 186}, 600);
        return false;
        });
});
$(document).ready(function() {
        $('a.popup').click(function() {
        var popupid = $(this).attr('rel');
        $('#' + popupid).fadeIn();
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
        var popuptopmargin = ($('#' + popupid).height() + 10) / 2;
        var popupleftmargin = ($('#' + popupid).width() + 10) / 2;
        $('#' + popupid).css({
        'margin-top' : -popuptopmargin,
        'margin-left' : -popupleftmargin
        });
        });
        $('#fade, .close').click(function() {
        $('#fade , #popup-callback, #popup-order').fadeOut()
        return false;
});
        $('#').click(function(){
        facechangemap('#');
        return false;
        });
});
$(function(){
        $('.show-icon .slider').slides({
        preload: false,
        effect: 'fade',
        crossfade: true,
        slideSpeed: 350,
        fadeSpeed: 100,
        generateNextPrev: false,
        generatePagination: false
        });
        $('.reviews .slider').slides({
        preload: false,
        effect: 'slide',
        crossfade: true,
        slideSpeed: 350,
        fadeSpeed: 100,
        generateNextPrev: false,
        generatePagination: false
        });
        $('.team .slider').slides({
        preload: false,
        effect: 'slide',
        crossfade: true,
        slideSpeed: 350,
        fadeSpeed: 100,
        generateNextPrev: false,
        generatePagination: false
        });
});
$(document).ready(function() {
    $("a.show-block").click(function() {
        var $t=$(this),alt=$t.data('alt');
        $t.data('alt',$t.text());$t.text(alt);
        $($t.attr('href')).stop().toggle('slow');
        return false;
    });
});
