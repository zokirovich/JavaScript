// events - xodisalar

// const button = document.querySelector('button')
// button.addEventListener('click',() => {
// 	console.log('You are clicked me.')
// })

const iteams = document.querySelectorAll('li')

iteams.forEach((iteam) => {
	iteam.addEventListener('click', (e) => {
	 e.target.style.textDecoration = 'line-through'
	 e.target.style.opacity = 0.8		
	})
})