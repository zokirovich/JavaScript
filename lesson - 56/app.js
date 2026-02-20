const signUpForm = document.querySelector('#signup-form')
const usernameInput = document.querySelector('#username')

signUpForm.addEventListener('submit', (e) => {
	e.preventDefault() // preventDefault() - sahifa yangilanishining oldini oladi, bu esa forma ma'lumotlarini yuborishdan oldin JavaScript kodini bajarishga imkon beradi.
	console.log(usernameInput.value)  // bu yerda usernameInput.value orqali foydalanuvchi tomonidan kiritilgan qiymatni olish va konsolga chiqarish amalga oshiriladi. Bu, foydalanuvchi forma yuborilganda, uning kiritgan username'ini ko'rish imkonini beradi.
}) 