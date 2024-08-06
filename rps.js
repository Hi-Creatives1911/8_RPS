const gameOptions = ["ROCK", "PAPER", "SCISSORS"];

function computerChoice() {
    let compOptions = Math.random () < 0.5 ? "rock" : Math.random () < 0.5 ? "paper" : "scissors";
   return compOptions.toUpperCase();
}

let player = 0;
let computer = 0;
let round;
let result;

function game () {
    for (let turns = 0; turns < 3; turns++) {

    let userOption = prompt ('Enter Your Choice [rock, paper or scissors}');
    let userOptionUpper = userOption.toUpperCase();

    while (!(gameOptions.includes (userOptionUpper))){
        userOption = prompt('wrong Input. Try again! (Rock, Paper or Scissors)')
        userOptionUpper = userOption.toUpperCase();
    }

    let computerOption = computerChoice();

    if (userOptionUpper === computerOption) {
            alert (`You Chose: ${userOptionUpper}\nComputer Chose: ${computerOption}`)
            alert (round = "It's a TIE!");
    } else if (
            (userOptionUpper === 'ROCK' && computerOption === 'SCISSORS') ||                
            (userOptionUpper === 'PAPER' && computerOption === 'ROCK') ||
            (userOptionUpper === 'SCISSORS' && computerOption === 'PAPER')) 
            {          
            player++;
            alert (`You Chose: ${userOptionUpper}\nComputer Chose: ${computerOption}`)
            alert (round =  `Congrats!\nYou = ${player}\nComputer = ${computer}`);
            
    } else {

            computer++;
            alert (`You Chose: ${userOptionUpper}\nComputer Chose: ${computerOption}`)
            alert (round =  `Whoops!\nYou = ${player}\nComputer = ${computer}\nTry Again.`);
        }

    if ((player === 2) || (computer === 2)) {
            break;
    }
} 

if (player === 2) {
    alert (result = `You Win!!!`);
} else if (computer === 2) {
    alert (result = `Computer Wins!!!`);
} else {alert (result = `UNBELIEVABLE! The Game's a TIE!!!`);}};

game();