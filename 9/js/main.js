
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
    ev.target.innerHTML = `<input onchange="save()" class="form-control edit-field" type="text" value="${textItem}">`;
  });


// function save() {
//   let changeField = document.querySelector('.form-control .edit-field').value;
//   console.log(changeField);

// }
  // document
  // .querySelector('form-control edit-field')
  // .addEventListener('change', function (ev){
  //   alert(ev.target.querySelector('.form-control edit-field').value);
  // });
