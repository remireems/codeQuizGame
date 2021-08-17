const startBtn = document.getElementById('startBtn')
const rulesBox = document.getElementById('rulesBox')
const continueBtn = document.getElementById('continueBtn')
const quizBox = document.getElementById('quizBox')


document.getElementById('startBtn').addEventListener('click', event => {
  event.preventDefault()

  event.target.parentNode.remove()
  rulesBox.className = 'rulesBox showRules'

})

document.getElementById('continueBtn').addEventListener('click', event => {
  event.target.parentNode.parentNode.remove()
  quizBox.className = 'quizBox showQuiz'

  // showQue()
  // queCount()
  // startTimer()
})

// add more code Qs later
const questions = [
  {
    num: 1,
    question: 'What does HTML stand for?',
    answer: 'Hyper Text Markup Language',
    options: [
      'Hyper Text Preprocessor',
      'Hyper Text Markup Language',
      'Hyper Text Multiple Language',
      'Hyper Tool Multi Language'
    ]
  },
  {
    num: 2,
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheet',
    options: [
      'Cascading Style Sheet',
      'Common Style Sheet',
      'Color Style Sheet',
      'Computer Style Sheet'
    ]
  },
  {
    num: 3,
    question: 'What does FGO stand for?',
    answer: 'Fate Grand Order',
    options: [
      'Fate Great Order',
      'Fate Good Order',
      'Fate God Order',
      'Fate Grand Order'
    ]
  }
]