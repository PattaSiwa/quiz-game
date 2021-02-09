//using the question instances to populate the HTML mark up in the main content
//grabbing all the elements that need to be changed, append-to and create

const questionDom = document.querySelector('#question')
const picContainer = document.querySelector('.pictureContainer')
const picture = document.createElement('img')
const answers = document.querySelectorAll('.answer')
const userFeedback = document.querySelector('.feedback')
const endModal = document.querySelector('#endModal')
const quizContainer = document.querySelector('.quizContainer')

//game object

const quizGame = {
    randQuestions: [],
    currentQuestion: {},
    numberOfQuestion: 0,
    currentScore: 100,
    totalScore: 0
}

//create a function that will populate the page by passing in the question object
const quizDisplay = (quest) => {
    //make the answers
    quest.makeAnswerKeys()
    //update the question on screen
    questionDom.textContent = quest.question
    //set the picture to the src
    picture.setAttribute('src', quest.img)
    //append the picture to the picture container
    picContainer.appendChild(picture)
    //shuffle the arrays before displaying
    const shuffledAnswer = shuffleArray(quest.answers)
    let i = 0
    for (let answer of answers) {
        answer.textContent = shuffledAnswer[i]
        i++
    }

}


//this is a Fisher-Yates algorith I found --- looping through 

const shuffleArray = function (array) {
    const copy = array.slice();
    let result = [];
    while (copy.length > 0) {
        const randomIndex = Math.floor(Math.random() * copy.length)
        result.push(copy[randomIndex]);
        copy.splice(randomIndex, 1);
    }
    return result;
};

//starting the quiz
//to start the quiz we need to display one of the questions
// need a function that will take the questions Array, shuffle it and then intiate the quiz


const startQuiz = () => {
    quizContainer.style.display = 'block'
    quizGame.randQuestions = shuffleArray(questionsArray)
    quizGame.currentQuestion = quizGame.randQuestions[quizGame.numberOfQuestion]
    quizDisplay(quizGame.currentQuestion)
}

//if the answer is correct then we can move on to the next question. 
const correctAnswer = () => {
    userFeedback.innerText = 'Pick an answer below'
    quizGame.numberOfQuestion++
    quizGame.currentQuestion = quizGame.randQuestions[quizGame.numberOfQuestion]
    quizDisplay(quizGame.currentQuestion)
    //reset all the buttons
    for (let answer of answers) {
        answer.removeAttribute('disabled')
    }
}

//check if the answer is correct then call correct

const checkAnswer = (event) => {
    if (event.target.textContent === quizGame.currentQuestion.correctAnswer) {
        //then this can fire the next question
        if (quizGame.numberOfQuestion === quizGame.randQuestions.length - 1) {
            endModal.style.display = 'block';
            quizContainer.style.display = 'none';
            document.querySelector('#score').textContent = quizGame.totalScore + " points!"
        } else {
            //give currentScore points to the totalScore and let user know how much they got
            quizGame.totalScore += quizGame.currentScore
            userFeedback.innerText = "That's correct! You got" + ` ${quizGame.currentScore} points!`
            //then reset all the buttons and currentScore to 100
            quizGame.currentScore = 100
            for (let answer of answers) {
                answer.setAttribute('disabled', 'true')
            }
            //wait 2 seconds then call correctAnswer for next question
            setTimeout(correctAnswer, 2000)

        }

    } else { // this happens when answer is incorrect

        const feedbacks = ["Oh no that's incorrect! let's try again!", "Not quite! let's try again!", "Not what we're looking for, let's try again!", "That's a good guess! but not what we're looking for"]
        userFeedback.innerText = feedbacks[Math.floor(Math.random() * feedbacks.length)]
        //turn the button off after you guessed wrong answer
        event.target.setAttribute('disabled', 'true')
        //minus 25 points to the current score
        quizGame.currentScore -= 25
    }
}

// run checkAnswer on each button
for (let answer of answers) {
    answer.addEventListener('click', checkAnswer)
}


const restartQuiz = () => {
    quizGame.numberOfQuestion = 0
    quizGame.randQuestions = []
    quizGame.currentQuestion = {}
    quizGame.randQuestions = shuffleArray(questionsArray)
    quizGame.currentScore = 100
    quizGame.totalScore = 0
    userFeedback.innerText = "Pick an answer below"
    for (let answer of answers) {
        answer.removeAttribute('disabled')
    }
    startQuiz()
}

    // currentQuestion = randQuestions[numberOfQuestion]
    // quizDisplay(randQuestions[numberOfQuestion])
    // const feedback = document.querySelector('.feedback')

