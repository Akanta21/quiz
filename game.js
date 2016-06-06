function Question (prompt, answers, correctAnswerIndex) {
  this.prompt = prompt
  this.choices = answers
  this.correctChoice = correctAnswerIndex
}
// Quiz is an object that has few parameter
var quiz = {
  currentQuestion: 0,
  questions: [question1, question2, question3, question4, question5, question6],
// and so on...just need to make more questions question2, question3, question4, question5, question6
  isGameOver: false,
  player1Points: 0,
  player2Points: 0
}
var randomTotal = 1

var question1 = new Question(generateQn(), [generateRandom(), generateRandom(), randomTotal, generateRandom()], 3)
var question2 = new Question(generateQn(), [generateRandom(), randomTotal, generateRandom(), generateRandom()], 2)
var question3 = new Question(generateQn(), [randomTotal, generateRandom(), generateRandom(), generateRandom()], 1)
var question4 = new Question(generateQn(), [randomTotal, generateRandom(), generateRandom(), generateRandom()], 1)
var question5 = new Question(generateQn(), [generateRandom(), generateRandom(), randomTotal, generateRandom()], 3)
var question6 = new Question(generateQn(), [generateRandom(), generateRandom(), randomTotal, generateRandom()], 3)

function generateQn () {
  var randomMath1 = Math.floor(Math.random() * 100)
  var randomMath2 = Math.floor(Math.random() * 100)
  randomTotal = randomMath1 + randomMath2
  return randomMath1 + ' + ' + randomMath2
}

function generateRandom () {
  var randomNum = Math.floor(Math.random() * 200)
  return randomNum
}

// # numberOfQuestions()
// It should return an integer that is the number of questions in a game
function numberOfQuestions () {
  return quiz.questions.length
}

// # currentQuestion()
// It should return an integer that is the zero-based index of the current question in the quiz
function currentQuestion () {
  return quiz.currentQuestion
}

// # correctAnswer()
// It should return an integer that is the zero-based index the correct answer for the currrent question
function correctAnswer () {
  return quiz.questions[quiz.currentQuestion].correctChoice
}

// # numberOfAnswers()
// It should return an integer that is the number of choices for the current question
function numberOfAnswers () {
  return quiz.questions[quiz.currentQuestion].choices.length
}

// # playTurn(choice)
// It should take a single integer, which specifies which choice the current player wants to make.
// It should return a boolean true/false if the answer is correct.
function playTurn (choice) {
  if (quiz.isGameOver) {
    return false
  } else {
    var playerAnswer = false
    if (choice === quiz.questions[quiz.currentQuestion].correctChoice) {
      playerAnswer = true
      if (quiz.currentQuestion % 2) {
        quiz.player2Points++
      } else {
        quiz.player1Points++
      }
    } ++quiz.currentQuestion
    if (quiz.currentQuestion === quiz.questions.length) {
      quiz.isGameOver = true
    }
    return playerAnswer
  }
}
// # isGameOver()
// It should return a true or false if the quiz is over.
function isGameOver () {
  return quiz.isGameOver
}

// # whoWon()
// It should return 0 if the game is not yet finished.
// Else it should return either 1 or 2 depending on which player won.
// It should return 3 if the game is a draw.
function whoWon () {
  if (isGameOver() === false) {
    return 0
  } else if (quiz.player1Points > quiz.player2Points) {
    return 1
  } else if (quiz.player2Points > quiz.player1Points) {
    return 2
  } else return 3
}

// # restart()
// It should restart the game so it can be played again.
function restart () {
  quiz = {
    currentQuestion: 0,
    questions: [question1, question2, question3, question4, question5, question6],
  // and so on...just need to make more questions question2, question3, question4, question5, question6
    isGameOver: false,
    player1Points: 0,
    player2Points: 0
  }
}

function updateDisplay () {

}
// the jQuery ready function will add click listeners once the dom is loaded
$(function () {

})
