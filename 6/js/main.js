function UserList() {
  this.users = [];

  this.add = function (user) {
    (this.users).push(user);
  }

  this.getAllUsers = function () {
    console.log('Список пользователей:');
    for ( i = 0; i < this.users.length; i++) {
     console.log(`Поьзователь №${i+1}`);
     console.log(`Имя: ${this.users[i].firstName}| Фамилия: ${this.users[i].lastName}| Дата регистрации: ${this.users[i].regDate}`);
    }
  }
}

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  let myDate = new Date();
  this.regDate = moment().locale('ru').format('LLL')
}

let emptyUserList = new UserList();
let dialogWindow = prompt('Введите имя и фамилию');

while (dialogWindow !== null) {
  let splitString = (dialogWindow.trim() || '').split(' ', 2);
  if (splitString[1] == undefined) {
    alert (`Вы не ввели фамилию`);
    dialogWindow = prompt('Введите имя и фамилию');
  }
  let newUser = new User(splitString[0], splitString[1]);
  emptyUserList.add(newUser);
  dialogWindow = prompt('Введите имя и фамилию');
}

emptyUserList.getAllUsers();
