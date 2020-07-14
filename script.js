let todos = [];

function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };
    todos.push(todo);
    console.log(todo);
    showTodo(todo);
}

const form = document.querySelector('.form');

form.addEventListener('submit',e => {
    e.preventDefault();
    const input = document.querySelector('.todo-input');
    const text = input.value.trim();
    if(text !== ''){
        addTodo(text);
        input.value = '';
        input.focus();
    }
});

function showTodo(todo) {
    const list = document.querySelector('.todo-list');
    const isChecked = todo.checked ? 'done':'';
    const node = document.createElement("li");
    node.setAttribute('class',`todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
        <input id="${todo.id}" type="checkbox" />
        <label for="${todo.id}" class="tick"></label>
        <spn>${todo.text}</span>
        <button class="delete-todo"></button>
    `;
    list.append(node);
}