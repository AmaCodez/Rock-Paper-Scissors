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
    let humanChoice = prompt("What's your choice?");
    if (humanChoice == 'rock'){
        return 'rock';
    } else if (humanChoice == 'paper'){
        return 'paper';
    } else if (humanChoice == 'scissors'){
        return 'scissors'
    } else {
        return 'Mmh.. try again'
    }
}

console.log(getHumanChoice());