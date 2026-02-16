// math object
// console.log(Math)
// math object - bu JavaScriptda mavjud bo`lgan maxsus obekt bo`lib, u matematik amallarni bajarish uchun ishlatiladi. Math object orqali biz turli matematik funksiyalarni chaqirishimiz mumkin, masalan: kvadrat ildiz, daraja, logarifm va boshqalar.

// math objectning ba`zi funksiyalari:	
// Math.sqrt() - kvadrat ildizni hisoblash uchun ishlatiladi
// Math.pow() - darajani hisoblash uchun ishlatiladi
// Math.random() - tasodifiy sonni generatsiya qilish uchun ishlatiladi
// Math.round() - sonni yaxlitlash uchun ishlatiladi
// Math.ceil() - sonni yuqoriga yaxlitlash uchun ishlatiladi
// Math.floor() - sonni pastga yaxlitlash uchun ishlatiladi
// Math.PI - pi sonini ifodalaydi
// Math.E - e sonini ifodalaydi

// misol uchun, kvadrat ildizni hisoblash uchun Math.sqrt() funksiyasini chaqiramiz:
const number = 16;
const result = Math.sqrt(number);
console.log(result) // 4

// darajani hisoblash uchun Math.pow() funksiyasini chaqiramiz:
const base = 2;

const exponent = 3;
const powerResult = Math.pow(base, exponent);
console.log(powerResult) // 8

// tasodifiy sonni generatsiya qilish uchun Math.random() funksiyasini chaqiramiz:
const randomNumber = [15, 30, 45, 60, 75]; 
const randomIndex = Math.floor(Math.random() * randomNumber.length); // tasodifiy indexni generatsiya qilish
const randomValue = randomNumber[randomIndex]; // tasodifiy index orqali arraydan tasodifiy sonni olish
console.log(randomValue) // tasodifiy sonni chiqaradi

// const randomNum = Math.random();
// console.log(`Random qilish ${randomNum}`) // 0 va 1 orasida tasodifiy son

// sonni yaxlitlash uchun Math.round() funksiyasini chaqiramiz:
const numToRound = 4.7;
const roundedNum = Math.round(numToRound);
console.log(roundedNum) // 5


