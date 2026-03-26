// buttons
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')
// dice img
const diceImg = document.querySelector('.dice')

	diceImg.style.display = 'none'

// varables 
	let curentScore = 0
	let accPlayer = 0
	let score = [0,0]
	let gameOver = true

// function for dice 
const switchFunct = () => {
curentScore = 0
document.getElementById(`current--${accPlayer}`).textContent = curentScore
accPlayer = accPlayer === 0 ? 1 : 0 
document.querySelector('.player--0').classList.toggle('player--active') // togle bo`lsa oladi yo`q bo`lsa qo`shish uchun ishlatiladi.
document.querySelector('.player--1').classList.toggle('player--active')
}

btnRoll.addEventListener('click', () => {
	if (gameOver){diceImg.style.display = 'block'
// dice Images
	const random = Math.floor(Math.random()*6+1)
	diceImg.src = `./dice-${random}.png`

	if (random !== 1) {
			curentScore += random
			document.getElementById(`current--${accPlayer}`).textContent = curentScore
	} else {
			switchFunct()
	}}
	
})


// hodl score
btnHold.addEventListener('click', () => {
if (gameOver){score[accPlayer] += curentScore
	document.querySelector(`#score--${accPlayer}`).textContent = score[accPlayer]
			if (score[accPlayer] >= 10) {
				if (gameOver) {
					document.querySelector(`.player--${accPlayer}`).classList.add('player--winner')
					gameOver = false
				}
			} else {
				switchFunct()
			}}
})

// new game button

btnNew.addEventListener('click',() => {
	curentScore = 0
	accPlayer = 0
	score = [0,0]
	gameOver = true 
	
	document.getElementById(`current--0`).textContent = 0
	document.getElementById(`current--1`).textContent = 0
	document.querySelector(`#score--0`).textContent = 0
	document.querySelector(`#score--1`).textContent = 0
	document.querySelector('.player--0').classList.remove('player--winner')
	document.querySelector('.player--1').classList.remove('player--winner')
	document.querySelector('.player--1').classList.remove('player--active')
	document.querySelector('.player--0').classList.add('player--active')

})