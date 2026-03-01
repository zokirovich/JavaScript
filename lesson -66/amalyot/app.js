// DOM ga olib kiramiz
const fullDay = document.querySelector('#full-day')
const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const secound = document.querySelector('#second')

// Date  
const now = new Date

// day
fullDay.textContent = now.toLocaleDateString()

//hours.minute.secound

hour.textContent = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
minute.textContent = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
secound.textContent = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
