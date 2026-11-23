
function getComputerChoice(str) {
    const roll = Math.random();

    if (roll < 1 /3) {
        return "rock";
    } else if (roll > 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?");
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
        console.log("You win!");
        console.log("Your score" + " " + humanScore);
    } else {
        computerScore += 1;
        console.log("You lose!");
        console.log("The Computer's score" + " " + computerScore);
    }
  
    console.log(humanChoice);
    console.log(computerChoice);
}

playRound();
