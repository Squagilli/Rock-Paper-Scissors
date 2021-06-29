let draws = 0;
let wins = 0;
let losses = 0;

const playerSelection;
const computerSelection;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']; // list computer choices
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]; // comp chooses random
    return computerChoice; // returns random choice
     
}

function playRound(playerSelection, computerSelection) {
    // Ask player for selection
    playerSelection = prompt('Rock, Paper, Scissors?');
    // Make computer select
    computerSelection = computerPlay();
    // compare comp & player selections

    // store result in draw, win, lose
    console.log(playRound(playerSelection, computerSelection));
}

function game() {
    // play round five times
    // store # of wins, losses, draws
    // report winner
}







