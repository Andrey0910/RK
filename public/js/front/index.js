/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(12);

__webpack_require__(11);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function _class(selector) {
        _classCallCheck(this, _class);

        this.container = document.querySelector(selector);
        this.list = this.container.firstElementChild;
        this.items = this.list.children;
        this.currentOffset = 50;
        this.buttonSlide = document.querySelector('#slide-button');
        this.countChecked = 0;

        this.list.addEventListener('click', this.clickHandler.bind(this));
        window.addEventListener('wheel', this.wheelHandler.bind(this));
    }

    _createClass(_class, [{
        key: 'wheelHandler',
        value: function wheelHandler(event) {
            var accHeight = this.container.clientHeight - 100;

            if (accHeight < 300) {
                this.buttonSlide.style.top = 50 + 'px';
                this.currentOffset = 50;
                return;
            };

            if (event.deltaY < 0) {
                if (!(this.currentOffset < 100)) {
                    this.currentOffset += event.deltaY;
                    this.buttonSlide.style.top = this.currentOffset + 'px';
                }
            } else {
                if (!(this.currentOffset > accHeight)) {
                    this.currentOffset += event.deltaY;
                    this.buttonSlide.style.top = this.currentOffset + 'px';
                }
            }
        }
    }, {
        key: 'clickHandler',
        value: function clickHandler(event) {

            if (event.target.className === 'accordeon-category__trigger') {
                event.preventDefault();

                var _this = event.target;
                var item = _this.parentNode;
                var classContainer = this.container.className;
                var container = _this.nextElementSibling;
                var content = container.firstElementChild;
                var innerItems = item.querySelector('.accordeon-category__inner-list');
                var active = innerItems.querySelector('.active');

                if (active != null) {

                    for (var i = 0; i < innerItems.children.length; i++) {
                        var _item = innerItems.children[i];

                        if (_item.className === 'accordeon-category__inner-item active') {
                            _item.querySelector('input').checked = false;
                        }

                        _item.style.display = 'inline-block';
                        _item.className = 'accordeon-category__inner-item';
                    }

                    this.countChecked--;

                    if (!this.countChecked) this.buttonSlide.style.display = 'none';

                    return;
                }

                if (!(_this.parentNode.className === classContainer + '__item ' + classContainer + '__item_active')) {
                    container.style.height = 'auto';
                    item.className = classContainer + '__item ' + classContainer + '__item_active';
                } else {
                    item.className = classContainer + '__item';
                    container.style.height = 0;
                }
            } else if (event.target.className === 'accordeon-category__link') {

                var currentItem = event.target.parentNode.parentNode;
                var currentList = currentItem.parentNode;
                var currentItems = currentList.children;

                if (!(currentItem.className === 'accordeon-category__inner-item active')) {
                    currentItem.className += ' active';
                    this.countChecked++;
                    this.buttonSlide.style.display = 'inline-block';

                    for (var _i = 0; _i < currentItems.length; _i++) {
                        if (currentItems[_i].className === 'accordeon-category__inner-item active') continue;
                        currentItems[_i].style.display = 'none';
                    }
                } else {
                    currentItem.className = 'accordeon-category__inner-item';
                    this.countChecked--;

                    for (var _i2 = 0; _i2 < currentItems.length; _i2++) {
                        currentItems[_i2].style.display = 'block';
                    }
                }

                if (!this.countChecked) {
                    this.buttonSlide.style.display = 'none';
                } else if (this.countChecked === 3) {
                    this.buttonSlide.style.top = 50 + 'px';
                    this.currentOffset = 50;
                }
            }
        }
    }]);

    return _class;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
    var overlay = document.querySelector('#overlay');
    var popupAuth = document.querySelector('#popup-auth');
    var register = document.querySelector('#register');
    var country = document.querySelector('#сountry');
    var buttonCountry = document.querySelector('#selectCountry');
    var registration = document.querySelector('#registration');
    var adv = document.querySelector('#adv_list');
    var buttonDiscus = document.querySelector('#button-discus');
    var chat = document.querySelector('#list-chat');
    var repass = document.querySelector('#repassword');
    var popuprepass = document.querySelector('#popup-repass');
    var triggerChat = false;
    var body = document.querySelector('body');

    repass.addEventListener('click', function (event) {
        event.preventDefault();
        overlay.className += ' popup-overlay_active';
        popuprepass.className += ' popup_active';
        body.className = 'hidden';
        popupAuth.className = 'popup';
    });

    adv.addEventListener('click', function (event) {
        if (event.target.className === 'adv__img' || event.target.className === 'adv__link') {
            event.preventDefault();
            overlay.className += ' popup-overlay_active';
            document.querySelector('#popup-company').className += ' popup_active';
            body.className = 'hidden';
        }
    });

    document.querySelector('#auth').addEventListener('click', function () {
        event.preventDefault();
        overlay.className += ' popup-overlay_active';
        popupAuth.className += ' popup_active';
        body.className = 'hidden';
    });

    overlay.addEventListener('click', function (event) {
        if (event.target.className === 'popup__close') {
            var selects = event.target.parentNode.querySelectorAll('select');

            event.target.parentNode.className = 'popup';
            event.currentTarget.className = 'popup-overlay';
            body.className = '';

            for (var i = 0; i < selects.length; i++) {
                selects[i].value = '';
            }

            chat.style.display = 'none';
        }
    });

    buttonCountry.addEventListener('click', function (event) {
        event.preventDefault();

        overlay.className += ' popup-overlay_active';
        country.className += ' popup_active';
        body.className = 'hidden';
    });

    country.addEventListener('change', function (event) {
        if (event.target.getAttribute('name') === 'all') {
            var allCountries = country.querySelectorAll('.form-auth__label');

            if (event.target.checked) {
                for (var i = 1; i < allCountries.length; i++) {
                    allCountries[i].firstElementChild.checked = true;
                }
            } else {
                for (var _i = 1; _i < allCountries.length; _i++) {
                    allCountries[_i].firstElementChild.checked = false;
                }
            }
        }
    });

    register.addEventListener('click', function (event) {
        event.preventDefault();
        popupAuth.className = 'popup';
        registration.className += ' popup_active';
        body.className = 'hidden';
    });

    document.querySelector('#authorization').addEventListener('click', function (event) {
        event.preventDefault();
        registration.className = 'popup';
        popupAuth.className += ' popup_active';
        body.className = 'hidden';
    });

    buttonDiscus.addEventListener('click', function () {
        if (!triggerChat) {
            triggerChat = true;
            chat.style.display = 'inline-block';
        } else {
            triggerChat = false;
            chat.style.display = 'none';
        }
    });
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function _class(selector) {
        _classCallCheck(this, _class);

        this.slider = document.querySelector(selector);
        this.classSlider = this.slider.className;
        this.container = this.slider.firstElementChild;
        this.list = this.container.firstElementChild;
        this.slides = this.list.children;
        this.controls = this.container.nextElementSibling;
        this.step = 100;
        this.slidePos = 0;

        if (this.slides.length <= 1) {
            this.controls.style.display = 'none';
        } else {
            this.controls.addEventListener('click', this.clickHendler.bind(this));
        }
    }

    _createClass(_class, [{
        key: 'clickHendler',
        value: function clickHendler(event) {
            if (event.target.tagName === 'A') {
                this.slideTo(event.target.id);
            }
        }
    }, {
        key: 'slideTo',
        value: function slideTo(vector) {
            var activeSlide = this.list.querySelector('.active');

            if (vector === 'next') {
                if (activeSlide.nextElementSibling) {
                    this.slidePos += this.step;
                    this.list.style.left = -this.slidePos + '%';

                    activeSlide.className = this.classSlider + '__item';
                    activeSlide.nextElementSibling.className += ' active';
                }
            } else {
                if (activeSlide.previousElementSibling) {
                    this.slidePos -= this.step;
                    this.list.style.left = -this.slidePos + '%';

                    activeSlide.className = this.classSlider + '__item';
                    activeSlide.previousElementSibling.className += ' active';
                }
            }
        }
    }]);

    return _class;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function _class(selector, count) {
        _classCallCheck(this, _class);

        this.count = count;
        this.counter = this.count;
        this.slideHeight = 0;
        this.container = document.querySelector(selector);
        this.list = this.container.firstElementChild;
        this.items = this.list.children;
        this.controls = this.container.nextElementSibling;
        this.initContainer(this.items, count);

        this.controls.addEventListener('click', this.clickHendler.bind(this));
        this.container.addEventListener('wheel', this.wheelHendler.bind(this));
    }

    _createClass(_class, [{
        key: 'initContainer',
        value: function initContainer(items, count) {
            var heightContainer = 0;

            for (var i = 0; i < count; i++) {
                heightContainer += items[i].clientHeight;
            }

            this.container.style.height = heightContainer + 'px';
        }
    }, {
        key: 'clickHendler',
        value: function clickHendler(event) {
            if (event.target.tagName === 'A') {
                event.preventDefault();

                this.vectorTo(event.target.id);
            }
        }
    }, {
        key: 'wheelHendler',
        value: function wheelHendler(event) {
            event.preventDefault();

            this.isAnimate = true;

            if (event.deltaY > 0) {
                this.vectorTo('down');
            } else {
                this.vectorTo('up');
            }
        }
    }, {
        key: 'vectorTo',
        value: function vectorTo(vector) {
            switch (vector) {
                case 'down':
                    if (this.items.length - this.counter > 0) {
                        this.slideTo(vector, this.items[this.counter].clientHeight);
                        this.counter++;
                    }
                    break;
                case 'up':
                    if (this.counter > this.count) {
                        this.counter--;
                        this.slideTo(vector, this.items[this.counter].clientHeight);
                    }
                    break;
            }
        }
    }, {
        key: 'slideTo',
        value: function slideTo(vector, slideHeight) {

            if (vector === 'down') {
                this.slideHeight -= slideHeight;
                this.list.style.top = this.slideHeight + 'px';
            } else if (vector === 'up') {
                this.slideHeight += slideHeight;
                this.list.style.top = this.slideHeight + 'px';
            }
        }
    }]);

    return _class;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var Acco = __webpack_require__(1);
var Slider = __webpack_require__(4);
var SliderHorizont = __webpack_require__(3);
var eventPopup = __webpack_require__(2);

var accordeonCategory = new Acco('.accordeon-category');
var sliderFirm = new Slider('.slider-firms__container', 10);
var sliderPopup = new SliderHorizont('.popup-slider');

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/1.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/2.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/2.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/accordeon-arrow.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/close.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/icon-firm.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/left.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/right.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/up.png";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjI5MGQ1M2YxOTBmNTQ3NjBhNzYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2ltcG9ydHMuY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9tb2R1bGVzL2FjY29yZGVvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbW9kdWxlcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbW9kdWxlcy9zbGlkZXItaG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbW9kdWxlcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2Uvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2ltZy8xLmpwZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvaW1nLzIuanBnIiwid2VicGFjazovLy8uL3NvdXJjZS9pbWcvMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2ltZy9hY2NvcmRlb24tYXJyb3cucG5nIiwid2VicGFjazovLy8uL3NvdXJjZS9pbWcvY2xvc2UucG5nIiwid2VicGFjazovLy8uL3NvdXJjZS9pbWcvaWNvbi1maXJtLnBuZyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvaW1nL2xlZnQucG5nIiwid2VicGFjazovLy8uL3NvdXJjZS9pbWcvcmlnaHQucG5nIiwid2VicGFjazovLy8uL3NvdXJjZS9pbWcvdXAucG5nIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxpc3QiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIml0ZW1zIiwiY2hpbGRyZW4iLCJjdXJyZW50T2Zmc2V0IiwiYnV0dG9uU2xpZGUiLCJjb3VudENoZWNrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tIYW5kbGVyIiwiYmluZCIsIndpbmRvdyIsIndoZWVsSGFuZGxlciIsImV2ZW50IiwiYWNjSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJ0b3AiLCJkZWx0YVkiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIl90aGlzIiwiaXRlbSIsInBhcmVudE5vZGUiLCJjbGFzc0NvbnRhaW5lciIsIm5leHRFbGVtZW50U2libGluZyIsImNvbnRlbnQiLCJpbm5lckl0ZW1zIiwiYWN0aXZlIiwiaSIsImxlbmd0aCIsImNoZWNrZWQiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiY3VycmVudEl0ZW0iLCJjdXJyZW50TGlzdCIsImN1cnJlbnRJdGVtcyIsIm92ZXJsYXkiLCJwb3B1cEF1dGgiLCJyZWdpc3RlciIsImNvdW50cnkiLCJidXR0b25Db3VudHJ5IiwicmVnaXN0cmF0aW9uIiwiYWR2IiwiYnV0dG9uRGlzY3VzIiwiY2hhdCIsInJlcGFzcyIsInBvcHVwcmVwYXNzIiwidHJpZ2dlckNoYXQiLCJib2R5Iiwic2VsZWN0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJhbGxDb3VudHJpZXMiLCJzbGlkZXIiLCJjbGFzc1NsaWRlciIsInNsaWRlcyIsImNvbnRyb2xzIiwic3RlcCIsInNsaWRlUG9zIiwiY2xpY2tIZW5kbGVyIiwidGFnTmFtZSIsInNsaWRlVG8iLCJpZCIsInZlY3RvciIsImFjdGl2ZVNsaWRlIiwibGVmdCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJjb3VudCIsImNvdW50ZXIiLCJzbGlkZUhlaWdodCIsImluaXRDb250YWluZXIiLCJ3aGVlbEhlbmRsZXIiLCJoZWlnaHRDb250YWluZXIiLCJ2ZWN0b3JUbyIsImlzQW5pbWF0ZSIsIkFjY28iLCJyZXF1aXJlIiwiU2xpZGVyIiwiU2xpZGVySG9yaXpvbnQiLCJldmVudFBvcHVwIiwiYWNjb3JkZW9uQ2F0ZWdvcnkiLCJzbGlkZXJGaXJtIiwic2xpZGVyUG9wdXAi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QkFBS3hFLElBQUwsQ0FBVWUsS0FBVixDQUFnQkMsR0FBaEIsR0FBeUIsS0FBS3dELFdBQTlCO0FBQ0gsYUFIRCxNQUdPLElBQUlOLFdBQVcsSUFBZixFQUFxQjtBQUN4QixxQkFBS00sV0FBTCxJQUFvQkEsV0FBcEI7QUFDQSxxQkFBS3hFLElBQUwsQ0FBVWUsS0FBVixDQUFnQkMsR0FBaEIsR0FBeUIsS0FBS3dELFdBQTlCO0FBQ0g7QUFDSjtBQXhFTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7OztBQ0FBOztBQUVBLElBQU1NLE9BQU8sbUJBQUFDLENBQVEsQ0FBUixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxtQkFBQUQsQ0FBUSxDQUFSLENBQWY7QUFDQSxJQUFNRSxpQkFBaUIsbUJBQUFGLENBQVEsQ0FBUixDQUF2QjtBQUNBLElBQU1HLGFBQWEsbUJBQUFILENBQVEsQ0FBUixDQUFuQjs7QUFFQSxJQUFNSSxvQkFBb0IsSUFBSUwsSUFBSixDQUFTLHFCQUFULENBQTFCO0FBQ0EsSUFBTU0sYUFBYSxJQUFJSixNQUFKLENBQVcsMEJBQVgsRUFBdUMsRUFBdkMsQ0FBbkI7QUFDQSxJQUFNSyxjQUFjLElBQUlKLGNBQUosQ0FBbUIsZUFBbkIsQ0FBcEIsQzs7Ozs7O0FDVEEseUM7Ozs7OztBQ0FBLHFEOzs7Ozs7QUNBQSxxRDs7Ozs7O0FDQUEscUQ7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSx5RDs7Ozs7O0FDQUEsNkQ7Ozs7OztBQ0FBLHdEOzs7Ozs7QUNBQSx5RDs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoianMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYyOTBkNTNmMTkwZjU0NzYwYTc2IiwiaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XHJcbmltcG9ydCAnLi4vaW1nLzEuanBnJztcclxuaW1wb3J0ICcuLi9pbWcvMi5qcGcnO1xyXG5pbXBvcnQgJy4uL2ltZy8yLnBuZyc7XHJcbmltcG9ydCAnLi4vaW1nL2FjY29yZGVvbi1hcnJvdy5wbmcnO1xyXG5pbXBvcnQgJy4uL2ltZy9pY29uLWZpcm0ucG5nJztcclxuaW1wb3J0ICcuLi9pbWcvY2xvc2UucG5nJztcclxuaW1wb3J0ICcuLi9pbWcvbGVmdC5wbmcnO1xyXG5pbXBvcnQgJy4uL2ltZy9yaWdodC5wbmcnO1xyXG5pbXBvcnQgJy4uL2ltZy91cC5wbmcnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9pbXBvcnRzLmNvbmZpZy5qcyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3Mge1xyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMuY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmxpc3QuY2hpbGRyZW47XHJcbiAgICAgICAgdGhpcy5jdXJyZW50T2Zmc2V0ID0gNTA7XHJcbiAgICAgICAgdGhpcy5idXR0b25TbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGlkZS1idXR0b24nKTtcclxuICAgICAgICB0aGlzLmNvdW50Q2hlY2tlZCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMubGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMud2hlZWxIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHdoZWVsSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGFjY0hlaWdodCA9IHRoaXMuY29udGFpbmVyLmNsaWVudEhlaWdodCAtIDEwMDtcclxuXHJcbiAgICAgICAgaWYgKGFjY0hlaWdodCA8IDMwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblNsaWRlLnN0eWxlLnRvcCA9IGAkezUwfXB4YDtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50T2Zmc2V0ID0gNTA7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChldmVudC5kZWx0YVkgPCAwKSB7XHJcbiAgICAgICAgICAgIGlmICghKHRoaXMuY3VycmVudE9mZnNldCA8IDEwMCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9mZnNldCArPSBldmVudC5kZWx0YVk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblNsaWRlLnN0eWxlLnRvcCA9IGAke3RoaXMuY3VycmVudE9mZnNldH1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoISh0aGlzLmN1cnJlbnRPZmZzZXQgPiBhY2NIZWlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPZmZzZXQgKz0gZXZlbnQuZGVsdGFZO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25TbGlkZS5zdHlsZS50b3AgPSBgJHt0aGlzLmN1cnJlbnRPZmZzZXR9cHhgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGlja0hhbmRsZXIoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdhY2NvcmRlb24tY2F0ZWdvcnlfX3RyaWdnZXInKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBfdGhpcyA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IF90aGlzLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzQ29udGFpbmVyID0gdGhpcy5jb250YWluZXIuY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBfdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGlubmVySXRlbXMgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRlb24tY2F0ZWdvcnlfX2lubmVyLWxpc3QnKTtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gaW5uZXJJdGVtcy5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aXZlICE9IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlubmVySXRlbXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gaW5uZXJJdGVtcy5jaGlsZHJlbltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NOYW1lID09PSAnYWNjb3JkZW9uLWNhdGVnb3J5X19pbm5lci1pdGVtIGFjdGl2ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ2FjY29yZGVvbi1jYXRlZ29yeV9faW5uZXItaXRlbSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRDaGVja2VkLS07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvdW50Q2hlY2tlZCkgdGhpcy5idXR0b25TbGlkZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCEoX3RoaXMucGFyZW50Tm9kZS5jbGFzc05hbWUgPT09IGAke2NsYXNzQ29udGFpbmVyfV9faXRlbSAke2NsYXNzQ29udGFpbmVyfV9faXRlbV9hY3RpdmVgKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gYCR7Y2xhc3NDb250YWluZXJ9X19pdGVtICR7Y2xhc3NDb250YWluZXJ9X19pdGVtX2FjdGl2ZWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IGAke2NsYXNzQ29udGFpbmVyfV9faXRlbWA7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdhY2NvcmRlb24tY2F0ZWdvcnlfX2xpbmsnKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TGlzdCA9IGN1cnJlbnRJdGVtLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtcyA9IGN1cnJlbnRMaXN0LmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEoY3VycmVudEl0ZW0uY2xhc3NOYW1lID09PSAnYWNjb3JkZW9uLWNhdGVnb3J5X19pbm5lci1pdGVtIGFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5jbGFzc05hbWUgKz0gJyBhY3RpdmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudENoZWNrZWQrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uU2xpZGUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJdGVtc1tpXS5jbGFzc05hbWUgPT09ICdhY2NvcmRlb24tY2F0ZWdvcnlfX2lubmVyLWl0ZW0gYWN0aXZlJykgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW1zW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5jbGFzc05hbWUgPSAnYWNjb3JkZW9uLWNhdGVnb3J5X19pbm5lci1pdGVtJztcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRDaGVja2VkLS07XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbXNbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jb3VudENoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uU2xpZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvdW50Q2hlY2tlZCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25TbGlkZS5zdHlsZS50b3AgPSBgJHs1MH1weGA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRPZmZzZXQgPSA1MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvbW9kdWxlcy9hY2NvcmRlb24uanMiLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcclxuICAgIGNvbnN0IHBvcHVwQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cC1hdXRoJyk7XHJcbiAgICBjb25zdCByZWdpc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3RlcicpO1xyXG4gICAgY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyPRgW91bnRyeScpO1xyXG4gICAgY29uc3QgYnV0dG9uQ291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RDb3VudHJ5Jyk7XHJcbiAgICBjb25zdCByZWdpc3RyYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0cmF0aW9uJyk7XHJcbiAgICBjb25zdCBhZHYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWR2Jyk7XHJcbiAgICBjb25zdCBidXR0b25EaXNjdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLWRpc2N1cycpO1xyXG4gICAgY29uc3QgY2hhdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0LWNoYXQnKTtcclxuICAgIGNvbnN0IHJlcGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXBhc3N3b3JkJyk7XHJcbiAgICBjb25zdCBwb3B1cHJlcGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cC1yZXBhc3MnKTtcclxuICAgIGxldCB0cmlnZ2VyQ2hhdCA9IGZhbHNlO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbiAgICByZXBhc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTmFtZSArPSAnIHBvcHVwLW92ZXJsYXlfYWN0aXZlJztcclxuICAgICAgICBwb3B1cHJlcGFzcy5jbGFzc05hbWUgKz0gJyBwb3B1cF9hY3RpdmUnO1xyXG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ2hpZGRlbic7XHJcbiAgICAgICAgcG9wdXBBdXRoLmNsYXNzTmFtZSA9ICdwb3B1cCc7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgYWR2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYWR2X19pbWcnIHx8IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdhZHZfX2xpbmsnKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NOYW1lICs9ICcgcG9wdXAtb3ZlcmxheV9hY3RpdmUnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdXAtY29tcGFueScpLmNsYXNzTmFtZSArPSAnIHBvcHVwX2FjdGl2ZSc7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ2hpZGRlbic7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F1dGgnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NOYW1lICs9ICcgcG9wdXAtb3ZlcmxheV9hY3RpdmUnO1xyXG4gICAgICAgIHBvcHVwQXV0aC5jbGFzc05hbWUgKz0gJyBwb3B1cF9hY3RpdmUnO1xyXG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ2hpZGRlbic7XHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAncG9wdXBfX2Nsb3NlJykge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RzID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgPSAncG9wdXAnO1xyXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSA9ICdwb3B1cC1vdmVybGF5JztcclxuICAgICAgICAgICAgYm9keS5jbGFzc05hbWUgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0c1tpXS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjaGF0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYnV0dG9uQ291bnRyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBvdmVybGF5LmNsYXNzTmFtZSArPSAnIHBvcHVwLW92ZXJsYXlfYWN0aXZlJztcclxuICAgICAgICBjb3VudHJ5LmNsYXNzTmFtZSArPSAnIHBvcHVwX2FjdGl2ZSc7XHJcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSAnaGlkZGVuJztcclxuICAgIH0pO1xyXG5cclxuICAgIGNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCduYW1lJykgPT09ICdhbGwnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbENvdW50cmllcyA9IGNvdW50cnkucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tYXV0aF9fbGFiZWwnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhbGxDb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxDb3VudHJpZXNbaV0uZmlyc3RFbGVtZW50Q2hpbGQuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFsbENvdW50cmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbENvdW50cmllc1tpXS5maXJzdEVsZW1lbnRDaGlsZC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJlZ2lzdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcG9wdXBBdXRoLmNsYXNzTmFtZSA9ICdwb3B1cCc7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uLmNsYXNzTmFtZSArPSAnIHBvcHVwX2FjdGl2ZSc7XHJcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSAnaGlkZGVuJztcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRob3JpemF0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZWdpc3RyYXRpb24uY2xhc3NOYW1lID0gJ3BvcHVwJztcclxuICAgICAgICBwb3B1cEF1dGguY2xhc3NOYW1lICs9ICcgcG9wdXBfYWN0aXZlJztcclxuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICdoaWRkZW4nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYnV0dG9uRGlzY3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICghdHJpZ2dlckNoYXQpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckNoYXQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjaGF0LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0cmlnZ2VyQ2hhdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjaGF0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL21vZHVsZXMvcG9wdXAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmNsYXNzU2xpZGVyID0gdGhpcy5zbGlkZXIuY2xhc3NOYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5jb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgdGhpcy5zbGlkZXMgPSB0aGlzLmxpc3QuY2hpbGRyZW47XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9IHRoaXMuY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICB0aGlzLnN0ZXAgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5zbGlkZVBvcyA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNsaWRlcy5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9scy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIZW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGlja0hlbmRsZXIoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlVG8oZXZlbnQudGFyZ2V0LmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVUbyh2ZWN0b3IpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVTbGlkZSA9IHRoaXMubGlzdC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGlmICh2ZWN0b3IgPT09ICduZXh0Jykge1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlUG9zICs9IHRoaXMuc3RlcDtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5zdHlsZS5sZWZ0ID0gYCR7LXRoaXMuc2xpZGVQb3N9JWA7XHJcblxyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2xpZGUuY2xhc3NOYW1lID0gYCR7dGhpcy5jbGFzc1NsaWRlcn1fX2l0ZW1gO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTmFtZSArPSAnIGFjdGl2ZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZlU2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZVBvcyAtPSB0aGlzLnN0ZXA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3Quc3R5bGUubGVmdCA9IGAkey10aGlzLnNsaWRlUG9zfSVgO1xyXG5cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlLmNsYXNzTmFtZSA9IGAke3RoaXMuY2xhc3NTbGlkZXJ9X19pdGVtYDtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NOYW1lICs9ICcgYWN0aXZlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9tb2R1bGVzL3NsaWRlci1ob3Jpem9udGFsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY291bnQpIHtcclxuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5jb3VudDtcclxuICAgICAgICB0aGlzLnNsaWRlSGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMuY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmxpc3QuY2hpbGRyZW47XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9IHRoaXMuY29udGFpbmVyLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICB0aGlzLmluaXRDb250YWluZXIodGhpcy5pdGVtcywgY291bnQpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hlbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLndoZWVsSGVuZGxlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Q29udGFpbmVyKGl0ZW1zLCBjb3VudCkge1xyXG4gICAgICAgIGxldCBoZWlnaHRDb250YWluZXIgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgaGVpZ2h0Q29udGFpbmVyICs9IGl0ZW1zW2ldLmNsaWVudEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodENvbnRhaW5lcn1weGA7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpY2tIZW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmVjdG9yVG8oZXZlbnQudGFyZ2V0LmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2hlZWxIZW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc0FuaW1hdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlY3RvclRvKCdkb3duJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52ZWN0b3JUbygndXAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmVjdG9yVG8odmVjdG9yKSB7XHJcbiAgICAgICAgc3dpdGNoICh2ZWN0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggLSB0aGlzLmNvdW50ZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZVRvKHZlY3RvciwgdGhpcy5pdGVtc1t0aGlzLmNvdW50ZXJdLmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRlciA+IHRoaXMuY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXItLTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlVG8odmVjdG9yLCB0aGlzLml0ZW1zW3RoaXMuY291bnRlcl0uY2xpZW50SGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVUbyh2ZWN0b3IsIHNsaWRlSGVpZ2h0KSB7XHJcblxyXG4gICAgICAgIGlmICh2ZWN0b3IgPT09ICdkb3duJykge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlSGVpZ2h0IC09IHNsaWRlSGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmxpc3Quc3R5bGUudG9wID0gYCR7dGhpcy5zbGlkZUhlaWdodH1weGA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2ZWN0b3IgPT09ICd1cCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZUhlaWdodCArPSBzbGlkZUhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnN0eWxlLnRvcCA9IGAke3RoaXMuc2xpZGVIZWlnaHR9cHhgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvbW9kdWxlcy9zbGlkZXIuanMiLCJpbXBvcnQgJy4vaW1wb3J0cy5jb25maWcnO1xyXG5cclxuY29uc3QgQWNjbyA9IHJlcXVpcmUoJy4vbW9kdWxlcy9hY2NvcmRlb24nKTtcclxuY29uc3QgU2xpZGVyID0gcmVxdWlyZSgnLi9tb2R1bGVzL3NsaWRlcicpO1xyXG5jb25zdCBTbGlkZXJIb3Jpem9udCA9IHJlcXVpcmUoJy4vbW9kdWxlcy9zbGlkZXItaG9yaXpvbnRhbCcpO1xyXG5jb25zdCBldmVudFBvcHVwID0gcmVxdWlyZSgnLi9tb2R1bGVzL3BvcHVwJyk7XHJcblxyXG5jb25zdCBhY2NvcmRlb25DYXRlZ29yeSA9IG5ldyBBY2NvKCcuYWNjb3JkZW9uLWNhdGVnb3J5Jyk7XHJcbmNvbnN0IHNsaWRlckZpcm0gPSBuZXcgU2xpZGVyKCcuc2xpZGVyLWZpcm1zX19jb250YWluZXInLCAxMCk7XHJcbmNvbnN0IHNsaWRlclBvcHVwID0gbmV3IFNsaWRlckhvcml6b250KCcucG9wdXAtc2xpZGVyJyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlL2pzL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2Uvc2Nzcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nLzEuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2UvaW1nLzEuanBnXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy8yLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2ltZy8yLmpwZ1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvMi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9pbWcvMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FjY29yZGVvbi1hcnJvdy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9pbWcvYWNjb3JkZW9uLWFycm93LnBuZ1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Nsb3NlLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2ltZy9jbG9zZS5wbmdcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9pY29uLWZpcm0ucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2UvaW1nL2ljb24tZmlybS5wbmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sZWZ0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2ltZy9sZWZ0LnBuZ1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3JpZ2h0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2ltZy9yaWdodC5wbmdcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy91cC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9pbWcvdXAucG5nXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9