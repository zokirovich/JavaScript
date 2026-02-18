// modal projectni js codelarini birin ketin yozib chiqamiz!


const showBtn = document.querySelector('.show-btn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-btn')
const overlay = document.querySelector('.overlay')

// JS da DOM dan chaqirib ular ustuda amallar bajarib chiqamiz.

// addHiddenga function yozamiz
const addHeddin = () => {
		modal.classList.add('hidden')
		overlay.classList.add('hidden')
}

// removeHiddenga function yozamiz
const removeHidden = () => {
		modal.classList.remove('hidden')
		overlay.classList.remove('hidden')
}

showBtn.addEventListener('click', () => {
		removeHidden()
})

closeBtn.addEventListener('click', () => {
	addHeddin()
})

overlay.addEventListener('click',() => {
	addHeddin()
})

document.addEventListener('keydown', (e) => {
	if (e.key == 'Escape') {
	addHeddin()
	
	}
})