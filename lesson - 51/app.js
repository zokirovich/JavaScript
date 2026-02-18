// children,parend and siblining elementlar bilan tanishib chiqamiz

//children
const article = document.querySelector("article");
// console.log(article.children)
Array.from(article.children).forEach((child) => {
	child.classList.add("success")
})

// Array.from() - bu HTMLCollection yoki NodeList ni oddiy massivga aylantirish uchun ishlatiladi. Bu bizga forEach, map, filter kabi massiv metodlarini ishlatish imkonini beradi.
// OOP da biz classlardan foydalanamiz, classlar esa objectlarni yaratish uchun shablon vazifasini bajaradi. JavaScriptda classlar ES6 (ECMAScript 2015) da joriy etilgan va ular prototip asosida ishlaydi. Classlar yordamida biz o'zimizning maxsus ma'lumot turlarimizni yaratishimiz mumkin, bu esa kodni yanada tartibli va tushunarli qiladi. 


const title = document.querySelector("h2");
console.log(title.parentElement)
console.log(title.parentElement.parentElement)
console.log(title.nextElementSibling)
console.log(title.previousElementSibling)
console.log(title.children)

// chaining

console.log(title.nextElementSibling.parentElement.children)


