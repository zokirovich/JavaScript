// filtr methods
const movies = [
	{title: 'Avatar', year: 2009, rating: 7.8},
	{title: 'I Am Legend', year: 2007, rating: 7.2},
	{title: '300', year: 2006, rating: 7.7},
	{title: 'The Avengers', year: 2012, rating: 8.1},
	{title: 'The Wolf of Wall Street', year: 2013, rating: 8.2}
]

// map method

const newMovies =  movies.map((movie) => {
	return movie.rating += 1

})
console.log(newMovies)


//forEach() mmethodi yordamida mapni ornini bosuvchi ALGORITIM TUZAMAN
// const newMovies = []
// movies.forEach((movie) => {
// 	return newMovies.push(movie.rating += 1)
// })
// console.log(newMovies);


// Oddiy array ni olib kelib otiribmiz

const numbers = [2,3,4,5,6]
const newNumber = numbers.map((num) => {
	return num ** 2
})
console.log(newNumber);
