//These modals are the control flow of the game

//Start Modal
const startOcean = document.querySelector('#startOcean')

startOcean.addEventListener('click', () => {
    document.querySelector('#startModal').style.display = 'none'
    quizGame.questionSet = oceanQuestions
    startQuiz()

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
    document.querySelector('#helpModal').style.display = 'none'
    restartQuiz()
})

const mainMenu1 = document.querySelector('.mainMenu')

mainMenu1.addEventListener('click', () => {
    document.querySelector('#helpModal').style.display = 'none'
    document.querySelector('#welcomeText').textContent = "Main Menu"
    document.querySelector('#startModal').style.display = 'block'

})



//endModal 
const retakeBtn = document.querySelector('#retakeQuiz')

retakeBtn.addEventListener('click', () => {
    document.querySelector('#endModal').style.display = 'none'
    restartQuiz()
})

const mainMenu2 = document.querySelectorAll('.mainMenu')[1]

mainMenu2.addEventListener('click', () => {
    document.querySelector('#endModal').style.display = 'none'
    document.querySelector('#welcomeText').textContent = "Main Menu"
    document.querySelector('#startModal').style.display = 'block'

})