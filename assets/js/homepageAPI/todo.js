const ul = document.getElementById('toDo-ul');
const add = document.getElementById('toDo-add');
const deleteButton = document.getElementById('delete-toDo');
let itemsArray = localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')) : [];

localStorage.setItem('taskList', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('taskList'));

const liMaker = text => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  li.textContent = text;
  deleteButton.classList.add('ml-2', 'mb-2', 'bg-danger', 'text-white');
  deleteButton.setAttribute('id', 'delete-toDo');
  span.appendChild(deleteButton);
  li.appendChild(span);
  ul.appendChild(li);
  deleteButton.addEventListener('click', function(event) {
    const text = event.target.parentElement.parentNode.childNodes[0].textContent;
    const index = itemsArray.findIndex(x => x === text);
    itemsArray.splice(index, 1);
    localStorage.setItem('taskList', JSON.stringify(itemsArray));

  });
};

$('#toDo-add').on('click', function(event) {
  let toDo = $('#toDo').val();
  itemsArray.push(toDo);
  localStorage.setItem('taskList', JSON.stringify(itemsArray));
  liMaker(toDo);
  $('#toDo').val('');
});

data.forEach(item => {
  liMaker(item);
})
