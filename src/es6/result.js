class Result{

	constructor(result){

		this._$el = $(`
<label class="task__label">
			<input type="text" class="task__input">
			<span class="task__span"></span>
		</label>		
`);

		this._input = this._$el.find('input').keyup(this.validation.bind(this)).forceNumericOnly();

		$('.task__result').html('').append(this._$el.hide().fadeIn());

		this._input.keydown(this.keydown.bind(this));

		setTimeout(()=>{
			this._input.focus();
		},400);

		this._result = result;

	}

	keydown(){
		if(this._input.val().length === 2){
			this._input.val('');
		}
	}

	validation (){

		let value = this._input.val();

		if(parseInt(value) === this._result){
			this._input.hide();
			this._$el.find('.task__span').html(this._result);
		}else{

			this._input.addClass('arrow__input_invalid');
		}

	}

}

export default Result;