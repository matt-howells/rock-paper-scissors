function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

let choice = getComputerChoice()

if (choice === 1 ) {
    console.log('rock')
} else if (choice === 2 ) {
    console.log('paper') 
} else {
    console.log('scissors')
}
