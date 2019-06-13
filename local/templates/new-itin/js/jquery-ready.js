! function (a) {
    a.fn.p0k1eParallax = function (b) {
        return this.each(function () {
            var c = a(this).find(".bg").first(),
                d = a(this).position().top,
                e = d - a(window).height(),
                f = d + a(this).height();
            a(window).on("scroll", function () {
                f = d + a(this).height();
                var g = a(window).scrollTop();
                g > e && f > g && (e >= 0 ? c.css("top", (g - e) * -b) : c.css("top", -g * b))
            })
        })
    }
}(jQuery);

$(document).ready(function(){
	$(window).load(function(){
		$('.pageloader').fadeOut();
		$('.masonry').masonry({
			itemSelector: '.masonry_item'
		});
	});

	if (typeof jQuery.fn.p0k1eParallax === 'function') {
		$('.bg_inner').p0k1eParallax(-0.5);
	}


	function w_scroll(){
		var winScroll = $(window).scrollTop();

		if(winScroll>1){
			$('body').addClass('fix');

		} else {
			$('body').removeClass('fix');
		}
		 if($('body *').is('.infograph') && $(window).width() >= 992){
		 	var scrollEnd = $('.total').offset().top - $('.infograph').height();
		 	if(winScroll>=496 && winScroll < scrollEnd){
				$('.infograph').animate({'position':'fixed', 'top': "90px"}, 200);
			}else if(winScroll>=496 && winScroll >= scrollEnd){
				$('.infograph').animate({'position':'absolute',  'top': 'auto', bottom:'0'}, 200);

			}else if(winScroll<=496){
				$('.infograph').animate({'position':'relative', 'top': 0}, 200);
			}
		}

	};
	w_scroll();
	$(window).bind('scroll',function(e){
		w_scroll();
	});



// function scroll_service( window ) {

//     'use strict';

//     var docElem = window.document.documentElement;

//     function getViewportH() {
//         var client = docElem['clientHeight'],
//             inner = window['innerHeight'];

//         if( client < inner )
//             return inner;
//         else
//             return client;
//     }

//     function scrollY() {
//         return window.pageYOffset || docElem.scrollTop;
//     }

//     function getOffset( el ) {
//         var offsetTop = 0, offsetLeft = 0;
//         do {
//             if ( !isNaN( el.offsetTop ) ) {
//                 offsetTop += el.offsetTop;
//             }
//             if ( !isNaN( el.offsetLeft ) ) {
//                 offsetLeft += el.offsetLeft;
//             }
//         } while( el = el.offsetParent )

//         return {
//             top : offsetTop,
//             left : offsetLeft
//         }
//     }

//     function inViewport( el, h ) {
//         var elH = el.offsetHeight,
//             scrolled = scrollY(),
//             viewed = scrolled + getViewportH(),
//             elTop = getOffset(el).top,
//             elBottom = elTop + elH,
//             // РµСЃР»Рё 0, СЌР»РµРјРµРЅС‚ Р±СѓРґРµС‚ Р·Р°РґРµР№СЃС‚РІРѕРІР°РЅ РїСЂРё С‡Р°СЃС‚РёС‡РЅРѕРј РїРѕСЏРІР»РµРЅРёРё РІ РїРѕР»Рµ РІРёРґРёРјРѕСЃС‚Рё.
//             // РµСЃР»Рё 1, СЌР»РµРјРµРЅС‚ Р±СѓРґРµС‚ Р·Р°РґРµР№СЃС‚РІРѕРІР°РЅ РїСЂРё РїРѕР»РЅРѕРј РїРѕСЏРІР»РµРЅРёРё РІ РїРѕР»Рµ РІРёРґРёРјРѕСЃС‚Рё.
//             h = h || 0;

//         return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
//     }

//     function extend( a, b ) {
//         for( var key in b ) {
//             if( b.hasOwnProperty( key ) ) {
//                 a[key] = b[key];
//             }
//         }
//         return a;
//     }

//     function cbpScroller( el, options ) {
//         this.el = el;
//         this.options = extend( this.defaults, options );
//         this._init();
//     }

//     cbpScroller.prototype = {
//         defaults : {
//             // РµСЃР»Рё 0, С‚Рѕ РєР»Р°СЃСЃ РґР»СЏ Р°РЅРёРјР°С†РёРё Р±СѓРґРµС‚ РґРѕР±Р°РІР»РµРЅ, РєР°Рє С‚РѕР»СЊРєРѕ РѕР±СЉРµРєС‚ РїРѕСЏРІРёС‚СЃСЏ РІ РїРѕР»Рµ РІРёРґРёРјРѕСЃС‚Рё.
//             // РµСЃР»Рё 1, С‚Рѕ Р°РЅРёРјР°С†РёСЏ СЃСЂР°Р±РѕС‚Р°РµС‚ С‚РѕР»СЊРєРѕ РїРѕСЃР»Рµ С‚РѕРіРѕ, РєР°Рє РІСЃРµ РѕР±СЉРµРєС‚С‹ РїРѕСЏРІСЏС‚СЃСЏ РІ РїРѕР»Рµ РІРёРґРёРјРѕСЃС‚Рё
//             viewportFactor : 0.2
//         },
//         _init : function() {
//             if( Modernizr.touch ) return;
//             this.sections = Array.prototype.slice.call( this.el.querySelectorAll( '.cbp-so-section' ) );
//             this.didScroll = false;

//             var self = this;
//             // СЃРµРєС†РёРё, РєРѕС‚РѕСЂС‹Рµ СѓР¶Рµ РѕС‚РѕР±СЂР°Р¶РµРЅС‹...
//             this.sections.forEach( function( el, i ) {
//                 if( !inViewport( el ) ) {
//                     classie.add( el, 'cbp-so-init' );
//                 }
//             } );

//             var scrollHandler = function() {
//                     if( !self.didScroll ) {
//                         self.didScroll = true;
//                         setTimeout( function() { self._scrollPage(); }, 60 );
//                     }
//                 },
//                 resizeHandler = function() {
//                     function delayed() {
//                         self._scrollPage();
//                         self.resizeTimeout = null;
//                     }
//                     if ( self.resizeTimeout ) {
//                         clearTimeout( self.resizeTimeout );
//                     }
//                     self.resizeTimeout = setTimeout( delayed, 200 );
//                 };

//             window.addEventListener( 'scroll', scrollHandler, false );
//             window.addEventListener( 'resize', resizeHandler, false );
//         },
//         _scrollPage : function() {
//             var self = this;

//             this.sections.forEach( function( el, i ) {
//                 if( inViewport( el, self.options.viewportFactor ) ) {
//                     classie.add( el, 'cbp-so-animate' );
//                 }
//                 else {
//                     // РґРѕР±Р°РІР»СЏРµС‚ РёР·РЅР°С‡Р°Р»СЊРЅС‹Рµ РєР»Р°СЃСЃС‹, РµСЃР»Рё РёС… РЅРµС‚.
//                     classie.add( el, 'cbp-so-init' );

//                     classie.remove( el, 'cbp-so-animate' );
//                 }
//             });
//             this.didScroll = false;
//         }
//     }

//     // РґРѕР±Р°РІР»СЏРµРј РІ РіР»РѕР±Р°Р»СЊРЅРѕРµ РїСЂРѕСЃС‚СЂР°РЅСЃС‚РІРѕ
//     window.cbpScroller = cbpScroller;

// };
// scroll_service( window );

	// function service_scroll()
	// {
	// 	var winScroll = $(window).scrollTop();
	// 	var arr = $('.service_list>div');
	// 	var arr_height;

	// 	 // $(".service_list>div").each(function(){
	// 	 // 	if (winScroll>$(this).offset().top)
	// 	 // 	{
	// 	 // 		 console.log($(this).offset().top);
	// 	 // 	}

	//   //       // arr_height.push($(this).offset().top);
	//   //   });

	// 	$(window).scroll(function() {
	// 	   winScroll = $(window).scrollTop();
	// 	   $(".service_list>div").each(function(){
	// 	 	// if (winScroll>$(this).offset().top)
	// 	 	// {
	// 	 		 console.log($(this).offset().top);
	// 	 	}

	//         // arr_height.push($(this).offset().top);
	//    	 });

	// 	});

	// 	// РїРµСЂРµР±РµСЂС‘Рј РјР°СЃСЃРёРІ arr
	// 	// $.each(arr,function(index,value){
	// 	// 	var offset = arr[index].offset().top;
	// 	// 	// arr_height.push(offset);
	// 	// 	console.log(value);
	// 	// });

	// 	// $.each(arr_height,function(index,value){
	// 	// 	Console.log(index);
	// 	// });

	// }
	// service_scroll();
	/*var _h = $(window).height();
	res = function(){
		$('.slide_one').each(function(){
			$(this).height(_h);
		})res();*/

	    // adaptive
	var callback = false;
    function res (){
        var _w = $(window).width();
        if( _w > 870 ) {
           // var _h =  $("#video").height();
          // $(".slider_main .txt_wrap").height(_h);
        } else{
        	var _img = $('#video').prop('poster');
			$(".slider_main .slider_wrap").css({
				backgroundImage: 'url('+_img+')',

			});
        }
        if( _w < 980 ) {
        	if (!callback) {
        		callback = true;
	        	$(".menu-error .link_col > span, .menu-error .link_col > a").click(function(e) {
	        		e.preventDefault();
	        		$(this).parent().find(".link_col--wrap").slideToggle(300);
	        	})
        	}
        }
    }

    res();

    $(window).resize(function(){
        res();
    });

	// slider

	$('.slider_wrap').on('init', function(event, slick){
        slick.$slider.find('.slide_one').each(function(){
            var self = $(this),
                tw = self.find('.txt');
            tw.animate({'marginTop':-1*(tw.height()/2)});
        });
    })
    .slick({
		autoplay: true,
		autoplaySpeed: 7000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade: true
	});

	$('div.row.clients').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplay: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}

		]
	});
	// var $status = $('.pagingInfo');
 //    var $slickElement = $('.task-li__gallery');

 //    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
 //        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
 //        var i = (currentSlide ? currentSlide : 0) + 1;
 //        $status.text(i + '/' + slick.slideCount);
 //    });

 //    $slickElement.slick({
 //        slide: 'img',
 //        autoplay: true,
 //        dots: false,
 //        arrows: false
 //    });
 //    $('.left').click(function(){
	//   $slickElement.slick('slickPrev');
	// })

	// $('.right').click(function(){
	//  $slickElement.slick('slickNext');
	// })


	 $(".btn_down").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
        return false;
    });
	$('.slider').each(function () {
		$(this).slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			cssEase: 'linear',
			dots: false,
			arrows: true,
			prevArrow: $(this).next().find('.prev'),
			nextArrow: $(this).next().find('.next')
		}).on('beforeChange', function (a, b, c, d) {
			var c = $(this).next().find('div.count');
			c.text(c.text().replace(/\d+(\/\d+)/, (d + 1) + '$1'));
		});
	});
	var textOpen = 0;
	$('.main_text .main_text-open').click(function() {
		if (textOpen === 0) {
			textOpen ++;
			var hh = $('.main_text .wysiwyg').height();
			$(this).prev('.txt').animate({height :hh}, 300);
			$(this).fadeOut(200).text("СЃРІРµСЂРЅСѓС‚СЊ").fadeIn(200);
		}else{
			textOpen = 0;
			$(this).prev('.txt').animate({height :"130px"}, 300);
			$(this).fadeOut(200).text("РџРѕРґСЂРѕР±РЅРµРµ").fadeIn(200);
		}
	});

	if ($('svg').length) {
		// svg animation
		var $svg = $('svg').drawsvg(),
			_isvg = 0;
		$(window).on('scroll', function () {
			var a = $(document).scrollTop(),
				b = $(window).height(),
				c = $('svg').offset().top;
			if (a + b * .75 > c) {
				if (!_isvg) {
					_isvg = 1;
					$svg.drawsvg('animate');
				}
			} else if (a + b < c) {
				_isvg = 0;
				$svg.drawsvg('progress', 0);
			}
		});
		//
	}

	if ($('section.auto-list').length) {
		$(window).scroll(function () {
			var b = $('div.b-paginate:last'),
				p = b.parent();
			if (!b.data('h')) {
				return ;
			}
			if (!b.is('.scrolled') && p.offset().top + p.height() < $(document).scrollTop() + $(window).height()) {
				b.addClass('scrolled');
				$.get(b.data('h'), {}, function (response) {
					$('section.auto-list div.wr.auto-list').append($('div.row.list', response));
				}, 'html');
			}
		});
	}

	if ($('div.project-list').length) {
		$(window).scroll(function () {
			var b = $('div.b-paginate:last'),
				p = b.parent();
			if (!b.data('h')) {
				return ;
			}
			if (!b.is('.scrolled') && p.offset().top + p.height() < $(document).scrollTop() + $(window).height()) {
				b.addClass('scrolled');
				$.get(b.data('h'), {}, function (response) {
					var r = $('div.wr.auto-list > *', response),
						l = r.length - 1;
					r.each(function (i) {
						if ($(this).is('div.row')) {
							$('div.wr.auto-list div.row:last').append($(this).children());
						} else if ($(this).is('p.hd')) {
							$('div.wr.auto-list div.row:last').after($(this));
							if (i < l) {
								$('div.wr.auto-list > :last').after($('<div/>').addClass('row'));
							}
						}
						if ($(this).is('div.b-paginate')) {
							b.after($(this));
						}
					});
				}, 'html');
			}
		});
	}

    $('.scrollbar-inner').scrollbar();

	// menu
	$('.btn_menu').click(function(){
		$('.link_col').removeClass('sub_menu--open current');
		$(this).parents('body').toggleClass('menu_open');
	});

	$('.menu .link_col .link_col--mob').click(function(e){
		var w = $(window).width(),
			t = $(this);
		if(w<910 && $(this).next().is('.link_col--wrap')){
			e.preventDefault();
			$('.link_col').addClass('sub_menu--open');
			t.parent().addClass('current');
		}
	});
	$('.link_col--back').click(function(){
		$('.link_col').removeClass('sub_menu--open current');
	})

	// clients reviews
	$(document).on('click', '.item_one.comment', function(){
			var t = $(this),
				r = t.find('.rev'),
				c = r.clone().addClass('view');
		if(!t.is('.open')){
            $('.item_one').removeClass('open');
			$('.item_one').css({'margin-bottom':25+'px'});
			$('.rev.view').remove();
            t.addClass('open');
            c.appendTo('.clients_list');
			setTimeout(function(){
                t.css({'margin-bottom':c.height()+120+'px'});
                var p = t.offset(),
                    h = t.parent().height();
                $('.rev.view').css({'top':p.top + h + 'px'});
                $('.rev.view').css({'opacity':'1'});
			}, 500);
		} else {
			t.removeClass('open');
			$('div.rev.view').fadeOut(500, function () {
				$(this).remove();
				t.css({'margin-bottom': '25px'})
			});
		}
	})

	$('.show_it span').click(function(){
    	$(this).next().slideToggle(300);
    	$(this).parent().toggleClass('open');
    });

    // antispam
    var captchaGen = function() {
        $form = $('div.contact_form form');
        if ($form.length) {
            $.get('/misc/get_captcha_code', function(response){
                $('<input />').attr('name', 'captcha').attr('type', 'hidden').val(response.code).appendTo($form);
            });
        }
    }
    captchaGen();

	$('div.contact_form').on('submit', 'form', function (e) {
		e.preventDefault();
		var f = $(this),
			d = f.serialize();
		f.find('input.error,textarea.error,.input.error,.textarea.error').removeClass('error');
        $('div.success-form__send').fadeOut(function () {
            $(this).remove();
        })
        $('div.preloader').show();
		if ($('div.calculator input').length) {
			d += '&' + $('div.calculator input').serialize();
		}
        d += '&from_url=' + window.location.href;
		$.post(f.attr('action'), d, function (response) {
            var c = $('div.contact_form');
            $('div.preloader').hide();
			$('div.contact_form div.form').html($('div.form', response).html());
            $('input[type="tel"]').inputmask('+7 (999) 999-99-99');
            if ($('div.success-form__send', response).length) {
                c.after($('div.success-form__send', response));
                c.hide();
                $('div.success-form__send').fadeIn();
            }
			if ($('div.calc-row').length && $('p.hd.success', response).length) {
				$('div.calc-row').html($('div.calc-row', response).html());
			}
			if ($('div.contact_form form').data('g')) {
				yaCounter652944.reachGoal($('div.contact_form form').data('g'));
			}
            // antispam
            captchaGen();
		}, 'html');
	});

    $('body').on('click.hide-success', 'a.success-form__send-another', function (e) {
        e.preventDefault();
        $('div.success-form__send').hide().remove();
        $('div.contact_form').show();
    });

	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');
	$('input.error, textarea.error').focus(function() {
		$(this).removeClass('error');
	});
	if ($('#map-canvas').length) {
		$('#map-canvas').each(function () {
			var m = $(this),
				c = new google.maps.LatLng(m.data('x'), m.data('y')),
				map = new google.maps.Map(m[0], {
					zoom: 16,
					center: c,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					scrollwheel: false,
					styles: [
	                    {
	                        stylers: [
	                            { saturation: -65 }
	                        ]
	                    }
	                ],
				}),
				tooltip;
			/*iw = new google.maps.InfoWindow({
				content: m.data('c')
			});*/
			ms = new google.maps.Marker({
				position: new google.maps.LatLng(m.data('x'), m.data('y')),
				map: map,
				icon: '/img/pointer.png',
				tooltip: m.data('c')
			});
			tooltip = new Tooltip({map: map}, ms);
			tooltip.bindTo("text", ms, "tooltip");
			google.maps.event.addListener(ms, 'mouseover', function() {
				tooltip.addTip();
				tooltip.getPos2(ms.getPosition());
			});
			google.maps.event.addListener(ms, 'mouseout', function() {
				tooltip.removeTip();
			});
			/*google.maps.event.addListener(ms, 'click', function() {
				iw.open(map, ms);
			});*/
		});
	}

	if ($('div.slogan').data('color')) {
		var color = $('div.slogan').data('color');
		//$('.wysiwyg .num, .wysiwyg .btn__round, .wysiwyg .btn_round, .wysiwyg .btn_round--icon, .inner-slider .controls .prev, .inner-slider .controls .next').addClass(color);
        $('section.blog_view .wysiwyg .num').css('background-color', color);
        $('.wysiwyg .btn__round, .wysiwyg .btn_round--icon, .inner-slider .controls .prev, .inner-slider .controls .next').css('background-color', color);
        // $('.wysiwyg .btn_round').css('color', color);

		$('<style>.wysiwyg ul li:before {background:'+color+'}</style>').prependTo('body');
		$('.wysiwyg a.btn_round').css({
			'border-color': color,
			'color': color
		})
	}

	var winw = $(window).width();
	if(winw > 800){
		$('.categories p.hd').click(function(){
	    	$('.filter_wrap').slideToggle(300);
	    	$(this).toggleClass('open');
	    });
	} else {
		$('.filter_wrap').hide();
		$('.categories p.hd').addClass('open');
		$('.categories p.hd').click(function(){
	    	$('.filter_wrap').slideToggle(300);
	    	$(this).toggleClass('open');
	    });
	}

	$("a.calc__order").click(function(e){
		e.preventDefault();
		$("div.contact_form").slideDown(300);
	})
	if ($('a.fancybox').length) {
		$('a.fancybox').fancybox({
			helpers: {
				thumbs: true
			}
		});
	}

	if ($('div.calculator').length) {
		$(':checkbox:checked', 'div.calculator').prop('checked', false);
	}

	if ($('.paychecks').length && $(window).width()>992) {
		$('.sticky').stick_in_parent({
			offset_top: 0
		});
	}

	$('.js-scrollTo').click(function(){
		var target = $(this).attr('href');
		$('body').scrollTo($(target), 300);
		$(target).find('input').first().focus();
	});

	$('div.calculator').on('change.calc', 'input', function () {
		$('p.hd.success').remove();
		var a = $(this),
            c = $('div.calculator div.module-title :checkbox:checked'),
            p = a.closest('div.module-list').find('div.module-title :checkbox'),
			s = cs = sm = 0,
            w, t = $('table.paychecks__lines:not(.m) tbody');
        if (a.data('m')) {
            t = $('table.paychecks__lines.m tbody');
            p.data('m', 1);
        }
        if (!p.is(':checked')) {
            p.closest('div.module-list').find('div.module :radio, div.module :checkbox').each(function () {
                t.find('tr.' + $(this).attr('id')).remove();
                $(this).prop('checked', false);
            });
        }
        a.closest('div.module').find(':radio:not(:checked)').each(function () {
            t.find('tr.' + $(this).attr('id')).remove();
        });
        a.closest('div.module').find(':checked').each(function () {
            cs += Number($(this).data('v'));
        });
        p.data('v', cs);
        if (a.data('w')) {
            w = JSON.parse(decodeURIComponent(a.data('w')));
            for (i in w) {
                t.append($('<tr/>').addClass(a.attr('id')).append($('<td/>').text(i)).append($('<td/>').text(w[i].fp)));
            }
            if (a.is(':checked')) {
            } else {
                t.find('tr.' + a.attr('id')).remove();
            }
        } else if (a.is('[id^="rb-"]')) {
            if (a.is(':checked')) {
                t.append($('<tr/>').addClass(a.attr('id')).append($('<td/>').text(a.data('c'))).append($('<td/>').text(a.data('fp'))));
            } else {
                 t.find('tr.' + a.attr('id')).remove();
            }
        }
		c.each(function () {
            if ($(this).data('m')) {
                sm += Number($(this).data('v'));
            } else {
                s += Number($(this).data('v'));
            }
		});
        if (s == 0) {
            $('div.paychecks__item.m--once').hide();
        } else {
            $('div.paychecks__item.m--once').show();
        }
        if (sm == 0) {
            $('div.paychecks__item:not(.m--once)').hide();
        } else {
            $('div.paychecks__item:not(.m--once)').show();
        }
		s = String(s);
        sm = String(sm);
        $('#monthly_total').text(sm.split(/(?=(?:\d{3})+$)/).join(' '));
        $('#single_total').text(s.split(/(?=(?:\d{3})+$)/).join(' '));
	}).on('click.calc', '.module-open', function() {
        var a = $(this);
		$(this).parent().next('.module').slideToggle(300, function () {
            var r = $(this).find(':radio:checked');
			$(this).toggleClass('on');
            if (!r.length) {
                $(this).find(':radio:first').prop('checked', true).trigger('change');
            }
		});
        setTimeout(function () {
            if (a.closest('div.calc-row').find('div.module-title :checkbox:checked').length) {
                $('.calc__order').fadeIn(function () {
                    $(this).css("display","block");
                });
                $('.paychecks').fadeIn(function () {
                    $(this).addClass('m--appeared');
                });
                $(document.body).trigger("sticky_kit:recalc");
            } else {
                $('.calc__order').fadeOut(function () {
                    $(this).css("display", 'none');
                });
                $('.paychecks').fadeOut(function () {
                    $(this).removeClass('m--appeared');
                });
            }
        }, 0);
	});

	if ($('div.chart').length) {
		$('div.chart').each(function () {
			var c = $(this),
				d = JSON.parse(decodeURIComponent(c.data('set')));
            google.charts.load('current', {'packages':['corechart'], 'language': 'ru'});
			if (c.data('type') == 'pie') {
                google.charts.setOnLoadCallback(function () {
                    var data = google.visualization.arrayToDataTable(d);

                  var options = {
                    backgroundColor: 'transparent',
                    legend: 'bottom',
                    // tooltip: {isHtml: true},
                    width:'100%',
                    height:300,

                     chartArea: {left: '0', width: '100%'},
                    colors: JSON.parse(decodeURIComponent(c.data('colors')))
                  };

                  var chart = new google.visualization.PieChart(c[0]);

                  chart.draw(data, options);
                });

				//new Chart(c[0].getContext('2d')).Pie(d);//, {showTooltips: false});
			} else {
                console.log(d);
                var t = [];
                for (var i = 1; i < d.length; i ++) {
                    t[(i - 1)] = d[i][0];
                }
                google.charts.setOnLoadCallback(function () {
                    var data = google.visualization.arrayToDataTable(d);

                  var options = {
                    backgroundColor: 'transparent',
                    legend: 'bottom',
                    width:'100%',
                    height:300,
                    chartArea: {top: '23%', left: '50', height: '50%', width: '100%'},
                    hAxis: {
                        format: 'dd/MM/yyyy',
                        ticks: t,
                        textStyle: {
                            fontSize: 12
                        }
                    },
                    axisTitlesPosition: 'none',
                    vAxis: {
                    	position: 'left',
                        textStyle: {
                            fontSize: 10
                        }
                    },
                    colors: JSON.parse(decodeURIComponent(c.data('colors')))
                  };

                  var chart = new google.visualization.LineChart(c[0]);

                  chart.draw(data, options);
                });
				/*new Chart(c[0].getContext('2d')).Line(d, {
					showScale: true,
		        	pointDot : true,
				});*/
			}
		});
	}

	$('div.pagination div.hid a, div.categories_filter span').click(function () {
		if ($(this).data('h')) {
			window.location.href = $(this).data('h');
		}
	});

    // $('body').tooltip({
    //     selector: '.clients_list.auto-list span.img',
    //     track: true,
    //     position: {
    //       	my: "left+5 bottom-10",
    //       	at: "right bottom",
    //       	using: function(position, feedback) {
    // 	      $(this).css(position);
    // 	      $(this).addClass(feedback.horizontal);
    // 	    }
    //     }
    // });


 // $(".factuuradres").animate({
 //        height: "610px"
 //      }, {
 //        duration: 500,
 //        complete: function () {
 //          $(".factuuradresbutton").html("Toch geen factuuradres")
 //          $(".factuuradres").html('<h2>Factuuradres</h2><div class="title_textbox3"><h3>Postcode:</h3></div><div class="textbox3"><input type="text" class="postcode" name="Postcode" value=""/></div><div class="title_textbox4"><h3>Huisnummer:</h3></div><div class="textbox4"><input type="text" class="huisnummer" name="Huisnummer" value=""/></div><div class="title_textbox"><h3>Straat:</h3></div><div class="textbox"><input type="text" class="field" name="Straat" value=""/></div><div class="title_textbox"><h3>Plaats:</h3></div><div class="textbox"><input type="text" class="field" name="Plaats" value=""/></div>');
 //        }
 //      });
 //    },



      $('.header__menu_item').hover(function() {

      	   if ( $(this).find('.header__submenu').length) {

            $(this).addClass('hover');

      	var $this_header__item = $(this);

      		if ($(this).hasClass('--about'))
      		 {
      		 $(this).animate({width:"100"},100);
      		 }
      		 else
            	$(this).animate({width:"200"},100);
            setTimeout(function (){

			   	$('.header__submenu',$this_header__item).each(function() {
					var $this_submenu = $(this);
					 if ($this_header__item.hasClass('hover'))
				     {
				     	$this_submenu.fadeIn();
				     }
				});

   			},400);
		   }

        }, function() {
            $('.header__submenu').fadeOut();
             $(this).removeClass('hover');

		     if ( $(this).find('.header__submenu').length)
		     	{
		     		$(this).animate({   width: 85   }, 100);
		     	}
		     $('.header__submenu').slideUp();
        });

   $("a.calc-btn").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top -40 + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });

    $('.table-services').wrap("<div style='overflow-x: auto'></div>");


    //new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );
});



