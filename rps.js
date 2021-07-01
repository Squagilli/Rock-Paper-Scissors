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

const playerSelection = '';
const computerSelection = '';

let playerChoice = '';

const img = '';
const src = ''; 

function clearImg() {
    playerWeapon.removeChild();
}
// player selection button
function playerPlay(){
    rockSelect.addEventListener('click', function(){
        computerPlay();
        const img = document.createElement('img');
        img.className = 'rock';
        img.id = 'image';
        img.src = 'images/rock1.png';
        const src = document.getElementById('playerWep');
        src.appendChild(img);

        
        
    })
    paperSelect.addEventListener('click', function(){
        computerPlay();
        const img = document.createElement('img');
        img.className = 'paper';
        img.id = 'image';
        img.src = 'images/paper1.png';
        const src = document.getElementById('playerWep');
        src.appendChild(img);
        
        
    })
    scissorSelect.addEventListener('click', function(){
        computerPlay();
        const img = document.createElement('img');
        img.className = 'scissors';
        img.id = 'image';
        img.src = 'images/scissors1.png';
        const src = document.getElementById('playerWep');
        src.appendChild(img);
        
    })
    
    /*function chooseRock() {
        computerPlay()
        playerChoice = 'rock';
    }
    function choosePaper() {
        computerPlay()
        playerChoice = 'paper';
    }
    function chooseScissors() {
        computerPlay()
        playerChoice = 'scissors';
    }*/
    
    return playerChoice;
}

// computer select function
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (computerChoice === 'rock') {
        const img = document.createElement('img');
        img.className = 'rock';
        img.src = 'images/rock1.png';
        const src = document.getElementById('compWep');
        src.appendChild(img);
    }
    else if (computerChoice === 'paper') {
        const img = document.createElement('img');
        img.className = 'paper';
        img.src = 'images/paper1.png';
        const src = document.getElementById('compWep');
        src.appendChild(img);
    }
    else if (computerChoice === 'scissors') {
        const img = document.createElement('img');
        img.className = 'scissors';
        img.src = 'images/scissors1.png';
        const src = document.getElementById('compWep');
        src.appendChild(img);
    }
}


playerPlay();

// create new game function
    // on click new game 

    // create play game function
    // player play
    // computer play 

    // compare choices
    // store points

    // end game after 5 rounds