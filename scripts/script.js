let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let choice = ''

    if (randomChoice === 1)
        choice = 'rock'
    else if (randomChoice === 2)
        choice = 'paper'
    else
        choice = 'scissors'

    return choice
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

    return humanChoice
}

function playRound(humanChoice, computerChoice){
    let gameResult = ''

    if (humanChoice === 'rock' && computerChoice === 'paper') {
        gameResult = 'You lose! Paper covers Rock';
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        gameResult = 'You win! Rock smashes Scissors';
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        gameResult = 'You win! Paper covers Rock';
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        gameResult = 'You lose! Scissors cuts paper';
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        gameResult = 'You lose! Rock smashes Scissors';
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        gameResult = 'You win! Scissors cuts Paper';
        humanScore++;
    } else {
        gameResult = 'Tie'
    }

    return gameResult
}

function getRoundResult() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(`${playRound(humanSelection, computerSelection)}\n\tYou : ${humanScore} | Computer : ${computerScore}`);
}

function playGame() {
    getRoundResult();
    getRoundResult();
    getRoundResult();
    getRoundResult();
    getRoundResult();
}

playGame()