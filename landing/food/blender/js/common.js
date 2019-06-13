$(function() {
    $(".tabs").organicTabs({
        "speed": 200
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
jQuery(document).ready(function() {
    jQuery('.reviews .wrap, .carousel .wrap').jcarousel({
        scroll: 1
    });
});
$(function(){
        $('a[href="#main"], a[href="#top-prim"], a[href="#complect"], a[href="#video"], a[href="#tabs"], a[href="#actia"], a[href="#card"], a[href="#reviews"], a[href="#carousel"], a[href="#map"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 600);
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
$(window).scroll(function(){
        parallax();
});
function parallax(){
        var scrolled = $(window).scrollTop();
        $('.pr1').css('top',(scrolled*0.2)+'px');
        $('.pr2').css('bottom',(scrolled*0.2)+'px');
        $('.pr3').css('top',(scrolled*0.15)+'px');
        $('.pr4').css('bottom',(scrolled*0.14)+'px');
        $('.pr5').css('top',(scrolled*0.15)+'px');
}






        $('.top-prim-box')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeOutDown')
                 .addClass('fadeInUp');
             else
                 $(this)
                 .removeClass('fadeInUp')
                 .addClass('fadeOutDown');
         }, {
             offset: '90%'
         })

         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeInUp')
                 .addClass('fadeOutDown');
             else
                 $(this)
                 .removeClass('fadeOutDown')
                 .addClass('fadeInUp');
         }, {
             offset: '22%'
        })

        $('.slogon-box')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeOutLeft')
                 .addClass('fadeInLeft');
             else
                 $(this)
                 .removeClass('fadeInLeft')
                 .addClass('fadeOutLeft');
         }, {
             offset: '80%'
         })

         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeInLeft')
                 .addClass('fadeOutLeft');
             else
                 $(this)
                 .removeClass('fadeOutLeft')
                 .addClass('fadeInLeft');
         }, {
             offset: '2%'
        })


         $('.slogon2-box')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeOutDown')
                 .addClass('fadeInUp');
             else
                 $(this)
                 .removeClass('fadeInUp')
                 .addClass('fadeOutDown');
         }, {
             offset: '90%'
         })

         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeInUp')
                 .addClass('fadeOutDown');
             else
                 $(this)
                 .removeClass('fadeOutDown')
                 .addClass('fadeInUp');
         }, {
             offset: '22%'
        })


         $('.slogon3-box')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('zoomOut')
                 .addClass('zoomIn');
             else
                 $(this)
                 .removeClass('zoomIn')
                 .addClass('zoomOut');
         }, {
             offset: '90%'
         })

         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('zoomIn')
                 .addClass('zoomOut');
             else
                 $(this)
                 .removeClass('zoomOut')
                 .addClass('zoomIn');
         }, {
             offset: '22%'
        })



        $('.complect-box')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeOutDown')
                 .addClass('fadeInUp');
             else
                 $(this)
                 .removeClass('fadeInUp')
                 .addClass('fadeOutDown');
         }, {
             offset: '90%'
         })

         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeInUp')
                 .addClass('fadeOutDown');
             else
                 $(this)
                 .removeClass('fadeOutDown')
                 .addClass('fadeInUp');
         }, {
             offset: '10%'
        })

        $('.video-box')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeOutLeft')
                 .addClass('fadeInLeft');
             else
                 $(this)
                 .removeClass('fadeInLeft')
                 .addClass('fadeOutLeft');
         }, {
             offset: '90%'
         })

         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeInLeft')
                 .addClass('fadeOutLeft');
             else
                 $(this)
                 .removeClass('fadeOutLeft')
                 .addClass('fadeInLeft');
         }, {
             offset: -100
        })

        $('.tabs-box')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeOutLeft')
                 .addClass('fadeInLeft');
             else
                 $(this)
                 .removeClass('fadeInLeft')
                 .addClass('fadeOutLeft');
         }, {
             offset: '80%'
         })

         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeInLeft')
                 .addClass('fadeOutLeft');
             else
                 $(this)
                 .removeClass('fadeOutLeft')
                 .addClass('fadeInLeft');
         }, {
             offset: -200
        })

         $('.color-b1-box')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('zoomOut')
                 .addClass('zoomIn');
             else
                 $(this)
                 .removeClass('zoomIn')
                 .addClass('zoomOut');
         }, {
             offset: '75%'
         })

         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('zoomIn')
                 .addClass('zoomOut');
             else
                 $(this)
                 .removeClass('zoomOut')
                 .addClass('zoomIn');
         }, {
             offset: '5%'
        })

        $('.actia-box')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeOutLeft')
                 .addClass('fadeInLeft');
             else
                 $(this)
                 .removeClass('fadeInLeft')
                 .addClass('fadeOutLeft');
         }, {
             offset: '70%'
         })

         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeInLeft')
                 .addClass('fadeOutLeft');
             else
                 $(this)
                 .removeClass('fadeOutLeft')
                 .addClass('fadeInLeft');
         }, {
             offset: '1%'
        })

        $('.card-box')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeOut')
                 .addClass('fadeIn');
             else
                 $(this)
                 .removeClass('fadeIn')
                 .addClass('fadeOut');
         }, {
             offset: '60%'
         })

         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeIn')
                 .addClass('fadeOut');
             else
                 $(this)
                 .removeClass('fadeOut')
                 .addClass('fadeIn');
         }, {
             offset: '1%'
        })


         $('.recepts-l-box')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeOutLeft')
                 .addClass('fadeInLeft');
             else
                 $(this)
                 .removeClass('fadeInLeft')
                 .addClass('fadeOutLeft');
         }, {
             offset: '90%'
         })

         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeInLeft')
                 .addClass('fadeOutLeft');
             else
                 $(this)
                 .removeClass('fadeOutLeft')
                 .addClass('fadeInLeft');
         }, {
             offset: '1%'
        })


          $('.recepts-r-box')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeOutRight')
                 .addClass('fadeInRight');
             else
                 $(this)
                 .removeClass('fadeInRight')
                 .addClass('fadeOutRight');
         }, {
             offset: '90%'
         })

         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('fadeInRight')
                 .addClass('fadeOutRight');
             else
                 $(this)
                 .removeClass('fadeOutRight')
                 .addClass('fadeInRight');
         }, {
             offset: '4%'
        })


         $('.circle-box')
         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('bounceOut')
                 .addClass('bounceIn');
             else
                 $(this)
                 .removeClass('bounceIn')
                 .addClass('bounceOut');
         }, {
             offset: '99%'
         })

         .waypoint( function(dir) {
             if ( dir === 'down' )
                 $(this)
                 .removeClass('bounceIn')
                 .addClass('bounceOut');
             else
                 $(this)
                 .removeClass('bounceOut')
                 .addClass('bounceIn');
         }, {
             offset: '0%'
        })
