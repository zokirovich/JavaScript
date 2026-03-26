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

btnRoll.addEventListener('click', () => {
	diceImg.style.display = 'block'
// dice Images
	const random = Math.floor(Math.random()*6+1)
	diceImg.src = `./dice-${random}.png`

	if (random !== 1) {
			curentScore += random
			document.getElementById(`current--${accPlayer}`).textContent = curentScore
	} else {
			curentScore = 0
			document.getElementById(`current--${accPlayer}`).textContent = curentScore
			accPlayer = accPlayer === 0 ? 1 : 0 
			document.querySelector('.player--0').classList.toggle('player--active') // togle bo`lsa oladi yo`a bo`lsa qo`shish uchun ishlatiladi.
			document.querySelector('.player--1').classList.toggle('player--active')
	}
	
})


// hodl score
btnHold.addEventListener('click', () => {
score[accPlayer] += curentScore
document.querySelector(`#score--${accPlayer}`).textContent = score[accPlayer]

curentScore = 0
			document.getElementById(`current--${accPlayer}`).textContent = curentScore
			accPlayer = accPlayer === 0 ? 1 : 0 
			document.querySelector('.player--0').classList.toggle('player--active') // togle bo`lsa oladi yo`a bo`lsa qo`shish uchun ishlatiladi.
			document.querySelector('.player--1').classList.toggle('player--active')

			if (score[accPlayer] >= 10) {
				if (gameOver) {
					gameOver = false
					document.querySelector(`.player--${accPlayer}`).classList.add('player--winner')
				}
			} else {
				document.querySelector(`#current--${accPlayer}`).textContent = curentScore
			}
})