'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 *//*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */window.Modernizr=function(a,b){/**
     * setCss applies given styles to the Modernizr DOM node.
     */function c(a){o.cssText=a}/**
     * setCssAll extrapolates all vendor-specific css strings.
     */function d(a,b){return c(r.join(a+';')+(b||''))}/**
     * is returns a boolean for if typeof obj is exactly type.
     */function e(a,b){return('undefined'==typeof a?'undefined':_typeof(a))===b}/**
     * contains returns a boolean for if substr is found within str.
     */function f(a,b){return!!~(''+a).indexOf(b)}/*>>testprop*/// testProps is a generic CSS / DOM property test.
// In testing support for a given CSS property, it's legit to test:
//    `elem.style[styleName] !== undefined`
// If the property is supported it will return an empty string,
// if unsupported it will return undefined.
// We'll take advantage of this quick test and skip setting a style
// on our modernizr element, but instead just testing undefined vs
// empty string.
// Because the testing of the CSS property names (with "-", as
// opposed to the camelCase DOM properties) is non-portable and
// non-standard but works in WebKit and IE (but not Gecko or Opera),
// we explicitly reject properties with dashes so that authors
// developing in WebKit or IE first don't end up with
// browser-specific content by accident.
function g(a,b){for(var c in a){var d=a[c];if(!f(d,'-')&&void 0!==o[d])return'pfx'!=b||d}return!1}/*>>testprop*/// TODO :: add testDOMProps
/**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */function h(a,b,c){for(var d in a){var f=b[a[d]];if(void 0!==f)// return the property name as a string
// return the unbound function or obj or value
return!1===c?a[d]:e(f,'function')?f.bind(c||b):f;// let's bind a function
}return!1}/*>>testallprops*//**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+' '+s.join(d+' ')+d).split(' ');// did they call .prefixed('boxSizing') or are we just testing a prop?
return e(b,'string')||e(b,'undefined')?g(f,b):(f=(a+' '+t.join(d+' ')+d).split(' '),h(f,b,c))}/*>>testallprops*//**
     * Tests
     * -----
     */// The *new* flexbox
// dev.w3.org/csswg/css3-flexbox
/*>>webforms*/// input features and input types go directly onto the ret object, bypassing the tests loop.
// Hold this guy to execute in a moment.
/*>>webforms*/// End of test definitions
// -----------------------
// Run through all tests and detect their support in the current UA.
// todo: hypothetically we could be doing an array of tests and use a basic loop here.
var j,k,l={}/*>>cssclasses*/// option for enabling the HTML classes to be added
,/*>>cssclasses*/m=b.documentElement/**
     * Create our "modernizr" element that we do most feature tests on.
     */,n=b.createElement('modernizr'),o=n.style,/**
     * Create the input element for various Web Forms feature tests.
     */p/*>>inputelem*/=b.createElement('input')/*>>inputelem*//*>>smile*/,/*>>smile*/q={}.toString,// TODO :: make the prefixes more granular
/*>>prefixes*/// List of property values to set for css tests. See ticket #21
r=['','-webkit-','-moz-','-o-','-ms-','']/*>>prefixes*//*>>domprefixes*/// Following spec is to expose vendor-specific style properties as:
//   elem.style.WebkitBorderRadius
// and the following would be incorrect:
//   elem.style.webkitBorderRadius
// Webkit ghosts their properties in lowercase but Opera & Moz do not.
// Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
//   erik.eae.net/archives/2008/03/10/21.48.10/
// More here: github.com/Modernizr/Modernizr/issues/issue/21
,s=['Webkit','Moz','O','ms'],t='Webkit Moz O ms'.toLowerCase().split(' '),/*>>domprefixes*//*>>ns*/u={svg:'http://www.w3.org/2000/svg'},/*>>ns*/v={},w={},x={},y=[],z=y.slice,// used in testing loop
/*>>teststyles*/// Inject element with style element and some CSS rules
A=function(a,c,d,e){var f,g,h,i,j=b.createElement('div'),// After page load injecting a fake body doesn't work so check if body exists
k=b.body,// IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
l=k||b.createElement('body');if(parseInt(d,10))// In order not to give false positives we create a node for each test
// This also allows the method to scale for unspecified uses
for(;d--;)h=b.createElement('div'),h.id=e?e[d]:'modernizr'+(d+1),j.appendChild(h);// <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
// when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
// with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
// msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
// Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
return f=['&#173;','<style id="s','modernizr','">',a,'</style>'].join(''),j.id='modernizr',(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background='',l.style.overflow='hidden',i=m.style.overflow,m.style.overflow='hidden',m.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),m.style.overflow=i),!!g}/*>>teststyles*//*>>mq*/// adapted from matchMedia polyfill
// by Scott Jehl and Paul Irish
// gist.github.com/786768
,/*>>mq*//*>>hasevent*///
// isEventSupported determines if a given element supports the given event
// kangax.github.com/iseventsupported/
//
// The following results are known incorrects:
//   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
//   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
//   ...
B=function(){function a(a,d){d=d||b.createElement(c[a]||'div'),a='on'+a;// When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
var f=a in d;return f||(!d.setAttribute&&(d=b.createElement('div')),d.setAttribute&&d.removeAttribute&&(d.setAttribute(a,''),f=e(d[a],'function'),!e(d[a],'undefined')&&(d[a]=void 0),d.removeAttribute(a))),d=null,f}var c={select:'input',change:'input',submit:'form',reset:'form',error:'img',load:'img',abort:'img'};return a}(),/*>>hasevent*/// TODO :: Add flag for hasownprop ? didn't last time
// hasOwnProperty shim by kangax needed for Safari 2.0 support
C={}.hasOwnProperty;for(var D in k=e(C,'undefined')||e(C.call,'undefined')?function(a,b){/* yes, this can give false positives/negatives, but most of the time we don't care about those */return b in a&&e(a.constructor.prototype[b],'undefined')}:function(a,b){return C.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if('function'!=typeof b)throw new TypeError;var c=z.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(z.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(z.call(arguments)))};return d}),v.flexbox=function(){return i('flexWrap')},v.flexboxlegacy=function(){return i('boxDirection')},v.canvas=function(){var a=b.createElement('canvas');return!!(a.getContext&&a.getContext('2d'))},v.canvastext=function(){return!!(l.canvas&&e(b.createElement('canvas').getContext('2d').fillText,'function'))},v.webgl=function(){return!!a.WebGLRenderingContext},v.touch=function(){var c;return'ontouchstart'in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:A(['@media (',r.join('touch-enabled),('),'modernizr',')','{#modernizr{top:9px;position:absolute}}'].join(''),function(a){c=9===a.offsetTop}),c},v.geolocation=function(){return'geolocation'in navigator},v.postmessage=function(){return!!a.postMessage},v.websqldatabase=function(){return!!a.openDatabase},v.indexedDB=function(){return!!i('indexedDB',a)},v.hashchange=function(){return B('hashchange',a)&&(void 0===b.documentMode||7<b.documentMode)},v.history=function(){return!!(a.history&&history.pushState)},v.draganddrop=function(){var a=b.createElement('div');return'draggable'in a||'ondragstart'in a&&'ondrop'in a},v.websockets=function(){return'WebSocket'in a||'MozWebSocket'in a},v.rgba=function(){return c('background-color:rgba(150,255,150,.5)'),f(o.backgroundColor,'rgba')},v.hsla=function(){return c('background-color:hsla(120,40%,100%,.5)'),f(o.backgroundColor,'rgba')||f(o.backgroundColor,'hsla')},v.multiplebgs=function(){// If the UA supports multiple backgrounds, there should be three occurrences
//   of the string "url(" in the return value for elemStyle.background
return c('background:url(https://),url(https://),red url(https://)'),/(url\s*\(.*?){3}/.test(o.background)},v.backgroundsize=function(){return i('backgroundSize')},v.borderimage=function(){return i('borderImage')},v.borderradius=function(){return i('borderRadius')},v.boxshadow=function(){return i('boxShadow')},v.textshadow=function(){return''===b.createElement('div').style.textShadow},v.opacity=function(){// The non-literal . in this regex is intentional:
//   German Chrome returns this value as 0,55
// github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
return d('opacity:.55'),/^0.55$/.test(o.opacity)},v.cssanimations=function(){return i('animationName')},v.csscolumns=function(){return i('columnCount')},v.cssgradients=function(){return c(// legacy webkit syntax (FIXME: remove when syntax not in use anymore)
('background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:'+// standard syntax             // trailing 'background-image:'
r.join('linear-gradient(left top,#9f9, white);background-image:')).slice(0,-17)),f(o.backgroundImage,'gradient');/**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */},v.cssreflections=function(){return i('boxReflect')},v.csstransforms=function(){return!!i('transform')},v.csstransforms3d=function(){var a=!!i('perspective');// Webkit's 3D transforms are passed off to the browser's own graphics renderer.
//   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
//   some conditions. As a result, Webkit typically recognizes the syntax but
//   will sometimes throw a false positive, thus we must do a more thorough check:
return a&&'webkitPerspective'in m.style&&A('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}',function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},v.csstransitions=function(){return i('transition')},v.fontface=function(){var a;return A('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById('smodernizr'),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||'':'';a=/src/i.test(g)&&0===g.indexOf(d.split(' ')[0])}),a},v.generatedcontent=function(){var a;return A('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:3px/1 a}',function(b){a=3<=b.offsetHeight}),a},v.video=function(){var a=b.createElement('video'),c=!1;// IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,''),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,''),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,''))}catch(a){}return c},v.audio=function(){var a=b.createElement('audio'),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,''),c.mp3=a.canPlayType('audio/mpeg;').replace(/^no$/,''),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,''),c.m4a=(a.canPlayType('audio/x-m4a;')||a.canPlayType('audio/aac;')).replace(/^no$/,''))}catch(a){}return c},v.localstorage=function(){try{return localStorage.setItem('modernizr','modernizr'),localStorage.removeItem('modernizr'),!0}catch(a){return!1}},v.sessionstorage=function(){try{return sessionStorage.setItem('modernizr','modernizr'),sessionStorage.removeItem('modernizr'),!0}catch(a){return!1}},v.webworkers=function(){return!!a.Worker},v.applicationcache=function(){return!!a.applicationCache},v.svg=function(){return!!b.createElementNS&&!!b.createElementNS(u.svg,'svg').createSVGRect},v.inlinesvg=function(){var a=b.createElement('div');return a.innerHTML='<svg/>',(a.firstChild&&a.firstChild.namespaceURI)==u.svg},v.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(q.call(b.createElementNS(u.svg,'animate')))},v.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(q.call(b.createElementNS(u.svg,'clipPath')))},v)k(v,D)&&(// run the test, throw the return value into the Modernizr,
//   then based on that boolean, define an appropriate className
//   and push it into an array of classes we'll join later.
j=D.toLowerCase(),l[j]=v[D](),y.push((l[j]?'':'no-')+j));/*>>webforms*/// input tests need to run.
/*>>cssclasses*/return l.input||function(){l.input=function(c){for(var d=0,e=c.length;d<e;d++)x[c[d]]=!!(c[d]in p);return x.list&&(x.list=!!(b.createElement('datalist')&&a.HTMLDataListElement)),x}(['autocomplete','autofocus','list','placeholder','max','min','multiple','pattern','required','step']),l.inputtypes=function(a){for(var c,d,e,f=0,g=a.length;f<g;f++)p.setAttribute('type',d=a[f]),c='text'!==p.type,c&&(p.value=':)',p.style.cssText='position:absolute;visibility:hidden;',/^range$/.test(d)&&void 0!==p.style.WebkitAppearance?(m.appendChild(p),e=b.defaultView,c=e.getComputedStyle&&'textfield'!==e.getComputedStyle(p,null).WebkitAppearance&&// Mobile android web browser has false positive, so must
// check the height to see if the widget is actually there.
0!==p.offsetHeight,m.removeChild(p)):/^(search|tel)$/.test(d)||(/^(url|email)$/.test(d)?c=p.checkValidity&&!1===p.checkValidity():c=':)'!=p.value)),w[a[f]]=!!c;return w}(['search','tel','url','email','datetime','date','month','week','time','datetime-local','number','range','color'])}(),l.addTest=function(a,b){if('object'==('undefined'==typeof a?'undefined':_typeof(a)))for(var c in a)k(a,c)&&l.addTest(c,a[c]);else{if(a=a.toLowerCase(),void 0!==l[a])// we're going to quit if you're trying to overwrite an existing test
// if we were to allow it, we'd do this:
//   var re = new RegExp("\\b(no-)?" + feature + "\\b");
//   docElement.className = docElement.className.replace( re, '' );
// but, no rly, stuff 'em.
return l;b='function'==typeof b?b():b,m.className+=' '+(b?'':'no-')+a,l[a]=b}return l;// allow chaining.
},c(''),n=p=null,(function(a,b){/*--------------------------------------------------------------------------*//**
         * Creates a style sheet with the given CSS text and adds it to the document.
         * @private
         * @param {Document} ownerDocument The document.
         * @param {String} cssText The CSS text.
         * @returns {StyleSheet} The style element.
         */function c(a,b){var c=a.createElement('p'),d=a.getElementsByTagName('head')[0]||a.documentElement;return c.innerHTML='x<style>'+b+'</style>',d.insertBefore(c.lastChild,d.firstChild)}/**
         * Returns the value of `html5.elements` as an array.
         * @private
         * @returns {Array} An array of shived element node names.
         */function d(){var a=q.elements;return'string'==typeof a?a.split(' '):a}/**
         * Returns the data associated to the given document
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Object} An object of data.
         */function e(a){var b=p[a._html5shiv];return b||(b={},o++,a._html5shiv=o,p[o]=b),b}/**
         * returns a shived element for the given nodeName and document
         * @memberOf html5
         * @param {String} nodeName name of the element
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived element.
         */function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;// Avoid adding some elements to fragments in IE < 9 because
// * Attributes like `name` or `type` cannot be set/changed once an element
//   is inserted into a document/fragment
// * Link elements with `src` attributes that are inaccessible, as with
//   a 403 response, will cause the tab/window to crash
// * Script elements appended to fragments will execute when their `src`
//   or `text` property is set
return f=d.cache[a]?d.cache[a].cloneNode():n.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||m.test(a)||f.tagUrn?f:d.frag.appendChild(f)}/**
         * returns a shived DocumentFragment for the given document
         * @memberOf html5
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived DocumentFragment.
         */function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),j=h.length;g<j;g++)f.createElement(h[g]);return f}/**
         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
         * @private
         * @param {Document|DocumentFragment} ownerDocument The document.
         * @param {Object} data of the document.
         */function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){//abort shiv
return q.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function('h,f','return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&('+// unroll the `createElement` calls
d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+');return n}')(q,b.frag)}/*--------------------------------------------------------------------------*//**
         * Shivs the given document.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */function i(a){a||(a=b);var d=e(a);return!q.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,// corrects block display not defined in IE6/7/8/9
'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}')),k||h(a,d),a}/*--------------------------------------------------------------------------*//**
         * The `html5` object is exposed so that more elements can be shived and
         * existing shiving can be detected on iframes.
         * @type Object
         * @example
         *
         * // options can be changed before the script is included
         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
         *//*jshint evil:true *//** version */var j,k,l=a.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,n=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,o=0,p={};/** Preset options *//** Used to skip problem elements *//** Not all elements can be cloned in IE **//** Detect whether the browser supports default html5 styles *//** Name of the expando, to work with multiple documents or to re-shiv one document *//** The id for the the documents expando *//** Cached data for each document *//** Detect whether the browser supports unknown elements */(function(){try{var c=b.createElement('a');c.innerHTML='<xyz></xyz>',j='hidden'in c,k=1==c.childNodes.length||function(){b.createElement('a');var a=b.createDocumentFragment();return'undefined'==typeof a.cloneNode||'undefined'==typeof a.createDocumentFragment||'undefined'==typeof a.createElement}()}catch(a){j=!0,k=!0}})();var q={/**
           * An array or space separated string of node names of the elements to shiv.
           * @memberOf html5
           * @type Array|String
           */elements:l.elements||'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',/**
           * current version of html5shiv
           */version:'3.7.0',/**
           * A flag to indicate that the HTML5 style sheet should be inserted.
           * @memberOf html5
           * @type Boolean
           */shivCSS:!1!==l.shivCSS,/**
           * Is equal to true if a browser supports creating unknown/HTML5 elements
           * @memberOf html5
           * @type boolean
           */supportsUnknownElements:k,/**
           * A flag to indicate that the document's `createElement` and `createDocumentFragment`
           * methods should be overwritten.
           * @memberOf html5
           * @type Boolean
           */shivMethods:!1!==l.shivMethods,/**
           * A string to describe the type of `html5` object ("default" or "default print").
           * @memberOf html5
           * @type String
           */type:'default',// shivs the document according to the specified `html5` object options
shivDocument:i,//creates a shived element
createElement:f,//creates a shived documentFragment
createDocumentFragment:g};/*--------------------------------------------------------------------------*/// expose html5
a.html5=q,i(b)}(this,b),l._version='2.8.3',l._prefixes=r,l._domPrefixes=t,l._cssomPrefixes=s,l.mq=function e(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return A('@media '+b+' { #modernizr { position: absolute; } }',function(b){d='absolute'==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},l.hasEvent=B,l.testProp=function(a){return g([a])},l.testAllProps=i,l.testStyles=A,l.prefixed=function(a,b,c){return b?i(a,b,c):i(a,'pfx')},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,'$1$2')+(// Add the new classes to the <html> element.
' js '+y.join(' ')),l)}(void 0,(void 0).document);