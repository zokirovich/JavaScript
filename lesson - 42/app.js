// this-dan foydalanishni ko`rib chiqamiz
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
// this
			(this.langs.forEach((lang) => {
				console.log(`Men ${lang} tilida gapira olaman!`)
			}))
		}
	}
// thisga ta`rif beramiz
// this - bu objectning o`ziga ishora qiluvchi kalit so`z
// this orqali biz objectning o`ziga murojaat qilamiz va uning ichidagi malumotlarga erishamiz

users.speaks()


