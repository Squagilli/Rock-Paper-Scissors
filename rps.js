// buttons to be manipulated
const newButton = document.getElementById('newGameButton'); 
const rockSelect = document.getElementById('rockPicture');
const paperSelect = document.getElementById('paperPicture');
const scissorSelect = document.getElementById('scissorPicture');

// image or text fields to be manipulated
const playerWeapon = document.getElementById('playerWep');
const compWeapon = document.getElementById('compWep');
const roundResult = document.getElementById('roundResult');
const playerScore = document.getElementById('scoreplayer');
const compScore = document.getElementById('scoreComp');
const img = '';
const src = ''; 


// player onclick function
let playerChoice = '';

function playerPlay() {
    rockSelect.addEventListener('click', function(){
        computerPlay();
        if (document.getElementById('imageP')) {
            (document.getElementById('imageP')).remove();
        }
        const img = document.createElement('img');
        img.className = 'rock';
        img.id = 'imageP';
        img.src = 'images/rock1.png';
        const src = document.getElementById('playerWep');
        src.appendChild(img);
        chooseRock();
    })
    paperSelect.addEventListener('click', function(){
        computerPlay();
        if (document.getElementById('imageP')) {
            (document.getElementById('imageP')).remove();
        }
        const img = document.createElement('img');
        img.className = 'paper';
        img.id = 'imageP';
        img.src = 'images/paper1.png';
        const src = document.getElementById('playerWep');
        src.appendChild(img);
        choosePaper();
    })
    scissorSelect.addEventListener('click', function(){
        computerPlay();
        if (document.getElementById('imageP')) {
            (document.getElementById('imageP')).remove();
        }
        const img = document.createElement('img');
        img.className = 'scissors';
        img.id = 'imageP';
        img.src = 'images/scissors1.png';
        const src = document.getElementById('playerWep');
        src.appendChild(img);
        chooseScissors();
    })
    
    function chooseRock() {
        playerChoice = 'rock';
    }
    function choosePaper() {
        playerChoice = 'paper';
    }
    function chooseScissors() {
        playerChoice = 'scissors';
    }

    return playerChoice;
}


// computer select function
let computerChoice = '';


function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (computerChoice === 'rock') {
        if (document.getElementById('imageC')) {
            (document.getElementById('imageC')).remove();
        }
        const img = document.createElement('img');
        img.className = 'rock';
        img.src = 'images/rock1.png';
        img.id = 'imageC';
        const src = document.getElementById('compWep');
        src.appendChild(img);
    }
    else if (computerChoice === 'paper') {
        if (document.getElementById('imageC')) {
            (document.getElementById('imageC')).remove();
        }
        const img = document.createElement('img');
        img.className = 'paper';
        img.id = 'imageC';
        img.src = 'images/paper1.png';
        const src = document.getElementById('compWep');
        src.appendChild(img);
    }
    else if (computerChoice === 'scissors') {
        if (document.getElementById('imageC')) {
            (document.getElementById('imageC')).remove();
        }
        const img = document.createElement('img');
        img.className = 'scissors';
        img.id = 'imageC';
        img.src = 'images/scissors1.png';
        const src = document.getElementById('compWep');
        src.appendChild(img);
    }

    return computerChoice;
}

let playerSelection = '';
let computerSelection = '';


playerPlay();

// create new game function


