//Rock Scissor game 

//the function for the computer choice
function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const compChoice = choices[randomIndex];
    return compChoice;
}

//console.log(getComputerChoice())

//function for the game
function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose, paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissor"){
        return "You win, rock beats scissor!";
    } else if (playerSelection === "rock" && computerSelection === "rock"){
        return "Replay, rock cannot beat rock!, ";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win, paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissor"){
        return "You lose, scissor beats paper";
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return "Replay, paper cannot beat paper!"
    } else if (playerSelection === "scissor" && computerSelection === "rock"){
        return "You lose, rock beats scissor!";
    } else if (playerSelection === "scissor" && computerSelection === "paper"){
        return "You win, scissor beats paper!";
    } else if (playerSelection === "scissor" && computerSelection === "scissor"){
        return "Replay, scissor cannot beat scissor";
    }
}

/*
function game(){
    //score variables
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter your choice (rock, paper, or scissor:");
        const computerSelection = getComputerChoice();
        //console.log(getComputerChoice());
        const result = playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
        console.log(result);

        //determine the winner
        if (result.includes("win")){
            playerScore++;
        } else if (result.includes("lose")){
            computerScore++;
        }
    }

    //console logging results
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);

    //overall declaration
    if (playerScore > computerScore){
        console.log("Congratulations! You are the overall winner!");
    } else if (playerScore < computerScore){
        console.log("The computer is the overall winner. Better luck next time!");
    } else {
        console.log("It's a tie! The game ended in a draw.")
    }
}
game();
*/


//dom manipulation
const buttons = document.querySelectorAll('.btn');
const humanResultElement = document.querySelector('.humanResult');
const computerResultElement = document.querySelector('.computerResult');
const resultElement = document.querySelector('.final')
const resetBtn = document.querySelector('.resetBtn'); 
let humanResult = 0;
let computerResult = 0;
let gameIsOver = false;

//endgame function
function endGame(winner) {
    gameIsOver = true;
    resultElement.textContent = winner + ' Wins!';
    resetBtn.style.display = 'block'; //displaying button
};

//resetting the prev results
function restartGame() {
    humanResult = 0;
    computerResult = 0;
    gameIsOver = false;
    humanResultElement.textContent = humanResult;
    computerResultElement.textContent = computerResult;
    resultElement.textContent = ' ';
    resetBtn.style.display = 'none'; //hiding button
};



buttons.forEach((button) =>{
    button.addEventListener('click', () => {

        //Determining game over
        if (gameIsOver) {
            return; //game over 
        }

        //playing rounds
        const playerSelection = button.getAttribute('data-selection');
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        resultElement.textContent = result;
        console.log(result);

        //determining the winner during play
        if (result.includes("win")){
            humanResult++;
            humanResultElement.textContent = humanResult;
        } else if (result.includes("lose")){
            computerResult++;
            computerResultElement.textContent = computerResult;
        }

        //determining the overall winner
        if (computerResult === 5) {
            endGame('Computer');
        } else if (humanResult === 5) {
            endGame('You');
        }
    });
});

//event listener to the button
resetBtn.addEventListener('click', () => {
    restartGame();
});
