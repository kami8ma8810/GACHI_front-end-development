const btn = document.querySelector('#btn');

const alertHello = function () {
	alert('hello!');
};
const changeColor = function () {
	this.style.color = 'red';
};

// addイベントリスナーは複数登録できる
btn.addEventListener('click', alertHello);
btn.addEventListener('click', changeColor);