const gameOptions = ["ROCK", "PAPER", "SCISSORS"];
// const compOptions = ["bode", "sarah", "buzz"];
function computerOption() {
    let compOptions = gameOptions[Math.floor (Math.random() * gameOptions.length)];
   return compOptions.toUpperCase();
}

function game (userOption, computerOption) {
    if (userOption == computerOption) {
        return "It's a TIE!"
    } else if (
        (userOption == 'rock' && computerOption == 'scissors') ||                
        (userOption == 'paper' && computerOption == 'rock') ||
        (userOption == 'scissors' && computerOption == 'paper')) {
        return "You Win!!!"     
    } else {
        return "You Lose!!!. Try Again."
    }
}

// let opponent = prompt('Choose your Opponent (Bode, Sarah or Buzz)');
// let opponentLower = opponent.toLowerCase();
// console.log (opponentLower);
// // while (!compOptions.includes (opponentLower)){
// //     opponent = prompt('wrong Input. Try again! (Bode, Sarah or Buzz)')
// // }

let userOption = prompt ('Enter Your Choice [rock, paper or scissors}');
let userOptionUpper = userOption.toUpperCase();
while (!(gameOptions.includes (userOptionUpper))){
    userOption = prompt('wrong Input. Try again! (Rock, Paper or Scissors)')
    userOptionUpper = userOption.toUpperCase();
}

let gameComputerOption = computerOption();
let result = game(userOptionUpper, gameComputerOption);

alert ( `\tYou: ${userOptionUpper} \nComputer: ${gameComputerOption} \n${result}`);