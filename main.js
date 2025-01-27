/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t,e,n,r,o,a,i={497:(t,e,n)=>{n.a(t,(async(t,e)=>{try{n(511);var r=n(97),o=t([r]);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(){u=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",p=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new C(r||[]);return o(i,"_invoke",{value:j(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function b(){}function w(){}function x(){}var k={};l(k,i,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(A([])));L&&L!==n&&r.call(L,i)&&(k=L);var S=x.prototype=b.prototype=Object.create(k);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(o,a,i,u){var s=f(t[o],t,a);if("throw"!==s.type){var p=s.arg,l=p.value;return l&&"object"==c(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):e.resolve(l).then((function(t){p.value=t,i(p)}),(function(t){return n("throw",t,i,u)}))}u(s.arg)}var a;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function j(e,n,r){var o=h;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=P(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var s=f(e,n,r);if("normal"===s.type){if(o=r.done?v:y,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=v,r.method="throw",r.arg=s.arg)}}}function P(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,P(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=f(o,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(c(e)+" is not iterable")}return w.prototype=x,o(S,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=l(x,p,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,p,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},_(T.prototype),l(T.prototype,s,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new T(d(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(S),l(S,p,"Generator"),l(S,i,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function l(t){var e=d(t,"string");return"symbol"==c(e)?e:e+""}function d(t,e){if("object"!=c(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function f(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){f(a,r,o,i,c,"next",t)}function c(t){f(a,r,o,i,c,"throw",t)}i(void 0)}))}}r=(o.then?(await o)():o)[0];var a="f7f0f48145544647b19130539240210";function y(t){var e=t.toLocaleDateString("ru-RU",{weekday:"short"}),n=t.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"});return"".concat(e,", ").concat(n)}function m(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=document.querySelector(".displayWeatherInfo"),a='\n      <p class="weather-description" id="city">'.concat(t,'°C</p>\n      <p class="weather-description" id="temp">').concat(e,"</p>\n       ");n&&(a+='<img id="weather-icon" src="'.concat(n,'" alt="Иконка погоды" />')),r&&(a+='\n       <p class="weather-description">Дата и время: '.concat(r.formattedTime,'</p>\n        <p class="weather-description">Скорость ветра: ').concat(r.windKph,' km/h</p>\n      <p class="weather-description">Влажность: ').concat(r.humidity,"%</p>\n        ")),o.innerHTML=a}function v(t,e){return g.apply(this,arguments)}function g(){return(g=h(u().mark((function t(e,n){var o,a,i,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.ready;case 2:o=r.YMap,a=r.YMapDefaultSchemeLayer,(i=document.getElementById("map")).map?i.map.update({location:{center:[e,n],zoom:10}}):((c=new o(i,{location:{center:[e,n],zoom:10}})).addChild(new a),i.map=c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t,e){return w.apply(this,arguments)}function w(){return(w=h(u().mark((function t(e,n){var r,o,i,c,s,p,l,d,f;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.weatherapi.com/v1/current.json?key=".concat(a,"&q=").concat(e,",").concat(n,"&aqi=no"));case 3:if((r=t.sent).ok){t.next=6;break}throw new Error("API не получен");case 6:return t.next=8,r.json();case 8:o=t.sent,i=Math.floor(o.current.temp_c),c=o.location.name,s="https:".concat(o.current.condition.icon),p=o.current.wind_kph,l=o.current.humidity,d=new Date(o.location.localtime),f=y(d),m(i,c,s,{windKph:p,humidity:l,formattedTime:f}),v(n,e),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(0),console.error("Ошибка запроса:",t.t0),m("Ошибка","Произошла ошибка при обращении к серверу","",null);case 24:case"end":return t.stop()}}),t,null,[[0,20]])})))).apply(this,arguments)}function x(t){return k.apply(this,arguments)}function k(){return(k=h(u().mark((function t(e){var n,r,o,c,s,p,l,d,f,h,g,b;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.weatherapi.com/v1/current.json?key=".concat(a,"&q=").concat(e,"&aqi=no"));case 3:if((n=t.sent).ok){t.next=8;break}return m("Ошибка","Ошибка HTTP: ".concat(n.status," ").concat(n.statusText),"",null),console.error("Ошибка запроса:","Ошибка HTTP: ".concat(n.status," ").concat(n.statusText)),t.abrupt("return");case 8:return t.next=10,n.json();case 10:if((r=t.sent)&&r.location&&r.current){t.next=15;break}return m("Ошибка","Неверный формат ответа от API","",null),console.error("Ошибка запроса: Неверный формат ответа от API",r),t.abrupt("return");case 15:o=Math.floor(r.current.temp_c),c=r.location.name,s=r.location,p=s.lon,l=s.lat,d="https:".concat(r.current.condition.icon),f=r.current.wind_kph,h=r.current.humidity,g=new Date(r.location.localtime),b=y(g),m(o,c,d,{windKph:f,humidity:h,formattedTime:b}),v(p,l),i.addCity(c,o),t.next=32;break;case 28:t.prev=28,t.t0=t.catch(0),console.error("Ошибка запроса:",t.t0),m("Ошибка","Произошла ошибка при обращении к серверу","",null);case 32:case"end":return t.stop()}}),t,null,[[0,28]])})))).apply(this,arguments)}function E(){var t=window.location.hash.slice(1);t.startsWith("weather/")?x(t.slice(8)):navigator.geolocation.getCurrentPosition((function(t){var e=t.coords,n=e.latitude,r=e.longitude;b(n,r),v(r,n)}))}document.getElementById("search-form").addEventListener("submit",(function(t){t.preventDefault();var e=document.getElementById("inputCity").value.trim();window.location.hash="weather/".concat(e),document.getElementById("inputCity").value=""}));var i=new(function(){return t=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"weatherHistory";s(this,t),this.key=e,this.weatherData=this.loadData(),this.displayHistory()},(e=[{key:"addCity",value:function(t,e){this.weatherData.some((function(e){return e.city===t}))||(this.weatherData.push({city:t,temp:e}),this.saveData(),this.displayHistory())}},{key:"saveData",value:function(){localStorage.setItem(this.key,JSON.stringify(this.weatherData))}},{key:"loadData",value:function(){var t=localStorage.getItem(this.key);return t?JSON.parse(t):[]}},{key:"getHistory",value:function(){return this.weatherData}},{key:"displayHistory",value:function(){var t=document.getElementById("history");t.innerHTML="",this.weatherData.forEach((function(e){var n=document.createElement("p");n.textContent="".concat(e.city,": ").concat(e.temp,"°C"),n.addEventListener("click",(function(){window.location.hash="weather/".concat(e.city)})),t.appendChild(n)}))}},{key:"delHistory",value:function(){var t=document.getElementById("history");this.weatherData=[],t.innerHTML="",localStorage.removeItem(this.key)}}])&&p(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}());window.addEventListener("hashchange",E),E(),document.getElementById("delHistory").addEventListener("click",(function(){i.delHistory()})),e()}catch(L){e(L)}}))},208:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([t.id,"/* Общие стили */\nbody {\n  font-family: sans-serif;\n  background-color: #f4f7f6;\n  color: #333;\n  margin: 0;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 95vh;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%; /* Занимает всю доступную ширину body */\n}\n\nh1 {\n  color: #007bff;\n  margin-bottom: 20px;\n}\n\n/* Форма ввода */\n#app form {\n  display: flex;\n  margin-bottom: 10px;\n}\n#app input {\n  padding: 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  margin-right: 10px;\n  font-size: 16px;\n}\n\n#app input:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);\n}\n\n#app button {\n  padding: 12px 20px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n  transition: background-color 0.3s ease;\n  margin-bottom: 20px;\n}\n\n#app button:hover {\n  background-color: #0056b3;\n}\n\n#app button:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n\n/* Карта */\n#app #map {\n  width: 80%;\n  height: 300px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n\n/* Информация о погоде */\n#app .displayWeatherInfo {\n  width: 80%;\n  padding: 20px;\n  background-color: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n#app .weather-description {\n  font-size: 20px;\n  margin-bottom: 5px;\n}\n#app #weather-icon {\n  width: 60px;\n  height: 60px;\n}\n#app .week-forecast {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 20px;\n}\n\n#app .forecast-item {\n  text-align: center;\n}\n\n#app .forecast-item img {\n  width: 50px;\n  height: 50px;\n  margin: 10px 0;\n}\n\n/* История поиска */\n#app #history {\n  width: 80%;\n  background-color: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  margin-bottom: 20px;\n  max-height: 300px; /* Максимальная высота блока */\n  overflow-y: auto; /* Включает вертикальный скролл */\n}\n\n#app #history p {\n  padding: 10px;\n  margin-bottom: 5px;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  font-size: 16px;\n}\n\n#app #history p:hover {\n  background-color: #f0f0f0;\n}\n\n#app #delHistory {\n  padding: 10px;\n  background-color: #dc3545;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n  transition: background-color 0.3s ease;\n  margin-bottom: 20px;\n}\n\n#app #delHistory:hover {\n  background-color: #c82333;\n}\n",""]);const c=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<t.length;s++){var p=[].concat(t[s]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},601:t=>{t.exports=function(t){return t[1]}},511:(t,e,n)=>{var r=n(72),o=n.n(r),a=n(825),i=n.n(a),c=n(659),u=n.n(c),s=n(56),p=n.n(s),l=n(540),d=n.n(l),f=n(113),h=n.n(f),y=n(208),m={};m.styleTagTransform=h(),m.setAttributes=p(),m.insert=u().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),o()(y.A,m),y.A&&y.A.locals&&y.A.locals},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],p=a[s]||0,l="".concat(s," ").concat(p);a[s]=p+1;var d=n(l),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var u=r(t,o),s=0;s<a.length;s++){var p=n(a[s]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=u}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},97:(t,e,n)=>{var r=new Error;t.exports=new Promise(((t,e)=>{if("undefined"!=typeof ymaps3)return t();n.l("https://api-maps.yandex.ru/v3/?apikey=b053285a-f157-45bf-9726-cec55b7deb89&lang=ru_RU",(n=>{if("undefined"!=typeof ymaps3)return t();var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;r.message="Loading script failed.\n("+o+": "+a+")",r.name="ScriptExternalLoadError",r.type=o,r.request=a,e(r)}),"ymaps3")})).then((()=>ymaps3))}},c={};function u(t){var e=c[t];if(void 0!==e)return e.exports;var n=c[t]={id:t,exports:{}};return i[t](n,n.exports,u),n.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=t=>{t&&t.d<1&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},u.a=(o,a,i)=>{var c;i&&((c=[]).d=-1);var u,s,p,l=new Set,d=o.exports,f=new Promise(((t,e)=>{p=e,s=t}));f[e]=d,f[t]=t=>(c&&t(c),l.forEach(t),f.catch((t=>{}))),o.exports=f,a((o=>{var a;u=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var a=[];a.d=0,o.then((t=>{i[e]=t,r(a)}),(t=>{i[n]=t,r(a)}));var i={};return i[t]=t=>t(a),i}}var c={};return c[t]=t=>{},c[e]=o,c})))(o);var i=()=>u.map((t=>{if(t[n])throw t[n];return t[e]})),s=new Promise((e=>{(a=()=>e(i)).r=0;var n=t=>t!==c&&!l.has(t)&&(l.add(t),t&&!t.d&&(a.r++,t.push(a)));u.map((e=>e[t](n)))}));return a.r?s:i()}),(t=>(t?p(f[n]=t):s(d),r(c)))),c&&c.d<0&&(c.d=0)},u.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return u.d(e,{a:e}),e},u.d=(t,e)=>{for(var n in e)u.o(e,n)&&!u.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},u.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o={},a="weather-pages-otus:",u.l=(t,e,n,r)=>{if(o[t])o[t].push(e);else{var i,c;if(void 0!==n)for(var s=document.getElementsByTagName("script"),p=0;p<s.length;p++){var l=s[p];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==a+n){i=l;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",a+n),i.src=t),o[t]=[e];var d=(e,n)=>{i.onerror=i.onload=null,clearTimeout(f);var r=o[t];if(delete o[t],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((t=>t(n))),e)return e(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}},u.nc=void 0,u(497)})();