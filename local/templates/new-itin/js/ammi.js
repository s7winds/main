$(function($) {

	$('.mobile-catalog-ul > a').on('click', function() {
		$(this).parent('div').toggleClass('active')
		$(this).next('ul').slideToggle('fast')
		return false
	})

	$('.header-btn-menu a').on('click', function() {
		$(this).toggleClass('active')
		$('.mobile-menu').slideToggle('fast')
		$('html').toggleClass('html-mobile')
		return false
	})

	if ( $('.portfolio-preview').length ) {
		$('.portfolio-preview').slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		})
	}

	if ( $('.list-trust').length ) {
		$('.list-trust > div').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
				  breakpoint: 99999,
				  settings: "unslick"
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				  }
				}
			]
		})
	}

	if ( $('.scheme-crm-list').length ) {
		$('.scheme-crm-list').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			arrows: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
				  breakpoint: 99999,
				  settings: "unslick"
				},
				{
				  breakpoint: 1299,
				  settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				  }
				},
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				  }
				}
			]
		})
	}

	portfolioslidered()
	listtrustslidered()
	delactivevacancy()
	delactivecalculate()

	$(window).on("orientationchange", function() {
		portfolioslidered()
		listtrustslidered()
		delactivevacancy()
		delactivecalculate()
		if ( $('.list-trust').length ) {
			$('.list-trust > div').slick('resize');
		}
		if ( $('.scheme-crm-list').length ) {
			$('.scheme-crm-list').slick('resize');
		}
	})

	$(window).resize(function() {
		portfolioslidered()
		listtrustslidered()
		delactivevacancy()
		delactivecalculate()
		if ( $('.list-trust').length ) {
			$('.list-trust > div').slick('resize');
		}
		if ( $('.scheme-crm-list').length ) {
			$('.scheme-crm-list').slick('resize');
		}
	})

	if ( $('.header-slider').length ) {

		$(document).ready(function() {
		    $('.header-slider').on('init', function(e, slick) {
		        var $firstAnimatingElements = $('.header-slider-item:first-child').find('[data-animation]');
		        doAnimations($firstAnimatingElements);
		    })
		    $('.header-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
		              var $animatingElements = $('.header-slider-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		              doAnimations($animatingElements);
		    })

			$('.header-slider').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				autoplay: true,
				autoplaySpeed: 3000,
				fade: true,
				cssEase: 'linear'
			})

		    function doAnimations(elements) {
		        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        elements.each(function() {
		            var $this = $(this);
		            var $animationDelay = $this.data('delay');
		            var $animationType = 'animated ' + $this.data('animation');
		            $this.css({
		                'animation-delay': $animationDelay,
		                '-webkit-animation-delay': $animationDelay
		            });
		            $this.addClass($animationType).one(animationEndEvents, function() {
		                $this.removeClass($animationType);
		            })
		        })
		    }
		})
	}

	if ( $('.application-apps-slider').length ) {
		$('.application-apps-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000,
		})
	}

	if ( $('.apps-portfolio').length ) {
		$('.apps-portfolio').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: false,
			dots: true,
			centerMode: true,
			centerPadding: '0',
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: '40px',
			      }
			    }
			]
		})
	}

	if ( $('.c-offers-slider').length ) {
	    $('.c-offers-slider').on('init', function(e, slick) {
	        var $firstAnimatingElements = $('.c-offers-slider-item:first-child').find('[data-animation]');
	        doAnimations($firstAnimatingElements);
	    })
	    $('.c-offers-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
	              var $animatingElements = $('.c-offers-slider-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
	              doAnimations($animatingElements);
	    })

		$('.c-offers-slider-nav a').on('click', function() {
			$(this).addClass('active').siblings('a').removeClass('active')
			$('.c-offers-slider').slick('slickGoTo',$(this).index())
			return false
		})
		$('.c-offers-slider').on('afterChange', function(e, slick, currentSlide){
			console.log(currentSlide)
        	$('.c-offers-slider-nav a').eq( currentSlide ).addClass('active').siblings('a').removeClass('active')
        })

		$('.c-offers-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 20000,
			fade: true,
			cssEase: 'linear',
			responsive: [
			    {
			      breakpoint: 767,
			      settings: {
			        dots: true
			      }
			    }
			]
		})

	    function doAnimations(elements) {
	        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        elements.each(function() {
	            var $this = $(this);
	            var $animationDelay = $this.data('delay');
	            var $animationType = 'animated ' + $this.data('animation');
	            $this.css({
	                'animation-delay': $animationDelay,
	                '-webkit-animation-delay': $animationDelay
	            });
	            $this.addClass($animationType).one(animationEndEvents, function() {
	                $this.removeClass($animationType);
	            })
	        })
	    }

	}

	if ( $('.news-preview-slider').length ) {
		$('.news-preview-slider').slick({
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
			    {
			      breakpoint: 1199,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
					centerMode: true,
					focusOnSelect: true,
					centerPadding: '30px',
			      }
			    }
			]
		})
	}

	if ( $('.slider-staff').length ) {
		$('.slider-staff').slick({
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 4
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			      }
			    }
			]
		})
	}

	if ( $('.slider-reviews').length ) {
		$('.slider-reviews').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			asNavFor: '.slider-reviews-tabs',
			autoplay: true,
			autoplaySpeed: 5000,
		})

		$('.slider-reviews-tabs').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slider-reviews',
			arrows: false,
			centerMode: true,
			focusOnSelect: true,
			centerPadding: '0',
			responsive: [
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			]
		})
	}

	if ( $('.web-casees').length ) {
		$('.web-case-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			asNavFor: '.web-case-slider-tabs',
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [
			    {
			      breakpoint: 767,
			      settings: {
			        arrows: false
			      }
			    }
			]
		})

		$('.web-case-slider-tabs').slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.web-case-slider',
			arrows: false,
			centerMode: true,
			focusOnSelect: true,
			centerPadding: '0',
			responsive: [
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    }
			]
		})
	}

	$('.header-menu-compact-link').on('click', function() {
		$(this).next('.header-menu-compact-body').slideToggle('fast')
		return false
	})

	$(window).scroll(function() {
	    if ( this.pageYOffset > $('.header-topline').height() ) {
	      $('body').addClass('header-toplinefixed')
	    } else {
	      $('body').removeClass('header-toplinefixed')
	    }

	    if ( $(window).width() <= 992 ) {
		    if ( $('.slider-main').length ) {
			    if ( this.pageYOffset >= $('.slider-main').height()/2 ) {
			      $('.mobile-line').slideDown('fast')
			    } else {
			      $('.mobile-line').slideUp('fast')
			    }
		    } else {
			    if ( this.pageYOffset >= $('header').height() ) {
			      $('.mobile-line').slideDown('fast')
			    } else {
			      $('.mobile-line').slideUp('fast')
			    }
		    }
	    }


	}).trigger('scroll')

	$('.list-calculate-tabs a, .vacancies-tabs-nav a').on('click', function() {
		$(this).addClass('active').siblings('a').removeClass('active')
        if($(this).attr('href')=="#vtab-00"){
            $('input[name=form_text_574]').val('Р’РµРґСѓС‰РёР№ СЂР°Р·СЂР°Р±РѕС‚С‡РёРє');
        }
        if($(this).attr('href')=="#vtab-01"){
            $('input[name=form_text_574]').val('РњРµРЅРµРґР¶РµСЂ РїРѕ РїСЂРѕРґР°Р¶Р°Рј');
        }
        if($(this).attr('href')=="#vtab-02"){
            $('input[name=form_text_574]').val('Web-СЂР°Р·СЂР°Р±РѕС‚С‡РёРє');
        }
	})

	$('.list-calculate-title').on('click', function() {
		$(this).parents('.list-calculate-item').toggleClass('active')
		$(this).next('.list-calculate-body').slideToggle('fast')
	})

	$('.list-calculate-tab-mobile').on('click', function() {
		$(this).toggleClass('active')
		$(this).next('.tab-pane').toggleClass('in').toggleClass('active')
		return false
	})

	$('.vacancies-link-mobile').on('click', function() {
		$(this).toggleClass('active');
		$(this).next('.tab-pane').toggleClass('in').toggleClass('active');
		return false
	})
	$('.vacancies-tab .btn-slideup').on('click', function() {
		$(this).parents('.vacancies-tab').removeClass('in').removeClass('active')
		$(this).parents('.vacancies-tab').prev('.vacancies-link-mobile').removeClass('active')
		return false
	})
	$('.list-calculate .btn-slideup').on('click', function() {
		$(this).parents('.tab-pane').removeClass('in').removeClass('active')
		$(this).parents('.tab-pane').prev('.list-calculate-tab-mobile').removeClass('active')
		return false
	})

	$('.btn-scroll').smoothScroll({
		offset: -59
	})

	$('.header-breadcrumbs a').smoothScroll({
		offset: 0,
		scrollTarget: 'header'
	})

	if ( $('input:file').length ) {
		$('input:file').styler()
	}

	if ( $('.compare-bitrix').length ) {
		if ( $(window).width() >= 767 ) {
			$('.compare-bitrix tbody tr:odd').addClass('bgc')
		}
	}

	if ( $('.ratesblock').length ) {

		$('.ratesblock-collumn-ft .ratesblock-collumn-item:odd').addClass('bgc')

		ratesblockheight()
		$(window).on("orientationchange", function() {
			ratesblockheight()
		})
		$(window).resize(function() {
			ratesblockheight()
		})

		$('.ratesblock-mobiletitle').on('click', function() {
			$(this).addClass('click')
			$(this).css({ display: 'none' })
			$(this).nextAll('.ratesblock-collumn-item').addClass('active')
			return false
		})

		// $('.ratesblock-mobiletitle a').on('click', function() {
		// 	return false
		// })

		$('.ratesblock .btn-slideup').on('click', function() {
			$(this).parents('.ratesblock-collumn').find('.ratesblock-mobiletitle').css({ display: 'block' })
			$(this).parents('.ratesblock-collumn').find('.ratesblock-mobiletitle').nextAll('.ratesblock-collumn-item').removeClass('active')
			return false
		})

	}

    $(".phone").mask("+7 (999) 999-99-99",{placeholder:"_"})

    $('.mobile-recallpopup-close').on('click', function() {
    	$(this).parents('.mobile-recallpopup').slideUp('fast')
    	return false
    })
    $('.mobile-popup-recall-close').on('click', function() {
    	$(this).parents('.mobile-popup-recall').slideUp('fast')
    	return false
    })

    $('.mobile-recallpopup-open').on('click', function() {
    	$('.mobile-recallpopup').slideToggle('fast')
    	return false
    })

    $('.open-popup-recall').on('click', function() {
    	$('.mobile-popup-recall').slideToggle('fast')
    	return false
    })

})

function portfolioslidered() {
	if ( $('.portfolio-preview').length ) {
		if ( $(window).width() >= 991 ) {
			$('.portfolio-preview').slick('unslick');

			var $grid_demo_resize = $('#portfolio_container');
			var grid3 = new MasonryHybrid($grid_demo_resize, {col: 4, space: 0});
		} else {
			$('.portfolio-preview-item.hidden').removeClass('hidden');
			$('.portfolio-preview').slick('refresh');
		}
	}
}
function listtrustslidered() {
	if ( $('.list-trust').length ) {
		if ( $(window).width() >= 767 ) {
			$('.list-trust > div').slick('unslick')
		} else {
			$('.list-trust > div').slick('refresh')
		}
	}
}
function ratesblockheight() {

	if ( $(window).width() > 768 ) {

        $('.ratesblock-collumn-item').each(function() {
			var heightfc = $('.ratesblock-collumn-ft > div').eq( $(this).index() ).outerHeight(),
				heighttc = $('.ratesblock-collumn-tt > div').eq( $(this).index() ).outerHeight();

			if ( heightfc >= heighttc ) {
				$(this).css({ height: heightfc })
			} else {
				$(this).css({ height: heighttc })
			}

        })
    }
}

function delactivevacancy() {
	if ( $('.vacancies').length ) {
		if ( $(window).width() <= 768 ) {
			$('.vacancies .active').each(function() {
				$(this).removeClass('active').removeClass('in').addClass('reserve')
			})
		} else {
			$('.vacancies .reserve').each(function() {
				$(this).removeClass('reserve').addClass('in').addClass('active')
			})
		}
	}
}

function delactivecalculate() {
	if ( $('.list-calculate').length ) {
		if ( $(window).width() <= 768 ) {
			$('.list-calculate-item .active').each(function() {
				$(this).removeClass('active').removeClass('in').addClass('reserve')
			})
		} else {
			$('.list-calculate-item .reserve').each(function() {
				$(this).removeClass('reserve').addClass('in').addClass('active')
			})
		}
	}
}
