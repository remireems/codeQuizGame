const startBtn = document.getElementById('startBtn')
const rulesBox = document.getElementById('rulesBox')
const continueBtn = document.getElementById('continueBtn')
const quizBox = document.getElementById('quizBox')
const resultBox = document.getElementById('resultBox')
const quizOpt = document.getElementById('quizOpt')
const timerTime = document.getElementById('timerTime')
const timerSecs = document.getElementById('timerSecs')

// When start quiz btn is clicked
document.getElementById('startBtn').addEventListener('click', event => {
  event.target.parentNode.remove()


  rulesBox.className = 'rulesBox showRules'
})

let timer = 60
let queCount = 0
let queNum = 1
let score = 0

// When continue btn is clicked
document.getElementById('continueBtn').addEventListener('click', event => {
  // event.target.parentNode.parentNode.remove()
  rulesBox.className.remove = 'showRules'


  quizBox.className = 'quizBox showQuiz'

  showQue(0)
  queCounter(1)
  startTimer(timer)
})


const showQue = index => {
  const quizQue = document.getElementById('quizQue')


  let queTag = '<span>' + questions[index].num + '. ' + questions[index].question + '</span>'

  let optionTag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[3] + '</span></div>'

  quizQue.innerHTML = queTag
  quizOpt.innerHTML = optionTag
  // quizOpt.className = 'quizOpt option'

  // const option = quizOpt.className = 'quizOpt option'

  const option = quizOpt.getElementsByClassName('option')

  console.log(option)


  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'optionSelected(this)')
  }
}

let checkIconTag = '<div class="checkIcon"><i class="fas fa-check"></i></div>'
let xIconTag = '<div class="xIcon"><i class="fas fa-times"></i></div>'

const optionSelected = answer => {
  let userAnswer = answer.textContent
  let correctAnswer = questions[queCount].answer

  const allOptions = quizOpt.children.length

  if (userAnswer === correctAnswer) {
    score++
    answer.className = 'option correct'
    answer.insertAdjacentHTML('beforeend', checkIconTag)
    console.log(`Correct answer! Your score is ${score}`)
  } else {
    timer = timer - 10
    answer.className = 'option incorrect'
    answer.insertAdjacentHTML('beforeend', xIconTag)
    console.log('Incorrect answer!')
  }

  for (let i = 0; i < allOptions; i++) {
    quizOpt.children[i].className = 'option disabled'
  }

  // for (let i = 0; i < allOptions.length; i++) {
  //   if (queCount < questions.length - 1) {
  //     queCount++
  //     queNum++
  //     showQue(queCount)
  //     queCounter(queNum)
  //   } else {
  //     showResult()
  //   }
  // }
}

const showResult = () => {
  quizBox.className.remove = 'showQuiz'
  resultBox.className = 'resultBox showResults'

  let resultScore = document.getElementById('resultScore')
  resultScore.innerHTML = `Your score is ${score} out of 5!`
}

const quizTotal = document.getElementById('quizTotal')

const queCounter = index => {
  let totalQueCountTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> questions</span>'
  quizTotal.innerHTML = totalQueCountTag;
}

const startTimer = timer => {
  setInterval(() => {
    if (timer === 0) {
      clearInterval(timer)
      showResult()
    } else {
      timer--
      document.getElementById('timerSecs').textContent = timer
    }
  }, 1000);
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


