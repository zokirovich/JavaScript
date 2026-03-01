// new Date

// console.log(new Date);
const now = new Date
const today = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
const month = now.getMonth()
const year = now.getFullYear()

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
const num = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
]
// console.log(num)

//console.log(months[month])
console.log('Today: ',today,'Month: ',num[month] < 10 ? '0' + num[month] : num[month],'Year: ', year);
setTimeout((console.log('Today: ',today,'Month: ',num[month] < 10 ? '0' + num[month] : num[month],'Year: ', year)),1000)

// time ni korib chiqamiz.

const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
const minut = now.getMinutes()  < 10 ? '0' + now.getMinutes() : now.getMinutes()
const secound = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()

console.log(`${hour}:${minut}:${secound}`)


