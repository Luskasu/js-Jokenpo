
const scoreboard = document.querySelector('.scoreboard');
let displayResult = document.querySelector('.result');
const round = document.querySelector('.round');

let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses: 0,
    ties: 0
  };

scoreboard.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

function showRound(playerMove, computerMove, result){
  displayResult.innerHTML = `You ${result}`;
  round.innerHTML = `You
  <img class="move-icon" src="images/${playerMove}-emoji.png">
  <img class="move-icon" src="images/${computerMove}-emoji.png">
  Computer`;
}

function gameMatch(playerMove){
  computerMove = doComputerMove();
  if(playerMove === 'rock'){
    if(computerMove === 'rock'){
      updateScore('tie');
      showRound(playerMove, computerMove, 'tie');
    }else if(computerMove === 'paper'){
      updateScore('lose');
      showRound(playerMove, computerMove, 'lose');
    }else if(computerMove ==='scissors'){
      updateScore('win');
      showRound(playerMove, computerMove, 'win');
    }

  }else if(playerMove === 'paper'){
    if(computerMove === 'rock'){
      updateScore('win');
      showRound(playerMove, computerMove, 'win');
    }else if(computerMove === 'paper'){
      updateScore('tie');
      showRound(playerMove, computerMove, 'tie');
    }else if(computerMove ==='scissors'){
      updateScore('lose');
      showRound(playerMove, computerMove, 'lose');
    }

  }else if(playerMove === 'scissors'){
    if(computerMove === 'rock'){
      updateScore('lose');
      showRound(playerMove, computerMove, 'lose');
    }else if(computerMove === 'paper'){
      updateScore('win');
      showRound(playerMove, computerMove, 'win');
    }else if(computerMove ==='scissors'){
      updateScore('tie');
      showRound(playerMove, computerMove, 'tie');
    }
  }  
}

function doComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1 / 3){
    computerMove = 'rock';
  }else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
    computerMove = 'paper';
  }else if(randomNumber >= 2 / 3 && randomNumber < 1){
    computerMove = 'scissors';
  }
  return computerMove;
}

function updateScore(result){
  if (result === 'win'){
    score.wins++;
  }else if(result === 'lose'){
    score.losses++;
  }else if(result === 'tie'){
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  scoreboard.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}