class Bird {
	constructor(name) {
		this.name = name;
	}

	chirp = () => {
		console.log(`${this.name}が鳴きました`);
	};

	static explain = (name) => {
		console.log(`${name}は翼があって卵を生みます`);
	};
}

class FlyableBird extends Bird {
	constructor(name) {
		super(name);
	}

	fly = () => {
		console.log(`${this.name}が飛びました`);
	};
}

const penguin = new Bird('ペンギン');
penguin.chirp();					// ペンギンが鳴きました
Bird.explain('カラス');		// カラスは翼があって卵を生みます

const hawk = new FlyableBird('タカ');
hawk.fly();								// タカが飛びました
