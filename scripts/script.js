let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let choice = ''

    if (randomChoice === 1)
        choice = 'rock'
    else if (random_choice === 2)
        choice = 'paper'
    else
        choice = 'scissors'

    return choice
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

    return humanChoice
}