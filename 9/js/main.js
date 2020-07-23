
let inputFocus = document.querySelector('#input');
inputFocus.focus();

let btnEventClick = document.querySelector('.btn');

btnEventClick.addEventListener('click', function () {
  let textInput = document.querySelector('#input').value;

  let newLi = document.createElement('li');
  newLi.innerHTML = textInput;

  let inputPlace = document.querySelector('#input_field');
  let parrentPr = inputPlace.parentNode;
  parrentPr.insertBefore(newLi, inputPlace);
  document.querySelector('#input').value = '';
  inputFocus.focus();
});

let keyDown = document.querySelector('input');
keyDown.addEventListener('keydown', function (ev) {
  if (ev.keyCode == 13) {
    ev.preventDefault();
    let textInput = document.querySelector('#input').value;

    let newLi = document.createElement('li');
    newLi.innerHTML = textInput;

    let inputPlace = document.querySelector('#input_field');
    let parrentPr = inputPlace.parentNode;
    parrentPr.insertBefore(newLi, inputPlace);
    document.querySelector('#input').value = '';
    inputFocus.focus();
  }
});
