//creating question 1 at a time and then putting them in the array

const question1 = new Question("What is this sea creature?", 'ocean/1.jpeg', 'Jellyfish')
const question2 = new Question("What is this sea creature?", 'ocean/2.jpeg', 'Shark')
const question3 = new Question("What is this sea creature?", 'ocean/3.jpeg', 'Turtle')
const question4 = new Question("What is this sea creature?", 'ocean/4.jpeg', 'Dolphin')
const question5 = new Question("What is this sea creature?", 'ocean/5.jpeg', 'Octopus')
const question6 = new Question("What is this sea creature?", 'ocean/6.jpeg', 'Whale')
const question7 = new Question("What is this sea creature?", 'ocean/7.jpeg', 'Squid')
const question8 = new Question("What is this sea creature?", 'ocean/8.jpeg', 'Crab')
const question9 = new TrueOrFalse("There are over 6,700 species of crab", 'ocean/9.jpeg', 'True')
const question10 = new QuestionType2("Which ocean is the largest in the world", 'ocean/10.png', 'Pacific Ocean', 'Atlantic Ocean', 'Arctic Ocean', 'Indian Ocean')
const question11 = new TrueOrFalse("It is safe for people to drink sea water", 'ocean/11.jpeg', 'False')
const question12 = new TrueOrFalse("The Ocean is the source for most our oxygen", 'ocean/12.jpeg', 'True')
const question13 = new TrueOrFalse("Tsunamis can move over 500miles per hour", 'ocean/13.jpeg', 'True')
const question14 = new QuestionType2("About how much of the earth's surface is covered by the ocean?", 'ocean/14.jpg', '70%', '90%', '50%', '40%')
const question15 = new QuestionType2("Which type of whale is the largest in the world?", 'ocean/15.jpeg', 'Blue Whale', 'Sperm Whale', 'Humpback Whale', 'Killer Whale')

const oceanQuestions = {
    possibleAnswers: ['Jellyfish', 'Turtle', 'Octopus', 'Swordfish', 'Squid', 'Shark', 'Dolphin', 'Whale', 'Crab'],
    questionsArray: [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15]
}
