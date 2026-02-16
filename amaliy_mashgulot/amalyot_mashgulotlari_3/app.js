// JavaScript masalalari.

// Loop / Array / String / Function / Object

// 1 - MASHQ

// ushbu arraydagi stringni indexsini toping?

// const myArray = [[false,true],[1,2],99, 'yaxshi']

// for

// for (let i = 0; i < myArray.length; i++) {
// 	if (typeof(myArray[i]) == 'string') {
// 		console.log(`${i}-index ${myArray[i]} ga teng`)
// 	}
// }

// forEach yordamida ishlab ko`ramiz 

// myArray.forEach((iteam,i) => {
// 	if (typeof(iteam) == 'string')
// 		console.log(`String index - ${i}`)
// })

// 2 - MASHQ
// Array ichidagi faqat arraylarni elementlarini ajratib oling
// Kutayotkan natija [1,2,3,4,5,6]

// const data = [[1,2,3],'qizil',[4,5,6],true,false]
// const dataNew = []
// // forEach yordamida ishlaymiz

// data.forEach((iteam) => {
// 	const res = Array.isArray(iteam)
// 	if (res) {
// 		iteam.forEach((number) => {
// 			dataNew.push(number)
// 		})
// 	}
// })
// console.log(dataNew)

// 3 - MASHQ
// Davomi bor ...



// 