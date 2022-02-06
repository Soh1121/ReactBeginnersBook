type A = { foo: number };
type B = { bar: string };
type C = {
	foo?: number;
	baz: boolean;
};

type AnB = A & B;		// { foo: number, bar: string }
type AnC = A & C;		// { foo: number, baz: boolean }
type CnAorB = C & (A | B);
	// { foo: number, baz: boolean} or { foo?: number, bar: string, baz: boolean}
