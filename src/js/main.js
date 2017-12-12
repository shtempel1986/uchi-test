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