let users = [
  {
    name: 'Данил',
    login: '1',
    password: '1'
  },
  {
    name: 'Марина',
    login: '2',
    password: '2'
  },
  {
    name: 'Николай',
    login: '3',
    password: '3'
  },
];

let userLogin = prompt("Введите ваш логин");
let userPassword = prompt("Введите ваш пароль");

let searchUser = (log, pass) => {
  let userName = 'undefined';
  for (let i = 0; i < users.length; i++) {
    if (log === users[i].login && pass === users[i].password) {
      userName = users[i].name;
    }

  }
  return (userName != 'undefined') ? alert("Привет, " + userName) : alert('Не верная авторизация');
}
if (userLogin === null || userPassword === null) {
  alert('Не верная авторизация');
} else {
  searchUser(userLogin.trim(), userPassword.trim());
}


