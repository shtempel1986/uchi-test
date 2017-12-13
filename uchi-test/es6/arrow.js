class Arrow {
	constructor(start, length, target){

		let $arrowsWrapper = $('.arrows');

		let elWidth = length * 40;

		let elStartPoint = start * 39.3 + 33;

		let elHeight = elWidth * 0.28;

		this._length =length;

		this.callback =function () {

			console.log("Функция не определена");
		};

		this._$el = $(`
<div class="arrow" >
			<label class="arrow__label">
				<input type="text"  class="arrow__input">
				<span class="arrow__span"></span>
			</label>
			<img src="img/arrow.svg" alt="arrow" class="arrow__img">
		</div>		
`);

		this._$el.appendTo($arrowsWrapper).css({
			width:elWidth+'px',
			left: elStartPoint + 'px',
			height: elHeight + 'px'
		}).hide().fadeIn();


		this._target = target;

		this._input = this._$el.find('input');

		setTimeout( ()=> {
			this._input.focus();
		},400);

		this._input.keydown(this.validation.bind(this));

	}

	validation(e){
		if (e.keyCode<58 && e.keyCode>48){

			this._input.val('');
			this._input.removeClass('arrow__input_invalid');
			this._target.removeClass('task__span_invalid');

			if (e.keyCode-48 !== this._length){

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

	subscribe(callback){
		this.callback = callback ;
	}
}

export default Arrow;