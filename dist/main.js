(()=>{"use strict";var e,t,a,n,o,r,i,s,d,l,c,p,u,f,m={169:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(81),o=a.n(n),r=a(645),i=a.n(r)()(o());i.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}/*! HTML5 Boilerplate v8.0.0 | MIT License | https://html5boilerplate.com/ */html{color:#222;font-size:1em;line-height:1.4}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}body{background:#000}h1{color:#461369;font-size:4em;padding:10px;text-align:center}section,aside{padding:10px}.parallax{perspective:1px;height:100vh;overflow-x:hidden;overflow-y:auto}.parallax-layer{position:absolute;top:0;right:0;bottom:0;left:0;padding:100vh 0}.foreground{transform:translateZ(0)}.midground{transform:translateZ(-1px)}.background{transform:translateZ(-2px)}.parallax-header{font-size:2em;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.hidden,[hidden]{display:none !important}.visually-hidden{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.visually-hidden.focusable:active,.visually-hidden.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;white-space:inherit;width:auto}.invisible{visibility:hidden}.clearfix::before,.clearfix::after{content:"";display:table}.clearfix::after{clear:both}@media print{*,*::before,*::after{background:#fff !important;color:#000 !important;box-shadow:none !important;text-shadow:none !important}a,a:visited{text-decoration:underline}a[href]::after{content:" (" attr(href) ")"}abbr[title]::after{content:" (" attr(title) ")"}a[href^="#"]::after,a[href^="javascript:"]::after{content:""}pre{white-space:pre-wrap !important}pre,blockquote{border:1px solid #999;page-break-inside:avoid}tr,img{page-break-inside:avoid}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}}.headImage{display:block;margin-left:auto;margin-right:auto;margin-top:1em;height:180px}.container{max-width:1200px;margin:0 auto;background:#90ee90;display:grid;width:100vw;height:100vh;grid-template-columns:1fr 2fr 1fr;grid-template-areas:"heady heady heady" "navvy navvy navvy" "aside1 mainy aside2" "aside1 mainy aside2" "aside1 mainy aside2" "footy footy footy"}header{grid-area:heady;background:#ffb6c1}nav{grid-area:navvy;background:#ffa07a}main{grid-area:mainy;background:#20b2aa;max-height:100%}#aside1{grid-area:aside1;background:#87cefa}#aside2{grid-area:aside2;background:#b0c4de}footer{grid-area:footy;background:#ffffe0}nav ul{display:flex;flex-flow:row nowrap;justify-content:space-around}nav ul li{list-style:none}@media screen and (min-width: 641px)and (max-width: 900px){.container{grid-template-columns:1fr 1fr;grid-template-areas:"heady heady" "navvy navvy" "mainy mainy" "aside1 aside2" "footy footy"}}@media screen and (max-width: 640px){.container{grid-template-columns:1fr;grid-template-areas:"heady" "mainy" "aside1" "aside2" "navvy" "footy"}nav ul{flex-flow:column nowrap;text-align:center}nav ul li a{display:block;padding:10px 5px;margin:5px;border:1px #000 solid;background:#fff}}.matrix-grid{display:grid;grid-template:100vh/33% 33% 33%;height:350vh}.matrix-column{width:.5em;color:lime}',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",n=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),n&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),n&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,n,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);n&&i[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),a&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=a):c[2]=a),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function a(e){for(var a=-1,n=0;n<t.length;n++)if(t[n].identifier===e){a=n;break}return a}function n(e,n){for(var r={},i=[],s=0;s<e.length;s++){var d=e[s],l=n.base?d[0]+n.base:d[0],c=r[l]||0,p="".concat(l," ").concat(c);r[l]=c+1;var u=a(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=o(f,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,o){var r=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=a(r[i]);t[s].references--}for(var d=n(e,o),l=0;l<r.length;l++){var c=a(r[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=d}}},569:e=>{var t={};e.exports=function(e,a){var n=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var n="";a.supports&&(n+="@supports (".concat(a.supports,") {")),a.media&&(n+="@media ".concat(a.media," {"));var o=void 0!==a.layer;o&&(n+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),n+=a.css,o&&(n+="}"),a.media&&(n+="}"),a.supports&&(n+="}");var r=a.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},h={};function b(e){var t=h[e];if(void 0!==t)return t.exports;var a=h[e]={id:e,exports:{}};return m[e](a,a.exports,b),a.exports}b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},b.d=(e,t)=>{for(var a in t)b.o(t,a)&&!b.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=b(379),t=b.n(e),a=b(795),n=b.n(a),o=b(569),r=b.n(o),i=b(565),s=b.n(i),d=b(216),l=b.n(d),c=b(589),p=b.n(c),u=b(169),(f={}).styleTagTransform=p(),f.setAttributes=s(),f.insert=r().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=l(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals})();