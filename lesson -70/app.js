//  Async JavaScript Web API (Sinxron) 
console.log('1')
console.log('2')
console.log('3')
setTimeout(() => {
	console.log('Hello')
},5000)
console.log('4')	

//	Async JavaScript Web API (Asinxron)
// console.log('1')
// console.log('2')
// console.log('3')	
// setTimeout(() => {
// 	console.log('Hello')
// },5000)
// console.log('4')
// //	Async JavaScript Web API (Asinxron) dengan Promise
// console.log('1')
// console.log('2')
// console.log('3')
// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('Hello')
// 	}, 5000)
// })
// promise.then((message) => {
// 	console.log(message)
// })
// console.log('4')
//
// Event Loop bu JavaScriptda ishlash tartibini boshqaradigan mexanizm bo'lib, u asinxron kodni bajarish uchun ishlatiladi. Event Loop, JavaScriptning yagona ipida ishlashini ta'minlaydi va asinxron operatsiyalarni boshqarish uchun call stack va task queue (yoki callback queue) ni birgalikda ishlatadi. Call stack, hozirda bajarilayotgan funksiyalarni saqlaydi, va agar biror funksiya asinxron operatsiyani boshlasa (masalan, setTimeout yoki fetch), u task queue ga qo'shiladi. Event Loop doimiy ravishda call stack ni tekshiradi va agar u bo'sh bo'lsa, task queue dan navbatdagi vazifani olib, uni call stack ga qo'yadi. Bu jarayon JavaScriptning asinxron kodni samarali tarzda bajarishiga imkon beradi va foydalanuvchi interfeysining javob berishini ta'minlaydi.		

// Call Stake bu JavaScriptda funksiyalarni bajarish tartibini boshqaradigan ma'lumot tuzilmasi bo'lib, u hozirda bajarilayotgan funksiyalarni saqlaydi. Call stack, JavaScriptning yagona ipida ishlashini ta'minlaydi va har bir funksiya chaqirilganda, u call stack ga qo'shiladi. Agar funksiya ichida boshqa funksiya chaqirilsa, u ham call stack ga qo'shiladi. Funksiya bajarilishi tugagach, u call stack dan olib tashlanadi. Agar call stack bo'sh bo'lsa, JavaScript asinxron operatsiyalarni bajarish uchun task queue dan vazifalarni oladi. Call stack, JavaScriptning sinxron kodini boshqarishda muhim rol o'ynaydi va asinxron kodni samarali tarzda bajarishiga imkon beradi.

// Web API bu JavaScriptda brauzer tomonidan taqdim etilgan funksiyalar va xususiyatlar to'plamini anglatadi. Web API, JavaScriptning asinxron kodini bajarish uchun ishlatiladi va foydalanuvchi interfeysining javob berishini ta'minlaydi. Web API, masalan, setTimeout, fetch, DOM manipulyatsiyasi, event handling va boshqa ko'plab funksiyalarni o'z ichiga oladi. JavaScriptning yagona ipida ishlashini ta'minlash uchun, Web API asinxron operatsiyalarni task queue ga qo'shadi va Event Loop orqali ularni bajaradi. Web API, JavaScriptning asinxron kodini samarali tarzda bajarishiga imkon beradi va foydalanuvchi interfeysining javob berishini ta'minlaydi.

// Queen bu JavaScriptda asinxron operatsiyalarni boshqarish uchun ishlatiladigan ma'lumot tuzilmasi bo'lib, u task queue yoki callback queue deb ham ataladi. Queen, JavaScriptning asinxron kodini bajarish uchun ishlatiladi va Event Loop orqali ularni bajaradi. Asinxron operatsiyalar (masalan, setTimeout, fetch) bajarilganda, ular queen ga qo'shiladi. Event Loop doimiy ravishda call stack ni tekshiradi va agar u bo'sh bo'lsa, queen dan navbatdagi vazifani olib, uni call stack ga qo'yadi. Bu jarayon JavaScriptning asinxron kodni samarali tarzda bajarishiga imkon beradi va foydalanuvchi interfeysining javob berishini ta'minlaydi.