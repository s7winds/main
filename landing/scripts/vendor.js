! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = ie.type(e);
        return "function" === n || ie.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (ie.isFunction(t)) return ie.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ie.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (fe.test(t)) return ie.filter(t, e, n);
            t = ie.filter(t, e)
        }
        return ie.grep(e, function (e) {
            return ie.inArray(e, t) >= 0 !== n
        })
    }

    function i(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = be[e] = {};
        return ie.each(e.match(xe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), ie.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ee, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ke.test(n) ? ie.parseJSON(n) : n
                } catch (i) {}
                ie.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ie.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u(e, t, n, r) {
        if (ie.acceptData(e)) {
            var i, o, a = ie.expando,
                s = e.nodeType,
                l = s ? ie.cache : e,
                c = s ? e[a] : e[a] && a;
            if (c && l[c] && (r || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = K.pop() || ie.guid++ : a), l[c] || (l[c] = s ? {} : {
                toJSON: ie.noop
            }), ("object" == typeof t || "function" == typeof t) && (r ? l[c] = ie.extend(l[c], t) : l[c].data = ie.extend(l[c].data, t)), o = l[c], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ie.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[ie.camelCase(t)])) : i = o, i
        }
    }

    function d(e, t, n) {
        if (ie.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? ie.cache : e,
                s = o ? e[ie.expando] : ie.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    ie.isArray(t) ? t = t.concat(ie.map(t, ie.camelCase)) : t in r ? t = [t] : (t = ie.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !c(r) : !ie.isEmptyObject(r)) return
                }(n || (delete a[s].data, c(a[s]))) && (o ? ie.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function f() {
        return !0
    }

    function p() {
        return !1
    }

    function h() {
        try {
            return he.activeElement
        } catch (e) {}
    }

    function g(e) {
        var t = We.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function m(e, t) {
        var n, r, i = 0,
            o = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ie.nodeName(r, t) ? o.push(r) : ie.merge(o, m(r, t));
        return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], o) : o
    }

    function y(e) {
        Le.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t) {
        return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function x(e) {
        return e.type = (null !== ie.find.attr(e, "type")) + "/" + e.type, e
    }

    function b(e) {
        var t = Ue.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ie._data(n, "globalEval", !t || ie._data(t[r], "globalEval"))
    }

    function T(e, t) {
        if (1 === t.nodeType && ie.hasData(e)) {
            var n, r, i, o = ie._data(e),
                a = ie._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) ie.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ie.extend({}, a.data))
        }
    }

    function C(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[ie.expando]) {
                i = ie._data(t);
                for (r in i.events) ie.removeEvent(t, r, i.handle);
                t.removeAttribute(ie.expando)
            }
            "script" === n && t.text !== e.text ? (x(t).text = e.text, b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !ie.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Le.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function k(t, n) {
        var r, i = ie(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : ie.css(i[0], "display");
        return i.detach(), o
    }

    function E(e) {
        var t = he,
            n = Ze[e];
        return n || (n = k(e, t), "none" !== n && n || (Qe = (Qe || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Qe[0].contentWindow || Qe[0].contentDocument).document, t.write(), t.close(), n = k(e, t), Qe.detach()), Ze[e] = n), n
    }

    function N(e, t) {
        return {
            get: function () {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ft.length; i--;)
            if (t = ft[i] + n, t in e) return t;
        return r
    }

    function A(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ie._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ae(r) && (o[a] = ie._data(r, "olddisplay", E(r.nodeName)))) : (i = Ae(r), (n && "none" !== n || !i) && ie._data(r, "olddisplay", i ? n : ie.css(r, "display"))));
        for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function j(e, t, n) {
        var r = lt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function L(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ie.css(e, n + Se[o], !0, i)), r ? ("content" === n && (a -= ie.css(e, "padding" + Se[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + Se[o] + "Width", !0, i))) : (a += ie.css(e, "padding" + Se[o], !0, i), "padding" !== n && (a += ie.css(e, "border" + Se[o] + "Width", !0, i)));
        return a
    }

    function D(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = et(e),
            a = ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = tt(e, t, o), (0 > i || null == i) && (i = e.style[t]), rt.test(i)) return i;
            r = a && (ne.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + L(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i)
    }

    function _() {
        return setTimeout(function () {
            pt = void 0
        }), pt = ie.now()
    }

    function O(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Se[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function M(e, t, n) {
        for (var r, i = (xt[t] || []).concat(xt["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function W(e, t, n) {
        var r, i, o, a, s, l, c, u, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && Ae(e),
            g = ie._data(e, "fxshow");
        n.queue || (s = ie._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, ie.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = ie.css(e, "display"), u = "none" === c ? ie._data(e, "olddisplay") || E(e.nodeName) : c, "inline" === u && "none" === ie.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], gt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    h = !0
                }
                f[r] = g && g[r] || ie.style(e, r)
            } else c = void 0;
        if (ie.isEmptyObject(f)) "inline" === ("none" === c ? E(e.nodeName) : c) && (p.display = c);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = ie._data(e, "fxshow", {}), o && (g.hidden = !h), h ? ie(e).show() : d.done(function () {
                ie(e).hide()
            }), d.done(function () {
                var t;
                ie._removeData(e, "fxshow");
                for (t in f) ie.style(e, t, f[t])
            });
            for (r in f) a = M(h ? g[r] : 0, r, d), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function q(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ie.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function R(e, t, n) {
        var r, i, o = 0,
            a = vt.length,
            s = ie.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (i) return !1;
                for (var t = pt || _(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: ie.extend({}, t),
                opts: ie.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || _(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = ie.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) c.tweens[n].run(1);
                    return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (q(u, c.opts.specialEasing); a > o; o++)
            if (r = vt[o].call(c, e, u, c.opts)) return r;
        return ie.map(u, M, c), ie.isFunction(c.opts.start) && c.opts.start.call(e, c), ie.fx.timer(ie.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function P(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(xe) || [];
            if (ie.isFunction(n))
                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function F(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, ie.each(e[s] || [], function (e, s) {
                var c = s(t, n, r);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }), l
        }
        var o = {},
            a = e === zt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function B(e, t) {
        var n, r, i = ie.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && ie.extend(!0, e, n), e
    }

    function I(e, t, n) {
        for (var r, i, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    l.unshift(a);
                    break
                } if (l[0] in n) o = l[0];
        else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function z(e, t, n, r) {
        var i, o, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = c[l + " " + o] || c["* " + o], !a)
                for (i in c)
                    if (s = i.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], u.unshift(s[1]));
                        break
                    } if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function $(e, t, n, r) {
        var i;
        if (ie.isArray(t)) ie.each(t, function (t, i) {
            n || Ut.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ie.type(t)) r(e, t);
        else
            for (i in t) $(e + "[" + i + "]", t[i], n, r)
    }

    function X() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function V() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function U(e) {
        return ie.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var K = [],
        J = K.slice,
        Y = K.concat,
        G = K.push,
        Q = K.indexOf,
        Z = {},
        ee = Z.toString,
        te = Z.hasOwnProperty,
        ne = {},
        re = "1.11.3",
        ie = function (e, t) {
            return new ie.fn.init(e, t)
        },
        oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        se = /-([\da-z])/gi,
        le = function (e, t) {
            return t.toUpperCase()
        };
    ie.fn = ie.prototype = {
        jquery: re,
        constructor: ie,
        selector: "",
        length: 0,
        toArray: function () {
            return J.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : J.call(this)
        },
        pushStack: function (e) {
            var t = ie.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return ie.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(ie.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: K.sort,
        splice: K.splice
    }, ie.extend = ie.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || ie.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (i = arguments[s]))
                for (r in i) e = a[r], n = i[r], a !== n && (c && n && (ie.isPlainObject(n) || (t = ie.isArray(n))) ? (t ? (t = !1, o = e && ie.isArray(e) ? e : []) : o = e && ie.isPlainObject(e) ? e : {}, a[r] = ie.extend(c, o, n)) : void 0 !== n && (a[r] = n));
        return a
    }, ie.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === ie.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === ie.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function (e) {
            var t;
            if (!e || "object" !== ie.type(e) || e.nodeType || ie.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (ne.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
        },
        globalEval: function (t) {
            t && ie.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(ae, "ms-").replace(se, le)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e);
            if (r) {
                if (s)
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.apply(e[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]), i === !1) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(oe, "")
        },
        makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ie.merge(r, "string" == typeof e ? [e] : e) : G.call(r, e)), r
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (Q) return Q.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i
        },
        map: function (e, t, r) {
            var i, o = 0,
                a = e.length,
                s = n(e),
                l = [];
            if (s)
                for (; a > o; o++) i = t(e[o], o, r), null != i && l.push(i);
            else
                for (o in e) i = t(e[o], o, r), null != i && l.push(i);
            return Y.apply([], l)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), ie.isFunction(e) ? (n = J.call(arguments, 2), r = function () {
                return e.apply(t || this, n.concat(J.call(arguments)))
            }, r.guid = e.guid = e.guid || ie.guid++, r) : void 0
        },
        now: function () {
            return +new Date
        },
        support: ne
    }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function (e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, c, d, p, h, g;
            if ((t ? t.ownerDocument || t : F) !== H && D(t), t = t || H, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && O) {
                if (11 !== s && (i = ve.exec(e)))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && R(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = i[3]) && w.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
                    } if (w.qsa && (!M || !M.test(e))) {
                    if (p = d = P, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = E(e), (d = t.getAttribute("id")) ? p = d.replace(be, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
                        h = xe.test(e) && u(t.parentNode) || t, g = c.join(",")
                    }
                    if (g) try {
                        return Q.apply(n, h.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(le, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[P] = !0, e
        }

        function i(e) {
            var t = H.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;) T.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = I++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)
                    if (1 === t.nodeType || i) return e(t, n, o)
            } : function (t, n, a) {
                var s, l, c = [B, o];
                if (a) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) {
                            if (l = t[P] || (t[P] = {}), (s = l[r]) && s[0] === B && s[1] === o) return c[2] = s[2];
                            if (l[r] = c, c[2] = e(t, n, a)) return !0
                        }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
            return a
        }

        function y(e, t, n, i, o, a) {
            return i && !i[P] && (i = y(i)), o && !o[P] && (o = y(o, a)), r(function (r, a, s, l) {
                var c, u, d, f = [],
                    p = [],
                    h = a.length,
                    y = r || g(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !r && t ? y : m(y, f, e, s, l),
                    x = n ? o || (r ? e : h || i) ? [] : a : v;
                if (n && n(v, x, s, l), i)
                    for (c = m(x, p), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (x[p[u]] = !(v[p[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = x.length; u--;)(d = x[u]) && c.push(v[u] = d);
                            o(null, x = [], c, l)
                        }
                        for (u = x.length; u--;)(d = x[u]) && (c = o ? ee(r, d) : f[u]) > -1 && (r[c] = !(a[c] = d))
                    }
                } else x = m(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, l) : Q.apply(a, x)
            })
        }

        function v(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = p(function (e) {
                    return e === t
                }, a, !0), c = p(function (e) {
                    return ee(t, e) > -1
                }, a, !0), u = [function (e, n, r) {
                    var i = !o && (r || n !== A) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                    return t = null, i
                }]; i > s; s++)
                if (n = T.relative[e[s].type]) u = [p(h(u), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                        return y(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && f(e))
                    }
                    u.push(n)
                } return h(u)
        }

        function x(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function (r, a, s, l, c) {
                    var u, d, f, p = 0,
                        h = "0",
                        g = r && [],
                        y = [],
                        v = A,
                        x = r || o && T.find.TAG("*", c),
                        b = B += null == v ? 1 : Math.random() || .1,
                        w = x.length;
                    for (c && (A = a !== H && a); h !== w && null != (u = x[h]); h++) {
                        if (o && u) {
                            for (d = 0; f = e[d++];)
                                if (f(u, a, s)) {
                                    l.push(u);
                                    break
                                } c && (B = b)
                        }
                        i && ((u = !f && u) && p--, r && g.push(u))
                    }
                    if (p += h, i && h !== p) {
                        for (d = 0; f = n[d++];) f(g, y, a, s);
                        if (r) {
                            if (p > 0)
                                for (; h--;) g[h] || y[h] || (y[h] = Y.call(l));
                            y = m(y)
                        }
                        Q.apply(l, y), c && !r && y.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (B = b, A = v), g
                };
            return i ? r(a) : a
        }
        var b, w, T, C, k, E, N, S, A, j, L, D, H, _, O, M, W, q, R, P = "sizzle" + 1 * new Date,
            F = e.document,
            B = 0,
            I = 0,
            z = n(),
            $ = n(),
            X = n(),
            V = function (e, t) {
                return e === t && (L = !0), 0
            },
            U = 1 << 31,
            K = {}.hasOwnProperty,
            J = [],
            Y = J.pop,
            G = J.push,
            Q = J.push,
            Z = J.slice,
            ee = function (e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = re.replace("w", "w#"),
            oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ce = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            fe = new RegExp(ae),
            pe = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            xe = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Te = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Ce = function () {
                D()
            };
        try {
            Q.apply(J = Z.call(F.childNodes), F.childNodes), J[F.childNodes.length].nodeType
        } catch (ke) {
            Q = {
                apply: J.length ? function (e, t) {
                    G.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, k = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : F;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, _ = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), O = !k(r), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ye.test(r.getElementsByClassName), w.getById = i(function (e) {
                return _.appendChild(e).id = P, !r.getElementsByName || !r.getElementsByName(P).length
            }), w.getById ? (T.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(we, Te);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(we, Te);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                return O ? t.getElementsByClassName(e) : void 0
            }, W = [], M = [], (w.qsa = ye.test(r.querySelectorAll)) && (i(function (e) {
                _.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || M.push(".#.+[+~]")
            }), i(function (e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (w.matchesSelector = ye.test(q = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), W.push("!=", ae)
            }), M = M.length && new RegExp(M.join("|")), W = W.length && new RegExp(W.join("|")), t = ye.test(_.compareDocumentPosition), R = t || ye.test(_.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, V = t ? function (e, t) {
                if (e === t) return L = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === F && R(F, e) ? -1 : t === r || t.ownerDocument === F && R(F, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return L = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    c = [t];
                if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) c.unshift(n);
                for (; l[i] === c[i];) i++;
                return i ? a(l[i], c[i]) : l[i] === F ? -1 : c[i] === F ? 1 : 0
            }, r) : H
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== H && D(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !O || W && W.test(n) || M && M.test(n))) try {
                var r = q.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return t(n, H, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== H && D(e), R(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== H && D(e);
            var n = T.attrHandle[t.toLowerCase()],
                r = n && K.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (L = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(V), L) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return j = null, e
        }, C = t.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(),
                            v = !l && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                for (u = m[P] || (m[P] = {}), c = u[e] || [], p = c[0] === B && c[1], f = c[0] === B && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++f && d === t) {
                                        u[e] = [B, p, f];
                                        break
                                    }
                            } else if (v && (c = (t[P] || (t[P] = {}))[e]) && c[0] === B) f = c[1];
                            else
                                for (;
                                    (d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++f || (v && ((d[P] || (d[P] = {}))[e] = [B, f]), d !== t)););
                            return f -= i, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [],
                        n = [],
                        i = N(e.replace(le, "$1"));
                    return i[P] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function (e) {
                    return e = e.replace(we, Te),
                        function (t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function (e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
                        function (t) {
                            var n;
                            do
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === _
                },
                focus: function (e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !T.pseudos.empty(e)
                },
                header: function (e) {
                    return me.test(e.nodeName)
                },
                input: function (e) {
                    return ge.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[b] = s(b);
        for (b in {
                submit: !0,
                reset: !0
            }) T.pseudos[b] = l(b);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = t.tokenize = function (e, n) {
            var r, i, o, a, s, l, c, u = $[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = T.preFilter; s;) {
                (!r || (i = ce.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ue.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(le, " ")
                }), s = s.slice(r.length));
                for (a in T.filter) !(i = he[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : $(e, l).slice(0)
        }, N = t.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = X[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = v(t[n]), o[P] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function (e, t, n, r) {
            var i, o, a, s, l, c = "function" == typeof e && e,
                d = !r && E(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                    if ((l = T.find[s]) && (r = l(a.matches[0].replace(we, Te), xe.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && f(o), !e) return Q.apply(n, r), n;
                        break
                    }
            }
            return (c || N(e, d))(r, t, !O, n, xe.test(e) && u(t.parentNode) || t), n
        }, w.sortStable = P.split("").sort(V).join("") === P, w.detectDuplicates = !!L, D(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(H.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    ie.find = ce, ie.expr = ce.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = ce.uniqueSort, ie.text = ce.getText, ie.isXMLDoc = ce.isXML, ie.contains = ce.contains;
    var ue = ie.expr.match.needsContext,
        de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    ie.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, ie.fn.extend({
        find: function (e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ie(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (ie.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ie.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ie.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function (e) {
            return !!r(this, "string" == typeof e && ue.test(e) ? ie(e) : e || [], !1).length
        }
    });
    var pe, he = e.document,
        ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        me = ie.fn.init = function (e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && ie.isPlainObject(t))
                        for (n in t) ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = he.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return pe.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = he, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this))
        };
    me.prototype = ie.fn, pe = ie(he);
    var ye = /^(?:parents|prev(?:Until|All))/,
        ve = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ie.extend({
        dir: function (e, t, n) {
            for (var r = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !ie(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), ie.fn.extend({
        has: function (e) {
            var t, n = ie(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (ie.contains(this, n[t])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = ue.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(o.length > 1 ? ie.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? ie.inArray(this[0], ie(e)) : ie.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ie.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ie.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ie.dir(e, "parentNode", n)
        },
        next: function (e) {
            return i(e, "nextSibling")
        },
        prev: function (e) {
            return i(e, "previousSibling")
        },
        nextAll: function (e) {
            return ie.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return ie.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ie.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ie.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return ie.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return ie.sibling(e.firstChild)
        },
        contents: function (e) {
            return ie.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ie.merge([], e.childNodes)
        }
    }, function (e, t) {
        ie.fn[e] = function (n, r) {
            var i = ie.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ve[e] || (i = ie.unique(i)), ye.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var xe = /\S+/g,
        be = {};
    ie.Callbacks = function (e) {
        e = "string" == typeof e ? be[e] || o(e) : ie.extend({}, e);
        var t, n, r, i, a, s, l = [],
            c = !e.once && [],
            u = function (o) {
                for (n = e.memory && o, r = !0, a = s || 0, s = 0, i = l.length, t = !0; l && i > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    } t = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
            },
            d = {
                add: function () {
                    if (l) {
                        var r = l.length;
                        ! function o(t) {
                            ie.each(t, function (t, n) {
                                var r = ie.type(n);
                                "function" === r ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), t ? i = l.length : n && (s = r, u(n))
                    }
                    return this
                },
                remove: function () {
                    return l && ie.each(arguments, function (e, n) {
                        for (var r;
                            (r = ie.inArray(n, l, r)) > -1;) l.splice(r, 1), t && (i >= r && i--, a >= r && a--)
                    }), this
                },
                has: function (e) {
                    return e ? ie.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], i = 0, this
                },
                disable: function () {
                    return l = c = n = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return c = void 0, n || d.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, n) {
                    return !l || r && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return d
    }, ie.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", ie.Callbacks("once memory"), "resolved"], ["reject", "fail", ie.Callbacks("once memory"), "rejected"], ["notify", "progress", ie.Callbacks("memory")]],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return ie.Deferred(function (n) {
                            ie.each(t, function (t, o) {
                                var a = ie.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? ie.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ie.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t, n, r, i = 0,
                o = J.call(arguments),
                a = o.length,
                s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : ie.Deferred(),
                c = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? J.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ie.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(l.reject).progress(c(i, n, t)) : --s;
            return s || l.resolveWith(r, o), l.promise()
        }
    });
    var we;
    ie.fn.ready = function (e) {
        return ie.ready.promise().done(e), this
    }, ie.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? ie.readyWait++ : ie.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--ie.readyWait : !ie.isReady) {
                if (!he.body) return setTimeout(ie.ready);
                ie.isReady = !0, e !== !0 && --ie.readyWait > 0 || (we.resolveWith(he, [ie]), ie.fn.triggerHandler && (ie(he).triggerHandler("ready"), ie(he).off("ready")))
            }
        }
    }), ie.ready.promise = function (t) {
        if (!we)
            if (we = ie.Deferred(), "complete" === he.readyState) setTimeout(ie.ready);
            else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
                n = null == e.frameElement && he.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!ie.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    a(), ie.ready()
                }
            }()
        }
        return we.promise(t)
    };
    var Te, Ce = "undefined";
    for (Te in ie(ne)) break;
    ne.ownLast = "0" !== Te, ne.inlineBlockNeedsLayout = !1, ie(function () {
            var e, t, n, r;
            n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
        }),
        function () {
            var e = he.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), ie.acceptData = function (e) {
            var t = ie.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ee = /([A-Z])/g;
    ie.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? ie.cache[e[ie.expando]] : e[ie.expando], !!e && !c(e)
        },
        data: function (e, t, n) {
            return u(e, t, n)
        },
        removeData: function (e, t) {
            return d(e, t)
        },
        _data: function (e, t, n) {
            return u(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return d(e, t, !0)
        }
    }), ie.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ie.data(o), 1 === o.nodeType && !ie._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ie.camelCase(r.slice(5)), l(o, r, i[r])));
                    ie._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                ie.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                ie.data(this, e, t)
            }) : o ? l(o, e, ie.data(o, e)) : void 0
        },
        removeData: function (e) {
            return this.each(function () {
                ie.removeData(this, e)
            })
        }
    }), ie.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ie._data(e, t), n && (!r || ie.isArray(n) ? r = ie._data(e, t, ie.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = ie.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ie._queueHooks(e, t),
                a = function () {
                    ie.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ie._data(e, n) || ie._data(e, n, {
                empty: ie.Callbacks("once memory").add(function () {
                    ie._removeData(e, t + "queue"), ie._removeData(e, n)
                })
            })
        }
    }), ie.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = ie.queue(this, e, t);
                ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                ie.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = ie.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ie._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = ["Top", "Right", "Bottom", "Left"],
        Ae = function (e, t) {
            return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e)
        },
        je = ie.access = function (e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === ie.type(n)) {
                i = !0;
                for (s in n) ie.access(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
                    return c.call(ie(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        Le = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = he.createElement("input"),
            t = he.createElement("div"),
            n = he.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                ne.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                ne.deleteExpando = !1
            }
        }
    }(),
    function () {
        var t, n, r = he.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), ne[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var De = /^(?:input|select|textarea)$/i,
        He = /^key/,
        _e = /^(?:mouse|pointer|contextmenu)|click/,
        Oe = /^(?:focusinfocus|focusoutblur)$/,
        Me = /^([^.]*)(?:\.(.+)|)$/;
    ie.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, l, c, u, d, f, p, h, g, m = ie._data(e);
            if (m) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = ie.guid++), (a = m.events) || (a = m.events = {}), (u = m.handle) || (u = m.handle = function (e) {
                        return typeof ie === Ce || e && ie.event.triggered === e.type ? void 0 : ie.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = e), t = (t || "").match(xe) || [""], s = t.length; s--;) o = Me.exec(t[s]) || [], p = g = o[1], h = (o[2] || "").split(".").sort(), p && (c = ie.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, c = ie.event.special[p] || {}, d = ie.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ie.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, c.setup && c.setup.call(e, r, h, u) !== !1 || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, d) : f.push(d), ie.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, l, c, u, d, f, p, h, g, m = ie.hasData(e) && ie._data(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(xe) || [""], c = t.length; c--;)
                    if (s = Me.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = ie.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || ie.removeEvent(e, p, m.handle), delete u[p])
                    } else
                        for (p in u) ie.event.remove(e, p + t[c], n, r, !0);
                ie.isEmptyObject(u) && (delete m.handle, ie._removeData(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var o, a, s, l, c, u, d, f = [r || he],
                p = te.call(t, "type") ? t.type : t,
                h = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = r = r || he, 3 !== r.nodeType && 8 !== r.nodeType && !Oe.test(p + ie.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[ie.expando] ? t : new ie.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ie.makeArray(n, [t]), c = ie.event.special[p] || {}, i || !c.trigger || c.trigger.apply(r, n) !== !1)) {
                if (!i && !c.noBubble && !ie.isWindow(r)) {
                    for (l = c.delegateType || p, Oe.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), u = s;
                    u === (r.ownerDocument || he) && f.push(u.defaultView || u.parentWindow || e)
                }
                for (d = 0;
                    (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || p, o = (ie._data(s, "events") || {})[t.type] && ie._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && ie.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), n) === !1) && ie.acceptData(r) && a && r[p] && !ie.isWindow(r)) {
                    u = r[a], u && (r[a] = null), ie.event.triggered = p;
                    try {
                        r[p]()
                    } catch (g) {}
                    ie.event.triggered = void 0, u && (r[a] = u)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = ie.event.fix(e);
            var t, n, r, i, o, a = [],
                s = J.call(arguments),
                l = (ie._data(this, "events") || {})[e.type] || [],
                c = ie.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = ie.event.handlers.call(this, e, l), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, o = 0;
                        (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((ie.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], o = 0; s > o; o++) r = t[o], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? ie(n, this).index(l) >= 0 : ie.find(n, this, null, [l]).length), i[n] && i.push(r);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function (e) {
            if (e[ie.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = _e.test(i) ? this.mouseHooks : He.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button,
                    a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || he, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return ie.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return ie.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = ie.extend(new ie.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ie.removeEvent = he.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Ce && (e[r] = null), e.detachEvent(r, n))
    }, ie.Event = function (e, t) {
        return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : p) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void(this[ie.expando] = !0)) : new ie.Event(e, t)
    }, ie.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ie.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        ie.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ie.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.submitBubbles || (ie.event.special.submit = {
        setup: function () {
            return ie.nodeName(this, "form") ? !1 : void ie.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target,
                    n = ie.nodeName(t, "input") || ie.nodeName(t, "button") ? t.form : void 0;
                n && !ie._data(n, "submitBubbles") && (ie.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), ie._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ie.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return ie.nodeName(this, "form") ? !1 : void ie.event.remove(this, "._submit")
        }
    }), ne.changeBubbles || (ie.event.special.change = {
        setup: function () {
            return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ie.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ie.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ie.event.simulate("change", this, e, !0)
            })), !1) : void ie.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                De.test(t.nodeName) && !ie._data(t, "changeBubbles") && (ie.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ie.event.simulate("change", this.parentNode, e, !0)
                }), ie._data(t, "changeBubbles", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return ie.event.remove(this, "._change"), !De.test(this.nodeName)
        }
    }), ne.focusinBubbles || ie.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            ie.event.simulate(t, e.target, ie.event.fix(e), !0)
        };
        ie.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t);
                i || r.addEventListener(e, n, !0), ie._data(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = ie._data(r, t) - 1;
                i ? ie._data(r, t, i) : (r.removeEventListener(e, n, !0), ie._removeData(r, t))
            }
        }
    }), ie.fn.extend({
        on: function (e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (o in e) this.on(o, t, n, e[o], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = p;
            else if (!r) return this;
            return 1 === i && (a = r, r = function (e) {
                return ie().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = ie.guid++)), this.each(function () {
                ie.event.add(this, e, r, n, t)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ie(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = p), this.each(function () {
                ie.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                ie.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? ie.event.trigger(e, t, n, !0) : void 0
        }
    });
    var We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        qe = / jQuery\d+="(?:null|\d+)"/g,
        Re = new RegExp("<(?:" + We + ")[\\s/>]", "i"),
        Pe = /^\s+/,
        Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Be = /<([\w:]+)/,
        Ie = /<tbody/i,
        ze = /<|&#?\w+;/,
        $e = /<(?:script|style|link)/i,
        Xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ve = /^$|\/(?:java|ecma)script/i,
        Ue = /^true\/(.*)/,
        Ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Je = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ye = g(he),
        Ge = Ye.appendChild(he.createElement("div"));
    Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, Je.th = Je.td, ie.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, l = ie.contains(e.ownerDocument, e);
            if (ne.html5Clone || ie.isXMLDoc(e) || !Re.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ge.innerHTML = e.outerHTML, Ge.removeChild(o = Ge.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e)))
                for (r = m(o), s = m(e), a = 0; null != (i = s[a]); ++a) r[a] && C(i, r[a]);
            if (t)
                if (n)
                    for (s = s || m(e), r = r || m(o), a = 0; null != (i = s[a]); a++) T(i, r[a]);
                else T(e, o);
            return r = m(o, "script"), r.length > 0 && w(r, !l && m(e, "script")), r = s = i = null, o
        },
        buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, l, c, u, d = e.length, f = g(t), p = [], h = 0; d > h; h++)
                if (o = e[h], o || 0 === o)
                    if ("object" === ie.type(o)) ie.merge(p, o.nodeType ? [o] : o);
                    else if (ze.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (Be.exec(o) || ["", ""])[1].toLowerCase(), u = Je[l] || Je._default, s.innerHTML = u[1] + o.replace(Fe, "<$1></$2>") + u[2], i = u[0]; i--;) s = s.lastChild;
                if (!ne.leadingWhitespace && Pe.test(o) && p.push(t.createTextNode(Pe.exec(o)[0])), !ne.tbody)
                    for (o = "table" !== l || Ie.test(o) ? "<table>" !== u[1] || Ie.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;) ie.nodeName(c = o.childNodes[i], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (ie.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), ne.appendChecked || ie.grep(m(p, "input"), y), h = 0; o = p[h++];)
                if ((!r || -1 === ie.inArray(o, r)) && (a = ie.contains(o.ownerDocument, o), s = m(f.appendChild(o), "script"), a && w(s), n))
                    for (i = 0; o = s[i++];) Ve.test(o.type || "") && n.push(o);
            return s = null, f
        },
        cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = ie.expando, l = ie.cache, c = ne.deleteExpando, u = ie.event.special; null != (n = e[a]); a++)
                if ((t || ie.acceptData(n)) && (i = n[s], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) u[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], c ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, K.push(i))
                }
        }
    }), ie.fn.extend({
        text: function (e) {
            return je(this, function (e) {
                return void 0 === e ? ie.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ie.cleanData(m(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && w(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ie.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ie.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return ie.clone(this, e, t)
            })
        },
        html: function (e) {
            return je(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(qe, "") : void 0;
                if (!("string" != typeof e || $e.test(e) || !ne.htmlSerialize && Re.test(e) || !ne.leadingWhitespace && Pe.test(e) || Je[(Be.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Fe, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, ie.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = Y.apply([], e);
            var n, r, i, o, a, s, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                f = e[0],
                p = ie.isFunction(f);
            if (p || c > 1 && "string" == typeof f && !ne.checkClone && Xe.test(f)) return this.each(function (n) {
                var r = u.eq(n);
                p && (e[0] = f.call(this, n, r.html())), r.domManip(e, t)
            });
            if (c && (s = ie.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                for (o = ie.map(m(s, "script"), x), i = o.length; c > l; l++) r = s, l !== d && (r = ie.clone(r, !0, !0), i && ie.merge(o, m(r, "script"))), t.call(this[l], r, l);
                if (i)
                    for (a = o[o.length - 1].ownerDocument, ie.map(o, b), l = 0; i > l; l++) r = o[l], Ve.test(r.type || "") && !ie._data(r, "globalEval") && ie.contains(a, r) && (r.src ? ie._evalUrl && ie._evalUrl(r.src) : ie.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Ke, "")));
                s = n = null
            }
            return this
        }
    }), ie.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ie.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = ie(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ie(o[r])[t](n), G.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Qe, Ze = {};
    ! function () {
        var e;
        ne.shrinkWrapBlocks = function () {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return n = he.getElementsByTagName("body")[0], n && n.style ? (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
        }
    }();
    var et, tt, nt = /^margin/,
        rt = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
        it = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function (t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }, tt = function (e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), rt.test(a) && nt.test(t) && (r = s.width, i = s.minWidth,
                o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : he.documentElement.currentStyle && (et = function (e) {
            return e.currentStyle
        }, tt = function (e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), rt.test(a) && !it.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function () {
            function t() {
                var t, n, r, i;
                n = he.getElementsByTagName("body")[0], n && n.style && (t = he.createElement("div"), r = he.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, i = t.appendChild(he.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), n.removeChild(r))
            }
            var n, r, i, o, a, s, l;
            n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = n.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === r.opacity, ne.cssFloat = !!r.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, ie.extend(ne, {
                reliableHiddenOffsets: function () {
                    return null == s && t(), s
                },
                boxSizingReliable: function () {
                    return null == a && t(), a
                },
                pixelPosition: function () {
                    return null == o && t(), o
                },
                reliableMarginRight: function () {
                    return null == l && t(), l
                }
            }))
        }(), ie.swap = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };
    var ot = /alpha\([^)]*\)/i,
        at = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + Ne + ")(.*)$", "i"),
        ct = new RegExp("^([+-])=(" + Ne + ")", "i"),
        ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ft = ["Webkit", "O", "Moz", "ms"];
    ie.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = ie.camelCase(t),
                    l = e.style;
                if (t = ie.cssProps[s] || (ie.cssProps[s] = S(l, s)), a = ie.cssHooks[t] || ie.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                if (o = typeof n, "string" === o && (i = ct.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(ie.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || ie.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    l[t] = n
                } catch (c) {}
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = ie.camelCase(t);
            return t = ie.cssProps[s] || (ie.cssProps[s] = S(e.style, s)), a = ie.cssHooks[t] || ie.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, r)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || ie.isNumeric(i) ? i || 0 : o) : o
        }
    }), ie.each(["height", "width"], function (e, t) {
        ie.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? st.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, ut, function () {
                    return D(e, t, r)
                }) : D(e, t, r) : void 0
            },
            set: function (e, n, r) {
                var i = r && et(e);
                return j(e, n, r ? L(e, t, r, ne.boxSizing && "border-box" === ie.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ne.opacity || (ie.cssHooks.opacity = {
        get: function (e, t) {
            return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ie.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ie.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ot.test(o) ? o.replace(ot, i) : o + " " + i)
        }
    }), ie.cssHooks.marginRight = N(ne.reliableMarginRight, function (e, t) {
        return t ? ie.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), ie.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        ie.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Se[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, nt.test(e) || (ie.cssHooks[e + t].set = j)
    }), ie.fn.extend({
        css: function (e, t) {
            return je(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (ie.isArray(t)) {
                    for (r = et(e), i = t.length; i > a; a++) o[t[a]] = ie.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return A(this, !0)
        },
        hide: function () {
            return A(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ae(this) ? ie(this).show() : ie(this).hide()
            })
        }
    }), ie.Tween = H, H.prototype = {
        constructor: H,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = H.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ie.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ie.fx = H.prototype.init, ie.fx.step = {};
    var pt, ht, gt = /^(?:toggle|show|hide)$/,
        mt = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
        yt = /queueHooks$/,
        vt = [W],
        xt = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = mt.exec(t),
                    o = i && i[3] || (ie.cssNumber[e] ? "" : "px"),
                    a = (ie.cssNumber[e] || "px" !== o && +r) && mt.exec(ie.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, ie.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ie.Animation = ie.extend(R, {
            tweener: function (e, t) {
                ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], xt[n] = xt[n] || [], xt[n].unshift(t)
            },
            prefilter: function (e, t) {
                t ? vt.unshift(e) : vt.push(e)
            }
        }), ie.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? ie.extend({}, e) : {
                complete: n || !n && t || ie.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ie.isFunction(t) && t
            };
            return r.duration = ie.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ie.fx.speeds ? ie.fx.speeds[r.duration] : ie.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                ie.isFunction(r.old) && r.old.call(this), r.queue && ie.dequeue(this, r.queue)
            }, r
        }, ie.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = ie.isEmptyObject(e),
                    o = ie.speed(t, n, r),
                    a = function () {
                        var t = R(this, ie.extend({}, e), o);
                        (i || ie._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = ie.timers,
                        a = ie._data(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && yt.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    (t || !n) && ie.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, n = ie._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = ie.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ie.each(["toggle", "show", "hide"], function (e, t) {
            var n = ie.fn[t];
            ie.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i)
            }
        }), ie.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            ie.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), ie.timers = [], ie.fx.tick = function () {
            var e, t = ie.timers,
                n = 0;
            for (pt = ie.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || ie.fx.stop(), pt = void 0
        }, ie.fx.timer = function (e) {
            ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop()
        }, ie.fx.interval = 13, ie.fx.start = function () {
            ht || (ht = setInterval(ie.fx.tick, ie.fx.interval))
        }, ie.fx.stop = function () {
            clearInterval(ht), ht = null
        }, ie.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ie.fn.delay = function (e, t) {
            return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        function () {
            var e, t, n, r, i;
            t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = he.createElement("select"), i = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(r.getAttribute("style")), ne.hrefNormalized = "/a" === r.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = i.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !i.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
    var bt = /\r/g;
    ie.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = ie.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)
            }
        }
    }), ie.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ie.find.attr(e, "value");
                    return null != t ? t : ie.trim(ie.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ie.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ie(n).val(), o) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--;)
                        if (r = i[a], ie.inArray(ie.valHooks.option.get(r), o) >= 0) try {
                            r.selected = n = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), ie.each(["radio", "checkbox"], function () {
        ie.valHooks[this] = {
            set: function (e, t) {
                return ie.isArray(t) ? e.checked = ie.inArray(ie(e).val(), t) >= 0 : void 0
            }
        }, ne.checkOn || (ie.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var wt, Tt, Ct = ie.expr.attrHandle,
        kt = /^(?:checked|selected)$/i,
        Et = ne.getSetAttribute,
        Nt = ne.input;
    ie.fn.extend({
        attr: function (e, t) {
            return je(this, ie.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                ie.removeAttr(this, e)
            })
        }
    }), ie.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ce ? ie.prop(e, t, n) : (1 === o && ie.isXMLDoc(e) || (t = t.toLowerCase(), r = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? Tt : wt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = ie.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void ie.removeAttr(e, t))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(xe);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ie.propFix[n] || n, ie.expr.match.bool.test(n) ? Nt && Et || !kt.test(n) ? e[r] = !1 : e[ie.camelCase("default-" + n)] = e[r] = !1 : ie.attr(e, n, ""), e.removeAttribute(Et ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ne.radioValue && "radio" === t && ie.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Tt = {
        set: function (e, t, n) {
            return t === !1 ? ie.removeAttr(e, n) : Nt && Et || !kt.test(n) ? e.setAttribute(!Et && ie.propFix[n] || n, n) : e[ie.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Ct[t] || ie.find.attr;
        Ct[t] = Nt && Et || !kt.test(t) ? function (e, t, r) {
            var i, o;
            return r || (o = Ct[t], Ct[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ct[t] = o), i
        } : function (e, t, n) {
            return n ? void 0 : e[ie.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Nt && Et || (ie.attrHooks.value = {
        set: function (e, t, n) {
            return ie.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
        }
    }), Et || (wt = {
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, Ct.id = Ct.name = Ct.coords = function (e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, ie.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: wt.set
    }, ie.attrHooks.contenteditable = {
        set: function (e, t, n) {
            wt.set(e, "" === t ? !1 : t, n)
        }
    }, ie.each(["width", "height"], function (e, t) {
        ie.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ne.style || (ie.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var St = /^(?:input|select|textarea|button|object)$/i,
        At = /^(?:a|area)$/i;
    ie.fn.extend({
        prop: function (e, t) {
            return je(this, ie.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = ie.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), ie.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, t, n) {
            var r, i, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ie.isXMLDoc(e), o && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ie.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : St.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ne.hrefNormalized || ie.each(["href", "src"], function (e, t) {
        ie.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ne.optSelected || (ie.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ie.propFix[this.toLowerCase()] = this
    }), ne.enctype || (ie.propFix.enctype = "encoding");
    var jt = /[\t\r\n\f]/g;
    ie.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                c = "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function (t) {
                ie(this).addClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(xe) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = ie.trim(r), n.className !== a && (n.className = a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof e && e;
            if (ie.isFunction(e)) return this.each(function (t) {
                ie(this).removeClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(xe) || []; l > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = e ? ie.trim(r) : "", n.className !== a && (n.className = a)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ie.isFunction(e) ? function (n) {
                ie(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)
                    for (var t, r = 0, i = ie(this), o = e.match(xe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Ce || "boolean" === n) && (this.className && ie._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ie._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ie.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ie.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Lt = ie.now(),
        Dt = /\?/,
        Ht = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ie.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = ie.trim(t + "");
        return i && !ie.trim(i.replace(Ht, function (e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "")
        })) ? Function("return " + i)() : ie.error("Invalid JSON: " + t)
    }, ie.parseXML = function (t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + t), n
    };
    var _t, Ot, Mt = /#.*$/,
        Wt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Pt = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        Bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        It = {},
        zt = {},
        $t = "*/".concat("*");
    try {
        Ot = location.href
    } catch (Xt) {
        Ot = he.createElement("a"), Ot.href = "", Ot = Ot.href
    }
    _t = Bt.exec(Ot.toLowerCase()) || [], ie.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ot,
            type: "GET",
            isLocal: Rt.test(_t[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ie.parseJSON,
                "text xml": ie.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? B(B(e, ie.ajaxSettings), t) : B(ie.ajaxSettings, e)
        },
        ajaxPrefilter: P(It),
        ajaxTransport: P(zt),
        ajax: function (e, t) {
            function n(e, t, n, r) {
                var i, u, y, v, b, T = t;
                2 !== x && (x = 2, s && clearTimeout(s), c = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, i = e >= 200 && 300 > e || 304 === e, n && (v = I(d, w, n)), v = z(d, v, w, i), i ? (d.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (ie.lastModified[o] = b), b = w.getResponseHeader("etag"), b && (ie.etag[o] = b)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = v.state, u = v.data, y = v.error, i = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", i ? h.resolveWith(f, [u, T, w]) : h.rejectWith(f, [w, T, y]), w.statusCode(m), m = void 0, l && p.trigger(i ? "ajaxSuccess" : "ajaxError", [w, d, i ? u : y]), g.fireWith(f, [w, T]), l && (p.trigger("ajaxComplete", [w, d]), --ie.active || ie.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, a, s, l, c, u, d = ie.ajaxSetup({}, t),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? ie(f) : ie.event,
                h = ie.Deferred(),
                g = ie.Callbacks("once memory"),
                m = d.statusCode || {},
                y = {},
                v = {},
                x = 0,
                b = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!u)
                                for (u = {}; t = qt.exec(a);) u[t[1].toLowerCase()] = t[2];
                            t = u[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return x || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > x)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || b;
                        return c && c.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Ot) + "").replace(Mt, "").replace(Ft, _t[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ie.trim(d.dataType || "*").toLowerCase().match(xe) || [""], null == d.crossDomain && (r = Bt.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === _t[1] && r[2] === _t[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (_t[3] || ("http:" === _t[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ie.param(d.data, d.traditional)), F(It, d, t, w), 2 === x) return w;
            l = ie.event && d.global, l && 0 === ie.active++ && ie.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Pt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Dt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Wt.test(o) ? o.replace(Wt, "$1_=" + Lt++) : o + (Dt.test(o) ? "&" : "?") + "_=" + Lt++)), d.ifModified && (ie.lastModified[o] && w.setRequestHeader("If-Modified-Since", ie.lastModified[o]), ie.etag[o] && w.setRequestHeader("If-None-Match", ie.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : d.accepts["*"]);
            for (i in d.headers) w.setRequestHeader(i, d.headers[i]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === x)) return w.abort();
            b = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[i](d[i]);
            if (c = F(zt, d, t, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    x = 1, c.send(y, n)
                } catch (T) {
                    if (!(2 > x)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return ie.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return ie.get(e, void 0, t, "script")
        }
    }), ie.each(["get", "post"], function (e, t) {
        ie[t] = function (e, n, r, i) {
            return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), ie._evalUrl = function (e) {
        return ie.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ie.fn.extend({
        wrapAll: function (e) {
            if (ie.isFunction(e)) return this.each(function (t) {
                ie(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ie(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return this.each(ie.isFunction(e) ? function (t) {
                ie(this).wrapInner(e.call(this, t))
            } : function () {
                var t = ie(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = ie.isFunction(e);
            return this.each(function (n) {
                ie(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ie.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ie.css(e, "display"))
    }, ie.expr.filters.visible = function (e) {
        return !ie.expr.filters.hidden(e)
    };
    var Vt = /%20/g,
        Ut = /\[\]$/,
        Kt = /\r?\n/g,
        Jt = /^(?:submit|button|image|reset|file)$/i,
        Yt = /^(?:input|select|textarea|keygen)/i;
    ie.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) $(n, e[n], t, i);
        return r.join("&").replace(Vt, "+")
    }, ie.fn.extend({
        serialize: function () {
            return ie.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = ie.prop(this, "elements");
                return e ? ie.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ie(this).is(":disabled") && Yt.test(this.nodeName) && !Jt.test(e) && (this.checked || !Le.test(e))
            }).map(function (e, t) {
                var n = ie(this).val();
                return null == n ? null : ie.isArray(n) ? ie.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Kt, "\r\n")
                }
            }).get()
        }
    }), ie.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || V()
    } : X;
    var Gt = 0,
        Qt = {},
        Zt = ie.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in Qt) Qt[e](void 0, !0)
    }), ne.cors = !!Zt && "withCredentials" in Zt, Zt = ne.ajax = !!Zt, Zt && ie.ajaxTransport(function (e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function (n, r) {
                    var i, o = e.xhr(),
                        a = ++Gt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && o.setRequestHeader(i, n[i] + "");
                    o.send(e.hasContent && e.data || null), t = function (n, i) {
                        var s, l, c;
                        if (t && (i || 4 === o.readyState))
                            if (delete Qt[a], t = void 0, o.onreadystatechange = ie.noop, i) 4 !== o.readyState && o.abort();
                            else {
                                c = {}, s = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (u) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            } c && r(s, l, c, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Qt[a] = t : t()
                },
                abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), ie.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return ie.globalEval(e), e
            }
        }
    }), ie.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ie.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = he.head || ie("head")[0] || he.documentElement;
            return {
                send: function (r, i) {
                    t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    ie.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = en.pop() || ie.expando + "_" + Lt++;
            return this[e] = !0, e
        }
    }), ie.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ie.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + i) : t.jsonp !== !1 && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || ie.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, en.push(i)), a && ie.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), ie.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || he;
        var r = de.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes))
    };
    var nn = ie.fn.load;
    ie.fn.load = function (e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (r = ie.trim(e.slice(s, e.length)), e = e.slice(0, s)), ie.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ie.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function (e) {
            i = arguments, a.html(r ? ie("<div>").append(ie.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
            a.each(n, i || [e.responseText, t, e])
        }), this
    }, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ie.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ie.expr.filters.animated = function (e) {
        return ie.grep(ie.timers, function (t) {
            return e === t.elem
        }).length
    };
    var rn = e.document.documentElement;
    ie.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, l, c, u = ie.css(e, "position"),
                d = ie(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), o = ie.css(e, "top"), l = ie.css(e, "left"), c = ("absolute" === u || "fixed" === u) && ie.inArray("auto", [o, l]) > -1, c ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), ie.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, ie.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                ie.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                o = i && i.ownerDocument;
            if (o) return t = o.documentElement, ie.contains(t, i) ? (typeof i.getBoundingClientRect !== Ce && (r = i.getBoundingClientRect()), n = U(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === ie.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (n = e.offset()), n.top += ie.css(e[0], "borderTopWidth", !0), n.left += ie.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ie.css(r, "marginTop", !0),
                    left: t.left - n.left - ie.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || rn; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");) e = e.offsetParent;
                return e || rn
            })
        }
    }), ie.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = /Y/.test(t);
        ie.fn[e] = function (r) {
            return je(this, function (e, r, i) {
                var o = U(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ie(o).scrollLeft() : i, n ? i : ie(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), ie.each(["top", "left"], function (e, t) {
        ie.cssHooks[t] = N(ne.pixelPosition, function (e, n) {
            return n ? (n = tt(e, t), rt.test(n) ? ie(e).position()[t] + "px" : n) : void 0
        })
    }), ie.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        ie.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            ie.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return je(this, function (t, n, r) {
                    var i;

                    return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), ie.fn.size = function () {
        return this.length
    }, ie.fn.andSelf = ie.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ie
    });
    var on = e.jQuery,
        an = e.$;
    return ie.noConflict = function (t) {
        return e.$ === ie && (e.$ = an), t && e.jQuery === ie && (e.jQuery = on), ie
    }, typeof t === Ce && (e.jQuery = e.$ = ie), ie
}),
function (e, t, n, r) {
    var i = n("html"),
        o = n(e),
        a = n(t),
        s = n.fancybox = function () {
            s.open.apply(this, arguments)
        },
        l = navigator.userAgent.match(/msie/i),
        c = null,
        u = t.createTouch !== r,
        d = function (e) {
            return e && e.hasOwnProperty && e instanceof n
        },
        f = function (e) {
            return e && "string" === n.type(e)
        },
        p = function (e) {
            return f(e) && 0 < e.indexOf("%")
        },
        h = function (e, t) {
            var n = parseInt(e, 10) || 0;
            return t && p(e) && (n *= s.getViewport()[t] / 100), Math.ceil(n)
        },
        g = function (e, t) {
            return h(e, t) + "px"
        };
    n.extend(s, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !u,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeChange: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (e, t) {
            return e && (n.isPlainObject(t) || (t = {}), !1 !== s.close(!0)) ? (n.isArray(e) || (e = d(e) ? n(e).get() : [e]), n.each(e, function (i, o) {
                var a, l, c, u, p, h = {};
                "object" === n.type(o) && (o.nodeType && (o = n(o)), d(o) ? (h = {
                    href: o.data("fancybox-href") || o.attr("href"),
                    title: o.data("fancybox-title") || o.attr("title"),
                    isDom: !0,
                    element: o
                }, n.metadata && n.extend(!0, h, o.metadata())) : h = o), a = t.href || h.href || (f(o) ? o : null), l = t.title !== r ? t.title : h.title || "", u = (c = t.content || h.content) ? "html" : t.type || h.type, !u && h.isDom && (u = o.data("fancybox-type"), u || (u = (u = o.prop("class").match(/fancybox\.(\w+)/)) ? u[1] : null)), f(a) && (u || (s.isImage(a) ? u = "image" : s.isSWF(a) ? u = "swf" : "#" === a.charAt(0) ? u = "inline" : f(o) && (u = "html", c = o)), "ajax" === u && (p = a.split(/\s+/, 2), a = p.shift(), p = p.shift())), c || ("inline" === u ? a ? c = n(f(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : h.isDom && (c = o) : "html" === u ? c = a : !u && !a && h.isDom && (u = "inline", c = o)), n.extend(h, {
                    href: a,
                    type: u,
                    content: c,
                    title: l,
                    selector: p
                }), e[i] = h
            }), s.opts = n.extend(!0, {}, s.defaults, t), t.keys !== r && (s.opts.keys = t.keys ? n.extend({}, s.defaults.keys, t.keys) : !1), s.group = e, s._start(s.opts.index)) : void 0
        },
        cancel: function () {
            var e = s.coming;
            e && !1 !== s.trigger("onCancel") && (s.hideLoading(), s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), s.coming = null, s.current || s._afterZoomOut(e))
        },
        close: function (e) {
            s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isActive && (s.isOpen && !0 !== e ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut())))
        },
        play: function (e) {
            var t = function () {
                    clearTimeout(s.player.timer)
                },
                n = function () {
                    t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
                },
                r = function () {
                    t(), a.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd")
                };
            !0 === e || !s.player.isActive && !1 !== e ? s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, a.bind({
                "onCancel.player beforeClose.player": r,
                "onUpdate.player": n,
                "beforeLoad.player": t
            }), n(), s.trigger("onPlayStart")) : r()
        },
        next: function (e) {
            var t = s.current;
            t && (f(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"))
        },
        prev: function (e) {
            var t = s.current;
            t && (f(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function (e, t, n) {
            var i = s.current;
            i && (e = h(e), s.direction = t || i.direction[e >= i.index ? "next" : "prev"], s.router = n || "jumpto", i.loop && (0 > e && (e = i.group.length + e % i.group.length), e %= i.group.length), i.group[e] !== r && (s.cancel(), s._start(e)))
        },
        reposition: function (e, t) {
            var r, i = s.current,
                o = i ? i.wrap : null;
            o && (r = s._getPosition(t), e && "scroll" === e.type ? (delete r.position, o.stop(!0, !0).animate(r, 200)) : (o.css(r), i.pos = n.extend({}, i.dim, r)))
        },
        update: function (e) {
            var t = e && e.type,
                n = !t || "orientationchange" === t;
            n && (clearTimeout(c), c = null), s.isOpen && !c && (c = setTimeout(function () {
                var r = s.current;
                r && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && r.autoResize) && s._setDimension(), "scroll" === t && r.canShrink || s.reposition(e), s.trigger("onUpdate"), c = null)
            }, n && !u ? 0 : 300))
        },
        toggle: function (e) {
            s.isOpen && (s.current.fitToView = "boolean" === n.type(e) ? e : !s.current.fitToView, u && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update())
        },
        hideLoading: function () {
            a.unbind(".loading"), n("#fancybox-loading").remove()
        },
        showLoading: function () {
            var e, t;
            s.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"), a.bind("keydown.loading", function (e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel())
            }), s.defaults.fixed || (t = s.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function () {
            var t = s.current && s.current.locked || !1,
                n = {
                    x: o.scrollLeft(),
                    y: o.scrollTop()
                };
            return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = u && e.innerWidth ? e.innerWidth : o.width(), n.h = u && e.innerHeight ? e.innerHeight : o.height()), n
        },
        unbindEvents: function () {
            s.wrap && d(s.wrap) && s.wrap.unbind(".fb"), a.unbind(".fb"), o.unbind(".fb")
        },
        bindEvents: function () {
            var e, t = s.current;
            t && (o.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update), (e = t.keys) && a.bind("keydown.fb", function (i) {
                var o = i.which || i.keyCode,
                    a = i.target || i.srcElement;
                return 27 === o && s.coming ? !1 : void!(i.ctrlKey || i.altKey || i.shiftKey || i.metaKey || a && (a.type || n(a).is("[contenteditable]")) || !n.each(e, function (e, a) {
                    return 1 < t.group.length && a[o] !== r ? (s[e](a[o]), i.preventDefault(), !1) : -1 < n.inArray(o, a) ? (s[e](), i.preventDefault(), !1) : void 0
                }))
            }), n.fn.mousewheel && t.mouseWheel && s.wrap.bind("mousewheel.fb", function (e, r, i, o) {
                for (var a = n(e.target || null), l = !1; a.length && !l && !a.is(".fancybox-skin") && !a.is(".fancybox-wrap");) l = a[0] && !(a[0].style.overflow && "hidden" === a[0].style.overflow) && (a[0].clientWidth && a[0].scrollWidth > a[0].clientWidth || a[0].clientHeight && a[0].scrollHeight > a[0].clientHeight), a = n(a).parent();
                0 !== r && !l && 1 < s.group.length && !t.canShrink && (o > 0 || i > 0 ? s.prev(o > 0 ? "down" : "left") : (0 > o || 0 > i) && s.next(0 > o ? "up" : "right"), e.preventDefault())
            }))
        },
        trigger: function (e, t) {
            var r, i = t || s.coming || s.current;
            if (i) {
                if (n.isFunction(i[e]) && (r = i[e].apply(i, Array.prototype.slice.call(arguments, 1))), !1 === r) return !1;
                i.helpers && n.each(i.helpers, function (t, r) {
                    r && s.helpers[t] && n.isFunction(s.helpers[t][e]) && s.helpers[t][e](n.extend(!0, {}, s.helpers[t].defaults, r), i)
                }), a.trigger(e)
            }
        },
        isImage: function (e) {
            return f(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function (e) {
            return f(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (e) {
            var t, r, i = {};
            if (e = h(e), t = s.group[e] || null, !t) return !1;
            if (i = n.extend(!0, {}, s.opts, t), t = i.margin, r = i.padding, "number" === n.type(t) && (i.margin = [t, t, t, t]), "number" === n.type(r) && (i.padding = [r, r, r, r]), i.modal && n.extend(!0, i, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: !1
                        }
                    }
                }), i.autoSize && (i.autoWidth = i.autoHeight = !0), "auto" === i.width && (i.autoWidth = !0), "auto" === i.height && (i.autoHeight = !0), i.group = s.group, i.index = e, s.coming = i, !1 === s.trigger("beforeLoad")) s.coming = null;
            else {
                if (r = i.type, t = i.href, !r) return s.coming = null, s.current && s.router && "jumpto" !== s.router ? (s.current.index = e, s[s.router](s.direction)) : !1;
                if (s.isActive = !0, ("image" === r || "swf" === r) && (i.autoHeight = i.autoWidth = !1, i.scrolling = "visible"), "image" === r && (i.aspectRatio = !0), "iframe" === r && u && (i.scrolling = "scroll"), i.wrap = n(i.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + r + " fancybox-tmp " + i.wrapCSS).appendTo(i.parent || "body"), n.extend(i, {
                        skin: n(".fancybox-skin", i.wrap),
                        outer: n(".fancybox-outer", i.wrap),
                        inner: n(".fancybox-inner", i.wrap)
                    }), n.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
                        i.skin.css("padding" + t, g(i.padding[e]))
                    }), s.trigger("onReady"), "inline" === r || "html" === r) {
                    if (!i.content || !i.content.length) return s._error("content")
                } else if (!t) return s._error("href");
                "image" === r ? s._loadImage() : "ajax" === r ? s._loadAjax() : "iframe" === r ? s._loadIframe() : s._afterLoad()
            }
        },
        _error: function (e) {
            n.extend(s.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: s.coming.tpl.error
            }), s._afterLoad()
        },
        _loadImage: function () {
            var e = s.imgPreload = new Image;
            e.onload = function () {
                this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad()
            }, e.onerror = function () {
                this.onload = this.onerror = null, s._error("image")
            }, e.src = s.coming.href, !0 !== e.complete && s.showLoading()
        },
        _loadAjax: function () {
            var e = s.coming;
            s.showLoading(), s.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                url: e.href,
                error: function (e, t) {
                    s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading()
                },
                success: function (t, n) {
                    "success" === n && (e.content = t, s._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var e = s.coming,
                t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", u ? "auto" : e.iframe.scrolling).attr("src", e.href);
            n(e.wrap).bind("onReset", function () {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {}
            }), e.iframe.preload && (s.showLoading(), t.one("load", function () {
                n(this).data("ready", 1), u || n(this).bind("load.fb", s.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad()
            })), e.content = t.appendTo(e.inner), e.iframe.preload || s._afterLoad()
        },
        _preloadImages: function () {
            var e, t, n = s.group,
                r = s.current,
                i = n.length,
                o = r.preload ? Math.min(r.preload, i - 1) : 0;
            for (t = 1; o >= t; t += 1) e = n[(r.index + t) % i], "image" === e.type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function () {
            var e, t, r, i, o, a = s.coming,
                l = s.current;
            if (s.hideLoading(), a && !1 !== s.isActive)
                if (!1 === s.trigger("afterLoad", a, l)) a.wrap.stop(!0).trigger("onReset").remove(), s.coming = null;
                else {
                    switch (l && (s.trigger("beforeChange", l), l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), s.unbindEvents(), e = a.content, t = a.type, r = a.scrolling, n.extend(s, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: l
                    }), i = a.href, t) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? e = n("<div>").html(e).find(a.selector) : d(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", n('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
                                n(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                            }));
                            break;
                        case "image":
                            e = a.tpl.image.replace("{href}", i);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + i + '"></param>', o = "", n.each(a.swf, function (t, n) {
                                e += '<param name="' + t + '" value="' + n + '"></param>', o += " " + t + '="' + n + '"'
                            }), e += '<embed src="' + i + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "></embed></object>"
                    }(!d(e) || !e.parent().is(a.inner)) && a.inner.append(e), s.trigger("beforeShow"), a.inner.css("overflow", "yes" === r ? "scroll" : "no" === r ? "hidden" : r), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? l.prevMethod && s.transitions[l.prevMethod]() : n(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? a.nextMethod : a.openMethod](), s._preloadImages()
                }
        },
        _setDimension: function () {
            var e, t, r, i, o, a, l, c, u, d = s.getViewport(),
                f = 0,
                m = !1,
                y = !1,
                m = s.wrap,
                v = s.skin,
                x = s.inner,
                b = s.current,
                y = b.width,
                w = b.height,
                T = b.minWidth,
                C = b.minHeight,
                k = b.maxWidth,
                E = b.maxHeight,
                N = b.scrolling,
                S = b.scrollOutside ? b.scrollbarWidth : 0,
                A = b.margin,
                j = h(A[1] + A[3]),
                L = h(A[0] + A[2]);
            if (m.add(v).add(x).width("auto").height("auto").removeClass("fancybox-tmp"), A = h(v.outerWidth(!0) - v.width()), e = h(v.outerHeight(!0) - v.height()), t = j + A, r = L + e, i = p(y) ? (d.w - t) * h(y) / 100 : y, o = p(w) ? (d.h - r) * h(w) / 100 : w, "iframe" === b.type) {
                if (u = b.content, b.autoHeight && 1 === u.data("ready")) try {
                    u[0].contentWindow.document.location && (x.width(i).height(9999), a = u.contents().find("body"), S && a.css("overflow-x", "hidden"), o = a.outerHeight(!0))
                } catch (D) {}
            } else(b.autoWidth || b.autoHeight) && (x.addClass("fancybox-tmp"), b.autoWidth || x.width(i), b.autoHeight || x.height(o), b.autoWidth && (i = x.width()), b.autoHeight && (o = x.height()), x.removeClass("fancybox-tmp"));
            if (y = h(i), w = h(o), c = i / o, T = h(p(T) ? h(T, "w") - t : T), k = h(p(k) ? h(k, "w") - t : k), C = h(p(C) ? h(C, "h") - r : C), E = h(p(E) ? h(E, "h") - r : E), a = k, l = E, b.fitToView && (k = Math.min(d.w - t, k), E = Math.min(d.h - r, E)), t = d.w - j, L = d.h - L, b.aspectRatio ? (y > k && (y = k, w = h(y / c)), w > E && (w = E, y = h(w * c)), T > y && (y = T, w = h(y / c)), C > w && (w = C, y = h(w * c))) : (y = Math.max(T, Math.min(y, k)), b.autoHeight && "iframe" !== b.type && (x.width(y), w = x.height()), w = Math.max(C, Math.min(w, E))), b.fitToView)
                if (x.width(y).height(w), m.width(y + A), d = m.width(), j = m.height(), b.aspectRatio)
                    for (;
                        (d > t || j > L) && y > T && w > C && !(19 < f++);) w = Math.max(C, Math.min(E, w - 10)), y = h(w * c), T > y && (y = T, w = h(y / c)), y > k && (y = k, w = h(y / c)), x.width(y).height(w), m.width(y + A), d = m.width(), j = m.height();
                else y = Math.max(T, Math.min(y, y - (d - t))), w = Math.max(C, Math.min(w, w - (j - L)));
            S && "auto" === N && o > w && t > y + A + S && (y += S), x.width(y).height(w), m.width(y + A), d = m.width(), j = m.height(), m = (d > t || j > L) && y > T && w > C, y = b.aspectRatio ? a > y && l > w && i > y && o > w : (a > y || l > w) && (i > y || o > w), n.extend(b, {
                dim: {
                    width: g(d),
                    height: g(j)
                },
                origWidth: i,
                origHeight: o,
                canShrink: m,
                canExpand: y,
                wPadding: A,
                hPadding: e,
                wrapSpace: j - v.outerHeight(!0),
                skinSpace: v.height() - w
            }), !u && b.autoHeight && w > C && E > w && !y && x.height("auto")
        },
        _getPosition: function (e) {
            var t = s.current,
                n = s.getViewport(),
                r = t.margin,
                i = s.wrap.width() + r[1] + r[3],
                o = s.wrap.height() + r[0] + r[2],
                r = {
                    position: "absolute",
                    top: r[0],
                    left: r[3]
                };
            return t.autoCenter && t.fixed && !e && o <= n.h && i <= n.w ? r.position = "fixed" : t.locked || (r.top += n.y, r.left += n.x), r.top = g(Math.max(r.top, r.top + (n.h - o) * t.topRatio)), r.left = g(Math.max(r.left, r.left + (n.w - i) * t.leftRatio)), r
        },
        _afterZoomIn: function () {
            var e = s.current;
            e && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible").addClass("fancybox-opened"), s.update(), (e.closeClick || e.nextClick && 1 < s.group.length) && s.inner.css("cursor", "pointer").bind("click.fb", function (t) {
                !n(t.target).is("a") && !n(t.target).parent().is("a") && (t.preventDefault(), s[e.closeClick ? "close" : "next"]())
            }), e.closeBtn && n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb", function (e) {
                e.preventDefault(), s.close()
            }), e.arrows && 1 < s.group.length && ((e.loop || 0 < e.index) && n(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && n(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play()) : s.play(!1))
        },
        _afterZoomOut: function (e) {
            e = e || s.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(s, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), s.trigger("afterClose", e)
        }
    }), s.transitions = {
        getOrigPosition: function () {
            var e = s.current,
                t = e.element,
                n = e.orig,
                r = {},
                i = 50,
                o = 50,
                a = e.hPadding,
                l = e.wPadding,
                c = s.getViewport();
            return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), d(n) ? (r = n.offset(), n.is("img") && (i = n.outerWidth(), o = n.outerHeight())) : (r.top = c.y + (c.h - o) * e.topRatio, r.left = c.x + (c.w - i) * e.leftRatio), ("fixed" === s.wrap.css("position") || e.locked) && (r.top -= c.y, r.left -= c.x), r = {
                top: g(r.top - a * e.topRatio),
                left: g(r.left - l * e.leftRatio),
                width: g(i + l),
                height: g(o + a)
            }
        },
        step: function (e, t) {
            var n, r, i = t.prop;
            r = s.current;
            var o = r.wrapSpace,
                a = r.skinSpace;
            ("width" === i || "height" === i) && (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), s.isClosing && (n = 1 - n), r = "width" === i ? r.wPadding : r.hPadding, r = e - r, s.skin[i](h("width" === i ? r : r - o * n)), s.inner[i](h("width" === i ? r : r - o * n - a * n)))
        },
        zoomIn: function () {
            var e = s.current,
                t = e.pos,
                r = e.openEffect,
                i = "elastic" === r,
                o = n.extend({
                    opacity: 1
                }, t);
            delete o.position, i ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === r && (t.opacity = .1), s.wrap.css(t).animate(o, {
                duration: "none" === r ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: i ? this.step : null,
                complete: s._afterZoomIn
            })
        },
        zoomOut: function () {
            var e = s.current,
                t = e.closeEffect,
                n = "elastic" === t,
                r = {
                    opacity: .1
                };
            n && (r = this.getOrigPosition(), e.closeOpacity && (r.opacity = .1)), s.wrap.animate(r, {
                duration: "none" === t ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: n ? this.step : null,
                complete: s._afterZoomOut
            })
        },
        changeIn: function () {
            var e, t = s.current,
                n = t.nextEffect,
                r = t.pos,
                i = {
                    opacity: 1
                },
                o = s.direction;
            r.opacity = .1, "elastic" === n && (e = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (r[e] = g(h(r[e]) - 200), i[e] = "+=200px") : (r[e] = g(h(r[e]) + 200), i[e] = "-=200px")), "none" === n ? s._afterZoomIn() : s.wrap.css(r).animate(i, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: s._afterZoomIn
            })
        },
        changeOut: function () {
            var e = s.previous,
                t = e.prevEffect,
                r = {
                    opacity: .1
                },
                i = s.direction;
            "elastic" === t && (r["down" === i || "up" === i ? "top" : "left"] = ("up" === i || "left" === i ? "-" : "+") + "=200px"), e.wrap.animate(r, {
                duration: "none" === t ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function () {
                    n(this).trigger("onReset").remove()
                }
            })
        }
    }, s.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !u,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: n("html"),
        create: function (e) {
            e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(s.coming ? s.coming.parent : e.parent), this.fixed = !1, e.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (e) {
            var t = this;
            e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (o.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function (e) {
                return n(e.target).hasClass("fancybox-overlay") ? (s.isActive ? s.close() : t.close(), !1) : void 0
            }), this.overlay.css(e.css).show()
        },
        close: function () {
            var e, t;
            o.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), e = o.scrollTop(), t = o.scrollLeft(), this.el.removeClass("fancybox-lock"), o.scrollTop(e).scrollLeft(t)), n(".fancybox-overlay").remove().hide(), n.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function () {
            var e, n = "100%";
            this.overlay.width(n).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), a.width() > e && (n = a.width())) : a.width() > o.width() && (n = a.width()), this.overlay.width(n).height(a.height())
        },
        onReady: function (e, t) {
            var r = this.overlay;
            n(".fancybox-overlay").stop(!0, !0), r || this.create(e), e.locked && this.fixed && t.fixed && (r || (this.margin = a.height() > o.height() ? n("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (e, t) {
            var r, i;
            t.locked && (!1 !== this.margin && (n("*").filter(function () {
                return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), r = o.scrollTop(), i = o.scrollLeft(), this.el.addClass("fancybox-lock"), o.scrollTop(r).scrollLeft(i)), this.open(e)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (e) {
            this.overlay && !s.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
        }
    }, s.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function (e) {
            var t = s.current,
                r = t.title,
                i = e.type;
            if (n.isFunction(r) && (r = r.call(t.element, t)), f(r) && "" !== n.trim(r)) {
                switch (t = n('<div class="fancybox-title fancybox-title-' + i + '-wrap">' + r + "</div>"), i) {
                    case "inside":
                        i = s.skin;
                        break;
                    case "outside":
                        i = s.wrap;
                        break;
                    case "over":
                        i = s.inner;
                        break;
                    default:
                        i = s.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(h(t.css("margin-bottom")))
                }
                t["top" === e.position ? "prependTo" : "appendTo"](i)
            }
        }
    }, n.fn.fancybox = function (e) {
        var t, r = n(this),
            i = this.selector || "",
            o = function (o) {
                var a, l, c = n(this).blur(),
                    u = t;
                !(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || c.is(".fancybox-wrap") || (a = e.groupAttr || "data-fancybox-group", l = c.attr(a), l || (a = "rel", l = c.get(0)[a]), l && "" !== l && "nofollow" !== l && (c = i.length ? n(i) : r, c = c.filter("[" + a + '="' + l + '"]'), u = c.index(this)), e.index = u, !1 === s.open(c, e) || !o.preventDefault()))
            };
        return e = e || {}, t = e.index || 0, i && !1 !== e.live ? a.undelegate(i, "click.fb-start").delegate(i + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", o) : r.unbind("click.fb-start").bind("click.fb-start", o), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, a.ready(function () {
        var t, o;
        if (n.scrollbarWidth === r && (n.scrollbarWidth = function () {
                var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    t = e.children(),
                    t = t.innerWidth() - t.height(99).innerWidth();
                return e.remove(), t
            }), n.support.fixedPosition === r) {
            t = n.support, o = n('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var a = 20 === o[0].offsetTop || 15 === o[0].offsetTop;
            o.remove(), t.fixedPosition = a
        }
        n.extend(s.defaults, {
            scrollbarWidth: n.scrollbarWidth(),
            fixed: n.support.fixedPosition,
            parent: n("body")
        }), t = n(e).width(), i.addClass("fancybox-lock-test"), o = n(e).width(), i.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (o - t) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery);
