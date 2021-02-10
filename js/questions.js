//template for questions using Class
//each question should take in the question, image and the correct answer


//create an array of possible answers


class Question {
    //will take in the 3 arguments to create a question class. 1) the question itself 2) the corresponding image that's in the img folder(prefixed) 3) the correct answer to the question.
    constructor(question, img, correctAnswer) {
        this.question = question
        this.img = `img/` + img
        this.correctAnswer = correctAnswer
        this.answers = [correctAnswer]
    }

    //populate the answers using possible answers

    makeAnswerKeys() {
        //randomize the answer key
        const newAnswers = shuffleArray(quizGame.questionSet.possibleAnswers)

        newAnswers.forEach((answer) => {
            //if it's less than 4 items in the array and it's not the same as the correct answer, then push it to the array
            if (this.answers.length < 4) {
                if (answer !== this.correctAnswer) {
                    this.answers.push(answer)
                }
            }

        })
    }

}


