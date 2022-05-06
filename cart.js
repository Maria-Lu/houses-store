(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,n){return(r="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(f,t);var e,a,c,s,l=(c=f,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=u(c);if(s){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return i(this,t)});function f(t,e,n,r,o,i,u){var a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(a=l.call(this,e))._title=t.name,a._price=t.price,a._id=t.id,a._count=t.count,a._cart=n,a._applyPromo=o,a._totalSum=i,a._handleDeleteCard=u,a._setTotalQty=r,a}return e=f,(a=[{key:"createElement",value:function(){return this._element=r(u(f.prototype),"_getTemplate",this).call(this),this._element.querySelector(".goods-item__title").textContent=this._title,this._element.querySelector(".goods-item__price").textContent="$".concat(this._price),this._elementQty=this._element.querySelector(".goods-item__input"),this._elementQty.value=this._count,this._elementQty.dataset.id=this._id,this._elementButton=this._element.querySelector(".goods-item__button-delete"),this._setEventListener(),this._element}},{key:"_setEventListener",value:function(){this._elementQty.addEventListener("input",this._editCount.bind(this)),this._elementButton.addEventListener("click",this._handleDeleteCard.bind(this))}},{key:"_editCount",value:function(){this._cart[this._elementQty.dataset.id].count=+this._elementQty.value,localStorage.setItem("cart",JSON.stringify(this._cart)),this._applyPromo(),this._setTotalQty()}}])&&n(e.prototype,a),f}(function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._elementSelector=t}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._elementSelector).content.cloneNode(!0)}}])&&t(n.prototype,r),e}());function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e,n){var r=e.data,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._container=document.querySelector(n),this._renderer=o}var e,n;return e=t,(n=[{key:"setItem",value:function(t){this._container.append(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var t=this;this.clear(),this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&c(e.prototype,n),t}();function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(e,n){var r=e.inputSelector,o=e.submitButtonSelector,i=e.inactiveButtonClass,u=e.inputErrorClass,a=e.inactiveInputClass;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=r,this._submitButtonSelector=o,this._inactiveButtonClass=i,this._inputErrorClass=u,this._inactiveInputClass=a,this._formElement=n}var e,n;return e=t,(n=[{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)).filter((function(t){return"promo"!==t.name})),this._promoInputElement=Array.from(this._formElement.querySelectorAll(this._inputSelector)).find((function(t){return"promo"===t.name})),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._promoInputElement.addEventListener("input",(function(){t._checkPromoInputValidity()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?t.classList.remove(this._inputErrorClass):t.classList.add(this._inputErrorClass)}},{key:"_checkPromoInputValidity",value:function(){this.isPromoValid()?this._promoInputElement.classList.remove(this._inputErrorClass):this._promoInputElement.classList.add(this._inputErrorClass)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this.disableButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"isPromoValid",value:function(){return"1010"===this._promoInputElement.value}},{key:"disableButton",value:function(){this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"disableInputs",value:function(){var t=this;this._inputs=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._inputs.forEach((function(e){e.setAttribute("disabled",!0),e.classList.add(t._inactiveInputClass)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&l(e.prototype,n),t}();function _(){return Object.values(JSON.parse(localStorage.getItem("cart")))}function m(){return _().reduce((function(t,e){return t+e.count}),0)}function h(){var t,e;t=m(),(e=document.querySelector(".header__counter")).textContent=t,t?e.classList.add("header__counter_visible"):e.classList.remove("header__counter_visible"),localStorage.setItem("totalQty",JSON.stringify(m()))}var p=JSON.parse(localStorage.getItem("cart")),d=document.querySelector(".cart__form"),y=d.querySelector(".cart__button"),v=document.querySelector(".cart__total-sum"),b=document.querySelector(".cart__input-promo"),S=document.querySelector(".cart__title"),E=new f({formSelector:".cart__form",inputSelector:".input",submitButtonSelector:".cart__button",inactiveButtonClass:"cart__button_disabled",inputErrorClass:"input_error",inactiveInputClass:"input_disabled"},d);function g(){for(var t in p)if(p.hasOwnProperty(t))return!1;return!0}function C(){g()&&(v.textContent=0,S.textContent="Your cart is empty",E.disableButton(),E.disableInputs())}if(p&&!g()){var I=new s({data:_(),renderer:function(t){var e;I.setItem(new a(e=t,".cart-template",p,O,h,v,(function(t){t.target.closest(".goods-item").remove(),E.isPromoValid()?v.textContent-=p[e.id].price*p[e.id].count*.9:v.textContent-=p[e.id].price*p[e.id].count,delete p[e.id],localStorage.setItem("cart",JSON.stringify(p)),C(),h()})).createElement())}},".cart__goods");function k(){return _().reduce((function(t,e){return t+e.count*e.price}),0)}function O(){E.isPromoValid()?v.textContent=.9*k():v.textContent=k()}function L(t){return Math.floor(Math.random()*Math.floor(t))}I.renderItems(),E.enableValidation(),v.textContent=k(),b.addEventListener("input",O),y.addEventListener("click",(function(){var t,e={};e.items=_(),e.qty=m(),e.amount="$".concat(v.textContent),e.id="".concat(L(7777),"-").concat(L(9999)),e.discount="$".concat((t=0,E.isPromoValid()&&(t=v.textContent/.9-v.textContent),t)),localStorage.setItem("orderInfo",JSON.stringify(e))})),h()}else C()})();