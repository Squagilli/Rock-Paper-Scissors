



/* Create function computerPlay */
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // randomly genereate rock, paper or scissors
    return computerChoice;
     // return value
}


/* Create function playRound(playerSelection, computerSelection) */
function playRound(playerSelection, computerSelection) {

    // check if player & comp are same 
    if (playerSelection === computerSelection) {
        alert(`It's a draw! You both chose ${playerSelection}!`);
        /* causes draw*/
    }
    // check if player beats comp
    else if (computerSelection === 'rock' 
    && playerSelection === 'paper') {
        alert(` You win! \n Computer chose ${computerSelection} \n Paper beats rock!`);
        /* causes player win */
    }
    // check if player beats comp
    else if (computerSelection === 'paper'
    && playerSelection === 'scissors') {
        alert(` You win! \n Computer chose ${computerSelection} \n Scissors beat paper!`);
        /* causes player win */
    }
    // check if player beats comp
    else if (computerSelection === 'scissors'
    && playerSelection === 'rock') {
        alert(` You win! \n Computer chose ${computerSelection} \n Rock beats scissors!`);
        /* causes player win */
    }
    // check if comp beats player
    else if (playerSelection === 'rock' 
    && computerSelection === 'paper') {
        alert(` Computer wins! \n Computer chose ${computerSelection} \n Paper beats rock!`);
        /* causes comp win*/
    }
    // check if comp beats player
    else if (playerSelection === 'paper'
    && computerSelection === 'scissors') {
        alert(` Computer wins! \n Computer chose ${computerSelection} \n Scissors beat paper!`);
        /* causes comp win*/
    }
    // check if comp beats player
    else if (playerSelection === 'scissors'
    && computerSelection === 'rock') {
        alert(` Computer wins! \n Computer chose ${computerSelection} \n Rock beats scissors!`);
        /* causes comp win*/
    }
    else {
        alert("Something went wrong :( ");
    }
      
  
}
/* Create let variable playerSelection */
// prompt user for selection CASE INSENSITIVE
const playerSelection = prompt('Rock, Paper or Scissors?');
/* Create var for comp choices */
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));






