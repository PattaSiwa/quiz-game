//Start Modal
const startBtn = document.querySelector('#startQuiz')

startBtn.addEventListener('click', () => {
    document.querySelector('#startModal').style.display = 'none'

})


//Help Modal 

const helpBtn = document.querySelector('#helpMe')

helpBtn.addEventListener('click', () => {
    document.querySelector('#helpModal').style.display = 'block'
})

const closeBtn = document.querySelector('.closeBtn')

closeBtn.addEventListener('click', () => {
    document.querySelector('#helpModal').style.display = 'none'
})

const restartBtn = document.querySelector('.restartQuiz')
// there will be another restart button --- note to make sure don't mix them up

restartBtn.addEventListener('click', () => {
    //doesnt do anythign yet
})

