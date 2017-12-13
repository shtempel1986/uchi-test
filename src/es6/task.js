class Task{
	constructor(starDistance, endDistance){

		this._a = Math.floor(Math.random() * (starDistance[1] - starDistance[0] + 1) + 6);

		this._b = Math.floor(Math.random() * (endDistance[1] - endDistance[0] + 1) + endDistance[0] - this._a);

		$('.task__a').html(this._a);

		$('.task__b').html(this._b);

	}

	getA (){
		return this._a;
	}

	getB(){
		return this._b;
	}

	getResult(){
		return this._a + this._b;
	}
}

export default Task;