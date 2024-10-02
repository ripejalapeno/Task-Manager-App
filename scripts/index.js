let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskList = document.querySelector('.js-task-list');

function renderTaskList() {
  let html = '';
  let taskId = 0;

  // Render task list item by item
  tasks.forEach((task) => {
    html += `
      <div class="js-task task">
        <div class="task-title">
          ${task}
        </div>

        <div class="js-finish-button finish-button" data-task-id="${taskId}">
          <span class="material-symbols-outlined">
            check_circle
          </span>
        </div>

        <div class="js-remove-task-button remove-task-button" data-task-id="${taskId}">
          <span class="material-symbols-outlined">
            close
          </span>
        </div>
      </div>
    `;

    taskId++;
  });

  taskList.innerHTML = html;

  const removeTaskButtons = document.querySelectorAll('.js-remove-task-button');
  removeTaskButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const { taskId } = button.dataset;
      tasks.splice(taskId, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTaskList();
    })
  })

  const finishButtons = document.querySelectorAll('.js-finish-button');

  finishButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const { taskId } = button.dataset;

      // Change the task state to finished
    })
  })
  
  

  
}

renderTaskList();

function saveTask(newTask) {
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(taskId) {

}

const newTaskButton = document.querySelector('.js-new-task-button');
const newTaskInput = document.querySelector('.js-new-task-input');

newTaskButton.addEventListener('click', () => {
  newTaskInput.style.opacity ='1';
  newTaskInput.style['z-index'] ='1';
})

const addTaskButton = document.querySelector('.js-add-task-button');

function addTask() {
  const newTaskTitle = document.querySelector('.js-new-task-title');
  if (!newTaskTitle.value) {
    return;
  }

  saveTask(newTaskTitle.value);

  newTaskTitle.value = '';
  newTaskInput.style.opacity ='0';
  newTaskInput.style['z-index'] ='-1';

  renderTaskList();
}

addTaskButton.addEventListener('click', () => {
  addTask();
})

newTaskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
})

