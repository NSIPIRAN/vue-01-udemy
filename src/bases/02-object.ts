const person = {
	lastName: 'Stark',
	age: 45,
	address: {
		city: 'New York',
		zip: 54235,
		lat: 14.2452,
		lgn: 15.2145
	}
}; //as const;

//person.age  = 55;

//const person2 = person;

const person2 = structuredClone(person);

person2.lastName = 'Sofia';

console.log({person});
console.log({person2});