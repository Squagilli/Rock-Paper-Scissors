// buttons to be manipulated
const rockSelect = document.getElementById('rockPicture');
const paperSelect = document.getElementById('paperPicture');
const scissorSelect = document.getElementById('scissorPicture');

// image or text fields to be manipulated
const pWepLabel = document.querySelector('.playerWeaponLabel');
const compWepLabel = document.querySelector('.compWeaponLabel');
const roundResult = document.getElementById('roundResult');

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

const playerState = {
    choice: CHOICE.DEFAULT
}

const computerState = {
    choice: CHOICE.DEFAULT
}

const gameState = {
    wins: 0,
    draws: 0,
    losses: 0,
}

rockSelect.addEventListener('click', onPlayerChoiceClick)
paperSelect.addEventListener('click', onPlayerChoiceClick)
scissorSelect.addEventListener('click', onPlayerChoiceClick)

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

function onPlayerChoiceClick(event) {
    const newChoice = event.target.getAttribute('data-choice')

    computerPlay();

    displayImage(getPlayerImage(), newChoice)

    playerState.choice = newChoice;

    const result = RULES_MAP[playerState.choice][computerState.choice]

    displayRoundResult(
        result,
        playerState.choice,
        computerState.choice
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
    gameState.wins++
    updateGameState()
}

function displayLossResult(playerChoice, computerChoice) {
    roundResult.innerHTML = `Comp wins. ${computerChoice} beats ${playerChoice}.`
    gameState.losses++
    updateGameState()
}

function displayDrawResult(choice) {
    roundResult.innerHTML = `Tie. Both chose ${choice}`
    gameState.losses++
    updateGameState()
}

function updateGameState() {
    pWepLabel.innerHTML = `Player Score: ${gameState.wins}`;
    compWepLabel.innerHTML = `Computer Score: ${gameState.losses}`;
    printGameState();
}

function printGameState() {
    console.log(`Current state: wins: ${gameState.wins}, draws: ${gameState.draws}, losses: ${gameState.losses}`)
    console.log(`Player choice: ${playerState.choice}, Computer choice: ${computerState.choice}`)
}

function computerPlay() {
    computerState.choice = getRandomChoice()

    displayImage(getComputerImage(), computerState.choice)

    return computerState.choice;
}

function getRandomChoice() {
    const choices = [CHOICE.ROCK, CHOICE.PAPER, CHOICE.SCISSORS];

    return choices[getRandomInt(0, choices.length - 1)];
}

function getRandomInt(min , max) {
    return Math.floor(Math.random() * (max - min) + min);
}

