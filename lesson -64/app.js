
// setTimeout 
// console.log(1);
// console.log(2)
// // setTimeout(function,time) // 1000 deb yozsam u bir sekun kutib keyin chiqadi.
// console.log('Hello World')
// setTimeout(() => {
// console.log(3);
// }, 2000)
// console.log(4)


// setTimeout ishlash tartibi:
// 1. JavaScript kodni yuqoridan pastga qarab o'qiydi.
// 2. setTimeout funksiyasi uchinchi qatorda chaqiriladi, lekin u asenkron bo'lgani uchun, JavaScript uni kutmaydi va darhol keyingi qatorni bajaradi.
// 3. JavaScript 4-qatordagi console.log(4) ni bajaradi va "4" ni konsolga chiqaradi.
// 4. setTimeout funksiyasi belgilangan vaqt (2000 millisekund yoki 2 sekund) o'tgach, callback funksiyasini bajarish uchun JavaScript event loop orqali qayta ishlanadi.
// 5. Callback funksiyasi bajarilganda, "3" konsolga chiqariladi.
// JavaScript asenkron xususiyatlari tufayli, setTimeout funksiyasi belgilangan vaqt o'tgach bajariladi, lekin u kodning bajarilish tartibini o'zgartirmaydi. Shuning uchun, "4" birinchi chiqariladi, keyin esa "3" chiqariladi, chunki setTimeout asenkron bo'lib, JavaScript uni kutmaydi va darhol keyingi qatorni bajaradi.
// JavaScriptni ishlash oynasi bo`lib u Event Loop deb ataladi.Event Loopni ichida Call Stack bo`ladi Web API va Callback Queue bo`ladi. Call Stackda JavaScript kodlari bajariladi, Web API asenkron funksiyalarni bajaradi va natijalarni Callback Queuega joylashtiradi. Event Loop esa Call Stack bo`sh bo`lsa, Callback Queuedagi funksiyalarni Call Stackga o'tkazib beradi. Shuning uchun, setTimeout funksiyasi belgilangan vaqt o'tgach, uning callback funksiyasi Callback Queuega joylashtiriladi va Event Loop tomonidan Call Stackga o'tkaziladi, bu esa "3" ni konsolga chiqaradi.

// alert yordamida ishlab koramiz.



// function callMe() {
// 	alert('Hello JavaScript')
// }

// setTimeout(callMe,3000)





// setInterval bu yozgan functionimni biror bir sekund davomida ishlatib turadi.
// masalan
// let a = 0
// const timeInterval = setInterval(() => {
// 	a++
// 	console.log(a)
// }, 1000)

// setTimeout(() => {
// 	clearInterval(timeInterval)
// },10000)

  


