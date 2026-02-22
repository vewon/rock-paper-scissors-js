let humanScore = 0;
let computerScore = 0;
const maxRounds = 5;
let currentRounds = 0;

function getComputerChoice() {

    let random = Math.floor(Math.random() * 3);
    let computerChoice = getRandomChoice( random );

    console.log(`Computer Choice: ${computerChoice}`);
    return computerChoice;

}

function getRandomChoice( choice ) {
    switch ( choice ) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            console.log("Error. Choice not found.");
            return 0;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ");

    humanChoice = humanChoice.toLowerCase();

    console.log(`Human Choice: ${humanChoice}`);
    return humanChoice;
}

function playRound( humanChoice, computerChoice ) {
    if ( humanChoice === computerChoice ) {
        console.log("It's a tie!");
    }
    else if ( humanChoice === "rock" ) {
        if ( computerChoice === "paper" ) {
            loseRound( humanChoice, computerChoice );
        } else {
            winRound( humanChoice, computerChoice );
        }
    }
    else if ( humanChoice === "paper" ) {
        if ( computerChoice === "scissors" ) {
            loseRound( humanChoice, computerChoice );
        } else {
            winRound( humanChoice, computerChoice );
        }
    }
    else if ( humanChoice === "scissors" ) {
       if ( computerChoice === "rock" ) {
            loseRound( humanChoice, computerChoice );
        } else {
            winRound( humanChoice, computerChoice );
        } 
    }
    else {
        console.log("Invalid Option. You lose!");
        computerScore++;
    }

    displayScore();
}

function winRound( humanChoice, computerChoice ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
    humanScore++;
}

function loseRound( humanChoice, computerChoice ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
    computerScore++;
}

function displayScore() {
    currentRounds++;
    console.log("*** Current Scores ***");
    console.log(`* Current Round: ${currentRounds}   *`)
    console.log(`* Human Score: ${humanScore}     *`);
    console.log(`* Computer Score: ${computerScore}  *`);
    console.log("**********************");
}

function playGame() {
    for ( let i = 0; i < maxRounds; i++ ) {
        playRound( getHumanChoice(), getComputerChoice() )
    }
}

//playGame();
