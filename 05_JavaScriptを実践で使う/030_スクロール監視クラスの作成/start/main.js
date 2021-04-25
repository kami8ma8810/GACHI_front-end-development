document.addEventListener('DOMContentLoaded', function () {

	const cb = function (el, isIntersecting) {
		if (isIntersecting) {
			const ta = new TextAnimation(el);
			ta.animation();
		}
	}
	const so = new ScrollObserver('.animate-title', cb,
		//画面内に入っても監視を続ける場合はfalseを渡す
		// {
		// 	once: false
		// }
	);
});

class ScrollObserver {
	constructor(els, cb, options) {
		this.els = document.querySelectorAll(els);
		const defaultOptions = {
			root: null,
			rootMargin: "-10% 0%",
			threshold: 0,
			once: true
		};
		this.cb = cb;
		this.options = Object.assign(defaultOptions, options);
		this.once = this.options.once;
		this._init();
	}
	_init() {
		const callback = function (entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					this.cb(entry.target, true);
					if (this.once) {
						observer.unobserve(entry, target);
					}
				} else {
					this.cb(entry.target, false);
				}
			});
		};
		this.io = new IntersectionObserver(callback.bind(this), this.options);
		this.els.forEach(el => this.io.observe(el));
	}
	destory() {
		this.io.disconnect();
	}
}