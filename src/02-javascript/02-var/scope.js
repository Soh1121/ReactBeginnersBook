var n = 0;

if (true) {
	var n = 50;
	var m = 100;
	console.log(n);		// 50
}

console.log(n);		// ブロック外でもスコープ内
// 50
console.log(m);
// 100
