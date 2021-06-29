
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']; // list computer choices
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]; // comp chooses random
    return computerChoice; // returns random choice
     
}

function playRound(playerSelection, computerSelection) {
    // Ask player for selection
    // Make computer select
    // compare comp & player selections
    if (playerSelection === computerSelection) {
        draws++
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        losses++
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        losses++
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        losses++
    }
    else {
        wins++
    }

    // store result in draw, win, lose
    if (wins > 0) {
        console.log(`Computer chose: ${computerSelection}
        \nYou chose: ${playerSelection}
        \n${playerSelection} beats ${computerSelection}
        \nYou won!`);
    }
    else if (losses > 0) {
        console.log(`Computer chose ${computerSelection}
        \nYou chose: ${playerSelection}
        \n${computerSelection} beats ${playerSelection}
        \nYou lost!`);
    }
    else if (draws > 0) {
        console.log(`It's a draw! You both chose ${playerSelection}`);
    }
    return(playerSelection, computerSelection)
}
const playerSelection = prompt('Rock, Paper, Scissors?');
const computerSelection = computerPlay();

let draws = 0;
let wins = 0;
let losses = 0;

function game() {
    // play round five times
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    // store # of wins, losses, draws
    // report winner
    if (wins > losses) {
        console.log(`You won ${wins} out of 5 rounds! There were ${draws} draws.`);
    }
    else if (losses > wins) {
        console.log(`You lost ${losses} out of 5 rounds! There were ${draws} draws.`);
    }
}

console.log(playRound(playerSelection, computerSelection));




