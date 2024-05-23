

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if (num == 0){
        return 'rock';
    } else if (num == 1){
        return 'paper';
    } else {
        return 'scissors'
    }
}
// console.log(getComputerChoice());


function getHumanChoice(){
    let humanUser = prompt("What's your choice? (rock, paper, or scissors)").toLowerCase();
    if (humanUser === 'rock' || humanUser === 'paper' || humanUser === 'scissors'){
        return humanUser;
    } else {
        alert ('Invalid input. Please enter rock, paper, or scissors');
    }
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
   
    function playRound (humanChoice, computerChoice){
        console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
        if (humanChoice == computerChoice){
         return "It's a tie!";
        } else if (humanChoice == 'rock' && computerChoice == 'scissors'){
        humanScore++;
        return 'You win! Rock beats Scissors';
        } else if (humanChoice == 'paper' && computerChoice == 'rock'){
        humanScore++;
        return 'You win! Paper beats Rock';
        } else if (humanChoice == 'scissors' && computerChoice == 'paper'){
        humanScore++;
        return 'You win! Scissors beats Paper';
        } else if (computerChoice == 'rock' && humanChoice == 'scissors'){
        computerScore++;
         return 'Computer wins! Rock beats Scissors';
        } else if (computerChoice == 'paper' && humanChoice == 'rock'){
        computerScore++;
         return 'Computer wins! Paper beats Rock';
        } else if (computerChoice == 'scissors' && humanChoice == 'paper'){
        computerScore++;
        return 'Computer wins! Scissors beats Paper';  
        } else {
         return 'Play again'
        }
     }

function gameScore(humanResult, computerResult){
    // console.log(`Human Score: ${humanResult}, Computer score: ${computerResult}`)
    if (humanResult == computerResult){
        return "It's a tie";
    } else if (humanResult > computerResult){
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

// Use for loop to loop the playRound function
// initial value should be 1 and the condition should be looped to 5
// increment it by 1
//Loop the playRound funciton
// Test your code on console
function playGame(){
let gameRound;
for (gameRound = 1; gameRound <= 5; gameRound++){
    const humanSelection = getHumanChoice();
     const computerSelection = getComputerChoice();

    console.log(`Round ${gameRound}`);
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}` );

}

console.log('----GAME OVER----')
console.log(gameScore(humanScore, computerScore));

}

console.log(playGame());