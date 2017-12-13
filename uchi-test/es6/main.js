import Task from './task';
import Arrow from './arrow';
import Result from './result';

jQuery.fn.forceNumericOnly =
	function () {
		return this.each(function () {
			$(this).keydown(function (e) {
				let key = e.charCode || e.keyCode || 0;
				return (
					key === 8 ||
					key === 9 ||
					key === 46 ||
					(key >= 37 && key <= 40) ||
					(key >= 48 && key <= 57) ||
					(key >= 96 && key <= 105));
			});
		});
	};

let task = new Task();

let arrowA = new Arrow(0, task.getA(), $('.task__a'));


arrowA.subscribe(()=>{

	let arrowB = new Arrow(task.getA(), task.getB(), $('.task__b'));

	arrowB.subscribe(function () {

		let result = new Result(task.getResult());

	});

});


