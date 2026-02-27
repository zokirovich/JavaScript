// destructuring ES6 

const [olma,anor,nok,gilos] = ['olma','anor','nok','gilos']
const [banane, ...boshqaMevalar] = ['banane','apelsin','mandarin'] 
// rest operatori destructuringda qolgan ma`lumotni o`zigga oladi
// const mevalar = ['olma','anor','nok','gilos']
// const olma = mevalar[0]
// const anor = mevalar[1]
// const nok = mevalar[2]
// const gilos = mevalar[3]
console.log(olma,anor,nok,gilos)
console.log(banane,boshqaMevalar)

// object 
// classic object
// const personObj  = {
// 	name: 'Shokirjon',
// 	age: 26,
// 	job: 'developer'
// }


// //object bilan ishlashda 

// const name = personObj.name
// const age = personObj.age
// const job = personObj.job

// console.log(name,age,job)

// Destructuring object

const {name: ism, age, from = 'Uzbeksiton', ...boshqaHsusiyatlari}  = {
	name: 'Shokirjon',
	age: 26,
	job: 'developer'
}

console.log(ism, age, from, boshqaHsusiyatlari)