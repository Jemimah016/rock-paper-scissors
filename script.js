function getComputerChoice() {
    let random = Math.random();
     if (random < 0.33) {
        return "rock";
     } else if (random < 0.66) {
        return "paper";
     } else {
        return "scissors";
     }
}
 
console.log(getComputerChoice());

function getHumanChoice() {
    return prompt("rock, paper, or scissors?")
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log("Draw");
    }
    else if(
        (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper"))
        {
            humanScore++;
            console.log("You win!" + humanChoice + "beats" + computerChoice);
        }
    else {
        computerScore++;
        console.log("You lose! " + computerChoice + "beats" + humanChoice);
    }
    }

playRound(getHumanChoice(), getComputerChoice());

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("Final Score");
    console.log("Human:" + humanScore);
    console.log("Computer:" + computerScore);
    if (humanScore > computerScore)
    {
        console.log("You Win Game");
    }
    else if (computerScore > humanScore)
    {
        console.log("You Lose Game");
    }
    else {
        console.log("Draw Game");
    }
}
playGame();