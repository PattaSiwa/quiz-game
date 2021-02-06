//check if the answer is correct or incorrect


const checkAnswer = (event) => {
    if (event.target.textContent === currentQuestion.correctAnswer) {
        //then this can fire the next question
        if (numberOfQuestion === randQuestions.length - 1) {
            const endModal = document.querySelector('#endModal')
            endModal.style.display = 'block';
        } else {

            correctAnswer()
        }

    } else {
        const feedback = document.querySelector('.feedback')
        const feedbacks = ["Oh no that's incorrect! Don't worry let's try again!", "Not quite!, let's try again!", "Not what we're looking for, let's try again!"]
        feedback.innerText = feedbacks[Math.floor(Math.random() * feedbacks.length)]
        //turn the button off after you guessed wrong answer
        event.target.setAttribute('disabled', 'true')
    }
}