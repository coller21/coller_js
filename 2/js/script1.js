let firstNumber = promptInt('Введите первое число');
console.log(firstNumber, typeof(firstNumber));

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
    location.reload();
  }
} else {
  alert('Первое значение не является числом');
  location.reload();
}


if (variable) {
  Норм
} else {
  Хер
}
