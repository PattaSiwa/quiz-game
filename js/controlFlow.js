let randQuestions = []
let currentQuestion = {}
let numberOfQuestion = 0

//to start the quiz we need to display one of the questions
// need a function that will take the questions Array, shuffle it and then intiate the quiz

const startQuiz = () => {
    randQuestions = shuffleArray(questionsArray)
    currentQuestion = randQuestions[numberOfQuestion]
    quizDisplay(randQuestions[numberOfQuestion])
}

//if the answer is correct then we can move on to the next question. 

const correctAnswer = () => {
    numberOfQuestion++
    currentQuestion = randQuestions[numberOfQuestion]
    quizDisplay(randQuestions[numberOfQuestion])
    //reset all the buttons
    for (let answer of answers) {
        answer.removeAttribute('disabled')
    }
}

startQuiz()