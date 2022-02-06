// callable object type
{
	interface NumOp {
		(n: number, m: number): number;
	}

	const add :NumOp = function (n, m) {
		return n + m;
	};
	const subtract: NumOp = (n, m) => n - m;

	console.log(add(1, 2));				// 3
	console.log(subtract(7, 2));	// 5
}

// in-line
{
	const add: (n: number, m: number) => number = function (n, m) {
		return n + m;
	};
	const subtract: (n: number, m: number) => number = (n, m) => n - m;

	console.log(add(3, 7));				// 10
	console.log(subtract(10, 8));	// 2
}
