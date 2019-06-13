$(document).ready(function() {
	new WOW().init();

	$('.js-fancybox').fancybox({
		padding: 0,
		fitToView: false,
		helpers: {
			overlay: {
				locked: false // отключаем блокировку overlay
			}
		}
	});


	var
	headerOffset = '0',
	headerEl = $('#js-header'),
	activeClass = 'scrolled';
	$(window).scroll(function() {
		if( $(window).scrollTop() > headerOffset )
			headerEl.addClass(activeClass);
		else
			headerEl.removeClass(activeClass);
	});

	$(".js-form-callback").submit(function(e) {
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
			}, 5000);
		});
		return false;
	});


	function formatStr(str) {
	    str = str.replace(/(\.(.*))/g, '');
	    var arr = str.split('');
	    var str_temp = '';
	    if (str.length > 3) {
	        for (var i = arr.length - 1, j = 1; i >= 0; i--, j++) {
	            str_temp = arr[i] + str_temp;
	            if (j % 3 == 0) {
	                str_temp = ' ' + str_temp;
	            }
	        }
	        return str_temp;
	    } else {
	        return str;
	    }
	}


	if ($('.requestsWrapper').length > 0) {
	        var even = 0;

	        function getNumberOfReviews() {
	            var number = new Date();
	            number = number.getTime();
	            number = Math.round((number % 1000000000) / 1000);
	            number = number.toString().substr(-3);
	            return number;
	        }

	        function getRowOfReviews(autos, regions, number) {

	            var autos_id = Math.floor(Math.random() * (autos.length));
	            var regions_id = Math.floor(Math.random() * (regions.length));
	            if (even === 1) {
	                var row = '<tr class="even">';
	                even = 0;
	            } else {
	                var row = '<tr>';
	                even = 1;
	            }
	            row += '<td>' + formatStr(autos[autos_id]['price']) + ' руб.</td>';
	            row += '<td>' + autos[autos_id]['year'] + '</td>';
	            row += '<td>' + autos[autos_id]['name'] + '</td>';
	            row += '<td class="last">' + regions[regions_id] + '</td>';
	            row += '</tr>';
	            return row;
	        }

	        function getRowOfResolutions(autos, regions, number) {
	            var autos_id = Math.floor(Math.random() * (autos.length));
	            var regions_id = Math.floor(Math.random() * (regions.length));
	            var status = ['accepted', 'refused'];
	            var status_text = [
	                'Грубое общение с банком',
	                'Приобретение автомобиля для продажи',
	                'Отсутствует стационарный телефон в анкете',
	                'Паспорт недействителен',
	                'Отсутствует второй документ',
	                'Отказ по базам БКИ (бюро кредитной истории)',
	                'Отказ по базам СБ (службы безопасноти)',
	                'Неподтверждение трудоустройства в организации',
	                'Отказ супруга(и) на оформление кредита',
	                'Отказ по программе скоринг',
	                'Судимость',
	                'Большое кол-во штрафов по ФССП',
	                'Предоставление заведомо ложных сведений',
	                'Недостаточных доход для обслуживания кредита',
	                'Дети до 1-го года (декрет)',
	                'Непрезентабельная внешность',
	                'Негативные данные о работодателе Заёмщика',
	                'Возраст заёмщика от 21 до 65 лет',
	                'Заёмщик не гражданин РФ'
	            ];
	            var status_id = Math.floor(Math.random() * (100 + 1));
	            if (status_id <= 50) {
	                status_id = 0;
	                var status_text = 'Подтверждено';
	                var row = '<tr class="' + status[status_id] + '">';
	            } else {
	                status_id = 1;
	                var status_text_id = Math.floor(Math.random() * (status_text.length));
	                var status_text = status_text[status_text_id];
	                var row = '<tr class="' + status[status_id] + '">';
	            }
	            row += '<td>' + formatStr(autos[autos_id]['price']) + ' руб.</td>';
	            row += '<td>' + autos[autos_id]['name'] + '</td>';
	            row += '<td class="last">' + status_text + '</td>';
	            row += '</tr>';
	            return row;
	        }

	        var autos = [
	            {name: 'Audi A6', year: '2004', price: '365000'},
	            {name: 'Audi A6', year: '2009', price: '605000'},
	            {name: 'Chery Tiggo (T11', year: '2012', price: '325000'},
	            {name: 'Chevrolet Cobalt', year: '2013', price: ' 395000'},
	            {name: 'Daewoo Gentra', year: '2014', price: '400000'},
	            {name: 'Datsun on-DO', year: '2014', price: '385000'},
	            {name: 'Ford C-Max', year: '2007', price: '320000'},
	            {name: 'Ford Escape', year: '2009', price: '599000'},
	            {name: 'Ford Focus', year: '2014', price: '495000'},
	            {name: 'Ford Mondeo', year: '2009', price: '500000'},
	            {name: 'Geely MK Cross', year: '2013', price: '365000'},
	            {name: 'Great Wall Hover H3', year: '2014', price: '650000'},
	            {name: 'Great Wall Hover H5', year: '2014', price: '597000'},
	            {name: 'Honda Civic', year: '2009', price: '424000'},
	            {name: 'Hyundai Elantra', year: '2014', price: '725000'},
	            {name: 'Hyundai Solaris', year: '2014', price: '445000'},
	            {name: 'Hyundai Sonata', year: '2008', price: '265000'},
	            {name: 'Hyundai Starex (H-1)', year: '2010', price: '645000'},
	            {name: 'Kia CEE\'D', year: '2010', price: '385000'},
	            {name: 'Kia CEE\'D', year: '2015', price: '630000'},
	            {name: 'Kia Cerato', year: '2011', price: '450000'},
	            {name: 'Kia Rio', year: '2014', price: '525000'},
	            {name: 'Lifan X60', year: '2014', price: '495000'},
	            {name: 'Mazda 3', year: '2010', price: '485000'},
	            {name: 'Mazda CX-7', year: '2010', price: '587000'},
	            {name: 'Nissan Almera', year: '2014', price: '460000'},
	            {name: 'Nissan Almera Classic', year: '2011', price: '323000'},
	            {name: 'Nissan Tiida', year: '2012', price: '385000'},
	            {name: 'Opel Astra', year: '2013', price: '384000'},
	            {name: 'Opel Vectra', year: '2008', price: '335000'},
	            {name: 'Peugeot 307', year: '2008', price: '270000'},
	            {name: 'Renault Duster', year: '2014', price: '555000'},
	            {name: 'Skoda Octavia', year: '2010', price: '360000'},
	            {name: 'Toyota Camry', year: '2008', price: '580000'},
	            {name: 'Volkswagen Caravelle', year: '2009', price: '895000'},
	            {name: 'Volkswagen Passat', year: '2008', price: '425000'},
	            {name: 'Volkswagen Polo', year: '2014', price: '426000'},
	            {name: 'Lada Granta', year: '2014', price: '261000'},
	            {name: 'Lada Priora', year: '2015', price: '415000'}];
	        var regions = [
	            'Московская область',
	            'Москва',
	            'Тульская область',
	            'Краснодарский край',
	            'Ростовская область',
	            'Нижегородская область',
	            'Воронежская область',
	            'Волгоградская область',
	            'Саратовская область',
	            'Калужская область',
	            'Рязанская область',
	            'Ставропольский край',
	            'Владимирская область',
	            'Тверская область',
	            'Башкортостан',
	            'Красноярский край',
	            'Челябинская область',
	            'Брянская область',
	            'Курская область',
	            'Белгородская область',
	            'Смоленская область',
	            'Ханты-Мансийский автономный округ',
	            'Свердловская область',
	            'Татарстан',
	            'Ивановская область',
	            'Ярославская область',
	            'Кемеровская область',
	            'Самарская область'
	        ];

	        var html = '';
	        var numberReviews = getNumberOfReviews();
	        for (var i = 0; i < 6; i++) {
	            var row = getRowOfReviews(autos, regions, numberReviews++);
	            html = row + html;
	        }
	        $('.review tbody').html(html);

	        setInterval(function () {
	            var row = getRowOfReviews(autos, regions, ++numberReviews);
	            $('.review tbody').prepend(row);
	            $('.review tbody tr:first').slideDown(300);
	            $('.review tbody tr:last').fadeOut(200).remove();
	        }, 2500);

	        var html = '';
	        var numberResolutions = getNumberOfReviews();
	        if (numberResolutions > 200) {
	            numberResolutions = parseInt(numberResolutions) - 123;
	        } else {
	            numberResolutions = parseInt(numberResolutions) + 123;
	        }
	        for (var i = 0; i < 6; i++) {
	            var row = getRowOfResolutions(autos, regions, numberResolutions++);
	            html = row + html;
	        }
	        $('.resolution tbody').html(html);

	        setInterval(function () {
	            var row = getRowOfResolutions(autos, regions, ++numberResolutions);
	            $('.resolution tbody').prepend(row);
	            $('.resolution tbody tr:first').slideDown(300);
	            $('.resolution tbody tr:last').fadeOut(200).remove();
	        }, 3500);
	    }

});
