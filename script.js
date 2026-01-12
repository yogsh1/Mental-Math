// Get the elements
const questionElement = document.getElementById("question");
const inputElement = document.getElementById("user-answer");
const btnElement = document.getElementById("check-btn");
const msgElement = document.getElementById("message");
const settingElement = document.getElementById("settings");
const digit1Element = document.getElementById("digits-1");
const digit2Element = document.getElementById("digits-2");
const showCorrectAnswerElement = document.getElementById("show-correct-answer")

const numOfRoundsElement = document.getElementById("Number-of-rounds");
const scoreElement = document.getElementById("score");
const questionRightCount = document.getElementById("quesRightCount");


// Global variables
let correctAnswer = 0;
let currentQuestionNumber = 1;
let totalRounds = 10;
let score = 0; // correct answers

// A helper function for game rounds
function resetGame() {
  totalRounds = Number(numOfRoundsElement.value);
  currentQuestionNumber = 1;
  score = 0;
  correctAnswer = 0;
  console.log("total rounds " + totalRounds);
  questionRightCount.textContent = `Questions: ${correctAnswer} / ${totalRounds}`;
  newQuestion();
  inputElement.disabled = false;
  btnElement.textContent = "Check";

  scoreElement.textContent = `Score: ${score}`;
}
resetGame();

// A helper function for digits
function generateNumber(digits) {
  switch (digits) {
    case 1:
      return Math.floor(Math.random() * 9) + 1;
    case 2:
      return Math.floor(Math.random() * 90) + 10;
    case 3:
      return Math.floor(Math.random() * 900) + 100;
  }
}

// Function to make a new question

function newQuestion() {
  if (currentQuestionNumber <= totalRounds) {
    console.log("cQ " + currentQuestionNumber);
    questionRightCount.textContent = `Questions: ${currentQuestionNumber} / ${totalRounds}`;
    // Num1 and Num2 Digit Selection
    let d1 = Number(digit1Element.value);
    let d2 = Number(digit2Element.value);
    const num1 = generateNumber(d1);
    const num2 = generateNumber(d2);

    correctAnswer = num1 * num2;
    console.log(num1, num2, correctAnswer);

    questionElement.textContent = `${num1} X ${num2}`;
    inputElement.value = ""; // Clear the box
    msgElement.textContent = ""; // Clear the message
    showCorrectAnswerElement.textContent = ""; // Clear the show correct answer
    inputElement.focus(); // put cursor in the box automatically
    currentQuestionNumber++;
  } else {
    questionElement.textContent = "Game Over!!";
    msgElement.textContent = `You got ${score} out of ${totalRounds}`;
    inputElement.disabled = true;
    btnElement.textContent = "Play Again?";
  }
  /*  // Game round selection
  let GameRnd = Number(numOfRoundsElement.value); */
}

// The function to checks for the correct answers, and displays 正解 or 罰 and updates the score
function check() {
  // restart game
  if (inputElement.disabled) {
    resetGame();
    return;
  }

  // Convert text input to a real number
  const userNum = Number(inputElement.value);
  if (userNum === correctAnswer) {
    msgElement.textContent = "正解!🎉";
    
    msgElement.style.color = "green";
    scoreElement.textContent = `Score: ${++score}`;

    setTimeout(newQuestion, 1000); // wait 1 second and generate next question.
  } else {
    msgElement.textContent = "罰❌";
    showCorrectAnswerElement.textContent = `Correct Answer: ${correctAnswer}`;
    msgElement.style.color = "red";
    setTimeout(newQuestion, 1000); // wait 2 seconds and generate the next question
  }
}
// newQuestion();
btnElement.addEventListener("click", check);
inputElement.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    check();
  }
});
