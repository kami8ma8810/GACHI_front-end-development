// オブジェクトとは？
const obj = {
	first_name: 'Kamiyama',
	lst_name: 'Hayato',
	printFullName: function () {
		console.log('hello');
	}
}

// classは「オブジェクトを生成するためのひとつのまとまり」
class MyObj {
	// 初期化
	constructor() {
		// クラスの中ではfirst_nameなどは使えないのでthisを使う
		this.first_name = 'Kamiyama';
		this.last_name = 'Hayato';
	}
	// print部分はメソッドとして登録
	printFullName() {
		console.log('hello');
	}
}

// MyObjをnew演算子で初期化
const obj2 = new MyObj();

// こうすると、objとobj2の出力は同じになる。
obj.printFullName();
obj2.printFullName();