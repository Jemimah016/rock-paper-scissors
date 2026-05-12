let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

function getComputerChoice() {
  const random = Math.random();

  if (random < 0.33) return "rock";
  else if (random < 0.66) return "paper";
  else return "scissors";
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    results.textContent = "It's a draw!";
  } 
  else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } 
  else {
    computerScore++;
    results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  results.textContent += `\nScore: You ${humanScore} - Computer ${computerScore}`;

  if (humanScore === 5) {
    results.textContent = "🎉 You win the game!";
    disableButtons();
  }

  if (computerScore === 5) {
    results.textContent = "💀 Computer wins the game!";
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
