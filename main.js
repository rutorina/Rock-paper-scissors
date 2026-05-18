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
let usersChoice = "";
let computerChoice = "";

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getUserChoice() {
    let choice = prompt("Enter your choice (rock, paper, scissors) using a word or number of 1, 2, 3 or 0 to stop playing:");
    while (!choices.includes(choice) && !["1", "2", "3", "0"].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, scissors or 1, 2, 3 or 0 to stop playing:");
    }
    if (choice === "0") {
        return null; // Return null to indicate the user wants to stop playing
    }
    if (["1", "2", "3"].includes(choice)) {
        return choices[parseInt(choice) - 1]; // Convert number to corresponding choice
    }
    return choice; // Return the valid choice
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
    alert(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        alert("Congratulations! You are the winner!");
    } else if (computerScore > playerScore) {
        alert("Sorry! The computer wins!");
    } else {
        alert("It's a tie!");
    }
}

while (true) {
    usersChoice = getUserChoice();
    if (usersChoice === null) {
        break; // Exit the loop if the user wants to stop playing
    }
    computerChoice = getComputerChoice();
    alert(`Computer chose: ${computerChoice}\nYour choice: ${usersChoice}\n${playRound(usersChoice, computerChoice)}`);
}

displayFinalScore();