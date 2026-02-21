// object bilan tanishish ya`ni object yaratish va unga qiymat berish
const body = document.querySelector('body')
const continer = document.querySelector('.contener')
const colorText = document.querySelector('.color-text')

const value = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
]
// random color function

function getGradient() {
	let color = '#'
	for (let i = 0; i< 6; i++) {

		const randomColor = Math.trunc(Math.random() * value.length)
		color += (value[randomColor])
	}
	return color
}




// setGradient - set gradient body

function setGradient(){
	const color1 =  getGradient()
	const color2 =  getGradient()
	const color3 =  getGradient()

	const randomTag = Math.trunc(Math.random()*360)
  const bgColor = `linear-gradient(
		${randomTag}deg,
		${color1},
		${color2},
		${color3}
	)`
					
					body.style.background = bgColor
					colorText.textContent = bgColor

}


continer.addEventListener('click', setGradient)