//check if the answer is correct or incorrect


const checkAnswer = (event) => {
    if (event.target.textContent === question1.correctAnswer) {
        alert('Your answer was correct!')
    } else {
        alert("let's pick a different answer!")
        //turn the button off after you guessed wrong answer
        event.target.setAttribute('disabled', 'true')
    }
}