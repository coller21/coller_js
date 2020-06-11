// Здесь функцию не использую, т.к. в задаче стоит условие по
// отсечению строк при суммировании
let input,
    sum = 0;
while ((input = prompt('Введите число!')) != null) {
  let number = Number(input);
  if (!isNaN(number))
    sum += number;
}
alert(sum);


