let doTaskOne = () => {
  let firstNumber = promptInt('Введите первое число');

  if (firstNumber !== null) {
    let secondNumber = promptInt('Введите второе число');
    if (secondNumber !== null) {
      if (firstNumber > secondNumber) {
        alert('Первое число больше второго');
      } else if (firstNumber < secondNumber) {
        alert('Второе число больше первого');
      } else {
        alert('Числа равны');
      }
    } else {
      alert('второе значение не является числом');
      setTimeout(doTaskOne, 0);
    }
  } else {
    alert('Первое значение не является числом');
    setTimeout(doTaskOne, 0);
  }
}
doTaskOne();
