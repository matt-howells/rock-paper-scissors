// Get random computer choice

function getComputerChoice() {                  
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    if (randomNumber === 1 ) { 
        return 'rock';
    } else if (randomNumber === 2 ) {
        return 'paper';
    } else {
        return 'scissors';
    }
} 

// Get human choice via text input

function getHumanChoice() {
    return prompt("Pick your poison: rock, paper, or scissors?")
} 


// Logic for whole game 

function playGame() {  
    
    let humanScore = 0;
    let computerScore = 0;   

function playRound() { 

    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice();
    
    if (humanChoice === "rock" && computerChoice === "paper" ||        
        humanChoice === "scissors" && computerChoice === "rock" ||    
        humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        console.log("You lost, " + computerChoice + " beats " + humanChoice + ".")
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        console.log("You Win! " + humanChoice + " beats " + computerChoice + ".")
    } else {
        console.log("Invalid input.")
    }
}

for (let i = 0; i < 5; i++) {
    playRound();
}

console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`);

}

playGame()

    



    



