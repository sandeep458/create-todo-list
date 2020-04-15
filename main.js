const toggleBtn = document.querySelector('#toggleBtn');
const divList = document.querySelector('.listHolder');
toggleBtn.addEventListener('click', () => {
  if (divList.style.display === 'none') {
    divList.style.display = 'block';
    toggleBtn.innerHTML = 'Hide List';
  } else {
    divList.style.display = 'none';
    toggleBtn.innerHTML = 'Show List';
  }
});
const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');
function addLists() {
  if (addInput.value === '') {
    alert('Enter the list name please!!!');
  } else {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = '';
    ul.appendChild(li);
    createBtn(li);
  }
}


addBtn.addEventListener('click', () => {
  addLists();
});

addInput.addEventListener('keyup', (event) => {
  if(event.which === 13) {
    addLists();
  }
});
const listUl = document.querySelector('.list');
const lis = listUl.children;

function createBtn(li) {
 const remove = document.createElement('button');
  remove.className = 'btn2 remove';
  li.appendChild(remove);

 const down = document.createElement('button');
  down.className = 'btn2 down';
  li.appendChild(down);


  const up = document.createElement('button');
  up.className = 'btn2 up';
  li.appendChild(up);

  return li;
}


for (var i = 0; i < lis.length; i++) {
  createBtn(lis[i]);
}


divList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.className === 'btn2 remove') {
      ul.removeChild(li);
    } else if (button.className === 'btn2 down') {
      const nextLi = li.nextElementSibling;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    } else if (button.className === 'btn2 up') {
      const prevLi = li.previousElementSibling;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
  }
});