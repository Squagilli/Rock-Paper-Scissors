

let draws = 0;
let playerWins = 0;
let compWins = 0;

/* Create function computerPlay */
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // randomly genereate rock, paper or scissors
    return computerChoice;
     // return value
}
/*let playerWin;
let compWin;*/


/* Create function playRound(playerSelection, computerSelection) */
function playRound(playerSelection, computerSelection, compWins, playerWins) {

    // check if player & comp are same 
    if (playerSelection === computerSelection) {
        alert(`It's a draw! You both chose ${playerSelection}!`);
        draws++
        /* causes draw*/
    }
    // check if player beats comp
    else if (computerSelection === 'rock' 
    && playerSelection === 'paper') {
        alert(` You win! \n Computer chose ${computerSelection} \n Paper beats rock!`);
        playerwins++
        /* causes player win */
    }
    // check if player beats comp
    else if (computerSelection === 'paper'
    && playerSelection === 'scissors') {
        alert(` You win! \n Computer chose ${computerSelection} \n Scissors beat paper!`);
        /* causes player win */
        playerwins++
    }
    // check if player beats comp
    else if (computerSelection === 'scissors'
    && playerSelection === 'rock') {
        alert(` You win! \n Computer chose ${computerSelection} \n Rock beats scissors!`);
        /* causes player win */
        playerwins++
    }
    // check if comp beats player
    else if (playerSelection === 'rock' 
    && computerSelection === 'paper') {
        alert(` Computer wins! \n Computer chose ${computerSelection} \n Paper beats rock!`);
        /* causes comp win*/
        compWins++
    }
    // check if comp beats player
    else if (playerSelection === 'paper'
    && computerSelection === 'scissors') {
        alert(` Computer wins! \n Computer chose ${computerSelection} \n Scissors beat paper!`);
        /* causes comp win*/
        compWins++
    }
    // check if comp beats player
    else if (playerSelection === 'scissors'
    && computerSelection === 'rock') {
        alert(` Computer wins! \n Computer chose ${computerSelection} \n Rock beats scissors!`);
        /* causes comp win*/
        compWins++
    }
    else {
        alert("Something went wrong :( ");
    }

      
    return (computerSelection, playerSelection, compWins, playerWins, draws);
  
}

function game() {
    let i = 0;
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection, compWins, playerWins, draws);
            /*if (playerWin = true) {
                playerWins++
            }
            else if (compWin = true) {
                compWins++
            } */
        }
   
}
if (playerWins > compWins) {
    alert(`Player won ${playerWins} out of five rounds!`);
}
else if (compWins > playerWins) {
    alert(`Computer ${compWins} out of five rounds!`);
}
    //playRound five iterations
    //keep score
    //report winner or loser

/* Create let variable playerSelection */
// prompt user for selection CASE INSENSITIVE
const playerSelection = prompt('Rock, Paper or Scissors?');
/* Create var for comp choices */
const computerSelection = computerPlay();
/*console.log(playRound(playerSelection, computerSelection, compWins, playerWins, draws));*/
game();






