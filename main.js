/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={180:(t,n,e)=>{e.d(n,{A:()=>c});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([t.id,".search-history-container {\n  width: 20rem;\n  height: 35rem;\n  border: 2px solid black;\n  border-radius: 5px;\n  text-align: center;\n  margin-left: 5rem;\n}\n.search-history-item:hover {\n  cursor: pointer;\n  color: rgb(0, 183, 255);\n}\n.search-history-title {\n  margin: 1rem;\n  font-size: 1.8rem;\n  text-decoration: underline;\n}\n.search-history-item {\n  font-size: 1.6rem;\n}\n.search-history-item {\n  margin-bottom: 1px; /* Задаем отступ снизу */\n}\n\n.search-history-item:last-child {\n  margin-bottom: 0; /* Убираем отступ у последнего элемента */\n}\n\n@media (max-width: 1023px) {\n  .search-history-container {\n    max-width: 18rem;\n    margin-left: 1rem;\n  }\n  .search-history-title,\n  .search-history-item {\n    font-size: 14px;\n  }\n}\n",""]);const c=a},50:(t,n,e)=>{e.d(n,{A:()=>c});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([t.id,".map-section {\n  display: flex;\n  width: 100%;\n}\n\n.map {\n  width: 400px;\n  height: 300px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1rem;\n}\n\n.weather-info-section {\n  border: 2px solid black;\n  border-radius: 5px;\n  width: 20rem;\n  height: 30rem;\n  margin-left: 1rem;\n  margin-top: 1rem;\n  text-align: center;\n}\n.weather-description {\n  font-size: 1.8rem;\n  text-decoration: underline;\n}\n\n@media (max-width: 1023px) {\n  .map,\n  .weather-info-section {\n    width: 100%;\n  }\n  .weather-description {\n    font-size: 1.4rem;\n  }\n  .map-section {\n    display: flex;\n    justify-content: space-between;\n  }\n  .div,\n  .weather-info-section {\n    padding: 10px;\n  }\n  .div {\n    flex: 7;\n  }\n  .weather-info-section {\n    flex: 3;\n  }\n  .map {\n    width: 100%;\n    height: 100%;\n  }\n}\n",""]);const c=a},489:(t,n,e)=>{e.d(n,{A:()=>c});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([t.id,".weather-container,\n.weather-form-section {\n  width: 100%;\n}\n.city-input-group {\n  display: flex;\n}\n.city-input {\n  width: 40rem;\n  height: 4rem;\n  border-radius: 5px;\n  border: 2px solid rgb(0, 0, 0);\n  padding: 1rem;\n  font-size: 1.8rem;\n  transition: border 0.3s ease;\n  margin-right: 0.8rem;\n}\n\n.city-input:focus {\n  border: 2px solid rgb(0, 183, 255);\n  outline: none;\n}\n\n.submit-button {\n  width: 20rem;\n  height: 4rem;\n  border: 2px solid black;\n  border-radius: 5px;\n  background-color: white;\n  font-size: 1.8rem;\n  transition: 0.3s ease;\n  /* margin-left: 0.8rem; */\n}\n.submit-button:hover {\n  cursor: pointer;\n  background-color: rgb(0, 183, 255);\n  color: white;\n  border: 2px solid black;\n}\n@media (max-width: 1023px) {\n  .city-input,\n  .submit-button {\n    width: 100%; /* Заполняем доступное пространство */\n    height: auto; /* Высота не фиксирована, чтобы сохранять соотношение сторон */\n  }\n}\n",""]);const c=a},523:(t,n,e)=>{e.d(n,{A:()=>h});var r=e(601),o=e.n(r),i=e(314),a=e.n(i),c=e(489),s=e(50),u=e(180),l=a()(o());l.i(c.A),l.i(s.A),l.i(u.A),l.push([t.id,'*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nli {\n  list-style-type: none;\n}\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: "Poppins", sans-serif;\n  color: #444;\n  background-color: #f3f3f3;\n  height: 100vh;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  max-width: 100rem;\n  padding: 2.5rem;\n  margin: 0 auto;\n}\n.search-history-container {\n  display: block;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .header {\n    max-width: 100rem;\n    padding: 0.5rem;\n    flex-direction: column;\n  }\n  .search-history-container {\n    margin-top: 2rem;\n  }\n}\n',""]);const h=l},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,h="".concat(u," ").concat(l);i[u]=l+1;var f=e(h),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var d=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:h,updater:d,references:1})}a.push(h)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var s=r(t,o),u=0;u<i.length;u++){var l=e(i[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},659:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0;var r=e(72),o=e.n(r),i=e(825),a=e.n(i),c=e(659),s=e.n(c),u=e(56),l=e.n(u),h=e(540),f=e.n(h),p=e(113),d=e.n(p),m=e(523),y={};function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(){g=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function l(t,n,e,r){var i=n&&n.prototype instanceof x?n:x,a=Object.create(i.prototype),c=new N(r||[]);return o(a,"_invoke",{value:_(t,e,c)}),a}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var f="suspendedStart",p="suspendedYield",d="executing",m="completed",y={};function x(){}function b(){}function w(){}var E={};u(E,a,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(P([])));k&&k!==e&&r.call(k,a)&&(E=k);var j=w.prototype=x.prototype=Object.create(E);function S(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function O(t,n){function e(o,i,a,c){var s=h(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==v(l)&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function _(n,e,r){var o=f;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=A(c,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var u=h(n,e,r);if("normal"===u.type){if(o=r.done?m:p,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=m,r.method="throw",r.arg=u.arg)}}}function A(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,A(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=h(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function I(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function T(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function P(n){if(n||""===n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(v(n)+" is not iterable")}return b.prototype=w,o(j,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=u(w,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},S(O.prototype),u(O.prototype,c,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new O(l(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(j),u(j,s,"Generator"),u(j,a,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=P,N.prototype={constructor:N,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;T(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:P(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}function x(t,n,e,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,o)}function b(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(t){x(i,r,o,a,c,"next",t)}function c(t){x(i,r,o,a,c,"throw",t)}a(void 0)}))}}y.styleTagTransform=d(),y.setAttributes=l(),y.insert=s().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=f(),o()(m.A,y),m.A&&m.A.locals&&m.A.locals;var w="f7f0f48145544647b19130539240210",E=document.getElementById("form-input"),L=document.getElementById("weather-icon"),k=document.getElementById("btn"),j=document.getElementById("search-history"),S=document.getElementById("map"),O=[];function _(t,n){var e="https://static-maps.yandex.ru/1.x/?ll=".concat(n,",").concat(t,"&z=10&l=map");S.src=e}function A(t,n){document.getElementById("city").innerText="Город: ".concat(t),document.getElementById("temp").innerText="Температура: ".concat(n,"°C")}function I(){return(I=b(g().mark((function t(n){var e,r,o,i,a,c,s,u,l,h,f,p;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=document.createElement("li")).classList.add("search-history-item"),r="https://api.weatherapi.com/v1/current.json?key=".concat(w,"&q=").concat(n,"&aqi=no"),t.prev=3,t.next=6,fetch(r);case 6:if((o=t.sent).ok){t.next=9;break}throw new Error("Ошибка сети");case 9:return t.next=11,o.json();case 11:i=t.sent,a=i.location.name,c=Math.floor(i.current.temp_c),s=i.location.lon,u=i.location.lat,l="https:".concat(i.current.condition.icon),L.src=l,h={city:a,temp:c},localStorage.setItem("city",JSON.stringify(h)),f=localStorage.getItem("city"),p=JSON.parse(f),!1===O.some((function(t){return t.city===h.city}))&&(O.push(p),e.textContent=h.city,j.appendChild(e)),j.childNodes.length>10&&(j.removeChild(j.childNodes[0]),O.shift()),_(u,s),A(a,c),e.addEventListener("click",(function(t){t.preventDefault(),A(p.city,p.temp),L.src=l,_(u,s)})),t.next=33;break;case 30:t.prev=30,t.t0=t.catch(3),console.error("Ошибка запроса",t.t0);case 33:case"end":return t.stop()}}),t,null,[[3,30]])})))).apply(this,arguments)}function T(){return T=b(g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:navigator.geolocation.getCurrentPosition(function(){var t=b(g().mark((function t(n){var e,r,o,i,a,c,s,u;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.coords,r=e.latitude,o=e.longitude,t.next=3,fetch("https://api.weatherapi.com/v1/current.json?key=".concat(w,"&q=").concat(r,",").concat(o,"&aqi=no"));case 3:return i=t.sent,t.next=6,i.json();case 6:a=t.sent,c=a.location.name,s=Math.floor(a.current.temp_c),u="https:".concat(a.current.condition.icon),L.src=u,_(r,o),A(c,s);case 13:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)}))),T.apply(this,arguments)}k.addEventListener("click",(function(t){t.preventDefault(),function(t){I.apply(this,arguments)}(E.value.trim()),E.value=""})),function(){T.apply(this,arguments)}()})();