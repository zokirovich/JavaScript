// object
const users = {
	name: 'shokirjon',
	firsName: 'samandarov',
	age: 24,
	email: 'samandarovshakirjon@gmail.com',
	location: 'Xorazm',
	langs: ['rus','eng','uzb'],
	login: function() {
		console.log('Siz sahifangizga kirdingiz.')
	},
	logut: function() {
		console.log('Siz sahifangizdan chiqib kettingiz!')
	},
	speaks: function() {

		}
	}

// console.log(users.name)
// console.log(users.firsName)
// console.log(users['age'])
users.login() // object ichidagi login functionni chaqiradi.
users.logut()

// nimaga nuqta orqali ismni chaqirib toUpperCase() methodidan foydalanyabmiz!
// chunki JS da hamma narsa bundan korinib turibdiki object hisoblanadi
const ism = 'Doniyor'
ism.toUpperCase()

