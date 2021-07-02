// buttons to be manipulated
const newButton = document.getElementById('newGameButton'); 
const rockSelect = document.getElementById('rockPicture');
const paperSelect = document.getElementById('paperPicture');
const scissorSelect = document.getElementById('scissorPicture');

// image or text fields to be manipulated
const playerWeapon = document.getElementById('playerWep');
const compWeapon = document.getElementById('compWep');
const pWepLabel = document.querySelector('.playerWeaponLabel');
const compWepLabel = document.querySelector('.compWeaponLabel');
const roundResult = document.getElementById('roundResult');
const playerScore = document.getElementById('scoreplayer');
const compScore = document.getElementById('scoreComp');
const img = '';
const src = ''; 

// player onclick function

let playerChoice = '';

function playerPlay() {
    
    rockSelect.addEventListener('click', function(){
        chooseRock();
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

     
    })
    paperSelect.addEventListener('click', function(){
        choosePaper();
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

        
      
    })
    scissorSelect.addEventListener('click', function(){
        chooseScissors();
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
        
    })
    
    function chooseRock() {
        pWepLabel.innerHTML = 'Rock';
        
    }
    function choosePaper() {
        pWepLabel.innerHTML = 'Paper';
        
    }
    function chooseScissors() {
        pWepLabel.innerHTML = 'Scissors';
        
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

        cRock = true;

        compWepLabel.innerHTML = 'Rock';
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

        cPaper = true;

        compWepLabel.innerHTML = 'Paper';
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

        cScissors = true;

        compWepLabel.innerHTML = 'Scissors';
    }

    return computerChoice;
}



function newGame(playerSelection, computerSelection) {
    playerSelection = playerPlay();
    

    if (rockChosen = true) {
        roundResult.innerHTML = 'Rock';
    }
    else if (paperChosen = true) {
        roundResult.innerHTML = 'Paper';
    }
    else if (scissorsChosen = true) {
        roundResult.innerHTML = 'Scissors';
    }

    return playerSelection, computerSelection;
}


let playerSelection = '';
let computerSelection = '';

playerPlay();
// create new game function


