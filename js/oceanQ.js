//creating question 1 at a time and then putting them in the array

const ocean1 = new Question("What is this sea creature?", 'ocean/1.jpeg', 'Jellyfish')
const ocean2 = new Question("What is this sea creature?", 'ocean/2.jpeg', 'Shark')
const ocean3 = new Question("What is this sea creature?", 'ocean/3.jpeg', 'Turtle')
const ocean4 = new Question("What is this sea creature?", 'ocean/4.jpeg', 'Dolphin')
const ocean5 = new Question("What is this sea creature?", 'ocean/5.jpeg', 'Octopus')
const ocean6 = new Question("What is this sea creature?", 'ocean/6.jpeg', 'Whale')
const ocean7 = new Question("What is this sea creature?", 'ocean/7.jpeg', 'Squid')
const ocean8 = new Question("What is this sea creature?", 'ocean/8.jpeg', 'Crab')
const ocean9 = new TrueOrFalse("There are over 6,700 species of crab", 'ocean/9.jpeg', 'True')
const ocean10 = new QuestionType2("Which ocean is the largest in the world", 'ocean/10.png', 'Pacific Ocean', 'Atlantic Ocean', 'Arctic Ocean', 'Indian Ocean')
const ocean11 = new TrueOrFalse("It is safe for people to drink sea water", 'ocean/11.jpeg', 'False')
const ocean12 = new TrueOrFalse("The Ocean is the source for most our oxygen", 'ocean/12.jpeg', 'True')
const ocean13 = new TrueOrFalse("Tsunamis can move over 500miles per hour", 'ocean/13.jpeg', 'True')
const ocean14 = new QuestionType2("About how much of the earth's surface is covered by the ocean?", 'ocean/14.jpg', '70%', '90%', '50%', '40%')
const ocean15 = new QuestionType2("Which type of whale is the largest in the world?", 'ocean/15.jpeg', 'Blue Whale', 'Sperm Whale', 'Humpback Whale', 'Killer Whale')

const oceanQuestions = {
    possibleAnswers: ['Jellyfish', 'Turtle', 'Octopus', 'Swordfish', 'Squid', 'Shark', 'Dolphin', 'Whale', 'Crab'],
    questionsArray: [ocean1, ocean2, ocean3, ocean4, ocean5, ocean6, ocean7, ocean8, ocean9, ocean10, ocean11, ocean12, ocean13, ocean14, ocean15]
}
