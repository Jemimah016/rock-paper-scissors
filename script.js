let humanScore = 0;
let computerScore = 0;

const result = document.querySelector("#result");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

function getComputerChoice() {
    let random = Math.random();

    if (random < 0.33) return "rock";
    else if (random < 0.66) return "paper";
    else return "scissors";
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        result.textContent = `Draw! Both chose ${humanChoice}`;
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else {
        computerScore++;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    updateScore();
}

function updateScore() {
    const scoreBoard = `Score — You: ${humanScore} | Computer: ${computerScore}`;
    result.textContent += `\n${scoreBoard}`;

    if (humanScore === 5) {
        result.textContent = "🎉 You won the game!";
        disableButtons();
    }
    else if (computerScore === 5) {
        result.textContent = "💀 Computer won the game!";
        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}


rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});