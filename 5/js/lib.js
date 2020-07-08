(function () {
  function startGame() {
    let startGame = confirm('Вы хотите начать игру?');
    return [randomNumber = Math.round(Math.random() * 1000), counterTry = 0];
  }
  startGame();
  window.start = function (num) {
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
            window.start(numberUser);
          } else if (numUser < randomNumber) {
            counterTry++;
            alert('Больше');
            let numberUser = prompt('Введите число');
            window.start(numberUser);
          } else {
            alert('Правильно');
          }
        } else {
          let numberUser = prompt('Введите число');
          window.start(numberUser);
        }
      } else {
        alert('Количество попыток превышено');
        startGame = confirm('Вы хотите начать игру?');
        counterTry = 0;
        window.start();
      }
    }
  }
})()
