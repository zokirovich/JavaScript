const player1Display = document.querySelector('#player1')
const player2Display = document.querySelector('#player2')

const btnPlayer1 = document.querySelector('#btnPlayer1')
const btnPlayer2 = document.querySelector('#btnPlayer2')
const resetBtn = document.querySelector('#reset')

const gameLevelSelect = document.querySelector('#gameLavel')

let player1Score = 0
let player2Score = 0
let winningScore = parseInt(gameLevelSelect.value)
let isGameOver = false


// Select o'zgarganda
gameLevelSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    resetGame()
})


// Player 1
btnPlayer1.addEventListener('click', function () {
    if (!isGameOver) {
        player1Score++
        if (player1Score === winningScore) {
            isGameOver = true
            player1Display.classList.add('text-success')
            player2Display.classList.add('text-danger')
        }
        player1Display.textContent = player1Score
    }
})


// Player 2
btnPlayer2.addEventListener('click', function () {
    if (!isGameOver) {
        player2Score++
        if (player2Score === winningScore) {
            isGameOver = true
            player2Display.classList.add('text-success')
            player1Display.classList.add('text-danger')
        }
        player2Display.textContent = player2Score
    }
})


// Reset function
function resetGame() {
    isGameOver = false
    player1Score = 0
    player2Score = 0

    player1Display.textContent = 0
    player2Display.textContent = 0

    player1Display.classList.remove('text-success', 'text-danger')
    player2Display.classList.remove('text-success', 'text-danger')
}

resetBtn.addEventListener('click', resetGame)