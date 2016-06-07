// the jQuery ready function will add click listeners once the dom is loaded
$(function () {
  console.log('Dom is loaded')
  $('#ready').click(function () {
    $('button').toggle()
    console.log('restart toggle')
    $('#ready').toggle()
    $('#scores').toggle()
    $('#question').css('font-size', '40px')
    // update the display for the first time
    updateDisplay()
  })
  $('#restart').click(function () {
    restart()
  })
  $('button').click(function () {
      // if gameover then restart else log a player turn
    $('#question').css('font-size', '40px')
    if (isGameOver()) {
      console.log('isgm')
      restart()
    } else {
        // can use jquery index() to find the position of this element in relation to its siblings. works as only answers are in this container
      playTurn($(this).index())
      console.log('iam a llama')
    }
    updateDisplay()
  })
})
    // var counter = 10
    //     // var interval = setInterval(function () {
    //   counter--
    //   if (counter >= 0) {
    //     $('#timer_div').innerHTML = counter
    //   }
    //     // Display 'counter' wherever you want to display it.
    //   if (counter === 0) {
    //     alert('this is where it happens')
    //     clearInterval(counter)
    //   }
    //   }, 1000)

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

var question1 = new Question(generateQn(), [generateRandom(), randomAnswer(), randomTotal, randomAnswerP()], 2)
var question2 = new Question(generateQn(), [generateRandom(), randomTotal, randomAnswer(), randomAnswerP()], 1)
var question3 = new Question(generateQn(), [randomTotal, generateRandom(), randomAnswer(), randomAnswerP()], 0)
var question4 = new Question(generateQn(), [randomTotal, randomAnswer(), generateRandom(), randomAnswerP()], 0)
var question5 = new Question(generateQn(), [generateRandom(), randomAnswer(), randomTotal, randomAnswerP()], 2)
var question6 = new Question(generateQn(), [generateRandom(), randomAnswer(), randomTotal, randomAnswerP()], 2)

function generateQn () {
  var randomMath1 = Math.floor(Math.random() * 100)
  var randomMath2 = Math.floor(Math.random() * 100)
  randomTotal = randomMath1 * randomMath2
  return randomMath1 + ' X ' + randomMath2
}
function randomAnswer () {
  return randomTotal - 10
}

function generateRandom () {
  return randomTotal - 23
}

function randomAnswerP () {
  return randomTotal + 30
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
  console.log('playturn is running')
  if (quiz.isGameOver) {
    console.log('quiz is gameover')
    return false
  } else {
    var playerAnswer = false
    console.log('playerAnswer')
    if (choice === correctAnswer()) {
      console.log('haha')
      playerAnswer = true
      if (currentQuestion() % 2) {
        quiz.player2Points++
        console.log("Player 2 gets a point")
      } else {
        quiz.player1Points++
        console.log('Player 1 gets a point')
      }
    } ++quiz.currentQuestion
    if (currentQuestion() === numberOfQuestions()) {
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
  $('#question').text('The game restarts!')
  $('#ready').toggle()
}

function updateDisplay () {
  if (isGameOver()) {
    if (whoWon() === 3) {
      $('#question').text('The game is a draw. Neither player is a winner!')
      $('#question').css('padding','20px 0')
    } else {
      $('#question').css('height','200px')
      $('#question').text('The winner is player ' + whoWon())
    }
  } else {
    //  Display the question
    $('#question').text(quiz.questions[quiz.currentQuestion].prompt)
    //  Display the possible answers
    console.log('display')
    for (var i = 0; i <= quiz.questions[quiz.currentQuestion].choices.length; i++) {
      $('button').eq(i).text(quiz.questions[quiz.currentQuestion].choices[i])
      console.log('choices')
    }
    // Update Player Button
    $('h3').eq(0).text('Player 1 score : ' + quiz.player1Points)
    $('h3').eq(1).text('Player 2 score : ' + quiz.player2Points)
  }
}
