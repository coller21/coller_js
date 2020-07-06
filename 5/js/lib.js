(function () {
let startGame = confirm('Вы хотите начать игру?');
let randomNumber = Math.round(Math.random() * 1000);
let counterTry = 0;
let goBot = (num) => {
  if (num === null) {
    alert('Game Over');
  } else {
    if (counterTry < 10) {
      if (Number(num).toString() != 'NaN' && num != '') {
        numUser = Number(num);
        if (numUser > randomNumber) {
          counterTry++;
          alert('Меньше');
          let numberUser = prompt('Введите число');
          goBot(numberUser);
        } else if (numUser < randomNumber) {
          counterTry++;
          alert('Больше');
          let numberUser = prompt('Введите число');
          goBot(numberUser);
        } else {
          alert('Правильно');
        }
      } else {
        let numberUser = prompt('Введите число');
        goBot(numberUser);
      }
    } else {
      alert('Количество попыток превышено');
      startGame = confirm('Вы хотите начать игру?');
      counterTry = 0;
      goBot();
    }
  }
}

  window.start = function () {
    goBot();
    return startGame;
  }
})()
