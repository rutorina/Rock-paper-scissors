// pseudocode rock paper scissors game:
// create 2 vars for player and computer score
// create a function to get computer choice
// create a function to get user choice and validate it
// create a function to play a round of the game
// create a var for a score
// create a loop to play rounds of the game till user decides to stop (typing 0 in the console)
// create a function to display the final score and declare the winner

let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            return "It's a tie!";
        case (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper"):
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
        default:
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function displayFinalScore() {
    if (playerScore > computerScore) {
        resultContainer.innerText = "Congratulations! You are the winner!";
    } else if (computerScore > playerScore) {
        resultContainer.innerText = "Sorry! The computer wins!";
    } else {
        resultContainer.innerText = "It's a tie!";
    }
}


const startButton = document.getElementById("start-button");
const optionsContainer = document.getElementById("options");
const resultContainer = document.getElementById("result");
const scoreContainer = document.getElementById("score");

startButton.addEventListener("click", () => {
    optionsContainer.classList.toggle("invisible");
    optionsContainer.classList.toggle("disabled");
    startButton.classList.toggle("visible");
    startButton.classList.toggle("invisible");
    scoreContainer.textContent = `Score - Player: 0, Computer: 0`;
    resultContainer.textContent = "";
});

optionsContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const playerSelection = event.target.dataset.choice;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        resultContainer.textContent = `Computer chose: ${computerSelection}\nYour choice: ${playerSelection}\n${result}`;
        scoreContainer.textContent = `Score - Player: ${playerScore}, Computer: ${computerScore}`;
        if (playerScore === 5 || computerScore === 5) {
            scoreContainer.textContent = `Score - Player: ${playerScore}, Computer: ${computerScore}`;
            displayFinalScore();
            playerScore = 0;
            computerScore = 0;
            optionsContainer.classList.toggle("disabled");
            setTimeout(() => startButton.click(), 3000);
        }
    }
});