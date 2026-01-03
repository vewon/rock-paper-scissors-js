function getComputerChoice() {

    let random = Math.floor(Math.random() * 3);
    let computerChoice = getChoice( random );

    console.log(`Computer Choice: ${computerChoice}`);

}

function getChoice( choice ) {
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

getComputerChoice();