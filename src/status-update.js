import { displayTasks, items } from './add-remove';

export let list = [];

if (localStorage.getItem('list')) {
  list = JSON.parse(localStorage.getItem('list'));
}

export const save = () => {
  localStorage.setItem('list', JSON.stringify(list));
};

export function fixIndex(list) {
  for (let i = 0; i < list.length; i += 1) {
    list[i].index = i;
  }
}

export function setList(filter) {
  list = [];
  for (let i = 0; i < filter.length; i += 1) {
    list[i] = filter[i];
    save();
    displayTasks();
  }
}

export default function checkboxesEvent() {
  const temp = list;

  const checkboxes = document.getElementsByClassName('checkbox');
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', () => {
      if (temp[i].completed === true) {
        temp[i].completed = false;
        document.getElementById(`desc-${temp[i].index}`).classList.remove('completed');
      } else {
        temp[i].completed = true;
        document.getElementById(`desc-${temp[i].index}`).classList.add('completed');
      }
      setList(temp);
    });
  }
}

export function remove() {
  const temp = list;
  for (let i = 0; i < items.length; i += 1) {
    items[i].children[3].addEventListener('click', (event) => {
      if (event.target) {
        temp.splice(i, 1);
        fixIndex(temp);
        setList(temp);
        save();
      }
      checkboxesEvent();
      displayTasks();
      remove();
    });
  }
}