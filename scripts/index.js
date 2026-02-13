'use strict';

const getComputerChoice = function () {
  const randomNumberChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  // Map random numbers to game options (Rock, Paper or Scissors)

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

  return computerChoice;
};

const getHumanChoice = function () {
  let humanChoice = "";
  humanChoice = prompt('Rock, Paper or Scissors');
  return humanChoice.toLowerCase();
};
