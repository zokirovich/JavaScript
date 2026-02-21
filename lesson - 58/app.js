// filtr methods
const movies = [
	{title: 'Avatar', year: 2009, rating: 7.8},
	{title: 'I Am Legend', year: 2007, rating: 7.2},
	{title: '300', year: 2006, rating: 7.7},
	{title: 'The Avengers', year: 2012, rating: 8.1},
	{title: 'The Wolf of Wall Street', year: 2013, rating: 8.2}
]

//filter methods 
// filt methodida hamma vaqt return qiymat qaytaradi

 const newMovies = movies.filter((movie) => {
	return movie.year > 2010
 })
 console.log(newMovies[0].title)
 console.log(newMovies[1].title)

// forEach() - methodi
~
// const newMovies = []
// movies.forEach((movie) => {
//    if (movie.year > 2009) {
// 		  newMovies.push(movie)
// 	 }
// })
// console.log(newMovies)