
const roundResult = document.querySelector('.event-report');

let playerChoice = '';
function playerPlay () {
    document.getElementById('rock-button').addEventListener("click", chooseRock,);

    document.getElementById('paper-button').addEventListener("click", choosePaper,);

    document.getElementById('scissors-button').addEventListener("click", chooseScissors);
    
    function chooseRock() {
        document.getElementById('player-choice').innerHTML = "Rock";
        computerPlay()
        playerChoice = "rock"
        //computerPlay()
    }
    function choosePaper() {
        document.getElementById('player-choice').innerHTML = "Paper";
        computerPlay()
        playerChoice = "paper"
        //computerPlay()
    }
    function chooseScissors() {
        document.getElementById('player-choice').innerHTML = "Scissors";
        computerPlay()
        playerChoice = "scissors"
        //computerPlay()
    }
    
    return playerChoice;
    
}


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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay();
    //computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        roundResult.innerText = "TIE";
    }
}
const playerSelection = '';
const computerSelection = '';

//playerPlay()

playRound()

