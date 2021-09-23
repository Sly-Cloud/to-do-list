import './style.css';

const todoList = document.getElementById('todo-list');

const list = [
  {
    description: 'Start project',
    completed: true,
    index: 0,
  },
  {
    description: 'Install Webpack',
    completed: true,
    index: 1,
  },
  {
    description: 'Add list structure',
    completed: false,
    index: 2,
  },
];

const createTask = (task) => {
  let todoObj = '';
  if (task.completed === true) {
    todoObj = `
        <article id="${task.index}" class="task-item" draggable="true">
          <input type='checkbox' name='completed' class="checkbox" checked>
          <span class='task-description completed' id="desc-${task.index}" contenteditable>${task.description}</span>
          <i class="bi bi-three-dots-vertical"></i>
          <i class="bi bi-trash hide"></i>
        </article>`;
  } else {
    todoObj = `
          <article  id="${task.index}" class="task-item" draggable="true">
            <input type='checkbox' name='completed' class="checkbox">
            <span class='task-description' id="desc-${task.index}" contenteditable>${task.description}</span>
            <i class="bi bi-three-dots-vertical"></i>
            <i class="bi bi-trash hide"></i>
          </article>`;
  }

  todoList.innerHTML += todoObj;
};

const displayTasks = (list) => {
  todoList.innerHTML = '';

  const sortedList = list.sort((a, b) => {
    if (a.index > b.index) {
      return 1;
    }
    if (a.index < b.index) {
      return -1;
    }
    return 0;
  });

  sortedList.forEach((task) => {
    createTask(task);
  });
};

displayTasks(list);
