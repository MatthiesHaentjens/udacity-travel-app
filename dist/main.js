var Client=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}([function(t,e,r){t.exports=r(5)},function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[r].concat(i).concat([o]).join("\n")}var a,c,u;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),e.push(u))}},e}},function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,r){"use strict";e.a=r.p+"5565bb8115ce9ec58e33ef359b8562a4.jpg"},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function d(){}function p(){}function f(){}var h={};h[o]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(L([])));v&&v!==e&&r.call(v,o)&&(h=v);var g=f.prototype=d.prototype=Object.create(h);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=g.constructor=f,f.constructor=p,p.displayName=c(f,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(x.prototype),x.prototype[i]=function(){return this},t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),c(g,a,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){var n=r(7),o=r(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);t.exports=o.locals||{}},function(t,e,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),a=[];function c(t){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===t){e=r;break}return e}function u(t,e){for(var r={},n=[],o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],s=r[u]||0,l="".concat(u," ").concat(s);r[u]=s+1;var d=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:l,updater:v(p,e),references:1}),n.push(l)}return n}function s(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h=null,m=0;function v(t,e){var r,n,o;if(e.singleton){var i=m++;r=h||(h=s(e)),n=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else r=s(e),n=f.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=u(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=c(r[n]);a[o].references--}for(var i=u(t,e),s=0;s<r.length;s++){var l=c(r[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}r=i}}}},function(t,e,r){"use strict";r.r(e);var n=r(2),o=r.n(n),i=r(3),a=r.n(i),c=r(4),u=o()(!1),s=a()(c.a);u.push([t.i,'html,body{height:100%}body{background-color:lightyellow;margin:0px}.container{display:grid;grid-template-columns:2.5% 1fr 2.5%;grid-template-rows:70px 1fr 1fr 1fr 100px;grid-template-areas:"header header header" ". plannedlist ." ". wishlist ." ". expiredlist ." "footer footer footer";height:100%}.cards:empty::before{content:"No trips yet";font-family:\'Grandstander\', cursive;color:gray}.page-header{grid-area:header;display:flex;flex-direction:row;align-items:center;justify-content:space-between;position:sticky;top:0;background-color:orange}.logo{grid-area:header;height:50px;margin-left:10px}.add-trip-button{grid-area:header;width:160px;height:50px;margin-right:10px}#popup-form{display:none;grid-area:plannedlist-start / plannedlist-start / expiredlist-end / expiredlist-end;background-image:url('+s+");background-size:cover;z-index:1;margin:25px 0px 25px 0px}.add-trip-popup{display:flex;flex-direction:column;justify-content:center;align-items:stretch;background-color:lightyellow;margin:200px;padding-bottom:30px}.form{display:flex;flex-direction:column;align-items:center}.form-title{display:flex;align-items:center;justify-content:center;height:50px;width:100%;margin:0;background-color:lightseagreen;font-size:26px}.save-trip{width:375px;height:40px;margin-top:20px;background-color:green;color:white;font-size:16px;border-radius:5px;border:solid 2px green}.section-title{color:darkorange;font-family:'Anton', sans-serif;align-self:start}.planned-trips{grid-area:plannedlist;display:flex;flex-direction:column}.travel-card{display:flex;flex-direction:row;border:3px solid orange;border-radius:3px;background-color:papayawhip;width:95%;margin-bottom:20px;font-family:'Grandstander', cursive}.destination-pic{width:40%;object-fit:cover}.travel-details{margin:10px}.type-of-trip{margin-bottom:10px}.travel-locations{margin-bottom:10px}.travel-times{margin-bottom:10px}.wish-list{grid-area:wishlist;display:flex;flex-direction:column}.trip-down-memory-lane{grid-area:expiredlist;display:flex;flex-direction:column}.page-footer{grid-area:footer;display:flex;background-color:orange;width:100%;font-family:'Grandstander', cursive}\n",""]),e.default=u},function(t,e,r){"use strict";r.r(e),r.d(e,"openAddTripPopup",(function(){return f})),r.d(e,"getTripDetails",(function(){return h})),r.d(e,"createCard",(function(){return v})),r.d(e,"getCoordinates",(function(){return c})),r.d(e,"getWeatherForecast",(function(){return u})),r.d(e,"getHistoricalWeather",(function(){return s})),r.d(e,"getDestinationPicture",(function(){return l})),r.d(e,"postData",(function(){return m}));var n=r(0),o=r.n(n),i=r(1),a=r.n(i),c=function(){var t=a()(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.geonames.org/searchJSON?q="+e+"&maxRows=1&username=matthies");case 2:return r=t.sent,t.prev=3,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(3),console.log("error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=a()(o.a.mark((function t(e,r){var n,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.weatherbit.io/v2.0/forecast/daily?&lat="+e+"&lon="+r+"&key=88034f45d76e48dd9032d139b923cb75");case 2:return n=t.sent,t.prev=3,t.next=6,n.json();case 6:return i=t.sent,t.abrupt("return",i);case 10:t.prev=10,t.t0=t.catch(3),console.log("error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e,r){return t.apply(this,arguments)}}(),s=function(){var t=a()(o.a.mark((function t(e,r,n,i){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://api.weatherbit.io/v2.0/history/daily?&lat="+e+"&lon="+r+"&start_date="+n+"&end_date="+i+"&key=88034f45d76e48dd9032d139b923cb75");case 2:return a=t.sent,t.prev=3,t.next=6,a.json();case 6:return c=t.sent,t.abrupt("return",c);case 10:t.prev=10,t.t0=t.catch(3),console.log("error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e,r,n,o){return t.apply(this,arguments)}}();function l(t){return d.apply(this,arguments)}function d(){return(d=a()(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pixabay.com/api/?key=18368092-2f6753a5375f790506b119b7a&q="+e+"&image_type=photo&category=travel&per_page=3");case 2:return r=t.sent,t.prev=3,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(3),console.log("error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))).apply(this,arguments)}var p={};function f(t){document.getElementById("popup-form").style.display="block"}function h(t){t.preventDefault(),p.tripType=document.querySelector(".trip-checkbox:checked").value,p.startingPoint=document.getElementById("starting-point").value,p.destination=document.getElementById("destination").value,p.departureDate=document.getElementById("departure-date").value,p.endDate=document.getElementById("end-date").value;try{c(p.destination).then((function(t){var e=t.geonames[0].lat,r=t.geonames[0].lng;return u(e,r)})).then((function(t){return p.minTemp=t.data[0].min_temp,p.maxTemp=t.data[0].max_temp,l(p.destination)})).then((function(t){return p.destinationPicture=t.hits[0].webformatURL,console.log(p),console.log(p.tripType),m("/add",{tripType:p.tripType,startingPoint:p.startingPoint,destination:p.destination,destinationPicture:p.destinationPicture,departureDate:p.departureDate,endDate:p.endDate,minTemp:p.minTemp,maxTemp:p.maxTemp})})).then((function(){v()}))}catch(t){console.log("error",t)}document.getElementById("popup-form").style.display="none",document.getElementById("form").reset()}var m=function(){var t=a()(o.a.mark((function t(){var e,r,n,i,a=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",r=a.length>1&&void 0!==a[1]?a[1]:{},t.next=4,fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 4:return n=t.sent,t.prev=5,t.next=8,n.json();case 8:return i=t.sent,t.abrupt("return",i);case 12:t.prev=12,t.t0=t.catch(5),console.log("error",t.t0);case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=a()(o.a.mark((function t(){var e,r,n,i,a,c,u,s,l,d,p,f;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/all");case 2:return e=t.sent,t.prev=3,t.next=6,e.json();case 6:r=t.sent,n=document.getElementById(r.tripType),i=document.createElement("div"),a=document.createElement("img"),c=document.createElement("div"),u=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),d=document.createElement("div"),p=document.createElement("button"),f=document.createElement("button"),i.appendChild(a),i.appendChild(c),c.appendChild(u),c.appendChild(s),c.appendChild(l),c.appendChild(d),c.appendChild(p),c.appendChild(f),n.appendChild(i),i.setAttribute("class","travel-card"),a.setAttribute("src",r.destinationPicture),a.setAttribute("class","destination-pic"),c.setAttribute("class","travel-details"),u.setAttribute("class","days-to-departure"),u.innerHTML="Your trip to "+r.destination+" starts in [data.daysToGo] days",s.setAttribute("class","travel-locations"),s.innerHTML="Traveling from "+r.startingPoint+" to "+r.destination,l.setAttribute("class","travel-locations"),l.innerHTML="Departing on "+r.departureDate+" and coming back on "+r.endDate,d.setAttribute("class","typical-weather"),d.innerHTML="On your arrival day the temparature is between "+r.minTemp+" - "+r.maxTemp,f.setAttribute("class","remove-trip-button"),f.onclick=function(){this.closest(".travel-card").remove()},f.innerHTML="REMOVE TRIP",t.next=46;break;case 43:t.prev=43,t.t0=t.catch(3),console.log("error",t.t0);case 46:case"end":return t.stop()}}),t,null,[[3,43]])})));return function(){return t.apply(this,arguments)}}();r(6),r.p}]);