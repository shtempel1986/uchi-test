(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arrow = function () {
		function Arrow(start, length, target) {
				var _this = this;

				_classCallCheck(this, Arrow);

				var $arrowsWrapper = $('.arrows');

				var elWidth = length * 40;

				var elStartPoint = start * 39.3 + 33;

				var elHeight = elWidth * 0.28;

				this._length = length;

				this.callback = function () {

						console.log("Функция не определена");
				};

				this._$el = $('\n<div class="arrow" >\n\t\t\t<label class="arrow__label">\n\t\t\t\t<input type="text"  class="arrow__input">\n\t\t\t\t<span class="arrow__span"></span>\n\t\t\t</label>\n\t\t\t<img src="img/arrow.svg" alt="arrow" class="arrow__img">\n\t\t</div>\t\t\n');

				this._$el.appendTo($arrowsWrapper).css({
						width: elWidth + 'px',
						left: elStartPoint + 'px',
						height: elHeight + 'px'
				}).hide().fadeIn();

				this._target = target;

				this._input = this._$el.find('input');

				setTimeout(function () {
						_this._input.focus();
				}, 400);

				this._input.keydown(this.validation.bind(this));
		}

		_createClass(Arrow, [{
				key: 'validation',
				value: function validation(e) {
						if (e.keyCode < 58 && e.keyCode > 48) {

								this._input.val('');
								this._input.removeClass('arrow__input_invalid');
								this._target.removeClass('task__span_invalid');

								if (e.keyCode - 48 !== this._length) {

										this._input.addClass('arrow__input_invalid');
										this._target.addClass('task__span_invalid');
								} else {

										this._input.hide();

										this._$el.find('.arrow__span').html(this._length);

										this.callback();
								}
						} else {
								e.preventDefault();
						}
				}
		}, {
				key: 'subscribe',
				value: function subscribe(callback) {
						this.callback = callback;
				}
		}]);

		return Arrow;
}();

exports.default = Arrow;
},{}],2:[function(require,module,exports){
'use strict';

var _task = require('./task');

var _task2 = _interopRequireDefault(_task);

var _arrow = require('./arrow');

var _arrow2 = _interopRequireDefault(_arrow);

var _result = require('./result');

var _result2 = _interopRequireDefault(_result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jQuery.fn.forceNumericOnly = function () {
	return this.each(function () {
		$(this).keydown(function (e) {
			var key = e.charCode || e.keyCode || 0;
			return key === 8 || key === 9 || key === 46 || key >= 37 && key <= 40 || key >= 48 && key <= 57 || key >= 96 && key <= 105;
		});
	});
};

var task = new _task2.default();

var arrowA = new _arrow2.default(0, task.getA(), $('.task__a'));

arrowA.subscribe(function () {

	var arrowB = new _arrow2.default(task.getA(), task.getB(), $('.task__b'));

	arrowB.subscribe(function () {

		var result = new _result2.default(task.getResult());
	});
});
},{"./arrow":1,"./result":3,"./task":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Result = function () {
	function Result(result) {
		var _this = this;

		_classCallCheck(this, Result);

		this._$el = $('\n<label class="task__label">\n\t\t\t<input type="text" class="task__input">\n\t\t\t<span class="task__span"></span>\n\t\t</label>\t\t\n');

		this._input = this._$el.find('input').keyup(this.validation.bind(this)).forceNumericOnly();

		$('.task__result').html('').append(this._$el.hide().fadeIn());

		this._input.keydown(this.keydown.bind(this));

		setTimeout(function () {
			_this._input.focus();
		}, 400);

		this._result = result;
	}

	_createClass(Result, [{
		key: 'keydown',
		value: function keydown() {
			if (this._input.val().length === 2) {
				this._input.val('');
			}
		}
	}, {
		key: 'validation',
		value: function validation() {

			var value = this._input.val();

			if (parseInt(value) === this._result) {
				this._input.hide();
				this._$el.find('.task__span').html(this._result);
			} else {

				this._input.addClass('arrow__input_invalid');
			}
		}
	}]);

	return Result;
}();

exports.default = Result;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
	function Task() {
		_classCallCheck(this, Task);

		this._a = Math.floor(Math.random() * 4 + 6);

		this._b = Math.floor(Math.random() * 4 + 11 - this._a);

		$('.task__a').html(this._a);

		$('.task__b').html(this._b);
	}

	_createClass(Task, [{
		key: 'getA',
		value: function getA() {
			return this._a;
		}
	}, {
		key: 'getB',
		value: function getB() {
			return this._b;
		}
	}, {
		key: 'getResult',
		value: function getResult() {
			return this._a + this._b;
		}
	}]);

	return Task;
}();

exports.default = Task;
},{}]},{},[2])