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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function _class(selector) {
        _classCallCheck(this, _class);

        this.selector = document.querySelectorAll(selector);
        this.container = this.selector[0];
        this.list = this.container.firstElementChild;
        this.listSecond = this.selector[1].firstElementChild;
        this.items = this.list.children;
        this.currentOffset = 50;
        this.buttonSlide = this.container.parentNode.querySelector('#slide-button');
        this.countChecked = 0;

        this.list.addEventListener('click', this.clickHandler.bind(this));
        this.listSecond.addEventListener('click', this.clickHandler.bind(this));
        window.addEventListener('wheel', this.wheelHandler.bind(this));
    }

    _createClass(_class, [{
        key: 'wheelHandler',
        value: function wheelHandler(event) {
            if (!this.buttonSlide) return;
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
                console.log(event.target.parentNode.className);
                if (event.target.parentNode.parentNode.parentNode.className === 'accordeon-category accordeon-category_popup') {
                    console.log(event.target.parentNode.className);
                    this.buttonSlide = null;
                }

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

                        _item.style.display = 'block';
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
                    if (this.buttonSlide) {
                        this.buttonSlide.style.display = 'inline-block';
                    }

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
                if (!this.buttonSlide) return;

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
    var fileFormSave = document.querySelector('#file');
    var overlay = document.querySelector('#overlay');
    var popupSave = document.querySelector('#popup-save');
    var popupAdd = document.querySelector('#popup-add');
    var addForm = document.querySelector('#add-form');
    var formUpdate = document.querySelector('#save-form');
    var buttonUpdate = document.querySelector('#redactor');
    var buttonAddAdv = document.querySelector('#add-adv');
    var body = document.querySelector('body');
    var selectCategory = document.querySelector('#category-drop');
    var prod = document.querySelector('#category-product');
    var tech = document.querySelector('#category-tech');
    var material = document.querySelector('#category-material');
    var countLoad = 0;
    var nameFile = document.querySelectorAll('.form-auth__file-name');
    var nameCompany = document.querySelector('#company-name');
    var address = document.querySelector('#address');
    var contacts = document.querySelector('#contact');
    var fileName = null;

    buttonUpdate.addEventListener('click', function () {
        // document.querySelector('#input-company').value = nameCompany.textContent;
        // document.querySelector('#input-address').value = address.textContent;
        // document.querySelector('#input-contact').value = contacts.textContent;

        overlay.className += ' popup-overlay_active';
        popupSave.className += ' popup_active';
        body.className = 'hidden';
    });

    buttonAddAdv.addEventListener('click', function () {
        overlay.className += ' popup-overlay_active';
        popupAdd.className += ' popup_active';
        body.className = 'hidden';
    });

    var handlerFileLoad = function handlerFileLoad(event) {
        var target = event.target;
        if (target.tagName === 'INPUT' && target.type === 'file') {
            console.log(target.type);
            var name = target.nextElementSibling.nextElementSibling;
            var nextItem = target.parentNode.nextElementSibling;
            var nextInput = nextItem.querySelector('input[type="file"]');

            injectNameFile(target);

            if (nextInput) {
                target.parentNode.nextElementSibling.style.display = 'block';
            }
        }
    };

    var injectNameFile = function injectNameFile(element) {
        var name = element.nextElementSibling.nextElementSibling;

        if (element.files != undefined) {
            name.textContent = element.files[0].name;
            name.style.color = 'green';
        } else {
            var pathFileArray = element.value.split('\\');
            var pathFile = pathFileArray[pathFileArray.length - 1];

            name.textContent = pathFile;
            name.style.color = 'green';
        }
    };

    fileFormSave.addEventListener('change', function (event) {
        injectNameFile(event.target);
    });

    addForm.addEventListener('change', handlerFileLoad);

    overlay.addEventListener('click', function (event) {
        if (event.target.className === 'popup__close') {
            var hiddenInputs = document.querySelectorAll('.form-auth__label_hidden');
            event.target.parentNode.className = 'popup';
            event.currentTarget.className = 'popup-overlay';
            body.className = '';
            formUpdate.reset();

            for (var i = 0; i < hiddenInputs.length; i++) {
                hiddenInputs[i].style.display = 'none';
            }

            for (var _i = 0; _i < nameFile.length; _i++) {
                nameFile[_i].textContent = 'Файл не выбран';
                nameFile[_i].style.color = '#c03411';
            }
        }
    });
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var Acco = __webpack_require__(1);
var popup = __webpack_require__(2);

var accordeonCategory = new Acco('.accordeon-category');

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/2.jpg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/2.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/accordeon-arrow.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/close.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/img-icon.png";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDkzOTcwNDJlNGYwYTIxODFhMGIiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2pzL2ltcG9ydHMuY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9qcy9tb2R1bGVzL2FjY29yZGVvbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvbW9kdWxlcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2UvaW1nLzIuanBnIiwid2VicGFjazovLy8uL3NvdXJjZS9pbWcvMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2ltZy9hY2NvcmRlb24tYXJyb3cucG5nIiwid2VicGFjazovLy8uL3NvdXJjZS9pbWcvY2xvc2UucG5nIiwid2VicGFjazovLy8uL3NvdXJjZS9pbWcvaW1nLWljb24ucG5nIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRhaW5lciIsImxpc3QiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxpc3RTZWNvbmQiLCJpdGVtcyIsImNoaWxkcmVuIiwiY3VycmVudE9mZnNldCIsImJ1dHRvblNsaWRlIiwicGFyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJjb3VudENoZWNrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tIYW5kbGVyIiwiYmluZCIsIndpbmRvdyIsIndoZWVsSGFuZGxlciIsImV2ZW50IiwiYWNjSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJ0b3AiLCJkZWx0YVkiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJfdGhpcyIsIml0ZW0iLCJjbGFzc0NvbnRhaW5lciIsIm5leHRFbGVtZW50U2libGluZyIsImNvbnRlbnQiLCJpbm5lckl0ZW1zIiwiYWN0aXZlIiwiaSIsImxlbmd0aCIsImNoZWNrZWQiLCJkaXNwbGF5IiwiaGVpZ2h0IiwiY3VycmVudEl0ZW0iLCJjdXJyZW50TGlzdCIsImN1cnJlbnRJdGVtcyIsImZpbGVGb3JtU2F2ZSIsIm92ZXJsYXkiLCJwb3B1cFNhdmUiLCJwb3B1cEFkZCIsImFkZEZvcm0iLCJmb3JtVXBkYXRlIiwiYnV0dG9uVXBkYXRlIiwiYnV0dG9uQWRkQWR2IiwiYm9keSIsInNlbGVjdENhdGVnb3J5IiwicHJvZCIsInRlY2giLCJtYXRlcmlhbCIsImNvdW50TG9hZCIsIm5hbWVGaWxlIiwibmFtZUNvbXBhbnkiLCJhZGRyZXNzIiwiY29udGFjdHMiLCJmaWxlTmFtZSIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJoYW5kbGVyRmlsZUxvYWQiLCJ0YWdOYW1lIiwidHlwZSIsIm5hbWUiLCJuZXh0SXRlbSIsIm5leHRJbnB1dCIsImluamVjdE5hbWVGaWxlIiwiZWxlbWVudCIsImZpbGVzIiwidW5kZWZpbmVkIiwiY29sb3IiLCJwYXRoRmlsZUFycmF5Iiwic3BsaXQiLCJwYXRoRmlsZSIsImhpZGRlbklucHV0cyIsImN1cnJlbnRUYXJnZXQiLCJyZXNldCIsIkFjY28iLCJyZXF1aXJlIiwicG9wdXAiLCJhY2NvcmRlb25DYXRlZ29yeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtB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bmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDkzOTcwNDJlNGYwYTIxODFhMGIiLCJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcclxuaW1wb3J0ICcuLi9pbWcvMi5qcGcnO1xyXG5pbXBvcnQgJy4uL2ltZy8yLnBuZyc7XHJcbmltcG9ydCAnLi4vaW1nL2FjY29yZGVvbi1hcnJvdy5wbmcnO1xyXG5pbXBvcnQgJy4uL2ltZy9jbG9zZS5wbmcnO1xyXG5pbXBvcnQgJy4uL2ltZy9pbWctaWNvbi5wbmcnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvanMvaW1wb3J0cy5jb25maWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5zZWxlY3RvclswXTtcclxuICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICB0aGlzLmxpc3RTZWNvbmQgPSB0aGlzLnNlbGVjdG9yWzFdLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmxpc3QuY2hpbGRyZW47XHJcbiAgICAgICAgdGhpcy5jdXJyZW50T2Zmc2V0ID0gNTA7XHJcbiAgICAgICAgdGhpcy5idXR0b25TbGlkZSA9IHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignI3NsaWRlLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuY291bnRDaGVja2VkID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5saXN0U2Vjb25kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy53aGVlbEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2hlZWxIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJ1dHRvblNsaWRlKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgYWNjSGVpZ2h0ID0gdGhpcy5jb250YWluZXIuY2xpZW50SGVpZ2h0IC0gMTAwO1xyXG5cclxuICAgICAgICBpZiAoYWNjSGVpZ2h0IDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uU2xpZGUuc3R5bGUudG9wID0gYCR7NTB9cHhgO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPZmZzZXQgPSA1MDtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LmRlbHRhWSA8IDApIHtcclxuICAgICAgICAgICAgaWYgKCEodGhpcy5jdXJyZW50T2Zmc2V0IDwgMTAwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T2Zmc2V0ICs9IGV2ZW50LmRlbHRhWTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uU2xpZGUuc3R5bGUudG9wID0gYCR7dGhpcy5jdXJyZW50T2Zmc2V0fXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghKHRoaXMuY3VycmVudE9mZnNldCA+IGFjY0hlaWdodCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9mZnNldCArPSBldmVudC5kZWx0YVk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblNsaWRlLnN0eWxlLnRvcCA9IGAke3RoaXMuY3VycmVudE9mZnNldH1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrSGFuZGxlcihldmVudCkge1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2FjY29yZGVvbi1jYXRlZ29yeV9fdHJpZ2dlcicpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUgPT09ICdhY2NvcmRlb24tY2F0ZWdvcnkgYWNjb3JkZW9uLWNhdGVnb3J5X3BvcHVwJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uU2xpZGUgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBfdGhpcyA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IF90aGlzLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzQ29udGFpbmVyID0gdGhpcy5jb250YWluZXIuY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBfdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGlubmVySXRlbXMgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRlb24tY2F0ZWdvcnlfX2lubmVyLWxpc3QnKTtcclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gaW5uZXJJdGVtcy5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aXZlICE9IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlubmVySXRlbXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gaW5uZXJJdGVtcy5jaGlsZHJlbltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NOYW1lID09PSAnYWNjb3JkZW9uLWNhdGVnb3J5X19pbm5lci1pdGVtIGFjdGl2ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSAnYWNjb3JkZW9uLWNhdGVnb3J5X19pbm5lci1pdGVtJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50Q2hlY2tlZC0tO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb3VudENoZWNrZWQpIHRoaXMuYnV0dG9uU2xpZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghKF90aGlzLnBhcmVudE5vZGUuY2xhc3NOYW1lID09PSBgJHtjbGFzc0NvbnRhaW5lcn1fX2l0ZW0gJHtjbGFzc0NvbnRhaW5lcn1fX2l0ZW1fYWN0aXZlYCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IGAke2NsYXNzQ29udGFpbmVyfV9faXRlbSAke2NsYXNzQ29udGFpbmVyfV9faXRlbV9hY3RpdmVgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSBgJHtjbGFzc0NvbnRhaW5lcn1fX2l0ZW1gO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnYWNjb3JkZW9uLWNhdGVnb3J5X19saW5rJykge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudExpc3QgPSBjdXJyZW50SXRlbS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbXMgPSBjdXJyZW50TGlzdC5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgICAgIGlmICghKGN1cnJlbnRJdGVtLmNsYXNzTmFtZSA9PT0gJ2FjY29yZGVvbi1jYXRlZ29yeV9faW5uZXItaXRlbSBhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uY2xhc3NOYW1lICs9ICcgYWN0aXZlJztcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRDaGVja2VkKys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5idXR0b25TbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uU2xpZGUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbXNbaV0uY2xhc3NOYW1lID09PSAnYWNjb3JkZW9uLWNhdGVnb3J5X19pbm5lci1pdGVtIGFjdGl2ZScpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uY2xhc3NOYW1lID0gJ2FjY29yZGVvbi1jYXRlZ29yeV9faW5uZXItaXRlbSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50Q2hlY2tlZC0tO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW1zW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5idXR0b25TbGlkZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvdW50Q2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25TbGlkZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY291bnRDaGVja2VkID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblNsaWRlLnN0eWxlLnRvcCA9IGAkezUwfXB4YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE9mZnNldCA9IDUwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9tb2R1bGVzL2FjY29yZGVvbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGZpbGVGb3JtU2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxlJyk7XHJcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcclxuICAgIGNvbnN0IHBvcHVwU2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cC1zYXZlJyk7XHJcbiAgICBjb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1cC1hZGQnKTtcclxuICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWZvcm0nKTtcclxuICAgIGNvbnN0IGZvcm1VcGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZS1mb3JtJyk7XHJcbiAgICBjb25zdCBidXR0b25VcGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVkYWN0b3InKTtcclxuICAgIGNvbnN0IGJ1dHRvbkFkZEFkdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtYWR2Jyk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY29uc3Qgc2VsZWN0Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0ZWdvcnktZHJvcCcpO1xyXG4gICAgY29uc3QgcHJvZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRlZ29yeS1wcm9kdWN0Jyk7XHJcbiAgICBjb25zdCB0ZWNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3J5LXRlY2gnKTtcclxuICAgIGNvbnN0IG1hdGVyaWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGVnb3J5LW1hdGVyaWFsJyk7XHJcbiAgICBsZXQgY291bnRMb2FkID0gMDtcclxuICAgIGxldCBuYW1lRmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWF1dGhfX2ZpbGUtbmFtZScpO1xyXG4gICAgbGV0IG5hbWVDb21wYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBhbnktbmFtZScpO1xyXG4gICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkcmVzcycpO1xyXG4gICAgbGV0IGNvbnRhY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcclxuICAgIGxldCBmaWxlTmFtZSA9IG51bGw7XHJcblxyXG4gICAgYnV0dG9uVXBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1jb21wYW55JykudmFsdWUgPSBuYW1lQ29tcGFueS50ZXh0Q29udGVudDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtYWRkcmVzcycpLnZhbHVlID0gYWRkcmVzcy50ZXh0Q29udGVudDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtY29udGFjdCcpLnZhbHVlID0gY29udGFjdHMudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NOYW1lICs9ICcgcG9wdXAtb3ZlcmxheV9hY3RpdmUnO1xyXG4gICAgICAgIHBvcHVwU2F2ZS5jbGFzc05hbWUgKz0gJyBwb3B1cF9hY3RpdmUnO1xyXG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ2hpZGRlbic7XHJcbiAgICB9KTtcclxuXHJcbiAgICBidXR0b25BZGRBZHYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgb3ZlcmxheS5jbGFzc05hbWUgKz0gJyBwb3B1cC1vdmVybGF5X2FjdGl2ZSc7XHJcbiAgICAgICAgcG9wdXBBZGQuY2xhc3NOYW1lICs9ICcgcG9wdXBfYWN0aXZlJztcclxuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICdoaWRkZW4nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlckZpbGVMb2FkID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgdGFyZ2V0LnR5cGUgPT09ICdmaWxlJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQudHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgY29uc3QgbmV4dEl0ZW0gPSB0YXJnZXQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRJbnB1dCA9IG5leHRJdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJyk7XHJcblxyXG4gICAgICAgICAgICBpbmplY3ROYW1lRmlsZSh0YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5leHRJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluamVjdE5hbWVGaWxlID0gZWxlbWVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQuZmlsZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50LmZpbGVzWzBdLm5hbWU7XHJcbiAgICAgICAgICAgIG5hbWUuc3R5bGUuY29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGhGaWxlQXJyYXkgPSBlbGVtZW50LnZhbHVlLnNwbGl0KCdcXFxcJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGhGaWxlID0gcGF0aEZpbGVBcnJheVtwYXRoRmlsZUFycmF5Lmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHBhdGhGaWxlO1xyXG4gICAgICAgICAgICBuYW1lLnN0eWxlLmNvbG9yID0gJ2dyZWVuJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlsZUZvcm1TYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuICAgICAgICBpbmplY3ROYW1lRmlsZShldmVudC50YXJnZXQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyRmlsZUxvYWQpO1xyXG5cclxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdwb3B1cF9fY2xvc2UnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhpZGRlbklucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLWF1dGhfX2xhYmVsX2hpZGRlbicpO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWUgPSAncG9wdXAnO1xyXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSA9ICdwb3B1cC1vdmVybGF5JztcclxuICAgICAgICAgICAgYm9keS5jbGFzc05hbWUgPSAnJztcclxuICAgICAgICAgICAgZm9ybVVwZGF0ZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaWRkZW5JbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGhpZGRlbklucHV0c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVGaWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lRmlsZVtpXS50ZXh0Q29udGVudCA9ICfQpNCw0LnQuyDQvdC1INCy0YvQsdGA0LDQvSc7XHJcbiAgICAgICAgICAgICAgICBuYW1lRmlsZVtpXS5zdHlsZS5jb2xvciA9ICcjYzAzNDExJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9tb2R1bGVzL3BvcHVwLmpzIiwiaW1wb3J0ICcuL2ltcG9ydHMuY29uZmlnJztcclxuXHJcbmNvbnN0IEFjY28gPSByZXF1aXJlKCcuL21vZHVsZXMvYWNjb3JkZW9uJyk7XHJcbmNvbnN0IHBvcHVwID0gcmVxdWlyZSgnLi9tb2R1bGVzL3BvcHVwJyk7XHJcblxyXG5cclxuY29uc3QgYWNjb3JkZW9uQ2F0ZWdvcnkgPSBuZXcgQWNjbygnLmFjY29yZGVvbi1jYXRlZ29yeScpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZS9qcy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL3Njc3MvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy8yLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2ltZy8yLmpwZ1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvMi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9pbWcvMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FjY29yZGVvbi1hcnJvdy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZS9pbWcvYWNjb3JkZW9uLWFycm93LnBuZ1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2xvc2UucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2UvaW1nL2Nsb3NlLnBuZ1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvaW1nLWljb24ucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2UvaW1nL2ltZy1pY29uLnBuZ1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9