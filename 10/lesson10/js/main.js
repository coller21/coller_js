const field = document.querySelector('.text');
const editField = document.querySelector('.edit');
const saveField = document.querySelector('.save');
const cancelField = document.querySelector('.cancel');

const textField = localStorage.getItem('text');

if(!textField) {
  field.innerHTML = 'Нажмите кнопку "редактировать".';
} else {
  field.innerHTML = textField;
}

editField.addEventListener('click', function(){
  field.toggleAttribute('contenteditable');
  document.querySelectorAll('.btn-grupe .check').forEach(element => element.toggleAttribute('disabled'));
})

saveField.addEventListener('click', function(){
  document.querySelectorAll('.btn-grupe .check').forEach(element => element.toggleAttribute('disabled'));
  field.toggleAttribute('contenteditable');
  localStorage.setItem('text', field.innerHTML);
})

cancelField.addEventListener('click', function(){
  document.querySelectorAll('.btn-grupe .check').forEach(element => element.toggleAttribute('disabled'));
  field.toggleAttribute('contenteditable');
  field.innerHTML = localStorage.getItem('text');
})
