// Function && Methods
// function
const ism = 'shokirjon'

// const greet = (devLang) => `${ism}Hello ${devLang}`
// result = greet('JavaScript')
// console.log(result)

// methods

const great = (devLang) => `Hello ${ism.charAt(0).toUpperCase()+ism.slice(1).toLowerCase()}, hozirda sen ${devLang.charAt(0).toUpperCase()+devLang.slice(1,4).toLowerCase()+devLang.charAt(4).toUpperCase()+devLang.slice(5).toLowerCase()} tilini o'rganyabsanmi?`
result = great('javascript')
console.log(result)
// ishlatilgan methonlar 
// toUpperCase() - matndagi barcha harflarni katta harfga aylantiradi
// toLowerCase() - matndagi barcha harflarni kichik harfga aylantiradi
// charAt() - berilgan indeksdagi bitta harfni beradi
// slice() - shu indeksdan bopshlab ohirigacha yozib beradi.
