function getComputerChoice() {
    let random_choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    let choice = ''

    if (random_choice === 1)
        choice = 'rock'
    else if (random_choice === 2)
        choice = 'paper'
    else
        choice = 'scissors'

    return choice
}

function getHumanChoice() {
    let human_choice = prompt("Rock, Paper or Scissors?").toLowerCase();

    return human_choice
}