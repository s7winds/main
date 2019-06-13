$(document).ready(function(){


	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		// items : 5,
		// itemsDesktop : [1500,4],
		// itemsDesktopSmall : [1400,3],

		pagination: false,
		responsive: true,
		autoPlay: 5000

	});
	// owl.on("mousewheel", ".owl-wrapper", function (e) {
	// 	if (e.deltaY > 0) {
	// 		owl.trigger("owl.prev");
	// 	} else {
	// 		owl.trigger("owl.next");
	// 	}
	// 	e.preventDefault();
	// });





   /*Ресайз окна*/
   var windH = $(window).height();

   var windW = $(window).width();
   if(windH>645&&windW>1200){
   	$('.sect1').css('height', windH+'px');
   	// $('.sect2').css('height', windH+'px');
   	// $('.sect3').css('height', windH+'px');
   	// $('.sect4').css('height', windH+'px');
   	// $('.sect5').css('height', windH+'px');
   	// $('.sect6').css('height', windH+'px');
   	// $('.sect7').css('height', windH+'px');
   	// $('.sect8').css('height', windH+'px');
   	// $('.sect9').css('height', windH+'px');
   	// $('.sect10').css('height', windH+'px');
   }
   else{
   	$('.sect1').css('height', 'auto');
   	// $('.sect2').css('height', 'auto');
   	// $('.sect3').css('height', 'auto');
   	// $('.sect4').css('height', 'auto');
   	// $('.sect5').css('height', 'auto');
   	// $('.sect6').css('height', 'auto');
   	// $('.sect7').css('height', 'auto');
   	// $('.sect8').css('height', 'auto');
   	// $('.sect9').css('height', 'auto');
   	// $('.sect10').css('height', 'auto');
   }



   $(window).resize(function(){
   	windH = $(window).height();
   	windW = $(window).width();

		//alert(windH);
		if(windH>645&&windW>1200){
			$('.sect1').css('height', windH+'px');
			// $('.sect2').css('height', windH+'px');
			// $('.sect3').css('height', windH+'px');
			// $('.sect4').css('height', windH+'px');
			// $('.sect5').css('height', windH+'px');
			// $('.sect6').css('height', windH+'px');
			// $('.sect7').css('height', windH+'px');
			// $('.sect8').css('height', windH+'px');
			// $('.sect9').css('height', windH+'px');
			// $('.sect10').css('height', windH+'px');
		}
		else{
			$('.sect1').css('height', 'auto');
			// $('.sect2').css('height', 'auto');
			// $('.sect3').css('height', 'auto');
			// $('.sect4').css('height', 'auto');
			// $('.sect5').css('height', 'auto');
			// $('.sect6').css('height', 'auto');
			// $('.sect7').css('height', 'auto');
			// $('.sect8').css('height', 'auto');
			// $('.sect9').css('height', 'auto');
			// $('.sect10').css('height', 'auto');
		}
	});

   if(navigator.userAgent.toLowerCase().indexOf('chrome') >= 0){
   	$(window).load(function(){
   		$('input:-webkit-autofill').each(function(){
   			$(this).after(this.outerHTML).remove();
   			$('input[name='+$(this).attr('name')+']').val($(this).val());
   		});
   	});
   }

   /*Смена hedera в зависимости от секции*/

   // function MyDeleteClass( el){
   // 	if($(document).scrollTop()>=$(el).offset().top &&  $(document).scrollTop()<=$(el).offset().top+$(el).outerHeight()-$('header').outerHeight()){
   // 		if($('header').hasClass('white-v'))
   // 			$('header').removeClass('white-v');
   // 	}

   // }
   // function MyAddClass( el){
   // 	if($(document).scrollTop()>=$(el).offset().top &&  $(document).scrollTop()<=$(el).offset().top+$(el).outerHeight()-$('header').outerHeight()){
   // 		if(!$('header').hasClass('white-v'))
   // 			$('header').addClass('white-v');
   // 	}

   // }



   var firstBlood = true;
   $(window).scroll(function(){
   	// MyDeleteClass('.sect1');
   	// MyAddClass('.sect2');
   	// MyDeleteClass('.sect3');
   	// MyAddClass('.sect4');
   	// MyDeleteClass('.sect5');
   	// MyAddClass('.sect6');
   	// MyDeleteClass('.sect7');
   	// MyAddClass('.sect8');
   	// MyDeleteClass('.sect9');
   	// MyAddClass('.sect10');

   	/*Заполнение блоков с ценниками*/
   	var el = '.sect6';
   	if(firstBlood){
   		if($(document).scrollTop()>=$(el).offset().top &&  $(document).scrollTop()<=$(el).offset().top+$(el).outerHeight()-$('header').outerHeight()){
   			firstBlood=false;
   			$('.gray-row:nth-of-type(2) .green-line').css('width', '25.1%');
   			$('.gray-row:nth-of-type(3) .green-line').css('width', '33.8%');
   			$('.gray-row:nth-of-type(4) .green-line').css('width', '45.7%');
   			$('.gray-row:nth-of-type(5) .green-line').css('width', '57.1%');
   			$('.gray-row:nth-of-type(6) .green-line').css('width', '68.6%');
   			$('.gray-row:nth-of-type(7) .green-line').css('width', '76.8%');
   			/*blue line*/
   			$('.gray-row:nth-of-type(3) .blue-line').css('width', '25%');
   			$('.gray-row:nth-of-type(4) .blue-line').css('width', '35%');
   			$('.gray-row:nth-of-type(5) .blue-line').css('width', '50%');
   			$('.gray-row:nth-of-type(6) .blue-line').css('width', '80%');
   			$('.gray-row:nth-of-type(7) .blue-line').css('width', '90%');
   		}
   	}



   });


/*плавный скролл меню по блокам*/
$('a[href^="#"]:not(a[href^="#modal-form"]):not(a[href^="#callback"])').click(function(){
        var idscroll = $(this).attr('href');//получаем значение атрибута href
        $.scrollTo(idscroll, 1000);// перематываем до блока(1000 - это длительность 1 сек.)


        return false;
    });



//alert($(document).scrollTop())



$('.pirog').click(function(){
	if($('.menu-popup').css('left')=='-350px'){
		$('.menu-popup').css('left', '0');
		$('.zaten-ekran').css('display', 'block');
	}
	else{
		$('.menu-popup').css('left', '-350px');
		$('.zaten-ekran').css('display', 'none');
	}
});
$('.zaten-ekran').click(function(){
	if($('.menu-popup').css('left')=='-350px'){
		$('.menu-popup').css('left', '0');
		$('.zaten-ekran').css('display', 'block');
	}
	else{
		$('.menu-popup').css('left', '-350px');
		$('.zaten-ekran').css('display', 'none');
	}
});



/*Модальное окно*/
$(".Myfancybox").fancybox({
	padding : 0,
	fitToView   : false,
	scrolling: "hidden",
	helpers: {
		overlay: {
			locked: false
		}
	}
});


	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback1").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#callback1").serialize()
		}).done(function() {
			//alert("Спасибо за заявку!");
			$('#foo').click();
			setTimeout(function() {
				$.fancybox.close();
			}, 3000);
		});
		return false;
	});
	$("#callback2").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#callback2").serialize()
		}).done(function() {
			//alert("Спасибо за заявку!");
			$('#foo').click();
			setTimeout(function() {
				$.fancybox.close();
			}, 3000);
		});
		return false;
	});
	$("#callback3").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#callback3").serialize()
		}).done(function() {
			//alert("Спасибо за заявку!");
			$('#foo').click();
			setTimeout(function() {
				$.fancybox.close();
			}, 3000);
		});
		return false;
	});




});
