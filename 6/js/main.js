function UserList() {
  this.users = [];

  this.add = function (user) {
    (this.users).push(user);
  }

  this.getAllUsers = function () {
    for ( i=0; i <= this.users.length; i++) {
     console.log(this.users[i]);
    }
  }
}

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  let myDate = new Date();
  this.regDate = ('0' + myDate.getDate()).slice(-2) + '-'
    + ('0' + (myDate.getMonth() + 1)).slice(-2) + '-'
    + myDate.getFullYear() + " | "
    + ('0' + myDate.getHours()).slice(-2) + ':'
    + ('0' + myDate.getMinutes()).slice(-2);

}

let emptyUserList = new UserList();
let dialogWindow = prompt('Введите имя и фамилию');

while (dialogWindow !== null) {
  if (dialogWindow == '') {
    alert('Вы ничего не ввели');
    dialogWindow = prompt('Введите имя и фамилию');
  }
  let splitString = dialogWindow.split(' ', 2);
  let newUser = new User(splitString[0], splitString[1]);
  emptyUserList.add(newUser);
  dialogWindow = prompt('Введите имя и фамилию');
}

emptyUserList.getAllUsers();
