const startBtn = document.getElementById('startBtn')

const continueBtn = document.getElementById('continueBtn')

const resultBox = document.getElementById('resultBox')
const quizOpt = document.getElementById('quizOpt')
const timerTime = document.getElementById('timerTime')
const timerSecs = document.getElementById('timerSecs')

// When start quiz btn is clicked
document.getElementById('startBtn').addEventListener('click', event => {
  event.target.parentNode.remove()

  const rulesBox = document.getElementById('rulesBox')
  rulesBox.className = 'rulesBox showRules'
})

// When continue btn is clicked
document.getElementById('continueBtn').addEventListener('click', event => {
  event.target.parentNode.parentNode.remove()

  const quizBox = document.getElementById('quizBox')
  quizBox.className = 'quizBox showQuiz'

  showQue(0)
  // queCounter()
  // startTimer()
})

let timer = 60
let queCount = 0
let queNum = 1
let score = 0
let counter
let widthValue = 0

const showQue = index => {
  const quizQue = document.getElementById('quizQue')

  let queTag = '<span>' + questions[index].num + '. ' + questions[index].question + '</span>'

  let optionTag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[3] + '</span></div>'

  quizQue.innerHTML = queTag
  quizOpt.innerHTML = optionTag

  const option = quizOpt.querySelectorAll('.option')

  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'optionSelected(this)')
  }
}














// When record score btn is clicked
document.getElementById('recordScoreBtn').addEventListener('click', event => {
  event.target.parentNode.parentNode.remove()

  const recordBox = document.getElementById('recordBox')
  recordBox.className = 'recordBox showRecordForm'
})

// When retake quiz btn is clicked
document.getElementById('retakeBtn').addEventListener('click', event => {
  window.location.reload()
})

// When submit btn is clicked (not done)
document.getElementById('submitBtn').addEventListener('click', event => {
  event.preventDefault()

  let userScore = document.getElementById('submitBtn').value
})


