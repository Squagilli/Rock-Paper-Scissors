// buttons to be manipulated
const newButton = document.getElementById('newGameButton'); 
const rockSelect = document.getElementById('rockPicture');
const paperSelect = document.getElementById('paperPicture');
const scissorSelect = document.getElementById('scissorPicture');
const reloadButton = document.querySelector('.newGame');

// image or text fields to be manipulated
const playerWeapon = document.getElementById('playerWep');
const compWeapon = document.getElementById('compWep');
const pWepLabel = document.querySelector('.playerWeaponLabel');
const compWepLabel = document.querySelector('.compWeaponLabel');
const roundResult = document.getElementById('roundResult');
const playerScore = document.getElementById('scorePlayer');
const compScore = document.getElementById('scoreComp');
const img = '';
const src = ''; 

// player onclick function
let playerChoice = 'default';
let draws = 0;
let wins = 0;
let losses = 0;


function playerPlay() {

    
    rockSelect.addEventListener('click', function(){
        //chooseRock();
        computerPlay();
        if (document.getElementById('imageP')) {
            (document.getElementById('imageP')).remove();
        }
        const img = document.createElement('img');
        img.className = 'rock';
        img.id = 'imageP';
        img.src = 'images/axe.png';
        const src = document.getElementById('playerWep');
        src.appendChild(img);


        playerChoice = 'rock';
        console.log(playerChoice);

        if (computerChoice === 'rock') {
            roundResult.innerHTML = `Tie. Both chose Rock.`
            draws++
            console.log(draws);
        }
        else if (computerChoice === 'scissors') {
            roundResult.innerHTML = `Player wins! Rock beats Scissors.`
            wins++
            console.log(wins);
            pWepLabel.innerHTML = `Player Score: ${wins}`;

            if (wins >= 5) {
                alert('Game Over. You won 5 rounds!');
            }
        }
        else if (computerChoice === 'paper') {
            roundResult.innerHTML = `Comp wins. Paper beats Rock.`
            losses++
            console.log(losses);
            compWepLabel.innerHTML = `Computer Score: ${losses}`;

            if (losses >= 5) {
                alert('Game Over. Computer won 5 rounds.');
            }
        }


     
    })
    paperSelect.addEventListener('click', function(){
        computerPlay();
        if (document.getElementById('imageP')) {
            (document.getElementById('imageP')).remove();
        }
        const img = document.createElement('img');
        img.className = 'paper';
        img.id = 'imageP';
        img.src = 'images/document.png';
        const src = document.getElementById('playerWep');
        src.appendChild(img);


        playerChoice = 'paper';
        console.log(playerChoice);

        if (computerChoice === 'rock') {
            roundResult.innerHTML = `Player wins! Paper beats Rock.`
            wins++
            console.log(wins);
            pWepLabel.innerHTML = `Player Score: ${wins}`;

            if (wins >= 5) {
                alert('Game Over. You won 5 rounds!');
            }
        }
        else if (computerChoice === 'scissors') {
            roundResult.innerHTML = `Comp wins. Scissors beats Paper.`
            losses++
            console.log(losses);
            compWepLabel.innerHTML = `Computer Score: ${losses}`
            
            if (losses >= 5) {
                alert('Game Over. Computer won 5 rounds.');
            }
        }
        else if (computerChoice === 'paper') {
            roundResult.innerHTML = `Tie. Both chose Paper.`
            draws++
            console.log(draws);
        }
        
      
    })
    scissorSelect.addEventListener('click', function(){
        computerPlay();
        if (document.getElementById('imageP')) {
            (document.getElementById('imageP')).remove();
        }
        const img = document.createElement('img');
        img.className = 'scissors';
        img.id = 'imageP';
        img.src = 'images/scissors.png';
        const src = document.getElementById('playerWep');
        src.appendChild(img);


        playerChoice = 'scissors';
        console.log(playerChoice);

        if (computerChoice === 'rock') {
            roundResult.innerHTML = `Comp wins. Rock beats Scissors.`
            losses++
            console.log(losses);
            compWepLabel.innerHTML = `Computer Score: ${losses}`;

            if (losses >= 5) {
                alert('Game Over. Computer won 5 rounds.');
            }
        }
        else if (computerChoice === 'scissors') {
            roundResult.innerHTML = `Tie. Both chose Scissors`
            draws++
            console.log(draws);
        }
        else if (computerChoice === 'paper') {
            roundResult.innerHTML = `Player wins! Scissors beats Paper.`
            wins++
            console.log(wins);
            pWepLabel.innerHTML = `Player Score: ${wins}`;

            if (wins >= 5) {
                alert('Game Over. You won 5 rounds!');
            }
        }



        
    })
    
    /*function chooseRock() {
        
    }
    function choosePaper() {
    }
    function chooseScissors() {
    }*/

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
        img.src = 'images/axe.png';
        img.id = 'imageC';
        const src = document.getElementById('compWep');
        src.appendChild(img);
        console.log(computerChoice);
    }
    else if (computerChoice === 'paper') {
        if (document.getElementById('imageC')) {
            (document.getElementById('imageC')).remove();
        }
        const img = document.createElement('img');
        img.className = 'paper';
        img.id = 'imageC';
        img.src = 'images/document.png';
        const src = document.getElementById('compWep');
        src.appendChild(img);
        console.log(computerChoice);
    }
    else if (computerChoice === 'scissors') {
        if (document.getElementById('imageC')) {
            (document.getElementById('imageC')).remove();
        }
        const img = document.createElement('img');
        img.className = 'scissors';
        img.id = 'imageC';
        img.src = 'images/scissors.png';
        const src = document.getElementById('compWep');
        src.appendChild(img);
        console.log(computerChoice);
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


