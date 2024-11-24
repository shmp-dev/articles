// 変数宣言と代入
// スラッシュ文字が2つ並んだ後の文字は全てコメントになる
// コメントでJavaScriptコードを説明しているのでよく読むように。

// 変数は値に付けられる記法的な名前。
// 変数を宣言するときには、letキーワードを使う。
let x;                  // xという名前の変数を宣言する。

// 変数に値を代入するときには、「=」記号を使う。
x = 0;                  // これで変数xの値は0になる。
x       // => 0: 変数が評価され、代入/された値になる。

// JavaScript はさまざまな型をサポートしている。
x = 1;                  // 数値。
x = 0.01;               // 整数も十数も同じ数値型になる。
x = "hello world";      // 文字列は引用符で囲む。
x = 'JavaScript';       // 文字列は単一引用符でも囲める。
x = true;               // 論理値。
x = false;              // もう一つの論理値。
x = null;               // nullは特殊な値で、「値がない」ことを意味する。
x = undefined;          // undefinedは、null と同じく特殊な値。

// 定数宣言
// 変数の値が変更されないようにするには、constキーワードを使う。
const y = 10;           // yという名前の定数を宣言し、値を10に設定する。
y = 20;                 // エラー: 定数の値は変更できない。

//////////////////////////////////////////////////////////////////////////////

// オブジェクトと配列
// JavaScriptの中で一番重要なデータ型はオブジェクト。
// オブジェクトは名前と値のペア、つまり、値に文字列を対応付けたものの集合。
let book = {               // オブジェクトは波括弧で囲む。
	topic: "JavaScript",     // topicプロパティは"JavaScript"という値を持つ。
	edition: 7               // editionプロパティは7という値を持つ。
};                         // 波括弧でオブジェクトの最後を表す。

// オブジェクトのプロパティには、ドット記法「.」か、ブラケット記法「[]」を使ってアクセスできる。
book.topic                 // => "JavaScript"
book["edition"]            // => 7: この方法でもプロパティの値にアクセスできる。
book.author = "Flanagan";  // 代入すると、新しいプロパティが作られる。
book.contents = {};        // {}は何もプロパティをもたない空のオブジェクトを表す。

// 条件付きでプロパティにアクセスするときは?を使う（ES2020）。
book.contents?.ch01?.sect1 // => undefined: book.contentsにch01プロパティが存在しない。

// JavaScriptは配列（数値でインデックスされたリスト）もサポート。
let primes = [2, 3, 5, 7]; // 4つの値を持つ配列。「[」と「]」で囲む。
primes[0]                  // => 2: 配列の最初の要素（インデックス0）。
primes.length              // => 4: 配列の要素数
primes[primes.length-1]    // => 7: 配列の最後の要素。
primes[4] = 9;             // 代入すると、新しい要素が追加される。
primes[4] = 11;            // 既存の要素の場合は、値が置き換わる。
let empty = [];            // []は何も要素を持たない空の配列を表す。
empty.length               // => 0

// 配列やオブジェクトには、別の配列やオブジェクトを格納できる。
let points = [             // 2つの要素を持つ配列。
		{x: 0, y: 0},          // 各要素はオブジェクト。
		{x: 1, y: 1}
];
let data = {                  // 2つのプロパティを持つオブジェクト。
		trial1: [[1, 2], [3, 4]], // 各プロパティの値は配列。
		trial2: [[2, 3], [4, 5]]  // その配列の要素もまた配列。
};

//////////////////////////////////////////////////////////////////////////////

// 演算子
// 演算子は値（オペランド）を処理して、新しい値を生成する。
// 一般的なのは算術演算子。
3 + 2									 // => 5: 加算
3 - 2									 // => 1: 減算
3 * 2									 // => 6: 乗算
3 / 2									 // => 1.5: 除算
points[1].x - points[0].x // => 1: オペランドが複雑でも問題ない。
"3" + "2"							 // => "32": +は数値の場合は加算、文字列の場合は連結。

// JavaScriptには算術演算子を短縮表記する方法が定義されている。
let count = 0;					 // 変数を定義して初期化する。
count++;								 // 変数をインクリメントする（count = count + 1 と同じ。）
count--;								 // 変数をデクリメントする（count = count - 1 と同じ。）
count += 2;							 // 2を加算する。（count = count + 2; と同じ。）
count *= 3;							 // 3を乗算する。（count = count * 3; と同じ。）
count								 // => 6: 変数名も式。

// 等値演算子や関係演算子は、それぞれ2つの値が等しいか、大小関係にあるかを判定する。
// trueまたはfalseを返す。
let x = 2, y = 3;					 // この等号は代入。等しいかどうかを調べているのではない。
x === y									 // => false: 同値。
x !== y									 // => true: 非同値。
x < y										 // => true: 小なり
x <= y									 // => true: 小なりイコール
x > y										 // => false: 大なり
x >= y									 // => false: 大なりイコール
"two" === "three"				 // => false: 2つの文字列は異なる。
"two" > "three"					 // => true: 文字列の比較は辞書順。（"tw"は、アルファベット順では、"th"より後）
false === (x > y)				 // => true: falseはfalseと等しい。

// 論理演算子は、論理値を組み合わせたり反転させたりする。
(x === 2) && (y === 3)	 // => true: 両方の比較がtrue。&&はANDを表す。（論理積（AND））
(x > 3) || (y < 3)			 // => false: どちらかの比較がtrue。||はORを表す。（論理和（OR））
!(x === y)							 // => true: !はNOTを表す。（論理否定（NOT））

//////////////////////////////////////////////////////////////////////////////

// 関数
// 関数は引数を渡して呼び出すことのできるJavaScriptコードブロック。
function plus1(x) {	 // 「x」と言うパラメータを持つ「plus1」と言う名前の関数を定義する。
	return x + 1;      // 引数として渡された値に1を加えて返す。
} // 関数の定義は波括弧で囲む。

plus1(y)						 // => 4: yは3なので、関数を呼び出すと、3 + 1 の計算結果を返す。

let square = function(x) { // 関数は値なので、変数に代入できる。
	return x * x;					 // 関数の値を計算する。
}; // セミコロンで関数の代入を終了する。

square(plus1(y))			 // => 16: 1つの式で2つの関数を呼び出す。

// アロー関数
// アロー関数は、より短い構文で関数を定義できる。
const plus1 = x => x + 1; // 入力xに対して、x + 1が出力される。
const square = x => x * x; // 入力xに対して、x * xが出力される。
plus1(y)								 // => 4: 関数の呼び出し方法は同じ。
square(plus1(y))				 // => 16

// 関数をオブジェクトとともに使うと、メソッドになる。
// 関数がオブジェクトのプロパティに代入されると、この関数のことを「メソッド」と呼ぶ。
// 全てのJavaScriptオブジェクト（配列も含む）はメソッドを持つ。
let a = [];							 // 空の配列を生成する。
a.push(1, 2, 3);				 // push()メソッドは、配列に要素を追加する。
a.reverse();						 // reverse()メソッドは、配列の要素を逆順にする。

// 独自のメソッドも定義できる。「this」キーワードで、メソッドが定義されているオブジェクトを参照できる。
// この例の場合は、points配列を参照する。
let points = [             // 2つの要素を持つ配列。
	{x: 0, y: 0},          // 各要素はオブジェクト。
	{x: 1, y: 1}
];

points.dist = function() { // 2点間の距離を計算するメソッドを定義する。
	let p1 = this[0];			 // メソッドが呼び出された配列の最初の要素を取得する。
	let p2 = this[1]; // 「this」オブジェクトの2番目の要素を取得する。
	let a = p2.x - p1.x;	 // X座標の距離を計算する。
	let b = p2.y - p1.y;   // Y座標の距離を計算する。
	return Math.sqrt(a*a + b*b); // ピタゴラスの定理で2点間の距離を計算する。（Math.sqrt()は平方根を計算する）
};
points.dist()						 // => Math.sqrt(2): 2点間の距離（メソッドの呼び出し）

//////////////////////////////////////////////////////////////////////////////

// 制御文
// JavaScriptには、CやC++、Javaなどで使われているような条件分やループ文が用意されている。
function abs(x) { // 絶対値を計算する関数。
	if (x >= 0) {					 // if文は、条件によって処理を分岐する。
		return x;						 // 条件が真の場合は、このブロックが実行される。
	} 
	else {											 // else節は省略可能。
		return -x;					 // 条件が偽の場合は、このブロックが実行される。
	}
}
abs(-10) === abs(10) // => true

function sum(array) { // 配列の要素を合計する関数。
	let sum = 0;				 // 合計を計算する変数を初期化する。
	for (let x of array) { // 配列をループし、各要素をxに代入する。
		sum += x;				 // sumに各要素の値を加算する。
	}
	return sum;					 // 合計を返す。
}
let primes = [2, 3, 5, 7];
sum(primes) // => 28: 5番目までの素数の合計 2+3+5+7+11

function factrial(n) { // 階乗を計算する関数。
	let product = 1;	 // 積を計算する変数を初期化する。
	while (n > 1) {	 // while文は条件が真の間、ループを続ける。
		product *= n;	 // productにnを乗算する。
		n--;					 // nをデクリメントする。
	}
	return product;	 // 積を返す。
}
factrial(4) // => 24: 4の階乗 1*4*3*2

function factorial2(n) { // ループ方法を変えた関数。
	let i, product = 1;	 // 1からスタート。
	for(i=2; i <= n; i++) // 変数iを2からnまでインクリメントさせながらループする。
		product *= i;			 // ループごとに実行される。文は1行なので、波括弧は省略可能。
	return product;			 // 階乗の計算結果を返す。
}
factorial2(5) // => 120: 5の階乗 1*2*3*4*5

//////////////////////////////////////////////////////////////////////////////

// クラス
class Point { // クラス名は大文字から記述するのが慣習。
	constructor(x, y) { // 新しいインスタンスを初期化するコンストラクタ関数。
		this.x = x;			 // thisキーワードで、初期化中のオブジェクトを参照できる。
		this.y = y;			 // 関数の引数をオブジェクトのプロパティに代入する。
	}

	distance() {			 // 原点からの距離を計算するメソッド。
		return Math.sqrt(	 // 2点間の距離を計算する。
			this.x * this.x + this.y * this.y // thisが参照しているのは、distanceメソッドが呼び出されているPointオブジェクト。
		);
	}
}

// 「new」キーワードとPoint()コンストラクタ関数を使って、Pointオブジェクトを生成する。
let p = new Point(1, 1); // 座標(1, 1)のPointオブジェクトを生成する。

// Pointオブジェクトpのメソッドを使う。
p.distance() // => Math.sqrt(): 2点間の距離
