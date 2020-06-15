var myName = prompt('Как Вас зовут?');
var mySurname = prompt('Введите Вашу фамилию.');
var myBitrhYear = prompt('Введите год вашего рождения');

var currentYear = 2020;
var age = currentYear - myBitrhYear;

if (age < 20) {
  alert ('Привет, ' + myName + ' ' + mySurname + '!');
}
else if (age >= 20 && age < 40) {
  alert ('Добрый день, ' + myName + ' ' + mySurname);
}
else {
  alert ('Здраствуйте, ' + myName + ' ' + mySurname);
}


