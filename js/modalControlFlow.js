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


//Main Menu Buttons on Help and End modals
const mainMenusBtn = document.querySelectorAll('.mainMenu')
//both button take you back to the main menu and restart game object
for (let mainBtn of mainMenusBtn) {
    mainBtn.addEventListener('click', () => {

        document.querySelector('#welcomeText').textContent = "Main Menu"
        quizContainer.style.display = 'none'
        document.querySelector('#startModal').style.display = 'block'
        restartGameStat()
    })

}

//Each button close the modal they are responsible for
mainMenusBtn[0].addEventListener('click', () => {
    document.querySelector('#helpModal').style.display = 'none'
})
mainMenusBtn[1].addEventListener('click', () => {
    document.querySelector('#endModal').style.display = 'none'
})


//endModal 
const retakeBtn = document.querySelector('#retakeQuiz')

retakeBtn.addEventListener('click', () => {
    document.querySelector('#endModal').style.display = 'none'
    restartQuiz()
})





