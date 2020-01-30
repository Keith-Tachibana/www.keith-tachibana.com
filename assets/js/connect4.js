// ELEMENT DEFINITIONS
var button0 = document.querySelector('.col-0');
var button1 = document.querySelector('.col-1');
var button2 = document.querySelector('.col-2');
var button3 = document.querySelector('.col-3');
var button4 = document.querySelector('.col-4');
var button5 = document.querySelector('.col-5');
var button6 = document.querySelector('.col-6');
var gameInfo = document.getElementById('gameInfo');
var start = document.getElementById('startGame');
var modal = document.querySelector('.modal');
var modalDraw = document.querySelector('.modal-draw');
var close = document.querySelector('.close');
var restart = document.querySelector('.restart');
var restartDraw = document.querySelector('.restart-draw');
var congrats = document.querySelector('.congrats');
var draw = document.querySelector('.draw');
var reset = document.getElementById('resetGame');
var p1Wins = document.getElementById('p1Wins');
var p2Wins = document.getElementById('p2Wins');
var playTheme = document.getElementById('theme');
var mute = document.getElementById('music');
var icon1 = document.querySelector('.icon-1');
var icon2 = document.querySelector('.icon-2');
var icon3 = document.querySelector('.icon-3');
var icon4 = document.querySelector('.icon-4');
var icon5 = document.querySelector('.icon-5');

// VARIABLE DECLARATIONS AND INITIALIZATIONS
var gameActive = false;
var activePlayer = 1;
var gameBoard = [];
var playerColor = [];
var p1GamesWon = 0;
var p2GamesWon = 0;
var playerDisc = null;
var counter = -1;
playerColor[1] = "green";
playerColor[2] = "yellow";

// EVENT HANDLERS
button0.addEventListener('click', function () {
  drop(0);
});
button1.addEventListener('click', function () {
  drop(1);
});
button2.addEventListener('click', function () {
  drop(2);
});
button3.addEventListener('click', function () {
  drop(3);
});
button4.addEventListener('click', function () {
  drop(4);
});
button5.addEventListener('click', function () {
  drop(5);
});
button6.addEventListener('click', function () {
  drop(6);
});
start.addEventListener('click', startGame);
close.addEventListener('click', function () {
  modal.classList.add('hidden');
})
restart.addEventListener('click', function () {
  modal.classList.add('hidden');
  startGame();
})
restartDraw.addEventListener('click', function () {
  modalDraw.classList.add('hidden');
  startGame();
})
reset.addEventListener('click', resetGame);
icon1.addEventListener('click', function () {
  playerDisc = "icon-1";
});
icon2.addEventListener('click', function () {
  playerDisc = "icon-2";
});
icon3.addEventListener('click', function () {
  playerDisc = "icon-3";
});
icon4.addEventListener('click', function () {
  playerDisc = "icon-4";
});
icon5.addEventListener('click', function () {
  playerDisc = "icon-5";
});
mute.addEventListener('click', function () {
  if (playTheme.muted === false) {
    playTheme.muted = true;
  }
  else {
    playTheme.muted = false;
  }
});

// UNTIL THE START BUTTON IS PRESSED, THE DROP DISCS FUNCTIONALITY
// SHOULD BE DISABLED TO AVOID EXCEPTION BEING THROWN
for (var i = 0; i < 7; i++) {
  document.querySelector('.col-' + i).classList.add('hidden');
}

// FUNCTIONS
function startGame() {
  if (gameActive === true) {
    return false;
  } else {
    gameActive = true;
  }
  for (row = 0; row <= 5; row++) {
    gameBoard[row] = [];
    for (col = 0; col <= 6; col++) {
      gameBoard[row][col] = 0;
    }
  }
  gameInfo.innerHTML = '';
  for (var i = 0; i < 7; i++) {
    document.querySelector('.col-' + i).classList.remove('hidden');
  }
  for (row = 0; row <= 5; row++) {
    for (col = 0; col <= 6; col++) {
      var initDisc = document.getElementById('td' + row + col);
      initDisc.classList.remove('fall-' + row);
    }
  }
  start.setAttribute('disabled', 'true');
  updateBoard();
  updateTurn();
  playAudio();
}

function resetGame() {
  counter = -1;
  p1GamesWon = 0;
  p2GamesWon = 0;
  p1Wins.textContent = "Player 1 Number of Wins: " + p1GamesWon;
  p2Wins.textContent = "Player 2 Number of Wins: " + p2GamesWon;
  gameInfo.innerHTML = '';
  for (var row = 0; row <= 5; row++) {
    gameBoard[row] = [];
    for (var col = 0; col <= 6; col++) {
      gameBoard[row][col] = 0;
    }
  }
  for (var i = 0; i < 7; i++) {
    document.querySelector('.col-' + i).classList.remove('hidden');
  }
  for (row = 0; row <= 5; row++) {
    for (col = 0; col <= 6; col++) {
      var initDisc = document.getElementById('td' + row + col);
      initDisc.classList.remove('fall-' + row);
    }
  }
  for (col = 0; col <= 6; col++) {
    for (row = 0; row <= 5; row++) {
      document.getElementById('td' + row + col).innerHTML = "<span class='tdElement player" + gameBoard[row][col] + "'> </span>";
    }
  }
  updateTurn();
}

function updateBoard() {
  checkWin();
  counter++;
  for (var col = 0; col <= 6; col++) {
    for (var row = 0; row <= 5; row++) {
      document.getElementById('td' + row + col).innerHTML = "<span class='tdElement " + playerDisc + " player" + gameBoard[row][col] + "'> </span>";
    }
  }
  checkDraw(counter);
}

function updateTurn() {
  var p1WinsInfo = "Player 1 Number of Wins: " + p1GamesWon;
  var p2WinsInfo = "Player 2 Number of Wins: " + p2GamesWon;
  p1Wins.textContent = p1WinsInfo;
  p2Wins.textContent = p2WinsInfo;
  if (gameActive) {
    gameInfo.innerHTML = "Current Player: Player " + activePlayer + " <span class='player" + activePlayer + "'>(" + playerColor[activePlayer] + ")</span>";
  }
}

function checkDraw(counter) {
  if (counter === 42) { // change back to 42
    gameActive = false;
    start.removeAttribute('disabled');
    modalDraw.classList.remove('hidden');
    draw.textContent = "It's a draw, yo! Try again.";
  }
}

function playAudio() {
  playTheme.play();
}

function checkWin() {
  // Check left to right
  for (var i = 1; i <= 2; i++) {
    for (var col = 0; col <= 3; col++) {
      for (var row = 0; row <= 5; row++) {
        if (gameBoard[row][col] === i) {
          if ((gameBoard[row][col + 1] === i) && (gameBoard[row][col + 2] === i) && (gameBoard[row][col + 3] === i)) {
            endGame(i);
            if (i === 1) {
              p1GamesWon += 1;
            } else {
              p2GamesWon += 1;
            }
            return true;
          }
        }
      }
    }
  }
  // Check top to bottom
  for (i = 1; i <= 2; i++) {
    for (col = 0; col <= 6; col++) {
      for (row = 0; row <= 2; row++) {
        if (gameBoard[row][col] === i) {
          if ((gameBoard[row + 1][col] === i) && (gameBoard[row + 2][col] === i) && (gameBoard[row + 3][col] === i)) {
            endGame(i);
            if (i === 1) {
              p1GamesWon += 1;
            } else {
              p2GamesWon += 1;
            }
            return true;
          }
        }
      }
    }
  }
  // Check down diagonally
  for (i = 1; i <= 2; i++) {
    for (col = 0; col <= 3; col++) {
      for (row = 0; row <= 2; row++) {
        if (gameBoard[row][col] === i) {
          if ((gameBoard[row + 1][col + 1] === i) && (gameBoard[row + 2][col + 2] === i) && (gameBoard[row + 3][col + 3] === i)) {
            endGame(i);
            if (i === 1) {
              p1GamesWon += 1;
            } else {
              p2GamesWon += 1;
            }
            return true;
          }
        }
      }
    }
  }
  // Check up diagonally
  for (i = 1; i <= 2; i++) {
    for (col = 0; col <= 3; col++) {
      for (row = 3; row <= 5; row++) {
        if (gameBoard[row][col] === i) {
          if ((gameBoard[row - 1][col + 1] === i) && (gameBoard[row - 2][col + 2] === i) && (gameBoard[row - 3][col + 3] === i)) {
            endGame(i);
            if (i === 1) {
              p1GamesWon += 1;
            } else {
              p2GamesWon += 1;
            }
            return true;
          }
        }
      }
    }
  }
}

function endGame(winner) {
  gameActive = false;
  for (var i = 0; i < 7; i++) {
    document.querySelector('.col-' + i).classList.add('hidden');
  }
  gameInfo.textContent = "Winner: " + winner;
  start.removeAttribute('disabled');
  modal.classList.remove('hidden');
  congrats.textContent = "Congratulations player " + activePlayer + ", you have won!";
}

function drop(col) {
  for (var row = 5; row >= 0; row--) {
    if (gameBoard[row][col] === 0) {
      gameBoard[row][col] = activePlayer;
      var disc = document.getElementById('td' + row + col);
      disc.classList.add('fall-' + row);
      updateBoard();
      activePlayer = (activePlayer === 1) ? 2 : 1;
      updateTurn();
      return true;
    }
  }
}
