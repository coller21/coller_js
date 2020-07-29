
const inputFocus = document.querySelector('#input');
const listOl = document.querySelector('.task-list');

let submitEvent = document.querySelector('#form');

submitEvent.addEventListener('submit', function (ev) {
  ev.preventDefault();
  let textInput = inputFocus.value.trim();
  if (textInput != '') {
    let newLi = document.createElement('li');
    newLi.classList.add('inserted-list-item');
    newLi.setAttribute('tabindex', 2);
    newLi.textContent = textInput;
    listOl.append(newLi);
    inputFocus.value = '';
    inputFocus.classList.remove('border-danger');
    newLi.addEventListener('keydown', function (ev) {
      if (ev.keyCode == 13 || ev.keyCode == 32) {
        if (!ev.target.classList.contains('inserted-list-item')) return;
        ev.target.classList.toggle('line-text');
      }
    })
  } else {
    alert('Вы не ввели задачу!');
    inputFocus.classList.add('border-danger');
    inputFocus.focus();
  }
});

listOl.addEventListener('click', function (ev) {
  if (!ev.target.classList.contains('inserted-list-item')) return;
  ev.target.classList.toggle('line-text');
});



