// thisは「オブジェクトを参照するためのキーワード（合言葉）」
const obj = {
	first_name: 'Kamiyama',
	last_name: 'Hayato',
	printFullName: function () {
		console.log(this.last_name); //thisはobjを参照
	}
}
obj.printFullName();

// classの場合は、new演算子で初期化された際にthisが変わる
class MyObj {
	constructor() {
		this.first_name = 'Kamiyama';
		this.last_name = 'Hayato';
	}
	printFullName() {
		console.log('hello');
	}
}

const obj2 = new MyObj();

obj.printFullName();
obj2.printFullName();