// Step 4: Declare score variables

let humanScore = 0
let computerScore = 0


// Step 2: Write the logic to get the computer choice

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

// Step 3: Write the logic to get the human choice

function getHumanChoice() {
    return prompt("Pick your poison: rock, paper, or scissors?").toLowerCase()
} 

// Step 5: Write the logic to play a single round 

function playRound(humanChoice, computerChoice) {
    
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice){
        return console.log("It's a tie!" + computerChoice + "meets" + humanChoice)
    } else if (humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "scissors" && computerChoice === "rock" ||
            humanChoice === "paper" && computerChoice === "scissors"){
        return console.log("You lost," + comptuterChoice + "beats " + humanChoice)
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock"){
        return console.log("You Win! " + humanChoice + "beats " + computerChoice)
    } else {
        return console.log("Invalid input.")
    }
}

playRound()
    

    



