function glitter(e) {
    var r = function () {
        this.b = "http://www.louisxivenergy.com/images/glitter/", this.s = ["b1.png", "b2.png", "b3.png", "b4.png", "b5.png", "b6.png"], this.i = this.s[this.random(this.s.length)], this.f = this.b + this.i, this.n = document.createElement("img"), this.newSpeed().newPoint().display().newPoint().fly()
    };
    r.prototype.display = function () {
        return $(this.n).attr("src", this.f).css("position", "absolute").css("z-index", this.random(-3)).css("top", this.pointY).css("left", this.pointX), $(document.getElementById("hb-bokeh")).append(this.n), this
    }, r.prototype.fly = function () {
        var e = this;
        $(this.n).animate({
            top: this.pointY,
            left: this.pointX
        }, this.speed, "linear", function () {
            e.newSpeed().newPoint().fly()
        })
    }, r.prototype.newSpeed = function () {
        return this.speed = (this.random(10) + 5) * $("#hb-bokeh").height(), this
    }, r.prototype.newPoint = function () {
        return this.pointX = this.random(window.innerWidth - 100), this.pointY = this.random($("#hb-bokeh").height() - 120), this
    }, r.prototype.random = function (e) {
        return Math.ceil(Math.random() * e) - 1
    }, $(function () {
        if (!($.browser.msie && $.browser.version < 9)) {
            var s = [];
            for (i = 0; i < e; i++) s[i] = new r
        }
    })
}
var nAgt = navigator.userAgent;
if (!jQuery.browser) {
    jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
    else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
    else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
    else if (-1 != nAgt.indexOf("Trident")) {
        jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
        var start = nAgt.indexOf("rv:") + 3,
            end = start + 4;
        jQuery.browser.fullVersion = nAgt.substring(start, end)
    } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), $(document).ready(function () {
    var e = !1,
        r = $(".sect-header2"),
        s = "header-scrolled",
        o = 99;
    $(window).scrollTop() > o && (r.addClass(s), e = !0), $(window).scroll(function () {
        $(window).scrollTop() > o ? e === !1 && (r.addClass(s), e = !0) : e && (r.removeClass(s), e = !1)
    }), glitter(40), $(".fancybox").fancybox({
        padding: 0
    }), $(".contact-form").submit(function (e) {
        return e.preventDefault(), "" == $(this).find("[name=fio]").val() || "" == $(this).find("[name=phone]").val() ? void alert("Р—Р°РїРѕР»РЅРёС‚Рµ РІСЃРµ РїРѕР»СЏ!") : ($.ajax({
            type: "POST",
            url: $(this).attr("action"),
            data: $(this).serialize()
        }).done(function () {
            $.fancybox($("#callback-thanks"), {
                padding: 0,
                fitToView: !1
            }), setTimeout(function () {
                $.fancybox.close()
            }, 5e3)
        }), !1)
    })
});
