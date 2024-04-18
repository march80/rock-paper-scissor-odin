let userScore = 0
let compScore =0

function playGame(){


    for(i = 0; i < 5; i++){

        let playerSelection = prompt('Please enter Rock, paper or scissors and click enter').toLowerCase();
        let computerSelection = getComputerChoice();


        function getComputerChoice() {
            let random = Math.floor(Math.random() * 3) + 1
            let select = ''
            switch (random) {
                case 1:
                   select = 'rock'
                    break;
                case 2:
                   select = 'paper'
                    break;

                default:
                   select = 'scissors'
                    break;
            }
            return select

        }

        console.log(playRound(playerSelection, computerSelection))
    }
    let result = ''
    if(userScore > compScore){
        result ='won'
    }else if(compScore > userScore){
        result ='lost'
    }else{
        result ='tie'
    }
    return `You ${result} the series with your score:${userScore} vs comp score:${compScore}`
}

function playRound(playerSelection, computerSelection){
    let outcome = ''
    if (playerSelection === computerSelection){
        outcome = 'tie'
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        outcome = 'lose'
        compScore++
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        outcome = 'win'
        userScore++
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        outcome = 'win'
        userScore++
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        outcome = 'lose'
        compScore++
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        outcome = 'win'
        userScore++
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        outcome = 'lose'
        compScore++
    }


    switch (outcome) {
        case 'tie':
            return `You tied as ${playerSelection} is equal to ${computerSelection}`
            break;
        case 'win':
            return `You Win as ${playerSelection} beats ${computerSelection}`
            break;
        case 'lose':
            return `You Lose as ${playerSelection} is beaten by ${computerSelection}`
            break;


    }



}



console.log(playGame())
