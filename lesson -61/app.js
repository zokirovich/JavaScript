// filtr methods
const movies = [
	{title: 'Avatar', year: 2009, rating: 7.8},
	{title: 'I Am Legend', year: 2007, rating: 7.2},
	{title: '300', year: 2006, rating: 7.7},
	{title: 'The Avengers', year: 2012, rating: 8.1},
	{title: 'The Wolf of Wall Street', year: 2013, rating: 8.2}
]
// reyting bo`yicha sortlab ber menga kattasi boshda kichik reytingli kino eng pastda bo`lsin

const sortedMovies = movies.sort((a,b) => {
return b.rating - a.rating  
})
console.log(sortedMovies)


// alphabetical 
const names = ['xursandd','sardor','shokir','farrux']
const sortedNames = names.sort()
// console.log(sortedNames)

// numbers
const numbers = [3,1,11,15,17,14,7,5]
const sortedNumber = numbers.sort((a,b) => {
   return a - b // bunda bir biridan olgan payti musbat son chiqsa uni ornini almashtirib boradi 
	 // nega o`zi sorted bo`lsa uni sollishtirib bilmaydi,uning yechimi u birlik sonlarni solishtiib beradi.
})
// console.log(sortedNumber)