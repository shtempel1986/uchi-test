class Task{
	constructor(){

		this._a = Math.floor(Math.random() * 4 + 6);

		this._b = Math.floor(Math.random() * 4 + 11 - this._a);

	}
}

export default Task;