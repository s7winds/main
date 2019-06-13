function to_pay(sum) {
	switch(sum) {
		case 250:
			var sign = 'f143a088c41b27884aa47b29d1ad06af';
		break;
		case 350:
			var sign = '93867c75d4013480cba043a9cdcdf408';
		break;
		case 500:
			var sign = '287feba8d4cbf1bd847fcec87f3f5c8f';
		break;
		case 600:
			var sign = '66d9b7c5dbadc4118a7c5abde12a4e8f';
		break;
		case 700:
			var sign = '06fd8664383919f9be82c8dfcf03b881';
		break;
		default:
			sum = 0;
	}
	if(sum != 0) {
		location.href = 'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=videodedmorozkoru&OutSum=' + sum + '&Description=Оплата поздравления&SignatureValue=' + sign;
	}
}

$(document).ready(function(){$("a.js-scroll").on("click",function(e){e.preventDefault();var n=$(this).attr("href"),t=$(n).offset().top;$("body,html").animate({scrollTop:t},1500)}),$(".js-form-submit").submit(function(e){ var sum = $(this).data('sum'); if(e.preventDefault(),""==$(this).find("[name=phone]").val())return void alert('Пожалуйста заполните поле "Номер телефона"!');if(""==$(this).find("[name=who]").val())return void alert('Пожалуйста заполните поле "Кого поздравляем"');if(""==$(this).find("[name=gender]").val())return void alert('Пожалуйста заполните поле "Пол ребенка"');if(""==$(this).find("[name=number]").val())return void alert('Пожалуйста заполните поле "Количество детей"');if(""==$(this).find("[name=file]").val())return void alert("Пожалуйста загрузите фотографию ребенка");if(!$(this).find("[name=agreement]").prop("checked"))return void alert("Пожалуйста примите пользовательское соглашение");var n=new FormData($(this)[0]);return $.ajax({type:"POST",url:"mail.php",processData:!1,contentType:!1,data:n}).done(function(){$.fancybox($("#modal-thanks"),{padding:0,fitToView:!1}),to_pay(sum),setTimeout(function(){$.fancybox.close()},5e3)}),!1}),$(".js-form-submit-bottom").submit(function(e){return e.preventDefault(),""==$(this).find("[name=phone]").val()?void alert('Пожалуйста заполните поле "Номер телефона"!'):($.ajax({type:"POST",url:"mail.php",data:$(this).serialize()}).done(function(){$.fancybox($("#modal-thanks"),{padding:0,fitToView:!1}),setTimeout(function(){$.fancybox.close()},5e3)}),!1)}),$(".b-js-timer").countdown("11/26/2015 12:00",function(e){$(this).html(e.strftime('<span class="b-js-timer__numb b-js-timer__numb--days">%D</span><span class="b-js-timer__numb b-js-timer__numb--hours">%H</span><span class="b-js-timer__numb b-js-timer__numb--minutes">%M</span><span class="b-js-timer__numb b-js-timer__numb--seconds">%S</span>'))});var e=(window.File&&window.FileReader&&window.FileList&&window.Blob?!0:!1,$(".js-input_file"));e.change(function(){var e,n=$(this).next(".js-file_label");return e=this.value.replace(/\\/g,"http://webunicom.ru/").replace(/.*\//,""),e.length?void n.text(e):void n.text("Загрузить фото ребенка")}).change(),$(".fancybox").fancybox({padding:0,fitToView:!0})});
