class Task{
	constructor(){

		this._a = Math.floor(Math.random() * 4 + 6);

		this._b = Math.floor(Math.random() * 4 + 11 - this._a);

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