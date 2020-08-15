const field = document.querySelector('.text');
const editField = document.querySelector('.edit');
const saveField = document.querySelector('.save');
const cancelField = document.querySelector('.cancel');
const selectList = document.querySelector('.change-list');
const textField = JSON.parse(localStorage.getItem('text'));
let arrayToLocal = [];

let doArray = (nowDate, insertedText) => {
  let objectData = {};
  objectData.date = nowDate;
  objectData.text = insertedText;
  arrayToLocal.push(objectData);
  localStorage.setItem('text', JSON.stringify(arrayToLocal));
}

let doSelect = () => {
  for (elem in textField) {
    let newOption = new Option(new Date(textField[elem].date).toLocaleDateString() + ' | ' +
    new Date(textField[elem].date).toLocaleTimeString() + ' - ' + textField[elem].text, textField[elem].text);
    selectList.append(newOption);
  }
}

selectList.addEventListener('change', function (ev) {
  field.innerHTML = ev.target.value;
})

if (!textField) {
  field.innerHTML = 'Нажмите кнопку "редактировать".';
} else {
  field.innerHTML = textField[textField.length - 1].text;
  arrayToLocal = textField;
  doSelect();
}

editField.addEventListener('click', function () {
  field.toggleAttribute('contenteditable');
  document.querySelectorAll('.btn-grupe .check').forEach(element => element.toggleAttribute('disabled'));
})

saveField.addEventListener('click', function () {
  document.querySelectorAll('.btn-grupe .check').forEach(element => element.toggleAttribute('disabled'));
  field.toggleAttribute('contenteditable');
  while (selectList.firstChild) {
    selectList.firstChild.remove();
  }
  doArray(new Date(), field.innerHTML)
  doSelect();
})

cancelField.addEventListener('click', function () {
  document.querySelectorAll('.btn-grupe .check').forEach(element => element.toggleAttribute('disabled'));
  field.toggleAttribute('contenteditable');
  field.innerHTML = textField[textField.length-1].text;
})
