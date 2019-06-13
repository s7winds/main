(function($){
    $(document).ready(function(){
		var clc_per = 0.25, clc_rub = 151, clc_year = 2.7;

        $('#slider1').slider({
            range: "min",
            value: clc_rub,
            min: 8,
            max: 300,
            step: 1,
            slide: function(event, ui){
                clc_rub = ui.value;
                $('#range-res1 span:eq(1)').text(ui.value+' млн');
                clc();
            },
            create: function(event, ui){
                $(this).find('.ui-slider-handle').append('<div class="slider-arrow"></div>');
            }
        });

        $('#slider2').slider({
            range: "min",
            value: clc_year,
            min: 0.5,
            max: 5,
            step: 0.1,
            slide: function(event, ui){
                clc_year = ui.value;
                $('#range-res2 span:eq(1)').text(ui.value+' '+yearStr(ui.value));
                clc();
            },
            create: function(event, ui){
                $(this).find('.ui-slider-handle').append('<div class="slider-arrow"></div>');
            }
        });

        $('#range-res1 span:eq(1)').text(clc_rub+' млн');
        $('#range-res2 span:eq(1)').text(clc_year+' '+yearStr(clc_year));
        clc();

        function clc(){
            var sum = (clc_per * (clc_rub * 1000000)) * clc_year;
            $('#clc-sum').text(number_format(sum, 0, '.', ' '));
        }

        function yearStr(val){
            var res = 'года';
            val = Number(val);

            if(val < 1){
                res = 'лет';
            }
            else if(val == 1){
                res = 'год';
            }
            else if(val >= 5){
                res = 'лет';
            }

            return res;
        }
	});
})(jQuery);

function number_format (number, decimals, decPoint, thousandsSep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
  var n = !isFinite(+number) ? 0 : +number
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
  var dec = (typeof decPoint === 'undefined') ? '.' : decPoint
  var s = ''

  var toFixedFix = function (n, prec) {
    var k = Math.pow(10, prec)
    return '' + (Math.round(n * k) / k)
      .toFixed(prec)
  }

  // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }

  return s.join(dec)
}
