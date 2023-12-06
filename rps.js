function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissor'
            break;
    };
};

function userChoice() {
    userInput = window.prompt('Rock, Paper or Scissor?');
    userInput = userInput.toLowerCase();

    if (userInput == "rock" || userInput == "paper" || userInput == "scissor") {
        return userInput;
    } else {
        console.log('Please choose between Rock, Paper or Scissor!');
    };
};

function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return 'The game is a tie!';
    }
    else if (userSelection === "rock" && computerSelection === "scissor") {
        return 'You won!';
    } 
    else if (userSelection === "scissor" && computerSelection === 'paper') {
        return 'You won!';
    }
    else if (userSelection === "paper" && computerSelection === "rock") {
        return 'You won!';
    }
    else {
        return 'You LOSE!';
    }
};

function game() {
    for (let i = 1; i <= 5; i++) {
        const userSelection = userChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(userSelection, computerSelection));
    }        
}

game();


