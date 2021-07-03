// buttons to be manipulated
import {CHOICE, GAME_MOVE, RULES_MAP, CHOICE_IMAGES, getRandomChoice} from "./rock-paper-scissors-lib.js";

const rockSelect = document.getElementById('rockPicture');
const paperSelect = document.getElementById('paperPicture');
const scissorSelect = document.getElementById('scissorPicture');

// image or text fields to be manipulated
const pWepLabel = document.querySelector('.playerWeaponLabel');
const compWepLabel = document.querySelector('.compWeaponLabel');
const roundResult = document.getElementById('roundResult');

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

/**
 * Get image element
 * If it does not exist yet, create it
 *
 * @param id
 * @param container
 * @return {HTMLElement}
 */
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

/**
 * Get player image element
 *
 * @return {HTMLElement}
 */
function getPlayerImage() {
    const container = document.getElementById('playerWep')
    return getImageElement('imageP', container)
}

/**
 * Get computer image element
 *
 * @return {HTMLElement}
 */
function getComputerImage() {
    const container = document.getElementById('compWep')
    return getImageElement('imageC', container)
}

/**
 * Display given choice in image element
 *
 * @param imgElement
 * @param choice
 */
function displayImage(imgElement, choice) {
    imgElement.className = choice;
    imgElement.src = CHOICE_IMAGES[choice];
}

/**
 * Event handler when player clicks on one of
 * the choices
 *
 * @param event
 */
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

/**
 * Displays round result based on
 * result of the move and choices of players
 *
 * @param result
 * @param playerChoice
 * @param computerChoice
 */
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

/**
 * Displays win result and updates game state
 *
 * @param playerChoice
 * @param computerChoice
 */
function displayWinResult(playerChoice, computerChoice) {
    roundResult.innerHTML = `Player wins! ${playerChoice} beats ${computerChoice}.`
    gameState.wins++
    updateGameState()
}

/**
 * Displays loss result and updates game state
 *
 * @param playerChoice
 * @param computerChoice
 */
function displayLossResult(playerChoice, computerChoice) {
    roundResult.innerHTML = `Comp wins. ${computerChoice} beats ${playerChoice}.`
    gameState.losses++
    updateGameState()
}

/**
 * Displays draw result and updates game state
 *
 * @param choice
 */
function displayDrawResult(choice) {
    roundResult.innerHTML = `Tie. Both chose ${choice}`
    updateGameState()
}

/**
 * Synchronises state displayed on screen with gameState
 */
function updateGameState() {
    pWepLabel.innerHTML = `Player Score: ${gameState.wins}`;
    compWepLabel.innerHTML = `Computer Score: ${gameState.losses}`;
    printGameState();
}

/**
 * Just prints game state to console
 */
function printGameState() {
    console.log(`Current state: wins: ${gameState.wins}, draws: ${gameState.draws}, losses: ${gameState.losses}`)
    console.log(`Player choice: ${playerState.choice}, Computer choice: ${computerState.choice}`)
}

/**
 * Computer move
 *
 * @return {string}
 */
function computerPlay() {
    computerState.choice = getRandomChoice()

    displayImage(getComputerImage(), computerState.choice)

    return computerState.choice;
}
