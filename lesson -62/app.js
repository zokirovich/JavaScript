// ternary operation
// const a = true ? 'Hello world!' : "Bye bye world!"
// console.log(a)

// const b = false ? 'Hello world!' : "Bye bye world!"
// console.log(b)

// Bundan kelib chiqadiki agar shartimiz true bo`lsa ya`ni shartimizni sharti rost bo`lsa ? daqi qiymat chiqadi aks holda shartimizni qiymayti false(yolg`on) bo`lsa : dagi qiymat chiqadi.
// operatorlarni ishlatish uchun ularni biror bir o`zgaruvchiga yuklab uni consloe.log()ga chiqazishimiz mumkin 

// prompt() - bu bizga foydalanuvchidan ma`lumot olish imkonini beruvchi funksiya. Bu funksiya foydalanuvchidan ma`lumot olish uchun dialog oynasini ochadi va foydalanuvchi kiritgan ma`lumotni qaytaradi. Agar foydalanuvchi hech narsa kiritmasa yoki dialog oynasini bekor qilsa, prompt() null qiymatini qaytaradi.

// alert() - bu foydalanuvchiga ma`lumot ko`rsatish uchun ishlatiladigan funksiya. Bu funksiya biror matn yoki qiymatni dialog oynasida ko`rsatadi va foydalanuvchi "OK" tugmasini bosganda dialog oynasini yopadi. alert() funksiyasi hech qanday qiymat qaytarmaydi, ya`ni undefined qiymatini qaytaradi.

// const age = prompt("Yoshingizni kiriting:")

// ternary operator yordamida yoshga qarab hayvonat bog`iga kirish narxini aniqlaymiz
// const newAge = age < 18 ? 'Hayvonat bog`iga kirish 1000 so`m' : 'Hayvonat bog`iga kirish narxi 20000 so`m'
// console.log(newAge);

// if operator yordamida yoshga qarab hayvonat bog`iga kirish narxini aniqlaymiz
// if (age < 18) {
// 		console.log('Hayvonat bog`iga kirish 10000 so`m');
// } else {
// 		console.log('Hayvonat bog`iga kirish narxi 20000 so`m');
// }


// ternary operatori yordamida prompt() va alert() funksiyalarini birgalikda ishlatamiz

// const car = prompt("Moshinangiz nechanchi yilda ishlab chiqarilgan")
// const newCar = 2026 - car
// newCar < 15
	// ? alert("Sizning moshinangiz yaroqli hisoblanadi:")
	// : alert("Sizning moshinangiz eskirgan,uni utilizatsiya bo`limiga oborib bering aks holda 10 MHM jarima qo`llashlari mumkin bo`ladi.")


	// men armiyaga borib bilamanmi degan dastur yozib chiqamiz ternary operatori yordamida 

// age < 18 
			// ? alert(`Siz armiya yoshidan ${18 - age} yosh kichik siz.`)
			// : age < 28
			// ? alert("Siz armiya yoshidasiz.O`zbekiston oldidagi burchingizni bajarib qo`ying, har bir o`zbek o`glonini burchi hisoblanadi.")
			// : alert(`Siz armiya yoshidan ${age - 28} yil o'tib ketkansiz.`) 



			// && - shlagbount true bo`lsa keyingi shartga o`tkizadi

			const number = [1].length
			number && console.log('Hello world')