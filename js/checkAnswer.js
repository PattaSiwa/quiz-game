//check if the answer is correct or incorrect


const checkAnswer = (event) => {
    if (event.target.textContent === currentQuestion.correctAnswer) {
        alert('Your answer was correct!')
        //then this can fire the next question
        if (numberOfQuestion === randQuestions.length - 1) {
            const endModal = document.querySelector('#endModal')
            endModal.style.display = 'block';
        } else {

            correctAnswer()
        }

    } else {
        alert("let's pick a different answer!")
        //turn the button off after you guessed wrong answer
        event.target.setAttribute('disabled', 'true')
    }
}