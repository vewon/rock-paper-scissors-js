function getComputerChoice() {

    let random = Math.floor(Math.random() * 3);
    let computerChoice = getRandomChoice( random );

    console.log(`Computer Choice: ${computerChoice}`);

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
    let userChoice = prompt("Enter your choice: ");

    console.log(`Human Choice: ${userChoice}`);
}

getHumanChoice();
getComputerChoice();