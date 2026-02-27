// amalyot
// start bosganda sanashni boshlashi kerak green color yordamida
// stop bosganida black color bilan kelgan sanoqda to`tashi lozim bo`ladi

const headerPlus = document.querySelector('.headerPlus')
const btnRun = document.querySelector('.btnRun')
const btnStop = document.querySelector('.btnStop')

let timer = null   // interval ID saqlash uchun

function setTimeRun(){ 
    if(timer !== null) return   // qayta bosilsa ko‘payib ketmasin
    
    timer = setInterval(() => {
        headerPlus.innerHTML++
    }, 1000)
}

function setTimeStop(){
    clearInterval(timer)
    timer = null
}

// start
btnRun.addEventListener('click', setTimeRun)

// stop
btnStop.addEventListener('click', setTimeStop)