YMaps.jQuery(function () {

            var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);
                map.addControl(new YMaps.ToolBar());
    map.addControl(new YMaps.Zoom());
    map.addControl(new YMaps.MiniMap());
    map.addControl(new YMaps.ScaleLine());


            map.setCenter(new YMaps.GeoPoint(56.294194, 58.014835), 12);


            var s = new YMaps.Style();
            s.iconStyle = new YMaps.IconStyle();
            s.iconStyle.href = "images/ymaps.png";
            s.iconStyle.size = new YMaps.Point(104, 162);
            s.iconStyle.offset = new YMaps.Point(-9, -159);

             var s2 = new YMaps.Style();
            s2.iconStyle = new YMaps.IconStyle();
            s2.iconStyle.href = "images/ymaps.png";
            s2.iconStyle.size = new YMaps.Point(104, 162);
            s2.iconStyle.offset = new YMaps.Point(-35, -159);

            var s3 = new YMaps.Style();
            s3.iconStyle = new YMaps.IconStyle();
            s3.iconStyle.href = "images/ymaps.png";
            s3.iconStyle.size = new YMaps.Point(104, 162);
            s3.iconStyle.offset = new YMaps.Point(-35, -159);

            var s4 = new YMaps.Style();
            s4.iconStyle = new YMaps.IconStyle();
            s4.iconStyle.href = "images/ymaps.png";
            s4.iconStyle.size = new YMaps.Point(104, 162);
            s4.iconStyle.offset = new YMaps.Point(-35, -159);


            // Создание метки и добавление ее на карту
            var placemark = new YMaps.Placemark(map.getCenter(), {style: s});
            map.addOverlay(placemark);
            placemark.name = "Тургенева 29";

            var placemark2 = new YMaps.Placemark(new YMaps.GeoPoint(56.222507,58.004615), {style: s2});
            map.addOverlay(placemark2);
            placemark2.name = "Борчанинова 14а";

            var placemark3 = new YMaps.Placemark(new YMaps.GeoPoint(56.231578,57.972596), {style: s3});
            map.addOverlay(placemark3);
            placemark3.name = "Солдатова 26";

            var placemark4 = new YMaps.Placemark(new YMaps.GeoPoint(56.18967,57.976657), {style: s4});
            map.addOverlay(placemark4);
            placemark4.name = "Мира 41а";
        });
