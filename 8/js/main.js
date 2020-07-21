function checkUseStrict () {
  'use strict'
  let userCode = prompt('Введите Ваш JS коде');
  eval(userCode);
}

try  {
  checkUseStrict();
}

catch (e) {
  alert ('Выполнение в строгом режиме не возможно' + e);
}
