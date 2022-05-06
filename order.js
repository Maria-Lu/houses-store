(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return(r="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(s,e);var t,u,a,l,f=(a=s,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=i(a);if(l){var n=i(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function s(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=f.call(this,t))._title=e.name,n._count=e.count,n._price=e.price,n._total=e.price*e.count,n}return t=s,(u=[{key:"createElement",value:function(){return this._element=r(i(s.prototype),"_getTemplate",this).call(this),this._element.querySelector(".order__item-qty").textContent=this._count,this._element.querySelector(".order__item-details_content_name").textContent=this._title,this._element.querySelector(".order__item-details_content_total").textContent="$".concat(this._total),this._element.querySelector(".order__item-price").textContent=this._price,this._element}}])&&n(t.prototype,u),s}(function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._elementSelector=e}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._elementSelector).content.cloneNode(!0)}}])&&e(n.prototype,r),t}());function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._container=document.querySelector(n),this._renderer=o}var t,n;return t=e,(n=[{key:"setItem",value:function(e){this._container.append(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this.clear(),this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&a(t.prototype,n),e}(),f=JSON.parse(localStorage.getItem("orderInfo")),s=document.querySelector(".order__amount"),y=document.querySelector(".order__id"),p=document.querySelector(".order__discount"),_=document.querySelector(".order__qty");if(f){var m=new l({data:f.items,renderer:function(e){m.setItem(new u(e,".order-item-template").createElement())}},".order__items");m.renderItems(),1===f.qty?_.textContent="".concat(f.qty," house"):_.textContent="".concat(f.qty," houses"),s.textContent="".concat(f.amount),p.textContent="".concat(f.discount),y.textContent=f.id,localStorage.clear()}})();