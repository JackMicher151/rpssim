// We will learn about closures later to make something like this private
// We will learn about currying functions later, just because
const rockchar = '&#9994';
const paperchar = '&#9995';
const scisschar = '&#9996';
const rockbutton = document.getElementById('rbut');
const paperbutton = document.getElementById('pbut');
const scissbutton = document.getElementById('sbut');


function stringToRPSChar(inputstr) {
    switch (inputstr) {
        case 'ROCK':
            return rockchar;
        case 'PAPER':
            return paperchar;
        case 'SCISSORS':
            return scisschar;
    }
}

function getComputerChoice() {
    let cpuChoice = parseInt(Math.floor(Math.random() * 3));
    switch (cpuChoice) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

// function getPlayerChoice() {
//     let playerChoice = prompt("Enter your move (Rock, Paper, or Scissors)").toString();
//     console.log('Player Chose ' + playerChoice);
//     playerChoice = playerChoice.toUpperCase();
//     return (playerChoice === 'ROCK' || playerChoice === 'PAPER' || playerChoice === 'SCISSORS') ? playerChoice : getPlayerChoice();
// }

function playRound(choice) {
    let compSelection = getComputerChoice();
    let playerSelection = choice;
    let result;

    document.getElementById('oppchoice').innerHTML = stringToRPSChar(compSelection);
    document.getElementById('playchoice').innerHTML = stringToRPSChar(playerSelection);
    
    rockbutton.style.display = 'none';
    paperbutton.style.display = 'none';
    scissbutton.style.display = 'none';

    document.getElementById('gobutton').style.display = 'block';

    if (compSelection === playerSelection) {
        result = 'Tie';
    }
    else {
        switch (playerSelection) {
            case 'ROCK':
                result = compSelection === 'SCISSORS' ? 'You Win!' : 'You Lose...';
                break;
            case 'PAPER':
                result = compSelection === 'ROCK' ? 'You Win!' : 'You Lose...';
                break;
            case 'SCISSORS':
                result = compSelection === 'PAPER' ? 'You Win!' : 'You Lose...';
                break;
        }
    }

    return result;
}

document.getElementById('gobutton').addEventListener( 'click', () => {
    document.getElementById('gobutton').style.display = 'none';
    rockbutton.style.display = 'block';
    paperbutton.style.display = 'block';
    scissbutton.style.display = 'block';
})

rockbutton.addEventListener( 'click', () => {
    document.getElementById('playresult').innerText = playRound('ROCK');
})
paperbutton.addEventListener( 'click', () => {
    document.getElementById('playresult').innerText = playRound('PAPER');
})
scissbutton.addEventListener( 'click', () => {
    document.getElementById('playresult').innerText = playRound('SCISSORS');
})

// TODO: have r p and s with listeners call playRound(); instead of the Go button
