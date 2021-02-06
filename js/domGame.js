//using the question instances to populate the HTML mark up in the main content
//grabbing all the elements that need to be changed, append-to and create

const question = document.querySelector('#question')
const picContainer = document.querySelector('.pictureContainer')
const picture = document.createElement('img')
const answers = document.querySelectorAll('.answer')

question.textContent = question1.question
picture.setAttribute('src', question1.img)
picContainer.appendChild(picture)
const shuffledAnswer = shuffleArray(question1.answers)
let i = 0
for (let answer of answers) {
    answer.textContent = shuffledAnswer[i]
    i++
}