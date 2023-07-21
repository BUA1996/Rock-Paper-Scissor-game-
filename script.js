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

function game(){
    //score variables
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        //const playerSelection = prompt("Enter your choice (rock, paper, or scissor:");
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

