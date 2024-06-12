

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

let humanScore = 0;
let computerScore = 0;
let rounds = 0;
   
    function playRound (humanChoice, computerChoice){
        console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
        if (humanChoice == computerChoice){
         return "It's a tie!";
        } else if (humanChoice == 'rock' && computerChoice == 'scissors' ||
            humanChoice == 'paper' && computerChoice == 'rock' ||
            humanChoice == 'scissors' && computerChoice == 'paper'){
        humanScore++;
        return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice} `;
        } else {
        computerScore++;
         return `Computer wins! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice} `;
        } 
     }

     function updateScore(){
        let score = document.querySelector('#score');
        score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
     }
     
     function checkWinner(){
        let winner = document.querySelector('#winner');
        if (rounds === 5){
            if (humanScore > computerScore){
                winner.textContent = 'Winner: You win the game!'
            } else if (humanScore < computerScore){
                winner.textContent = 'Winner:Computer wins the game!'; 
            } else {
                winner.textContent = "Winner: It's a tie!"
            }
        }
     }
     function buttonClick (event){
        if(rounds < 5){
            const humanSelection = event.target.id;
            const computerSelection = getComputerChoice();
            const result = playRound(humanSelection, computerSelection);
            let play = document.querySelector('#result');
            play.textContent = `Result: ${result}`;
            updateScore();
            rounds++
            checkWinner();
        } else {
            alert('Game Over! Please refresh to play again.');
        }
        
     }

    let btn = document.querySelectorAll('button');
    btn.forEach((button) => {
    button.addEventListener('click', buttonClick);
    });

