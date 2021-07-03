// buttons to be manipulated
const rockSelect = document.getElementById('rockPicture');
const paperSelect = document.getElementById('paperPicture');
const scissorSelect = document.getElementById('scissorPicture');

// image or text fields to be manipulated
const pWepLabel = document.querySelector('.playerWeaponLabel');
const compWepLabel = document.querySelector('.compWeaponLabel');
const roundResult = document.getElementById('roundResult');
const img = '';

// player onclick function
let playerChoice = 'default';
let draws = 0;
let wins = 0;
let losses = 0;

const CHOICE = {
    DEFAULT: 'default',
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const CHOICE_IMAGES = {
    [CHOICE.ROCK]: 'images/rock1.png',
    [CHOICE.PAPER]: 'images/paper1.png',
    [CHOICE.SCISSORS]: 'images/scissors1.png'
}

rockSelect.addEventListener('click', onRockClick)
paperSelect.addEventListener('click', onPaperClick)
scissorSelect.addEventListener('click', onScissorsClick)

function getImageElement(id) {
    const element = document.getElementById(id)

    if (element !== null) {
        return element;
    }

    const newElement = document.createElement('img');
    newElement.id = id;

    return newElement;
}

function getPlayerImage() {
    return getImageElement('imageP')
}

function getComputerImage() {
    return getImageElement('imageC')
}

function displayPlayerImage(choice) {
    const imgElement = getPlayerImage();

    imgElement.className = choice;
    imgElement.src = CHOICE_IMAGES[choice];

    const imageContainer = document.getElementById('playerWep');

    imageContainer.appendChild(imgElement);
}

function displayComputerImage(choice) {
    const imgElement = getComputerImage();

    imgElement.className = choice;
    imgElement.src = CHOICE_IMAGES[choice];

    const imageContainer = document.getElementById('compWep');

    imageContainer.appendChild(imgElement);
}

function onRockClick () {
    computerPlay();

    displayPlayerImage(CHOICE.ROCK)

    playerChoice = CHOICE.ROCK;
    console.log(playerChoice);

    if (computerChoice === CHOICE.ROCK) {
        roundResult.innerHTML = `Tie. Both chose Rock.`
        draws++
        console.log(draws);
    }
    else if (computerChoice === CHOICE.SCISSORS) {
        roundResult.innerHTML = `Player wins! Rock beats Scissors.`
        wins++
        console.log(wins);
        pWepLabel.innerHTML = `Player Score: ${wins}`;
    }
    else if (computerChoice === CHOICE.PAPER) {
        roundResult.innerHTML = `Comp wins. Paper beats Rock.`
        losses++
        console.log(losses);
        compWepLabel.innerHTML = `Computer Score: ${losses}`;
    }
}

function onPaperClick () {
    computerPlay();

    displayPlayerImage(CHOICE.PAPER)

    playerChoice = CHOICE.PAPER;
    console.log(playerChoice);

    if (computerChoice === CHOICE.ROCK) {
        roundResult.innerHTML = `Player wins! Paper beats Rock.`
        wins++
        console.log(wins);
        pWepLabel.innerHTML = `Player Score: ${wins}`;
    }
    else if (computerChoice === CHOICE.SCISSORS) {
        roundResult.innerHTML = `Comp wins. Scissors beats Paper.`
        losses++
        console.log(losses);
        compWepLabel.innerHTML = `Computer Score: ${losses}`;
    }
    else if (computerChoice === CHOICE.PAPER) {
        roundResult.innerHTML = `Tie. Both chose Paper.`
        draws++
        console.log(draws);
    }
}

function onScissorsClick () {
    computerPlay();

    displayPlayerImage(CHOICE.SCISSORS)

    playerChoice = CHOICE.SCISSORS;
    console.log(playerChoice);

    if (computerChoice === CHOICE.ROCK) {
        roundResult.innerHTML = `Comp wins. Rock beats Scissors.`
        losses++
        console.log(losses);
        compWepLabel.innerHTML = `Computer Score: ${losses}`;
    }
    else if (computerChoice === CHOICE.SCISSORS) {
        roundResult.innerHTML = `Tie. Both chose Scissors`
        draws++
        console.log(draws);
    }
    else if (computerChoice === CHOICE.PAPER) {
        roundResult.innerHTML = `Player wins! Scissors beats Paper.`
        wins++
        console.log(wins);
        pWepLabel.innerHTML = `Player Score: ${wins}`;
    }
}

// computer select function
let computerChoice = '';

function computerPlay() {
    const choices = [CHOICE.ROCK, CHOICE.PAPER, CHOICE.SCISSORS];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];

    displayComputerImage(computerChoice)

    console.log(computerChoice);

    return computerChoice;
}


