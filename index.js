// Create a function named getComputerChoice
// Create a variable named num that gives
// a random number from 0 to 3
// if the number is equal to 0 print 'rock'
// if the number is equal to 1 print 'paper'
// otherwise print 'scissors'
// Test and check the result


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
console.log(getComputerChoice());

// Create a function named getHumanChoice 
//Create a variable named humanChoice 
//that takes in the users message
//and returns it
// if humanChoice equals to 'rock' print 'rock'
// if humanChoice equals to 'paper' print 'paper'
// if humanChoice equals to 'scissors' print 'scissors'
//otherwise print'try again'


function getHumanChoice(){
    let humanUser = prompt("What's your choice?");
    if (humanUser == 'rock'){
        return 'rock';
    } else if (humanUser == 'paper'){
        return 'paper';
    } else if (humanUser == 'scissors'){
        return 'scissors'
    } else {
        return 'Mmh.. wrong input'
    }
}

console.log(getHumanChoice());

// Store player scores in a variable (store answers)
// Create a variable named humanScore with a value of 0
//Create a variable named computerScore with a value of 0

const humanScore = 0;
const computerScore = 0;

//Game would be played as a round. A new function will take 
// both the user and computers choice as arguments
// it will play a single round and after that round the winner's score is 
// incremented and a winner annoncement will be printed
// Create a function named playRound and include two parameters for human and computer
//Make the human parameter case-insensitive
//Create a new variable named humanSelection to store the function getComputerChoice
//Create a new variable named computerSelection to store the function getHumanChoice
//if humanchoice == computer choice print 'tie'
//if humanchoice == 'rock' and computerchoice == 'paper'
//Increase the score of computer by 1 and print 'Computer wins'
// repeat method

function playRound (human, computer){
   if (humanChoice == computerChoice){
    return "It's a tie! Play again";
   } else if (humanChoice == 'rock' && computerChoice == 'scissors'){
    return 'You win! Rock beats Paper';
    humanScore++;
   } else if (humanChoice == 'paper' && computerChoice == 'rock'){
    return 'You win! Paper beats Rock';
    humanScore++;
   } else if (humanChoice == 'scissors' && computerChoice == 'paper'){
    return 'You win! Scissors beats Paper';
    humanScore++;
   } else if (computerChoice == 'rock' && humanChoice == 'scissors'){
    return 'Computer wins! Rock beats Paper';
    computerScore++;
   } else if (computerChoice == 'paper' && humanChoice == 'rock'){
    return 'Computer wins! Paper beats Rock';
    computerScore++;
   } else if (computerChoice == 'scissors' && humanChoice == 'paper'){
    return 'Computer wins! Scissors beats Paper';
    computerScore++;
   } else {
    return 'Play again'
   }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(playRound(humanChoice, computerChoice));

