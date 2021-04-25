document.addEventListener('DOMContentLoaded', function () {
	const btn = document.querySelector('#btn');
	const ta = new TextAnimation('.animate-title');
	const ta2 = new TextAnimation('.animate-title-2');
	ta.animate();
	ta2.animate();
	btn.addEventListener('click', function () {
		ta.animate();
	});
});


class TextAnimation {
	constructor(el) {
		console.log(this);
		this.el = document.querySelector(el);
		this.chars = this.el.innerHTML.trim().split("");
		this.el.innerHTML = this._splitText();
	}
	_splitText() {
		return this.chars.reduce((acc, curr) => {
			curr = curr.replace(/\s+/, '&nbsp;');
			return `${acc}<span class="char">${curr}</span>`;
		}, "");
	}
	animate() {

		this.el.classList.toggle('inview');
	}
}
// // animate() {
// // 	window.setTimeout(function () {
// // 		this.el.classList.toggle('inview');
// // 	}.bind(this)); //bindでThisをTextAnimationを参照させる。bindしないとthisはwindowを参照してしまう。
// // }
// // //↑別の書き方
// // animate() {
// // 	const _that = this;
// // 	window.setTimeout(function () {
// // 		_that.el.classList.toggle('inview');
// // 	}, 3000);
// }