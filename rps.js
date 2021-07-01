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

const rock1 = img.src='images/rock1.png';

rockSelect.addEventListener('click', e => {
    playerWeapon.append(rock1); 
})


// create new game function

// create play game function
    // player play
    // computer play 

    // compare choices
    // store points

    // end game after 5 rounds