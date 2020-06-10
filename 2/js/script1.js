// Написать программу, которая последовательно запрашивает
// у пользователя два числа, после чего сравнивает их и выводит 
// одно из сообщений: “Первое число больше второго”,
//  “Второе число больше первого” или “Числа равны”.
//  Необходимо учесть ситуации, когда пользователь вместо 
//  числа ввел строку или вообще не ввел ничего.
//  Для получения числа от пользователя пригодится функция prompt, 
//  а для вывода – alert.

let firstNumber = prompt('Введите первое число');

if (Number(firstNumber).toString() != 'NaN' && firstNumber != '') {
    firstNumber = Number(firstNumber);
    let secondNumber = prompt('Введите второе число');
    if (Number(secondNumber).toString() != 'NaN' && secondNumber != '') {
        secondNumber = Number(secondNumber);
        if(firstNumber > secondNumber) {
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



