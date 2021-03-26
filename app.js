//const getUserChoice = userInput => userInput.toLowerCase();

const getUserChoice = userInput => {
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else {
        console.log('Sorry, it is an error!');
    }
}

console.log(getUserChoice('rock'));
//console.log(getUserChoice(''));
//console.log(getUserChoice('play'));
//console.log(getUserChoice('scissors'));

const getComputerChoice = () => {
    const number = Math.floor(Math.random()*3);

    if (number === 0) {
        return 'rock';
    }
    else if (number === 1) {
        return 'paper';
    }
    else if (number === 2) {
        return 'scissors'
    }
    else {
        return 'Sorry!';
    }
}

console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Sorry this round is tie!';
    }
    else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'Computer wins!';
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'Computer wins!';
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'User wins!';
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'Computer wins!';
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'User wins!';
    }
}

//console.log(determineWinner('paper', 'rock'));
//console.log(determineWinner('scissors', 'paper'));

function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

console.log(playGame());
