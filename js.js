function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

let computerChoice = getComputerChoice()

if (computerChoice === 1 ) {
    console.log('rock')
} else if (computerChoice === 2 ) {
    console.log('paper') 
} else {
    console.log('scissors')
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?")
} 

getHumanChoice()

let humanScore = 0 
let computerScore = 0 