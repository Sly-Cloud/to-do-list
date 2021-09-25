import './style.css';
import checkboxesEvent from './status-update';
import {
  displayTasks, edit, clear, add,
} from './add-remove';

displayTasks();
checkboxesEvent();
edit();
clear();
add();