const arr = [
  {
    name: 'dmkwaemd',
    dueDate: '2023-07-20',
  },
]

renderTodoList();

function renderTodoList(){
    let i;
    let todoListHTML = '';
    for( i= 0; i < arr.length; i++){
        const todoObject = arr[i];
        const {name, dueDate} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="arr.splice(${i},1); 
                    renderTodoList();" class="delete-todo-button">
                    Delete Task!
            </button>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-tasks')
        .innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;

    const dueDateElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateElement.value;


    arr.push({
      //name: name,
      //dueDate: dueDate,
      name,
      dueDate,
    })

    inputElement.value = '';
    dueDateElement.value = '';

    renderTodoList();
}