// document.addEventListener('DOMContentLoaded', function () {
// 	const el = document.querySelector('.animate-title');
// 	const str = el.innerHTML.trim();
// 	let concatStr = '';

// 	// 一時文字ずつ取り出す
// 	for (let c of str) {
// 		// 半角スペースがあったら&nsbpに置換
// 		c = c.replace(' ', '&nbsp;');
// 		// concatStr = concatStr + `<span class = "char">${c}< /span>`;
// 		// ↑を短く書く
// 		concatStr += `<span class="char">${c}</span>`;
// 	}
// 	el.innerHTML = concatStr;
// });


// ----------------
// reduceを使った書き方
// ----------------
document.addEventListener('DOMContentLoaded', function () {
	const el = document.querySelector('.animate-title');
	const str = el.innerHTML.trim().split("");

	el.innerHTML = str.reduce((acc, curr) => {
		curr = curr.replace(/\s+/, '&nbsp;');
		return `${acc}<span class="char">${curr}</span>`;
	}, "");
});