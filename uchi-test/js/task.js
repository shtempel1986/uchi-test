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