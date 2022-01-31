const Person = function (name) {
	this.name = name;

	return this;
};

const kanae = Person.call({ gender: 'f' }, 'Kanae');	// { gender: 'f' } を this として渡す
console.log(kanae);		// { gender: 'f', name: 'Kanae' }
