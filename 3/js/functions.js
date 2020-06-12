function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let goBot = (num) => {
  if (num === null) {
    alert('Game Over');
  } else {
    if (Number(num).toString() != 'NaN' && num != '') {
      numUser = Number(num);
      if (numUser > randomNumber) {
        alert('Меньше');
        let numberUser = prompt('Введите число');
        setTimeout(goBot(numberUser), 0);
      } else if (numUser < randomNumber) {
        alert('Больше');
        let numberUser = prompt('Введите число');
        setTimeout(goBot(numberUser), 0);
      } else {
        alert('Правильно');
      }
    } else {
      alert('Введите число')
      let numberUser = prompt('Введите число');
      setTimeout(goBot(numberUser), 0);
    }
  }
}
