# Mental Math Trainer 🧠

A customizable web application built to improve mental multiplication speed. This project was created to practice **DOM manipulation**, **Game State logic**, and **Event Handling** in Vanilla JavaScript.

## Features

* **Customizable Difficulty:** Choose the number of digits for both numbers (e.g., 2-digit x 1-digit).
* **Game Modes:** Select specific round limits (10, 20, 30, 40 rounds).
* **Instant Feedback:** Visual and text-based feedback on answers.
* **Localization:** Includes Japanese-style feedback (正解! / 罰❌) for correct/incorrect answers.
* **Game Loop:** Features a "Game Over" state with final score summary and restart functionality.

## Tech Stack

* **HTML5** (Structure)
* **CSS3** (Styling)
* **Vanilla JavaScript** (Logic, DOM Manipulation, Event Listeners)

## How it Works

1.  Select the number of digits for the two multipliers.
2.  Select the number of rounds.
3.  Type the answer and press **Enter** or click **Check**.
4.  If wrong, the correct answer is revealed before moving to the next question.
5.  At the end of the rounds, see your final score.

## What I Learned

* Managing complex state (Score, Current Question, Game Status) in plain JavaScript.
* Using `setTimeout` to create smooth transitions between questions.
* Handling user input with both Button Clicks and Keydown events.
* Implementing a "Factory Reset" function to handle game restarts cleanly.

## How to Run

1.  Clone this repository.
2.  Open `index.html` in your browser.
3.  Start calculating!
