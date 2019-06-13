$(document).ready(function(){

	/*задержка перед появлением элементов по порядку, в милисекундах*/
	var delayBeforeShow = 170;
	/*
		Структура включения в HTML:
		<div id="sectorId"> позволяет разделить блоки с анимациями
			<div class="anim animationСlass"> - ставится где угодно но вместе.
				**	anim - говорит что это анимация
				**	animationСlass - название анимации. Придумать самим
			</div>
		</div>

		http://daneden.github.io/animate.css/ - примеры анимаций
	*/
	/*Селектор. Название придумываем сами
	С анимацией связывается по структуре
	см. Выше*/
	var sectorId = [
		"#ex1",
		"#ex2",
		"#ex3",
		"#ex4",
		"#ex5",
		"#ex6"
		];

	/*Номер названия соответствует номеру анимации*/
	/*Название анимации для сайта. Название придумываем сами*/
	animationСlass = [
		'ani1fIn',
		'ani2fIn',
		'ani6fIn',
		'slInLeft',
		'slInRight'
		];
	/*анимация из файла animate.css. Находим и пишем сюда*/
	animationCss = [
		'animated fadeIn',
		'animated2 fadeIn',
		'animated6 fadeIn',
		'animated slideInLeft',
		'animated slideInRight'
		];

	var sectorArray = [];
	var timeoutArray = [];

	var h = $(window).height();
 	for (var i = 0; i < sectorId.length; i++) {
		$(sectorId[i]+" .anim").css({visibility:"hidden"});
		if ( hasSelector(sectorId[i]) && h >= $(sectorId[i]).offset().top) {
			selectAnimation(sectorId[i]);
		}
	}

	//Работа с элементами при скролле страницы
	$(window).scroll(function(){
		var h = $(window).height();

		//Делаем выборку анмации если блок находится в зоне вилимости на экране по высоте
		for (var i = 0; i < sectorId.length; i++) {
			if ( hasSelector(sectorId[i]) && ($(this).scrollTop()+h) >= $(sectorId[i]).offset().top) {
				selectAnimation(sectorId[i]);
			}
			else
			{
				if ( hasSelector(sectorId[i]))
				{
					if (sectorArray.indexOf(sectorId[i]) > -1)
					{
						sectorArray[sectorArray.indexOf(sectorId[i])] = "";
					}
					defaultSelectorState();
				}
			}
		}

		//Если мы подняли наверх страницы, приготовить анимации заново
		if ( $(this).scrollTop() == 0 ) {
			clearAllTimeout();
		}
	});

	function defaultSelectorState(){
		var h = $(window).height();
		//устанавливаем перенную для цикла .each
		var str = '';
		for (var j = 1; j < sectorId.length; j++) {
			if ( hasSelector(sectorId[j]) && $(this).scrollTop()+h < $(sectorId[j]).offset().top) {
				str += String(sectorId[j]+" .anim, ");
			}
		}
		str = str.slice(0, -2);

		$(str).each(function(){
			//Проверяем наличие Селектора и класса анимации у селектора
			var check = false;
			for (var k = 0; k < animationСlass.length; k++)
			{
				if($(this).hasClass(animationСlass[k]))
				{
					check = true;
					break;
				}
			}
			//Если TRUE обнулить анимации
			if ( check ) {
				for (var i = 0; i < animationСlass.length; i++)
				{
					if ( $(this).hasClass(animationСlass[i])) { $(this).removeClass().addClass('anim '+animationСlass[i]); }
				}
				$(this).css({visibility:"hidden"});
			}
		});
	}

	function clearAllTimeout()
	{
		for (var i = 0 ; i < timeoutArray.length ; i++) {
			clearTimeout(timeoutArray[i]);
		}
		sectorArray = [];
		timeoutArray = [];
	}
	//Выбор анимации
	function selectAnimation(obj)
	{
		for (var i = 0; i < animationСlass.length; i++)
		{
			if (animationСlass[i] && animationCss[i])
			{
				createAnim(obj, animationСlass[i], animationCss[i]);
			}
		}
		if (sectorArray.indexOf(obj) > -1)
			return false;
		sectorArray.push(obj);
	}

	//Создfние анимации
	function createAnim(obj, name, ani){
		if($(obj+" .anim").hasClass(name))
		{
			if (sectorArray.indexOf(obj) > -1)
				return false;
			//sectorArray.push(obj);
			for (var i = 0; i < $(obj+" ."+name).length; i++)
			{
				timeoutArray.push(setTimeout(showAnimation, delayBeforeShow*i, obj, name, i, ani));
			}
		}
	}
	function showAnimation(obj, name, i, ani)
	{
		$(obj+" ."+name).eq( i ).css({visibility:"visible"});
		$(obj+" ."+name).eq( i ).addClass(ani);
	}

	/**Проверка налия БЛОКА с анимациями*/
	function hasSelector(val){
		return $(val).length > 0;
	}
});
