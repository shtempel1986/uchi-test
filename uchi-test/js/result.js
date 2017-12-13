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