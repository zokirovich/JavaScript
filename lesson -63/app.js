// local storage o`zi nima?
// local storage - bu brauzerda ma'lumotlarni saqlash uchun ishlatiladigan xotira joyi. U foydalanuvchi tomonidan kiritilgan ma'lumotlarni yoki dastur holatini saqlash uchun ishlatiladi. Local storage ma'lumotlarni kalit-qiymat juftlari shaklida saqlaydi va ularni brauzer yopilgandan keyin ham saqlab qoladi. Bu, masalan, foydalanuvchi saytga qaytib kelganda oldingi holatini tiklash uchun foydalidir. Local storage faqat matnli ma'lumotlarni saqlaydi va har bir domen uchun alohida bo'ladi.

// Session storage - bu ham brauzerda ma'lumotlarni saqlash uchun ishlatiladigan xotira joyi, lekin u faqat joriy sessiya davomida saqlanadi. Session storage ma'lumotlarni kalit-qiymat juftlari shaklida saqlaydi, lekin brauzer yopilganda yoki sahifa yangilanganda bu ma'lumotlar yo'qoladi. Bu, masalan, foydalanuvchi bir sahifada ma'lumotlarni kiritib, keyin boshqa sahifaga o'tganda bu ma'lumotlarni saqlab qolish uchun foydalidir. Session storage ham faqat matnli ma'lumotlarni saqlaydi va har bir domen uchun alohida bo'ladi.

// Cookie - bu brauzerda ma'lumotlarni saqlash uchun ishlatiladigan kichik matnli fayllar. Cookie'lar server tomonidan yaratiladi va foydalanuvchi brauzeriga yuboriladi, keyin esa brauzer har bir so'rovda bu cookie'larni serverga yuboradi. Cookie'lar foydalanuvchi identifikatsiyasi, sessiya boshqaruvi, va boshqa maqsadlar uchun ishlatiladi. Cookie'lar ma'lumotlarni kalit-qiymat juftlari shaklida saqlaydi, lekin ular faqat matnli ma'lumotlarni saqlaydi va har bir domen uchun alohida bo'ladi. Cookie'lar brauzer yopilganda ham saqlanadi, lekin ularning amal qilish muddati belgilanishi mumkin.

// Local storage ga misol ko`rib chiqamiz:
// setItem - bu localStorage ga ma`lummotni yozib beradi.
// const name = 'Shokir'
// const age = 25
// localStorage.setItem('name',name)
// localStorage.setItem('age',age)
// // getItem - localStorage dagi ma`lumotni olib beradi.
// const getAge = localStorage.getItem('age')
// const getName = localStorage.getItem('name')
// console.log(getAge);
// console.log(getName);


// clear - localStorgni ma`lumotlarini tozalab beradi.
// localStorage.clear()



// Bir nechta mashq ko`rib chiqamiz...

// setItem - localStorga ma`lumot qo`shish

const names = ['Shokir','Xumoyun','Farrux']

// names.forEach((nameee) => {
// 	localStorage.setItem('name',nameee)
// })

localStorage.setItem('names',JSON.stringify(names))

// JSON.stringify() - bu methon bizga array qiymat qilib yozib beradi

const getNames = JSON.parse(localStorage.getItem(names))
console.log(getNames)