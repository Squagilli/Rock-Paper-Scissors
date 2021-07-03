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

const GAME_MOVE = {
    DRAW: 0,
    WIN: 1,
    LOSS: -1
}

const RULES_MAP = {
    [CHOICE.ROCK]: {
        [CHOICE.ROCK]: GAME_MOVE.DRAW,
        [CHOICE.PAPER]: GAME_MOVE.LOSS,
        [CHOICE.SCISSORS]: GAME_MOVE.WIN
    },
    [CHOICE.PAPER]: {
        [CHOICE.ROCK]: GAME_MOVE.WIN,
        [CHOICE.PAPER]: GAME_MOVE.DRAW,
        [CHOICE.SCISSORS]: GAME_MOVE.LOSS
    },
    [CHOICE.SCISSORS]: {
        [CHOICE.ROCK]: GAME_MOVE.LOSS,
        [CHOICE.PAPER]: GAME_MOVE.WIN,
        [CHOICE.SCISSORS]: GAME_MOVE.DRAW
    }
}

rockSelect.addEventListener('click', onRockClick)
paperSelect.addEventListener('click', onPaperClick)
scissorSelect.addEventListener('click', onScissorsClick)

function getImageElement(id, container) {
    const element = document.getElementById(id)

    if (element !== null) {
        return element;
    }

    const newElement = document.createElement('img');
    newElement.id = id;

    // Append only if it didnt exist before
    container.appendChild(newElement)

    return newElement;
}

function getPlayerImage() {
    const container = document.getElementById('playerWep')
    return getImageElement('imageP', container)
}

function getComputerImage() {
    const container = document.getElementById('compWep')
    return getImageElement('imageC', container)
}

function displayImage(imgElement, choice) {
    imgElement.className = choice;
    imgElement.src = CHOICE_IMAGES[choice];
}

function onRockClick () {
    computerPlay();

    displayImage(getPlayerImage(), CHOICE.ROCK)

    playerChoice = CHOICE.ROCK;

    const result = RULES_MAP[playerChoice][computerChoice]

    displayRoundResult(
        result,
        playerChoice,
        computerChoice
    )
}

function onPaperClick () {
    computerPlay();

    displayImage(getPlayerImage(), CHOICE.PAPER)

    playerChoice = CHOICE.PAPER;
    console.log(playerChoice);

    const result = RULES_MAP[playerChoice][computerChoice]

    displayRoundResult(
        result,
        playerChoice,
        computerChoice
    )
}

function displayRoundResult(result, playerChoice, computerChoice) {

    if (result === GAME_MOVE.WIN) {
        return displayWinResult(playerChoice, computerChoice)
    }

    if (result === GAME_MOVE.LOSS) {
        return displayLossResult(playerChoice, computerChoice)
    }

    if (result === GAME_MOVE.DRAW) {
        return displayDrawResult(playerChoice)
    }
}

function displayWinResult(playerChoice, computerChoice) {
    roundResult.innerHTML = `Player wins! ${playerChoice} beats ${computerChoice}.`
    wins++
    console.log(wins);
    pWepLabel.innerHTML = `Player Score: ${wins}`;
}

function displayLossResult(playerChoice, computerChoice) {
    roundResult.innerHTML = `Comp wins. ${computerChoice} beats ${playerChoice}.`
    losses++
    console.log(losses);
    compWepLabel.innerHTML = `Computer Score: ${losses}`;
}

function displayDrawResult(choice) {
    roundResult.innerHTML = `Tie. Both chose ${choice}`
    draws++
    console.log(draws);
}

function onScissorsClick () {
    computerPlay();

    displayImage(getPlayerImage(), CHOICE.SCISSORS)

    playerChoice = CHOICE.SCISSORS;
    console.log(playerChoice);

    const result = RULES_MAP[playerChoice][computerChoice]

    displayRoundResult(
        result,
        playerChoice,
        computerChoice
    )
}

// computer select function
let computerChoice = '';

function computerPlay() {
    const choices = [CHOICE.ROCK, CHOICE.PAPER, CHOICE.SCISSORS];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];

    displayImage(getComputerImage(), computerChoice)

    console.log(computerChoice);

    return computerChoice;
}


