const child = document.querySelector('.child');
const cb = function (entries, observer) {
	// 複数の対象をコールバックさせる
	entries.forEach(entry => {
		// 監視範囲に入ったときの処理
		if (entry.isIntersecting) {
			entry.target.classList.add('inview');
			// 監視範囲に入ったら監視をやめる
			io.unobserve(entry);
		}
		// 管理範囲以外のときの処理
		else {
			entry.target.classList.remove('inview');
		}
	});
}
const options = {
	root: null,
	rootMargin: "-30% 0%", //pxか%（0の場合も単位をつける）
	// threshold: [1, 0] 交差範囲の場所を上か下か（要素が大きい場合に使える）
}
const io = new IntersectionObserver(cb, options);
// 監視対象（複数登録可）
io.observe(child);