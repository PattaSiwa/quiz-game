//template for questions using Class
//each question should take in the question, image and the correct answer

//create an array of possible answers

const possibleAnswers = ['Jellyfish', 'Turtle', 'Octopus', 'Sword-Fish', 'Squid', 'Shark']

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
        const newAnswers = shuffleArray(possibleAnswers)

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

const question1 = new Question("What is this animal?", '1.jpeg', 'Jellyfish')

const question2 = new Question("What is this animal?", '2.jpeg', 'Shark')

const question3 = new Question("What is this animal?", '3.jpeg', 'Turtle')



const questionsArray = [question1, question2, question3]