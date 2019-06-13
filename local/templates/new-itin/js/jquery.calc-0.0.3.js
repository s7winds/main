/**
 * Created by Aleksandr Terentev <alvteren@gmail.com> on 25.09.15.
 */
;
(function ($) {
    var methods = {
        init: function (options) {
            var options = $.extend({}, {
                itemSelector: '.list-calculate-lisysettings-item',
                totalSelector: '.list-calculate-item-price-top.price.sum .value',
                totalDiscountSelector: '.list-calculate-item-price-bottom .price.discount'
            }, options);

            return this.each(function (i) {

                var $this = $(this);
                var items = $this.find(options.itemSelector);

                if (items.length <= 0) {
                    return this;
                }
                var initOptions = $this.data('initOptions');
                if (initOptions) {

                }
                else {
                    var thisOptions = {};
                    thisOptions.options = options;
                    thisOptions.items = items;
                    thisOptions.wrapObj = $this;
                    $this.data('initOptions', thisOptions);
                    initOptions = $this.data('initOptions');
                }
                $this.calc('calculated');
                items.on('click', function (event) {
                    /*CHANGES FROM 17.04.2017*/
                    if ($(this).hasClass("item-disabled")) {
                        event.preventDefault();
                    } else {

                        if ($(this).hasClass("active")) {
                            if ($(this).attr("data-item-type") == "product") {  //РїСЂРѕРІРµСЂСЏРµРј, СЏРІР»СЏРµС‚СЃСЏ Р»Рё С‚РѕРІР°СЂ РєРѕСЂРѕР±РѕС‡РЅС‹Рј РїСЂРѕРґСѓРєС‚РѕРј
                                $('#bitrix24 .list-calculate-lisysettings-item[data-item-type="product"]').not(this).removeClass("item-disabled");
                            }
                        } else {
                            if ($(this).attr("data-item-type") == "product") {
                                $('#bitrix24 .list-calculate-lisysettings-item[data-item-type="product"]').not(this).addClass("item-disabled");
                            }
                        }
                        /*END CHANGES*/

                        if ($(this).attr("data-id") == "25259") {
                            if ($(this).hasClass("active")) {
                                $("#bitrix24 .list-calculate-lisysettings-item").each(function () {
                                    if ($(this).attr("data-id") == "25441" || $(this).attr("data-id") == "25444") {
                                        $(this).attr("data-price", $(this).attr("data-price-old"));
                                        $(this).find("span.value").text($(this).attr("data-price-old"));
                                        if ($(this).attr("data-autoselect") == "1" && $(this).hasClass("active")) { // РµСЃР»Рё С‚РѕРІР°СЂ Р±С‹Р» РІС‹РґРµР»РµРЅ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё Рё Р°РєС‚РёРІРµРЅ - РґРµР°РєС‚РёРІРёСЂСѓРµРј РµРіРѕ
                                            $(this).attr("data-autoselect", "0"); // СЃРЅРёРјРµРј С„Р»Р°Рі Р°РІС‚РѕРІС‹РґРµР»РµРЅРёСЏ
                                            $(this).click();//РґРµР°РєС‚РёРІРёСЂСѓРµРј
                                        }
                                    }
                                });
                            }
                            else {
                                $("#bitrix24 .list-calculate-lisysettings-item").each(function () {
                                    if ($(this).attr("data-id") == "25441" || $(this).attr("data-id") == "25444") {
                                        $(this).attr("data-price-old", $(this).attr("data-price"));
                                        $(this).attr("data-price", "0");
                                        $(this).find("span.value").text("0");
                                        if (!$(this).hasClass("active")) {
                                            $(this).attr("data-autoselect", "1"); // РґРѕР±Р°РІРёРј РїР°СЂР°РјРµСЂС‚ С‡С‚Рѕ Р±Р»РѕРє Р±С‹Р» РІС‹РґРµР»РµРЅ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё
                                            $(this).click();//РµСЃР»Рё РЅРµР±С‹Р»Рѕ Р°РєС‚РёРІРЅРѕ - Р°РєС‚РёРІРёСЂСѓРµРј
                                        }
                                    }
                                });
                            }

                        }

                        /*CHANGES FROM 17.04.2017*/
                        /*ADD NEW ITEMS TO CALC*/
                        else if ($(this).attr("data-id") == "25264" || $(this).attr("data-id") == "26597" || $(this).attr("data-id") == "26596") {
                            if ($(this).hasClass("active")) {
                                $("#bitrix24 .list-calculate-lisysettings-item").each(function () {
                                    if ($(this).attr("data-id") == "25441" || $(this).attr("data-id") == "25444") {
                                        $(this).attr("data-price", $(this).attr("data-price-old"));
                                        $(this).find("span.value").text($(this).attr("data-price-old"));
                                        if ($(this).attr("data-autoselect") == "1" && $(this).hasClass("active")) { // РµСЃР»Рё С‚РѕРІР°СЂ Р±С‹Р» РІС‹РґРµР»РµРЅ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё Рё Р°РєС‚РёРІРµРЅ - РґРµР°РєС‚РёРІРёСЂСѓРµРј РµРіРѕ
                                            $(this).attr("data-autoselect", "0"); // СЃРЅРёРјРµРј РІР»Р°Рі Р°РІС‚РѕРІС‹РґРµР»РµРЅРёСЏ
                                            $(this).click();//РґРµР°РєС‚РёРІРёСЂСѓРµРј
                                        }
                                    }
                                });
                            }
                            else {
                                $("#bitrix24 .list-calculate-lisysettings-item").each(function () {
                                    if ($(this).attr("data-id") == "25441" || $(this).attr("data-id") == "25444") {
                                        $(this).attr("data-price-old", $(this).attr("data-price"));
                                        $(this).attr("data-price", "0");
                                        $(this).find("span.value").text("0");
                                        if (!$(this).hasClass("active")) {
                                            $(this).attr("data-autoselect", "1"); // РґРѕР±Р°РІРёРј РїР°СЂР°РјРµСЂС‚ С‡С‚Рѕ Р±Р»РѕРє Р±С‹Р» РІС‹РґРµР»РµРЅ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё
                                            $(this).click();//РµСЃР»Рё РЅРµР±С‹Р»Рѕ Р°РєС‚РёРІРЅРѕ - Р°РєС‚РёРІРёСЂСѓРµРј
                                        }
                                    }
                                });
                            }

                        }


                        else if ($(this).attr("data-id") == "26593" || $(this).attr("data-id") == "26594" || $(this).attr("data-id") == "26595") {
                            if ($(this).hasClass("active")) {
                                $("#bitrix24 .list-calculate-lisysettings-item").each(function () {
                                    if ($(this).attr("data-id") == "25441" || $(this).attr("data-id") == "25444") {
                                        $(this).attr("data-price", $(this).attr("data-price-old"));
                                        $(this).find("span.value").text($(this).attr("data-price-old"));
                                        if ($(this).attr("data-autoselect") == "1" && $(this).hasClass("active")) { // РµСЃР»Рё С‚РѕРІР°СЂ Р±С‹Р» РІС‹РґРµР»РµРЅ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё Рё Р°РєС‚РёРІРµРЅ - РґРµР°РєС‚РёРІРёСЂСѓРµРј РµРіРѕ
                                            $(this).attr("data-autoselect", "0"); // СЃРЅРёРјРµРј РІР»Р°Рі Р°РІС‚РѕРІС‹РґРµР»РµРЅРёСЏ
                                            $(this).click();//РґРµР°РєС‚РёРІРёСЂСѓРµРј
                                        }
                                    }
                                });
                            }
                            else {
                                $("#bitrix24 .list-calculate-lisysettings-item").each(function () {
                                    if ($(this).attr("data-id") == "25441" || $(this).attr("data-id") == "25444") {
                                        $(this).attr("data-price-old", $(this).attr("data-price"));
                                        /*$(this).attr("data-price","0");
                                         $(this).find("span.value").text("0");*/
                                        if (!$(this).hasClass("active")) {
                                            $(this).attr("data-autoselect", "1"); // РґРѕР±Р°РІРёРј РїР°СЂР°РјРµСЂС‚ С‡С‚Рѕ Р±Р»РѕРє Р±С‹Р» РІС‹РґРµР»РµРЅ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё
                                            $(this).click();//РµСЃР»Рё РЅРµР±С‹Р»Рѕ Р°РєС‚РёРІРЅРѕ - Р°РєС‚РёРІРёСЂСѓРµРј
                                        }
                                    }
                                });
                            }

                        }
                        event.preventDefault();
                        $this.calc('toggleItem', $(this));
                    }

                    /*END CHANGES*/

                });
                $this.on('tabs.alv.afterActiveTab', $this.calc('generateDescription'));
                $this.on('tabs.alv.afterActiveTabContent', $this.calc('generateDescription'));
            });
        },
        toggleItem: function (item) {
            if (item.is('.radio') && !item.is('.active')) {
                var radio = item.parents('.flex').find('.radio.active');
                if (radio.length > 0) {
                    radio.removeClass('active');
                }
            }
            item.toggleClass('active');

            var initOptions = this.data('initOptions');

            if (initOptions) {
                var $this = initOptions.wrapObj;

                $this.calc('calculated');
            }

            return this;
        },
        calculated: function () {
            var data = {};
            var initOptions = this.data('initOptions');
            data.initOptions = initOptions;

            if (initOptions) {
                var $this = initOptions.wrapObj;
                var items = initOptions.items;
                var itemsActive = items.parent().find('.active');
                var bDiscount = false;
                var sum = 0;
                var discountSum = 0;
                data.section = $this.data();
                data.items = [];
                if (itemsActive.length > 0) {
                    var itemsWithDiscount = itemsActive.parent().find('.active[data-discount-percent]');
                    bDiscount = itemsWithDiscount.length > 1;
                    itemsActive.each(
                        function (index) {
                            var dataItem = $(this).data();
                            //var price = dataItem.price;
                            var price = $(this).attr("data-price"); // РєРѕСЃС‚С‹Р»СЊ, С‡С‚Рѕ Р±С‹ РµСЃР»Рё РјС‹ js -РѕРј РјРµРЅСЏРµРј С†РµРЅСѓ РЅР° СЃС‚СЂР°РЅРёС†Рµ Рё Р·Р°С‚РµРј РґРѕР±Р°РІР»СЏРµРј С‚РѕРІР°СЂ, Р±СЂР°Р»Р°СЃСЊ Р°РґРµРєРІР°С‚РЅР°СЏ С†РµРЅР°
                            if (bDiscount && parseInt(dataItem.discountPercent) > 0) {
                                var discount = price * parseInt(dataItem.discountPercent) / 100;
                                price -= discount;
                                discountSum += discount;
                            }
                            dataItem.priceWithDiscount = parseInt(price);

                            sum += parseInt(price);

                            data.items[index] = dataItem;
                        }
                    );
                }
            }
            data.sum = sum;
            if($('#bitrix24 .col-sm-3 .list-calculate-lisysettings-item.active').first().attr('data-id') == "26597" || $('#bitrix24 .col-sm-3 .list-calculate-lisysettings-item.active').first().attr('data-id') == "26596" || $('#bitrix24 .col-sm-3 .list-calculate-lisysettings-item.active').first().attr('data-id') == "25264" ){
                data.discountSum = discountSum + 25200;
            } else {
                data.discountSum = discountSum;
            }
            $this.data(data);
            $(document).trigger('calc.alv.changeItem', data);
            $this.calc('printSum', sum);
            if($('.list-calculate-lisysettings.row .col-sm-2 .list-calculate-lisysettings-item.active').first().attr('data-id') == "26597" || $('.list-calculate-lisysettings.row .col-sm-2 .list-calculate-lisysettings-item.active').first().attr('data-id') == "26596" || $('.list-calculate-lisysettings.row .col-sm-2 .list-calculate-lisysettings-item.active').first().attr('data-id') == "25264" ){
                $this.calc('printDiscount', 25200+discountSum);
            } else {
                $this.calc('printDiscount', discountSum);
            }
            return sum;
        },
        printSum: function (sum) {
            sum = this.calc('number_format', sum, 0, '.', ' ');
            var initOptions = this.data('initOptions');
            this.find(initOptions.options.totalSelector).html(sum + ' Р ');

            return sum;
        },
        printDiscount: function (sum) {
            sum = this.calc('number_format', sum, 0, '.', ' ');
            var initOptions = this.data('initOptions');
            this.find(initOptions.options.totalDiscountSelector).html(sum + ' Р ');

            return sum;
        },
        number_format: function (number, decimals, dec_point, thousands_sep) {
            number = (number + '')
                .replace(/[^0-9+\-Ee.]/g, '');
            var n = !isFinite(+number) ? 0 : +number,
                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
                sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
                dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
                s = '',
                toFixedFix = function (n, prec) {
                    var k = Math.pow(10, prec);
                    return '' + (Math.round(n * k) / k)
                            .toFixed(prec);
                };
            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
                .split('.');
            if (s[0].length > 3) {
                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
            }
            if ((s[1] || '')
                    .length < prec) {
                s[1] = s[1] || '';
                s[1] += new Array(prec - s[1].length + 1)
                    .join('0');
            }
            return s.join(dec);
        },
        generateDescription: function (object) {
            //TODO: РќР° СЂР°Р·Р»РёС‡РЅС‹Рµ СЃРѕР±С‹С‚РёСЏ РїРµСЂРµРіРµРЅРёСЂРёСЂСѓРµС‚СЃСЏ РѕРїРёСЃР°РЅРёРµ СѓСЃР»СѓРіРё. Рљ РїСЂРёРјРµСЂСѓ, СЃРјРµРЅРёР»Рё РІРєР»Р°РґРєСѓ: РёР·РјРµРЅСЏРµРј РЅР°Р·РІР°РЅРёРµ Рё РІС‹Р±СЂР°РЅРЅС‹Рµ С‚РѕРІР°СЂС‹, РёС… С†РµРЅС‹, СЃРєРёРґРєСѓ Рё СЃСѓРјРјСѓ
        },
        getData: function () {
            return this.data();
        }
    };
    $.fn.calc = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('РњРµС‚РѕРґ СЃ РёРјРµРЅРµРј ' + method + ' РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚ РґР»СЏ jQuery.calc');
        }


    };
})(jQuery);

$(function () {
  $('.list-calculate-body .tab-content .tab-pane').calc();
  $('.list-calculate .tabs-content .tab-pane').calc();
});
