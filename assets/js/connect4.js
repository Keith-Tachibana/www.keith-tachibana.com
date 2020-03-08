var count = 0;
var loseTime;
var player1 = "red";
var player2 = "blue";
var gameContainer = document.querySelector('.game');
var losingTime = document.getElementById('lose-timer').textContent;
var restartButtonLoser = document.getElementById('lose-screen');
var restartButtonWinner = document.getElementById('finish-game');
var playerOneWin = document.getElementById('player-one-wins').textContent;
var playerTwoWin = document.getElementById('player-two-wins').textContent;
var startBox = document.querySelector('.start-box');
var decision = startBox.querySelector('#decide-size');
var button = decision.querySelector('button');
var restartButton = document.querySelector('.restart-button');
var timeContainer = document.querySelector('.time-zone');
var playerOneName = document.getElementById('player1-name');
var playerTwoName = document.getElementById('player2-name');
var player1Name = document.getElementById('player-one-name');
var player2Name = document.getElementById('player-two-name');

function playerOneWins() {
  document.getElementById('winning-player').textContent = '1';
  document.getElementById('finish-game').classList.remove('hidden');
}

function playerTwoWins() {
  document.getElementById('winning-player').textContent = '2';
  document.getElementById('finish-game').classList.remove('hidden');
}

function horizontal(arr, length) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === player1) {
      if (arr[i + length] === player1) {
        if (arr[i + (length * 2)] === player1) {
          if (arr[i + (length * 3)] === player1) {
            playerOneWins();
            clearInterval(loseTime);
          }
        }
      }
    }
    if (arr[i] === player2) {
      if (arr[i + length] === player2) {
        if (arr[i + (length * 2)] === player2) {
          if (arr[i + (length * 3)] === player2) {
            playerTwoWins();
            clearInterval(loseTime);
          }
        }
      }
    }
  }
}

function vertical(arr, length, col) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < col; j++) {
      if (arr[i] === player1 && ((length * j) <= i && i < length * (j + 1))) {
        if (arr[i + 1] === player1 && ((length * j) <= i + 1 && i + 1 < length * (j + 1))) {
          if (arr[i + 2] === player1 && ((length * j) <= i + 2 && i + 2 < length * (j + 1))) {
            if (arr[i + 3] === player1 && ((length * j) <= i + 3 && i + 3 < length * (j + 1))) {
              playerOneWins();
              clearInterval(loseTime);
            }
          }
        }
      }
      if (arr[i] === player2 && ((length * j) <= i && i < length * (j + 1))) {
        if (arr[i + 1] === player2 && ((length * j) <= i + 1 && i + 1 < length * (j + 1))) {
          if (arr[i + 2] === player2 && ((length * j) <= i + 2 && i + 2 < length * (j + 1))) {
            if (arr[i + 3] === player2 && ((length * j) <= i + 3 && i + 3 < length * (j + 1))) {
              playerTwoWins();
              clearInterval(loseTime);
            }
          }
        }
      }
    }
  }
}

function diagonal(arr, length, col) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < col; j++) {
      if (arr[i + length * (j)] === player1 && ((length * j) <= i + length * (j) && i + length * (j) < length * (j + 1) * 1 - 3)) {
        if (arr[i + (length * (j + 1)) + 1] === player1 && ((length * (j + 1)) <= i + (length * (j + 1)) + 1 && i + (length * (j + 1)) + 1 < length * ((j + 1) * 2))) {
          if (arr[i + (length * (j + 2)) + 2] === player1 && ((length * (j + 2)) <= i + (length * (j + 2)) + 2 && i + (length * (j + 2)) + 2 < length * ((j + 1) * 3))) {
            if (arr[i + (length * (j + 3)) + 3] === player1 && ((length * (j + 3)) <= i + (length * (j + 3)) + 3 && i + (length * (j + 3)) + 3 < length * ((j + 1) * 4))) {
              playerOneWins();
              clearInterval(loseTime);
            }
          }
        }
      }
      if (arr[i + length * (j)] === player1 && ((length * j) + 2 <= i + length * (j) && i + length * (j) < length * (j + 1) * 1)) {
        if (arr[i + (length * (j + 1)) - 1] === player1 && ((length * (j + 1)) <= i + (length * (j + 1)) - 1 && i + (length * (j + 1)) - 1 < length * ((j + 1) * 2))) {
          if (arr[i + (length * (j + 2)) - 2] === player1 && ((length * (j + 2)) <= i + (length * (j + 2)) - 2 && i + (length * (j + 2)) - 2 < length * ((j + 1) * 3))) {
            if (arr[i + (length * (j + 3)) - 3] === player1 && ((length * (j + 3)) <= i + (length * (j + 3)) - 3 && i + (length * (j + 3)) - 3 < length * ((j + 1) * 4))) {
              playerOneWins();
              clearInterval(loseTime);
            }
          }
        }
      }
      if (arr[i + length * (j)] === player2 && ((length * j) <= i + length * (j) && i + length * (j) < length * (j + 1) * 1 - 3)) {
        if (arr[i + (length * (j + 1)) + 1] === player2 && ((length * (j + 1)) <= i + (length * (j + 1)) + 1 && i + (length * (j + 1)) + 1 < length * ((j + 1) * 2))) {
          if (arr[i + (length * (j + 2)) + 2] === player2 && ((length * (j + 2)) <= i + (length * (j + 2)) + 2 && i + (length * (j + 2)) + 2 < length * ((j + 1) * 3))) {
            if (arr[i + (length * (j + 3)) + 3] === player2 && ((length * (j + 3)) <= i + (length * (j + 3)) + 3 && i + (length * (j + 3)) + 3 < length * ((j + 1) * 4))) {
              playerTwoWins();
              clearInterval(loseTime);
            }
          }
        }
      }
      if (arr[i + length * (j)] === player2 && ((length * j) + 2 <= i + length * (j) && i + length * (j) < length * (j + 1) * 1)) {
        if (arr[i + (length * (j + 1)) - 1] === player2 && ((length * (j + 1)) <= i + (length * (j + 1)) - 1 && i + (length * (j + 1)) - 1 < length * ((j + 1) * 2))) {
          if (arr[i + (length * (j + 2)) - 2] === player2 && ((length * (j + 2)) <= i + (length * (j + 2)) - 2 && i + (length * (j + 2)) - 2 < length * ((j + 1) * 3))) {
            if (arr[i + (length * (j + 3)) - 3] === player2 && ((length * (j + 3)) <= i + (length * (j + 3)) - 3 && i + (length * (j + 3)) - 3 < length * ((j + 1) * 4))) {
              playerTwoWins();
              clearInterval(loseTime);
            }
          }
        }
      }
    }
  }
}

function checkWinCondition() {
  var col = document.querySelectorAll('.col');
  console.log('col:', col);
  var checkArr = [];
  var parentArray = Array.from(col);
  for (var i = 0; i < parentArray.length; i++) {
    var childrenArray = Array.from(parentArray[i].children)
    for (var j = childrenArray.length - 1; j >= 0; j--) {
      checkArr.push(childrenArray[j].textContent);
    }
  }
  vertical(checkArr, childrenArray.length, parentArray.length);
  horizontal(checkArr, childrenArray.length);
  diagonal(checkArr, childrenArray.length, parentArray.length);
}

function restartGameLoss() {
  document.getElementById('lose-screen').classList.add('hidden');
  winningPlayerAdd();
  clearAllElements();
}

function restartGameWin() {
  document.getElementById('finish-game').classList.add('hidden');
  winningPlayerAdd();
  clearAllElements();
}

function winningPlayerAdd() {
  if (count % 2 === 1) {
    playerOneWin++;
    document.getElementById('player-one-wins').textContent = playerOneWin;
  } else {
    playerTwoWin++;
    document.getElementById('player-two-wins').textContent = playerTwoWin;
  }
  count = 0;
  losingTime = 15;
  document.getElementById('lose-timer').textContent = losingTime;
}

function clearAllElements() {
  var clearElements = document.querySelectorAll('.row');
  for (var k = 0; k < clearElements.length; k++) {
    clearElements[k].textContent = 'white';
    clearElements[k].classList.remove('player-one');
    clearElements[k].classList.remove('player-two');
    clearElements[k].classList.remove('counting');
  }
  count = 0;
  losingTime = 15;
  loseTime = setInterval(loseGame, 1000);
  document.getElementById('current-player').textContent = '1';
}

function changeTurn(event) {
  var newArr = Array.from(event.target.parentElement.children);
  console.log('newArr:', newArr);
  if (!event.target.className.includes('row')) {
    return;
  }
  if (count % 2 === 0) {
    for (var i = newArr.length; i >= 0; i--) {
      if (newArr[0].getAttribute('class').includes('counting')) {
        return;
      }
    }
    for (var i = newArr.length - 1; i >= 0; i--) {
      if (!newArr[i].className.includes('player')) {
        newArr[i].classList.add('player-one', 'counting');
        newArr[i].textContent = 'red';
        document.getElementById('current-player').textContent = '2';
        losingTime = 15;
        break;
      }
    }
    count++;
  } else {
    for (var i = newArr.length; i >= 0; i--) {
      if (newArr[0].getAttribute('class').includes('counting')) {
        return;
      }
    }
    for (var i = newArr.length - 1; i >= 0; i--) {
      if (!newArr[i].className.includes('player')) {
        newArr[i].classList.add('player-two', 'counting');
        newArr[i].textContent = 'blue';
        document.getElementById('current-player').textContent = '1';
        losingTime = 15;
        break;
      }
    }
    count++;
  }
}

function loseGame() {
  losingTime--;
  if (losingTime <= 5) {
    document.getElementById('lose-timer').classList.add('timer-alert');
  } else if (losingTime > 5) {
    document.getElementById('lose-timer').classList.remove('timer-alert');
  }
  if (losingTime === 0) {
    if (count % 2 === 0) {
      document.getElementById('losing-player').textContent = '1';
      //document.getElementById('loseScreen').style.backgroundImage = 'url(./images/59264801.jpeg)';
    } else {
      document.getElementById('losing-player').textContent = '2';
      //document.getElementById('loseScreen').style.backgroundImage = 'url(./images/andrew.png)';
    }
    document.getElementById('lose-timer').classList.remove('timer-alert');
    clearInterval(loseTime);
    document.getElementById('lose-screen').classList.remove('hidden');
  }
  document.getElementById('lose-timer').textContent = losingTime;
}

function decideSize(event) {
  event.preventDefault();
  var parentElement = Array.from(event.target.parentElement.elements);
  console.log('parentElement:', parentElement);
  for (var i = 0; i < parentElement.length; i++) {
    if (parentElement[i].id === "columnOfGame") {
      if (parentElement[i].value < 6 || parentElement[i].value > 10) {
        alert('Please enter a number between 6 and 10.');
        return;
      } else {
        var col = parentElement[i].value;
        console.log('col:', col);
      }
    }
    if (parentElement[i].id === "rowOfGame") {
      if (parentElement[i].value < 5 || parentElement[i].value > 9) {
        alert('Please enter a number between 5 and 9.');
        return;
      } else {
        var row = parentElement[i].value;
        console.log('row:', row);
      }
    }
  }
  player1Name.innerHTML = parentElement[2].value + '&apos;s Wins:';
  player2Name.innerHTML = parentElement[3].value + '&apos;s Wins:';
  startBox.classList.add('hidden');
  document.querySelector('aside').classList.remove('hidden');
  gameContainer.classList.remove('hidden');
  loseTime = setInterval(loseGame, 1000);
  structure(col, row);
}

function structure(colLength, rowLength) {
  for (var i = 0; i < colLength; i++) {
    var colDiv = document.createElement('div');
    colDiv.classList.add('col', `${i}`)
    for (var j = 0; j < rowLength; j++) {
      var rowDiv = document.createElement('div');
      rowDiv.classList.add('row', `${j}`);
      rowDiv.classList.add('fall-' + j);
      rowDiv.textContent = 'white';
      colDiv.prepend(rowDiv);
    }
    gameContainer.append(colDiv);
  }
}

function getTime() {
  var data = new Date();
  var hr = data.getHours() > 12 ? data.getHours() - 12 : data.getHours();
  var min = data.getMinutes();
  var sec = data.getSeconds();
  hr = 24 ? hr = 12 : hr;
  var amPM = (data.getHours() >= 12) ? 'PM' : 'AM';
  timeContainer.innerHTML = `${hr}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec} ${amPM}`;
}

function refreshAll() {
  location.reload();
}

function checkForm() {
  document.querySelector('form').addEventListener('keyup', function() {
    var empty = false;
    var formInputs = document.querySelectorAll('input');
    for (var i = 0; i < formInputs.length; i++) {
      if (formInputs[i].value == '') {
        empty = true;
      }
    }
    if (empty) {
      document.getElementById('start-game').setAttribute('disabled', 'disabled');
    } else {
      document.getElementById('start-game').removeAttribute('disabled');
    }
  });
}

function init() {
  button.addEventListener('click', decideSize);
  gameContainer.addEventListener('click', changeTurn);
  gameContainer.addEventListener('click', checkWinCondition);
  restartButtonLoser.addEventListener('click', restartGameLoss);
  restartButtonWinner.addEventListener('click', restartGameWin);
  restartButton.addEventListener('click', refreshAll);
  setInterval(getTime, 1000);
  checkForm();
}

init();
