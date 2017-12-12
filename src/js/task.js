"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task() {
	_classCallCheck(this, Task);

	this._a = Math.floor(Math.random() * 4 + 6);

	this._b = Math.floor(Math.random() * 4 + 11 - this._a);
};

exports.default = Task;