// We will learn about closures later to make something like this private
// We will learn about currying functions later, just because
const rockchar = '&#9994',
    paperchar = '&#9995',
    scisschar = '&#9996',
    rockbutton = document.getElementById('rbut'),
    paperbutton = document.getElementById('pbut'),
    scissbutton = document.getElementById('sbut'),
    scorebrd = document.getElementById('scoreboard'),
    playscoreElem = document.getElementById('playerscore'),
    oppscoreElem = document.getElementById('oppscore'),
    gameStartButtonElem = document.getElementById('gamestartbut');
let playerScore = 0,
    oppScore = 0,
    gameStarted = false;

playscoreElem.innerText = playerScore.toString();
oppscoreElem.innerText = oppScore.toString();


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
        let logentry = document.createElement('div');
        logentry.innerText = 'TIE';
        logentry.style.color = 'purple';
        scorebrd.prepend(logentry);
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

        if (result === 'You Win!') {
            ++playerScore;
            playscoreElem.innerText = playerScore;
            let logentry = document.createElement('div');
            logentry.innerText = 'WIN';
            logentry.style.color = 'green';
            scorebrd.prepend(logentry);
        }
        else {
            ++oppScore;
            oppscoreElem.innerText = oppScore;
            let logentry = document.createElement('div');
            logentry.innerText = 'LOSS';
            logentry.style.color = 'red';
            scorebrd.prepend(logentry);
        }
        if (gameStarted) {
            if (playerScore === 5) {
                playscoreElem.style.display = 'none';
                oppscoreElem.style.display = 'none';
                gameStartButtonElem.style.display = 'flex';
                gameStartButtonElem.innerText = 'You Win! Best to 5 Again?'
            }
            else if (oppScore === 5) {
                playscoreElem.style.display = 'none';
                oppscoreElem.style.display = 'none';
                gameStartButtonElem.style.display = 'flex';
                gameStartButtonElem.innerText = 'Tough Luck. Best to 5 Again?'
            }
        }
    }

    return result;
}

function startBestToFive () {
    gameStarted = true;
    playerScore = 0;
    oppScore = 0;
    playscoreElem.innerText = 0;
    oppscoreElem.innerText = 0;
    gameStartButtonElem.style.display = 'none';
    document.getElementById('playerscore').style.display = 'flex';
    document.getElementById('oppscore').style.display = 'flex';
    scorebrd.textContent = '';
}

gameStartButtonElem.addEventListener( 'click', startBestToFive)

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
