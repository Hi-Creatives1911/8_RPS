const gameOptions = ["rock", "paper", "scissors"] 

function computerOption() {
   return gameOptions[Math.floor (Math.random() * gameOptions.length)];
}

function game (userOption, computerOption) {
    if (userOption === computerOption) {
        return "It's a TIE!"
    }  else if ((userOption === 'rock' && computerOption === 'scissors') ||
                (userOption === 'paper' && computerOption === 'rock') ||
                (userOption === 'scissors' && computerOption === 'paper'))
}