const original = { a: 1, b: 2, c: 3 };

const copy = Object.assign({}, original);
console.log(copy);							// 1 { name: 'Patty Rabbit', email: 'patty@maple.town', age: 8 }
console.log(copy === original);	// false

const assigned = Object.assign(original, { c: 10, d: 50 }, { d: 100 });
console.log(assigned);					// { a: 1, b: 2, c: 10, d: 100 }
console.log(original);					// { a: 1, b: 2, c: 10, d: 100 }
