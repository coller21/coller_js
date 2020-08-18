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
  while (selectList.firstChild) {
    selectList.firstChild.remove();
  }
  for (elem in arrayToLocal) {
    let newOption = new Option(new Date(arrayToLocal[elem].date).toLocaleDateString() + ' | ' +
    new Date(arrayToLocal[elem].date).toLocaleTimeString() + ' - ' + arrayToLocal[elem].text, arrayToLocal[elem].text);
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
  doArray(new Date(), field.innerHTML)
  doSelect();
})

cancelField.addEventListener('click', function () {
  document.querySelectorAll('.btn-grupe .check').forEach(element => element.toggleAttribute('disabled'));
  field.toggleAttribute('contenteditable');
  let lastArray = JSON.parse(localStorage.getItem('text'));
  field.innerHTML = lastArray[lastArray.length-1].text;
})
