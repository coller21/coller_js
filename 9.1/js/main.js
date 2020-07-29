
let inputFocus = document.querySelector('#input');
inputFocus.focus();


let submitEvent = document.querySelector('#form');
submitEvent.addEventListener('submit', function (ev) {
  ev.preventDefault();
  let textInput = document.querySelector('#input').value;
  if (textInput != '') {
    let newLi = document.createElement('li');
    newLi.classList.add('inserted-list-item');
    newLi.innerHTML = textInput;

    let inputPlace = document.querySelector('#input_field');
    let parrentPr = inputPlace.parentNode;
    parrentPr.insertBefore(newLi, inputPlace);
    document.querySelector('#input').value = '';
    inputFocus.focus();
  } else {
    alert('Вы не ввели задачу!');
  }
});

document
  .querySelector('.task-list')
  .addEventListener('click', function (ev) {
    if (!ev.target.classList.contains('inserted-list-item')) return;
    ev.target.classList.toggle('line-text');
    inputFocus.focus();
  });

document
  .querySelector('.task-list')
  .addEventListener('dblclick', function (ev) {
    if (!ev.target.classList.contains('inserted-list-item')) return;
    let textItem = ev.target.textContent;
    let newInput = document.createElement('input');
    newInput.classList.add('form-control');
    newInput.classList.add('edit-field');
    newInput.setAttribute('value', textItem);
    newInput.setAttribute('type', 'text');
    ev.target.innerHTML = '';
    ev.target.append(newInput);
    newInput.focus();
    document.querySelector('.edit-field').addEventListener('change', function (ev) {
      let parrentPr1 = ev.target.parentNode;
      parrentPr1.innerHTML = ev.target.value;
      if (ev.target.value == '') parrentPr1.remove();
      inputFocus.focus();
    });
  });

