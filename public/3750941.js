(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{225:function(t,e,r){var map={"./eiger-jaket-coklat1.jpg":236,"./eiger-jaket-coklat2.jpg":237,"./eiger-jaket-hitam.jpg":238,"./kaos-polos.jpg":239,"./kaos-polos1.jpg":240,"./koketo-miter-abu.jpg":241,"./koketo-miter-hitam.jpg":242,"./koketo-miter-navy1.jpg":243,"./koketo-miter-navy2.jpg":244,"./koketo-miter-navy3.jpg":245,"./koketo-york-cream.jpg":246,"./koketo-york-denim-sol-hitam1.jpg":247,"./koketo-york-denim-sol-hitam2.jpg":248,"./koketo-york-denim-sol-hitam3.jpg":249,"./redknot-t-shirt-abu.jpg":250,"./redknot-t-shirt-hitam.jpg":251,"./redknot-t-shirt-navy1.jpg":252,"./redknot-t-shirt-navy2.jpg":253,"./shoes-redknot.jpg":254,"./test-carousel1.jpg":255,"./test-carousel2.jpg":256,"./test-carousel3.jpg":257};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=225},230:function(t,e,r){var n=r(223),o=r(275),c=r(227),l=r(276),f=r(284),d=r(308),v=o("wks"),h=n.Symbol,m=d?h:h&&h.withoutSetter||l;t.exports=function(t){return c(v,t)||(f&&c(h,t)?v[t]=h[t]:v[t]=m("Symbol."+t)),v[t]}},236:function(t,e,r){t.exports=r.p+"img/eiger-jaket-coklat1.40f2ba5.jpg"},237:function(t,e,r){t.exports=r.p+"img/eiger-jaket-coklat2.cdd5b3a.jpg"},238:function(t,e,r){t.exports=r.p+"img/eiger-jaket-hitam.f7dbaf6.jpg"},239:function(t,e,r){t.exports=r.p+"img/kaos-polos.93c73e3.jpg"},240:function(t,e,r){t.exports=r.p+"img/kaos-polos1.47b0381.jpg"},241:function(t,e,r){t.exports=r.p+"img/koketo-miter-abu.9f24b4d.jpg"},242:function(t,e,r){t.exports=r.p+"img/koketo-miter-hitam.5df68ba.jpg"},243:function(t,e,r){t.exports=r.p+"img/koketo-miter-navy1.c32eff8.jpg"},244:function(t,e,r){t.exports=r.p+"img/koketo-miter-navy2.50fa1e7.jpg"},245:function(t,e,r){t.exports=r.p+"img/koketo-miter-navy3.8a4d8df.jpg"},246:function(t,e,r){t.exports=r.p+"img/koketo-york-cream.491ce03.jpg"},247:function(t,e,r){t.exports=r.p+"img/koketo-york-denim-sol-hitam1.f6f57b1.jpg"},248:function(t,e,r){t.exports=r.p+"img/koketo-york-denim-sol-hitam2.49709d6.jpg"},249:function(t,e,r){t.exports=r.p+"img/koketo-york-denim-sol-hitam3.8a14bb4.jpg"},250:function(t,e,r){t.exports=r.p+"img/redknot-t-shirt-abu.c71cf9f.jpg"},251:function(t,e,r){t.exports=r.p+"img/redknot-t-shirt-hitam.6860ecc.jpg"},252:function(t,e,r){t.exports=r.p+"img/redknot-t-shirt-navy1.0e39f00.jpg"},253:function(t,e,r){t.exports=r.p+"img/redknot-t-shirt-navy2.a4a5e3e.jpg"},254:function(t,e,r){t.exports=r.p+"img/shoes-redknot.3adedb9.jpg"},255:function(t,e,r){t.exports=r.p+"img/test-carousel1.d73dd0b.jpg"},256:function(t,e,r){t.exports=r.p+"img/test-carousel2.4b41c85.jpg"},257:function(t,e,r){t.exports=r.p+"img/test-carousel3.6f7667e.jpg"},264:function(t,e,r){"use strict";function n(t,e,r,n,o,c,l){try{var f=t[c](l),d=f.value}catch(t){return void r(t)}f.done?e(d):Promise.resolve(d).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var l=t.apply(e,r);function f(t){n(l,o,c,f,d,"next",t)}function d(t){n(l,o,c,f,d,"throw",t)}f(void 0)}))}}r.d(e,"a",(function(){return o}))},265:function(t,e,r){"use strict";var n,o,c=r(318),l=r(319),f=RegExp.prototype.exec,d=String.prototype.replace,v=f,h=(n=/a/,o=/b*/g,f.call(n,"a"),f.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),m=l.UNSUPPORTED_Y||l.BROKEN_CARET,x=void 0!==/()??/.exec("")[1];(h||x||m)&&(v=function(t){var e,r,n,i,o=this,l=m&&o.sticky,v=c.call(o),source=o.source,y=0,k=t;return l&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),k=String(t).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==t[o.lastIndex-1])&&(source="(?: "+source+")",k=" "+k,y++),r=new RegExp("^(?:"+source+")",v)),x&&(r=new RegExp("^"+source+"$(?!\\s)",v)),h&&(e=o.lastIndex),n=f.call(l?r:o,k),l?n?(n.input=n.input.slice(y),n[0]=n[0].slice(y),n.index=o.lastIndex,o.lastIndex+=n[0].length):o.lastIndex=0:h&&n&&(o.lastIndex=o.global?n.index+n[0].length:e),x&&n&&n.length>1&&d.call(n[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n}),t.exports=v},284:function(t,e,r){var n=r(224);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},285:function(t,e,r){var n=r(226),o=r(224),c=r(227),l=Object.defineProperty,f={},d=function(t){throw t};t.exports=function(t,e){if(c(f,t))return f[t];e||(e={});var r=[][t],v=!!c(e,"ACCESSORS")&&e.ACCESSORS,h=c(e,0)?e[0]:d,m=c(e,1)?e[1]:void 0;return f[t]=!!r&&!o((function(){if(v&&!n)return!0;var t={length:-1};v?l(t,1,{enumerable:!0,get:d}):t[1]=1,r.call(t,h,m)}))}},286:function(t,e,r){"use strict";var n=r(231),o=r(265);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},287:function(t,e,r){},301:function(t,e,r){"use strict";var n=r(231),o=r(302).filter,c=r(309),l=r(285),f=c("filter"),d=l("filter");n({target:"Array",proto:!0,forced:!f||!d},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},302:function(t,e,r){var n=r(303),o=r(268),c=r(305),l=r(279),f=r(306),d=[].push,v=function(t){var e=1==t,r=2==t,v=3==t,h=4==t,m=6==t,x=7==t,y=5==t||m;return function(k,j,w,E){for(var S,C,O=c(k),R=o(O),P=n(j,w,3),_=l(R.length),I=0,A=E||f,$=e?A(k,_):r||x?A(k,0):void 0;_>I;I++)if((y||I in R)&&(C=P(S=R[I],I,O),t))if(e)$[I]=C;else if(C)switch(t){case 3:return!0;case 5:return S;case 6:return I;case 2:d.call($,S)}else switch(t){case 4:return!1;case 7:d.call($,S)}return m?-1:v||h?h:$}};t.exports={forEach:v(0),map:v(1),filter:v(2),some:v(3),every:v(4),find:v(5),findIndex:v(6),filterOut:v(7)}},303:function(t,e,r){var n=r(304);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(a){return t.call(e,a)};case 2:return function(a,b){return t.call(e,a,b)};case 3:return function(a,b,r){return t.call(e,a,b,r)}}return function(){return t.apply(e,arguments)}}},304:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},305:function(t,e,r){var n=r(235);t.exports=function(t){return Object(n(t))}},306:function(t,e,r){var n=r(228),o=r(307),c=r(230)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[c])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},307:function(t,e,r){var n=r(234);t.exports=Array.isArray||function(t){return"Array"==n(t)}},308:function(t,e,r){var n=r(284);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},309:function(t,e,r){var n=r(224),o=r(230),c=r(310),l=o("species");t.exports=function(t){return c>=51||!n((function(){var e=[];return(e.constructor={})[l]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},310:function(t,e,r){var n,o,c=r(223),l=r(281),f=c.process,d=f&&f.versions,v=d&&d.v8;v?o=(n=v.split("."))[0]+n[1]:l&&(!(n=l.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=l.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},311:function(t,e,r){"use strict";var n=r(231),o=r(278).includes,c=r(312);n({target:"Array",proto:!0,forced:!r(285)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c("includes")},312:function(t,e,r){var n=r(230),o=r(313),c=r(233),l=n("unscopables"),f=Array.prototype;null==f[l]&&c.f(f,l,{configurable:!0,value:o(null)}),t.exports=function(t){f[l][t]=!0}},313:function(t,e,r){var n,o=r(229),c=r(314),l=r(263),f=r(261),html=r(316),d=r(271),v=r(274),h=v("IE_PROTO"),m=function(){},x=function(content){return"<script>"+content+"<\/script>"},y=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,iframe;y=n?function(t){t.write(x("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((iframe=d("iframe")).style.display="none",html.appendChild(iframe),iframe.src=String("javascript:"),(t=iframe.contentWindow.document).open(),t.write(x("document.F=Object")),t.close(),t.F);for(var e=l.length;e--;)delete y.prototype[l[e]];return y()};f[h]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(m.prototype=o(t),r=new m,m.prototype=null,r[h]=t):r=y(),void 0===e?r:c(r,e)}},314:function(t,e,r){var n=r(226),o=r(233),c=r(229),l=r(315);t.exports=n?Object.defineProperties:function(t,e){c(t);for(var r,n=l(e),f=n.length,d=0;f>d;)o.f(t,r=n[d++],e[r]);return t}},315:function(t,e,r){var n=r(277),o=r(263);t.exports=Object.keys||function(t){return n(t,o)}},316:function(t,e,r){var n=r(262);t.exports=n("document","documentElement")},317:function(t,e,r){var n=r(226),o=r(233).f,c=Function.prototype,l=c.toString,f=/^\s*function ([^ (]*)/;n&&!("name"in c)&&o(c,"name",{configurable:!0,get:function(){try{return l.call(this).match(f)[1]}catch(t){return""}}})},318:function(t,e,r){"use strict";var n=r(229);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},319:function(t,e,r){"use strict";var n=r(224);function o(s,t){return RegExp(s,t)}e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},320:function(t,e,r){"use strict";var n=r(231),o=r(321),c=r(235);n({target:"String",proto:!0,forced:!r(323)("includes")},{includes:function(t){return!!~String(c(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},321:function(t,e,r){var n=r(322);t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},322:function(t,e,r){var n=r(228),o=r(234),c=r(230)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==o(t))}},323:function(t,e,r){var n=r(230)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(t){}}return!1}},324:function(t,e,r){"use strict";var n=r(325),o=r(229),c=r(235),l=r(326),f=r(327);n("search",1,(function(t,e,r){return[function(e){var r=c(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var c=o(t),d=String(this),v=c.lastIndex;l(v,0)||(c.lastIndex=0);var h=f(c,d);return l(c.lastIndex,v)||(c.lastIndex=v),null===h?-1:h.index}]}))},325:function(t,e,r){"use strict";r(286);var n=r(272),o=r(224),c=r(230),l=r(265),f=r(232),d=c("species"),v=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),h="$0"==="a".replace(/./,"$0"),m=c("replace"),x=!!/./[m]&&""===/./[m]("a","$0"),y=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,m){var k=c(t),j=!o((function(){var e={};return e[k]=function(){return 7},7!=""[t](e)})),w=j&&!o((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[d]=function(){return r},r.flags="",r[k]=/./[k]),r.exec=function(){return e=!0,null},r[k](""),!e}));if(!j||!w||"replace"===t&&(!v||!h||x)||"split"===t&&!y){var E=/./[k],S=r(k,""[t],(function(t,e,r,n,o){return e.exec===l?j&&!o?{done:!0,value:E.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:h,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:x}),C=S[0],O=S[1];n(String.prototype,t,C),n(RegExp.prototype,k,2==e?function(t,e){return O.call(t,this,e)}:function(t){return O.call(t,this)})}m&&f(RegExp.prototype[k],"sham",!0)}},326:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},327:function(t,e,r){var n=r(234),o=r(265);t.exports=function(t,e){var r=t.exec;if("function"==typeof r){var c=r.call(t,e);if("object"!=typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},328:function(t,e,r){"use strict";r(287)},330:function(t,e,r){"use strict";r.r(e);r(301),r(311),r(317),r(286),r(320),r(324),r(282);var n=r(264),o={layout:"catalog",data:function(){return{search:"",products:[],productsFilter:[]}},watch:{search:function(){this.filterProduct(),this.showClearIcon()},"$store.state.category":function(){this.filterProduct()},"$store.state.minPrice":function(){this.filterProduct()},"$store.state.maxPrice":function(){this.filterProduct()}},mounted:function(){this.loadProducts()},methods:{loadProducts:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/product");case 2:t.products=e.sent,t.productInit();case 4:case"end":return e.stop()}}),e)})))()},productInit:function(){this.productsFilter=this.products},showClearIcon:function(){var t=document.getElementById("search-clear-icon");""===this.search?t.style.display="":t.style.display="flex"},clearSearch:function(){this.search=""},filterProduct:function(){var t=this,e=this.$store.state.category,r=this.$store.state.minPrice,n=this.$store.state.maxPrice;0!==this.$store.state.maxPrice?this.productsFilter=this.products.filter((function(o){return o.name.toLowerCase().includes(t.search.toLowerCase())&&o.category.toLowerCase().includes(e.toLowerCase())&&o.price>=r&&o.price<=n})):this.productsFilter=this.products.filter((function(n){return n.name.toLowerCase().includes(t.search.toLowerCase())&&n.category.toLowerCase().includes(e.toLowerCase())&&n.price>=r}))},productDetail:function(t){this.$router.push("/product/"+t)}}},c=(r(328),r(8)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"catalog-container"},[n("div",{staticClass:"search-bar"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search product",name:"search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),n("a",{attrs:{id:"search-clear-icon"},on:{click:t.clearSearch}},[t._v("✖")])]),t._v(" "),n("div",{staticClass:"product"},t._l(t.productsFilter,(function(e){return n("div",{key:e.id,staticClass:"product-card",on:{click:function(r){return t.productDetail(e.id)}}},[n("img",{staticClass:"product-image",attrs:{src:r(225)("./"+e.primaryImage),alt:"product image"}}),t._v(" "),n("div",{staticClass:"product-attr"},[n("div",{staticClass:"product-name"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("div",{staticClass:"product-price"},[t._v("\n          Rp. "+t._s(Number(e.price).toLocaleString("id"))+"\n        ")])])])})),0),t._v(" "),0===t.productsFilter.length?n("div",{staticClass:"not-found"},[t._v("\n    Oops, product not found...\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);