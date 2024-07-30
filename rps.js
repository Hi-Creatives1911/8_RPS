const gameOptions = ["rock", "paper", "scissors"];
const compOptions = ["bode", "sarah", "buzz"];
function computerOption() {
   return gameOptions[Math.floor (Math.random() * gameOptions.length)];
}

function game (userOption, computerOption) {
    if (userOption === computerOption) {
        return "It's a TIE!"
    } else if (
        (userOption === 'rock' && computerOption === 'scissors') ||                
        (userOption === 'paper' && computerOption === 'rock') ||
        (userOption === 'scissors' && computerOption === 'paper')) {
        return "You Win!!!"     
    } else {s
        return "You Lose!!!. Try Again."
    }
}

let opponent = prompt('Choose your Opponent (Bode, Sarah or Buzz)').toLowerCase();
let userOption = prompt ('Enter Your Choice [rock, paper or scissors}').toLowerCase();
if (gameOptions.includes(userOption) && compOptions.includes(opponent)) {
    let gameComputerOption = computerOption();
    let result = game(userOption, gameComputerOption);

    alert ( `\tYou: ${userOption} \n${opponent}: ${gameComputerOption} \n${result}`);
} else {
    alert ('Invalid Input. Try Again.')
}

    