// ShellowCopy && DeepCopy

/* primitive */

let a = 2
let b = a
b = 7
console.log(a)
console.log(b)


/* reference */

const person = {
	name: 'Shokir',
	age: 25,
	location: 'Uzbekiston'
}

// split operatori - to`liq ma`lumotni nusxalash
const newPerson = {...person}
newPerson.name = 'Farrux'
newPerson.age = 26
console.log(newPerson)
console.log(person)

// chap tarafda kelsa bu rest operatori
const [bir, ...boshqa] = [1, 2, 3]
console.log(boshqa)