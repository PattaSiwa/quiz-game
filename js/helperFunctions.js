//using the question instances to populate the HTML mark up in the main content
//grabbing all the elements that need to be changed, append-to and create

const questionDom = document.querySelector('#question')
const picContainer = document.querySelector('.pictureContainer')
const picture = document.createElement('img')
const answers = document.querySelectorAll('.answer')

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

// run checkAnswer on each button
for (let answer of answers) {
    answer.addEventListener('click', checkAnswer)
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