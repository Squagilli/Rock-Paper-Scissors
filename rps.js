


let draws = 0;
let wins = 0;
let losses = 0;
let win;
let loss;
let draw;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']; // list computer choices
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]; // comp chooses random
    return computerChoice; // returns random choice
     
}

function playerPlay() {
    let playerChoice = prompt("Rock, Paper, Scissors?");
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    // Ask player for selection
    // Make computer select
    // compare comp & player selections
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        console.log(`It's a draw. You both chose ${playerSelection}`);
        draws++
        draw = true
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log(`Computer chose: ${computerSelection}
        \nYou chose: ${playerSelection}
        \n${computerSelection} beats ${playerSelection}
        \nYou lost.`);
        losses++
        loss = true;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log(`Computer chose: ${computerSelection}
        \nYou chose: ${playerSelection}
        \n${computerSelection} beats ${playerSelection}
        \nYou lost.`);
        losses++
        loss = true
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log(`Computer chose: ${computerSelection}
        \nYou chose: ${playerSelection}
        \n${computerSelection} beats ${playerSelection}
        \nYou lost.`);
        losses++
        loss = true;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(`Computer chose: ${computerSelection}
        \nYou chose: ${playerSelection}
        \n${playerSelection} beats ${computerSelection}
        \nYou won!`);
        wins++
        win = true;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        win = true;
        console.log(`Computer chose: ${computerSelection}
        \nYou chose: ${playerSelection}
        \n${playerSelection} beats ${computerSelection}
        \nYou won!`);
        wins++
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        win = true;
        console.log(`Computer chose: ${computerSelection}
        \nYou chose: ${playerSelection}
        \n${playerSelection} beats ${computerSelection}
        \nYou won!`);
        wins++
    }
    return(playerSelection, computerSelection)
}
const playerSelection = '';
const computerSelection = '';



function game() {
    // play round five times
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
    // store # of wins, losses, draws
    // report winner
    if (wins > losses) {
        console.log(`\nYou win! You won ${wins} out of 5 rounds! ${draws} draw(s).`);
    }
    else if (losses > wins) {
        console.log(`\nComputer wins. You lost ${losses} out of 5 rounds. ${draws} draw(s).`);
    }
    else {
        console.log(`Draw. You won ${wins} rounds and lost ${losses} out of 5 rounds. ${draws} draw(s).`);
    }
}

game();



