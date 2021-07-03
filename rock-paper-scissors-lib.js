/**
 * This is commong logic, it does not depend on anything outside of this script (you cant say that
 * about other functions - they depend on how HTML looks like or they depend on current state of the game)
 *
 * @type {{ROCK: string, PAPER: string, SCISSORS: string, DEFAULT: string}}
 */

/**
 * Possible player choices
 *
 * @type {{ROCK: string, PAPER: string, SCISSORS: string, DEFAULT: string}}
 */
export const CHOICE = {
    DEFAULT: 'default',
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

/**
 * Image sources mapped to given choices
 *
 * @type {{[p: string]: string}}
 */
export const CHOICE_IMAGES = {
    [CHOICE.ROCK]: 'images/rock1.png',
    [CHOICE.PAPER]: 'images/paper1.png',
    [CHOICE.SCISSORS]: 'images/scissors1.png'
}

/**
 * Possible results of the round
 *
 * @type {{LOSS: number, DRAW: number, WIN: number}}
 */
export const GAME_MOVE = {
    DRAW: 0,
    WIN: 1,
    LOSS: -1
}

/**
 * The map of game rules
 *
 * @type {{[p: string]: {}|{}|{}}}
 */
export const RULES_MAP = {
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

/**
 * Just get random choice
 *
 * @return {string}
 */
export function getRandomChoice() {
    const choices = [CHOICE.ROCK, CHOICE.PAPER, CHOICE.SCISSORS];

    return pickRandom(choices);
}

/**
 * Get random integer in range of <min, max>
 *
 * @param min
 * @param max
 * @return {number}
 */
export function getRandomInt(min , max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Picks random element from array
 *
 * @param array
 */
export function pickRandom(array) {
    return array[getRandomInt(0, array.length - 1)]
}