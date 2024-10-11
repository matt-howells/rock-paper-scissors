// UI 

// Create buttons
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const resetBtn = document.createElement("button"); 

// Set button text
rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
resetBtn.textContent = "Reset";

// Append to body
document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);
document.body.appendChild(resetBtn);

// Create result display div
const div = document.createElement("div"); 
document.body.appendChild(div);

// Create score display fic 
const scoreDiv = document.createElement("div");
document.body.appendChild(scoreDiv);


 // Function to get computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) { 
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Game logic for one round
let humanScore = 0;
let computerScore = 0;
let roundCount =0;

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    
    if (humanChoice === "rock" && computerChoice === "paper" ||        
        humanChoice === "scissors" && computerChoice === "rock" ||    
        humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        div.textContent = "You lost, " + computerChoice + " beats " + humanChoice + ".";
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
               humanChoice === "scissors" && computerChoice === "paper" ||
               humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        div.textContent = "You Win! " + humanChoice + " beats " + computerChoice + ".";
    } else if (humanChoice === computerChoice) {
        div.textContent = "It's a tie! Both chose " + humanChoice + ".";
    } else {
        div.textContent = "Invalid input.";
    }
    scoreDiv.textContent = `Current Score - You: ${humanScore}, Computer: ${computerScore}`;
    roundCount++;

    if (roundCount >=5) {
        endGame();
    }
    
}

// Event listeners for buttons
rockBtn.addEventListener("click", () => {
    playRound("rock");
});

paperBtn.addEventListener("click", () => {
    playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});

function endGame() {
    // Disable buttons
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    
    // Display final scores
    div.textContent += `\nGame Over! Final Score - You: ${humanScore}, Computer: ${computerScore}`;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;

    // Enable buttons
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    // Reset display texts
    div.textContent = "";
    scoreDiv.textContent = "Current Score - You: 0, Computer: 0";
}

// Event listener for reset button
resetBtn.addEventListener("click", resetGame);

// Initial display
scoreDiv.textContent = "Current Score - You: 0, Computer: 0";



