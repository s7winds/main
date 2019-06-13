/**
 * Created by Aleksandr Terentev <alvteren@gmail.com> on 03.10.15.
 */
function number_format(number, decimals, dec_point, thousands_sep) {
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
}
$(function () {
  $('[data-toggle="popover"]').popover({
    trigger: 'hover',
    container: 'body'
  });
});

$(function () {

  function changeSection(data) {
    if (typeof data === 'object' && !!data.section) {
      var section = $('#calc-list').find('[data-section-id="'+data.section.sectionId+'"]');

      if(section.length <= 0) {
        var sectionName = data.section.sectionName.replace('\\n','<br>');
        var htmlSection = '' +
          '<div class="items-group" data-section-id="'+data.section.sectionId+'">' +
            '<div class="bild-item-title"><span>' + sectionName + '</span></div>' +
            '<div class="bild-item">' +
              '<div class="bild-sub-menu">' +
              '<div class="bild-sub-menu-item" data-sub-section-id="'+data.section.subSectionId+'">' +
                '<span class="firstItem"></span>' +
              //'<div class="sub-section" data-sub-section-id="'+data.section.subSectionId+'">' +
                  '' +
                '<div class="bild-sub-menu-body">' +
                  '<ul class="sub-sections">' +
                    '' +
                  '</ul>' +
                '</div>' +
              '</div>' +
              '</div>' +
            '</div>' +
            '<a class="bild-more" href=""><span class="off">РЎРєСЂС‹С‚СЊ РїРѕРґСЂРѕР±РЅС‹Рµ РёРЅРІРµСЃС‚РёС†РёРё</span><span\
              class="on">РџРѕРґСЂРѕР±РЅС‹Рµ РёРЅРІРµСЃС‚РёС†РёРё</span>\
            </a>' +
          '</div>' +
          '';
        $('#calc-list').append(htmlSection);
        var section = $('#calc-list').find('div[data-section-id="'+data.section.sectionId+'"]');
      }
      var subSection = section.find('[data-sub-section-id="'+data.section.subSectionId+'"]');
      if(subSection.length <= 0) {
        var items = subSection.find('.bild-sub-menu-body');
        items.append('<ul class="sub-sections" data-sub-section-id="'+data.section.subSectionId+'">' +
          ''+
          '</ul>'
        );
      }
      subSection = section.find('div[data-sub-section-id="'+data.section.subSectionId+'"] ul');

      var firstItem = '' +
        '<div class="bild-sub-menu-title item" data-id="'+data.section.subSectionId+'">' +
          '<div class="bild-sub-menu-title-left">'+data.section.subSection+'</div>' +
          '<div class="bild-sub-menu-title-right">'+data.sum+' Р  ' +
            '<a href="#" class="bild-delete" title="РЈРґР°Р»РёС‚СЊ СѓСЃР»СѓРіСѓ РёР· СЃС‡РµС‚Р°">' +
              '<i class="fa fa-times" aria-hidden="true"></i>' +
            '</a>' +
          '</div>' +
        '</div>';
      subSection.data(data);
      section.find('span.firstItem').html(firstItem);
      if(!!data.items && data.items.length>0) {

        subSection.html('');
        for(i=0;i<data.items.length;i++) {
          var item = data.items[i];
          var price = number_format(item.priceWithDiscount,0,'.',' ');
          var itemHtml = '' +
            '<li><div class="item" data-id="'+item.id+'">' +
              '<div class="bild-sub-menu-title-left">'+item.name+'</div>' +
              '<div class="bild-sub-menu-title-right">'+price+' P ' +
                '<a class="bild-delete" title="РЈРґР°Р»РёС‚СЊ СѓСЃР»СѓРіСѓ РёР· СЃС‡РµС‚Р°" href=""><i class="fa fa-times" aria-hidden="true"></i></a>' +
              '</div>' +
            '</div></li>';
          subSection.append(itemHtml);
        }
      }
      else {
        subSection.remove();
        subSection = section.find('[data-sub-section-id]');
        if(subSection.length<=0) {
          $('#calc-list').find('[data-section-id="'+data.section.sectionId+'"]').remove();
        }
      }
      $(document).trigger('calc.alv.changeSection',data);
    }
  }

  //$('.list-calculate-body .tab-content .tab-pane').calc();

  // activate or deactivate item to left side calc-sections
  $(document).on('calc.alv.changeItem', function (event, data) {
    changeSection(data);
  });
  // add or remove section to right side
  $(document).on('calc.alv.changeSection', function (event, data) {
    var rightSide = $('#calc-list');
    var sections = rightSide.find('[data-sub-section-id]');
    var sum = 0;
    var discountSum = 0;

    sections.each(function() {//function inop
      var dataSection = data;
      if(!!dataSection.sum) {
        sum += parseInt(dataSection.sum);
      }
      if(!!dataSection.discountSum) {
        discountSum += parseInt(dataSection.discountSum);
      }
    });
    var sumFormat = number_format(data.sum,0,'.',' ');//direct call to data.sum works proprely
    $('.bild-summ').html(sumFormat + ' P');
    //alert(data.sum +' P');
    $('#mobile-calc').html(sumFormat +' P');
    if(discountSum<=0) {
      $('.wrapper-discount').addClass('hidden');
    }
    else{
      discountSum = number_format(discountSum,0,'.',' ');
      $('.wrapper-discount').removeClass('hidden');
    }
    $('.bild-sale').html(discountSum + ' P');
  });
  // handler delete button
  $('#calc-list').on('click','.bild-delete',function(event) {
    event.preventDefault();
    var item = $(this).parents('.item');
    var subSectionId = $(this).parents('[data-sub-section-id]').data('subSectionId');
    var sectionId = $(this).parents('[data-section-id]').data('sectionId');
    var subSection = $('#left_side [data-section-id='+sectionId+'][data-sub-section-id='+subSectionId+']');

    if(item.is('.sub'))
    {

      subSection.find('.item.active').removeClass('active');
      subSection.calc('calculated');
    }
    else {
      subSection.find('.item[data-id='+item.data('id')+']');
      subSection.calc('calculated');
    }
  });

  // toggle more items
  $(document).on('click','.bild-more',function(event){
    $(this).prev('.bild-item').find('ul.sub-sections').toggleClass('active');
    $(this).find('span').toggleClass('on');
    $(this).find('span').toggleClass('off');
    event.preventDefault();
  });
  //console.log(window.location.hash);
  if(window.location.hash == '#2') {
    $('.sel-2').trigger('click');
  }
});
