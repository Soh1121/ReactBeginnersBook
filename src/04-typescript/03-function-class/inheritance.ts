class Square extends Rectangle {
	readonly name = 'square';
	side: number;

	constructor(side: number) {
		super(side, side);
	}
}

class Square {
	readonly name = 'square';
	side: number;

	constructor(side: number) {
		this.side = side;
	}

	getArea = ():number => new Rectangle(this.side, this.side).getArea();
}
