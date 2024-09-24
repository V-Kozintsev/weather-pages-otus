(()=>{"use strict";var n={180:(n,e,r)=>{r.d(e,{A:()=>s});var t=r(601),o=r.n(t),i=r(314),a=r.n(i)()(o());a.push([n.id,".search-history-container {\n  width: 20rem;\n  height: 35rem;\n  border: 2px solid black;\n  border-radius: 5px;\n  text-align: center;\n}\n.search-history-title {\n  margin: 1rem;\n  font-size: 1.8rem;\n  text-decoration: underline;\n}\n.search-history-item {\n  font-size: 1.6rem;\n}\n.search-history-item {\n  margin-bottom: 10px; /* Задаем отступ снизу */\n}\n\n.search-history-item:last-child {\n  margin-bottom: 0; /* Убираем отступ у последнего элемента */\n}\n",""]);const s=a},50:(n,e,r)=>{r.d(e,{A:()=>s});var t=r(601),o=r.n(t),i=r(314),a=r.n(i)()(o());a.push([n.id,".map-section {\n  display: flex;\n}\n\n#map {\n  width: 40rem;\n  height: 30rem;\n  margin-top: 1rem;\n}\n.weather-info-section {\n  border: 2px solid black;\n  border-radius: 5px;\n  width: 20rem;\n  height: 30rem;\n  margin-left: 1rem;\n  margin-top: 1rem;\n  text-align: center;\n}\n.weather-description {\n  font-size: 1.8rem;\n  text-decoration: underline;\n}\n",""]);const s=a},489:(n,e,r)=>{r.d(e,{A:()=>s});var t=r(601),o=r.n(t),i=r(314),a=r.n(i)()(o());a.push([n.id,".weather-container {\n  margin-right: 5rem;\n}\n.city-input-group {\n  display: flex;\n}\n.city-input {\n  width: 40rem;\n  height: 4rem;\n  border-radius: 5px;\n  border: 2px solid rgb(0, 0, 0);\n  padding: 1rem;\n  font-size: 1.8rem;\n  transition: border 0.3s ease;\n}\n\n.city-input:focus {\n  border: 2px solid rgb(0, 183, 255);\n  outline: none;\n}\n\n.submit-button {\n  width: 20rem;\n  height: 4rem;\n  border: 2px solid black;\n  border-radius: 5px;\n  background-color: white;\n  font-size: 1.8rem;\n  transition: 0.3s ease;\n  margin-left: 0.8rem;\n}\n.submit-button:hover {\n  cursor: pointer;\n  background-color: rgb(0, 183, 255);\n  color: white;\n  border: 2px solid black;\n}\n",""]);const s=a},523:(n,e,r)=>{r.d(e,{A:()=>l});var t=r(601),o=r.n(t),i=r(314),a=r.n(i),s=r(489),c=r(50),d=r(180),u=a()(o());u.i(s.A),u.i(c.A),u.i(d.A),u.push([n.id,'*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nli {\n  list-style-type: none;\n}\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: "Poppins", sans-serif;\n  color: #444;\n  background-color: #f3f3f3;\n  height: 100vh;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  max-width: 100rem;\n  padding: 2.5rem;\n  margin: 0 auto;\n}\n.search-history-container {\n  display: block;\n  width: 100%;\n}\n',""]);const l=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);t&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=r(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,t);t.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var c=t(n,o),d=0;d<i.length;d++){var u=r(i[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=c}}},659:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0;var t=r(72),o=r.n(t),i=r(825),a=r.n(i),s=r(659),c=r.n(s),d=r(56),u=r.n(d),l=r(540),p=r.n(l),f=r(113),m=r.n(f),h=r(523),b={};b.styleTagTransform=m(),b.setAttributes=u(),b.insert=c().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=p(),o()(h.A,b),h.A&&h.A.locals&&h.A.locals,console.log("Hello world"),document.querySelector(".submit-button").style.backgroundColor="red"})();