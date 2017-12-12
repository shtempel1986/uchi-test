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