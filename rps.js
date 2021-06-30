

function playerPlay () {
    document.getElementById('rock-button').addEventListener("click", chooseRock);

    document.getElementById('paper-button').addEventListener("click", choosePaper);

    document.getElementById('scissors-button').addEventListener("click", chooseScissors);
    
    function chooseRock() {
        document.getElementById('player-choice').innerHTML = "Rock";
        computerPlay()
    }
    function choosePaper() {
        document.getElementById('player-choice').innerHTML = "Paper";
        computerPlay()
    }
    function chooseScissors() {
        document.getElementById('player-choice').innerHTML = "Scissors";
        computerPlay()
    }
    
}
const PlayerSelection = '';
const computerSelection = computerPlay();

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']; // list computer choices
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]; // comp chooses random
    if (computerChoice === 'rock') {
        document.getElementById('comp-choice').innerHTML = "Rock";
    }
    else if (computerChoice === 'paper') {
        document.getElementById('comp-choice').innerHTML = "Paper";
    }
    else if (computerChoice === 'scissors') {
        document.getElementById('comp-choice').innerHTML = "Scissors";
    }
    return computerChoice; // returns random choice
    
}

/*function compUpdate() {
    if (computerSelection === 'rock') {
        document.getElementById('comp-choice').innerHTML = "Rock";
    }
    else if (computerSelection === 'paper') {
        document.getElementById('comp-choice').innerHTML = "Paper";
    }
    else if (computerSelection === 'scissors') {
        document.getElementById('comp-choice').innerHTML = "Scissors";
    }
}*/


playerPlay()

