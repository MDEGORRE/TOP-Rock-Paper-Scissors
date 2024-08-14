getComputerChoice = function() {
    const choices = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * choices.length);
    let result = choices[i];
    return result;
}

getHumanChoice = function() {
    const choices = ["rock", "paper", "scissors"];
    let playerChoice = prompt("Choose rock, paper or scissors");
    if (choices.includes(playerChoice.toLowerCase()) || choices.includes(playerChoice.toUpperCase())) {
        return playerChoice;
    } else alert("Invalid data");
}


playGame = function() {
    let i = 0
    let humanScore = 0;
    let computerScore = 0;    
    
        playRound = function(humanChoice, computerChoice) {

        if (computerChoice === humanChoice.toLowerCase()) {
            return "Draw !";
        } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
            humanScore++;
            return "You win! Rock beats Scissors";
        } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
            humanScore++;
            return "You win! Paper beats Rock";
        } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
            humanScore++;
            return "You win! Scissors beats Paper";
        } else "You lose !";
        computerScore++;
    }

    while (i <= 4) {
        playRound(getHumanChoice(), getComputerChoice());
        i++;
    }

    if (humanScore > computerScore) {
        return "You won!";
    } else if (humanScore === computerScore) {
        return "Draw!";
    } return "You lost!";
}

console.log(playGame());
