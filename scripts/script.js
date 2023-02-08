'use strict'

// This gets a random selection of the computer
function getComputerChoice() {
  let computer = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  if (computer === 1) {
    return 'Rock';
  } else if (computer === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
};

// Playing a single round of the game
function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase(),
    computer = computerSelection.toLowerCase();

  if (player === computer) return 'Tie';
  if (player === 'rock' && computer === 'paper') return 'You lose! Paper covers Rock';
  if (player === 'rock' && computer === 'scissors') return 'You win! Rock smashes Scissors';
  if (player === 'paper' && computer === 'rock') return 'You win! Paper covers Rock';
  if (player === 'paper' && computer === 'scissors') return 'You lose! Scissors cuts paper';
  if (player === 'scissors' && computer === 'rock') return 'You lose! Rock smashes Scissors';
  if (player === 'scissors' && computer === 'paper') return 'You win! Scissors cuts Paper';

}

// Updating the score of winnings and looses

let w = 0, l=0;

function game() {

  let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();

  const computerSelection = getComputerChoice(),
    round = playRound(playerSelection, computerSelection);

  if (round.search('win') !== -1) {
    console.log(round);
    w++;
    console.log(`You: ${w} | PC: ${l}`);
  } else if (round.search('lose') !== -1) {
    console.log(round);
    l++;
    console.log(`You: ${w} | PC: ${l}`);
  } else if (round.search('Tie') !== -1) {
    console.log(round);
  }
}