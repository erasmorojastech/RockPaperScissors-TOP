'use strict';

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  const randomNumberChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  let computerChoice = '';

  switch (randomNumberChoice) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "raper";
      break;
    case 3:
      computerChoice = "scissors";
    default:
      break;
  }

  return computerChoice.toLowerCase();
};

const getHumanChoice = function () {
  let humanChoice = "";
  humanChoice = prompt('Rock, Paper or Scissors');
  return humanChoice.toLowerCase();
};

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (humanChoice === 'rock') {
    if (computerChoice === 'scissors') {
      humanScore++;
      return "You win! Rock smashes Scissors";
    } else {
      computerScore++;
      return "You lose! Paper covers Rock";
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      humanScore++;
      return "You win! Paper cover rock";
    } else {
      computerScore++;
      return "You lose! Scissors cuts Paper";
    }
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'paper') {
      humanScore++;
      return "You win! Scissors cuts Paper";
    } else {
      computerScore++;
      return "You lose! Rock smashes Scissors";
    }
  }
};

let result = playRound(humanChoice, computerChoice);
console.log(result);
console.log(`Score: Player ${humanScore} - Computer ${computerScore}`);
