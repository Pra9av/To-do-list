const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement('li');
  li.classList.add('task');

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="actions">
      <button class="check">✔</button>
      <button class="delete">🗑</button>
    </div>
  `;

  taskList.appendChild(li);
  input.value = '';

  li.querySelector('.check').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.querySelector('.delete').addEventListener('click', () => {
    li.remove();
  });
}
