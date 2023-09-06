// gets localstorage for todos else create a new array
let todolist = JSON.parse(localStorage.getItem('todos')) || [];

function newTask() {
  let nextTaskId = countTasks();

  // get the data provided by the user from the input field
  let userInput = document.getElementById('userInput').value;

  if (IsEmpty(userInput)) {
    // not empty

    // push the new task to the todolist JSON
    todolist.push({ id: nextTaskId, task: userInput });

    localStorage.setItem('todos', JSON.stringify(todolist, null, 2));

    //console.log(JSON.stringify(todolist, null, 2));

    // call to function that creates a new 'li' element
    output(userInput, nextTaskId);

    //output(userInput);
  } else {
    // indeed empty
    alert('You must type something in before submitting!');
  }
}

function output(input, id) {
  // define tag that creates a new element under the tag 'li'
  let tag = document.createElement('li');
  // adding class 'task_item', id as the next number, and onclick on the corresponding function to that tag.
  tag.classList.add('task_item');
  tag.setAttribute('id', id);
  tag.setAttribute('onclick', 'completeTask(this.id)');

  // assign the userInput let with content
  let content = document.createTextNode(input);
  tag.appendChild(content); // make tag the content's parent

  // define the element tag with the to-dos list ul
  let element = document.getElementById('to-dos');

  // make element the tag's parent
  element.appendChild(tag);
}

function completeTask(task_id) {
  //remove it from front-end
  let completedTask = document.getElementById(task_id);
  completedTask.remove();

  todolist = todolist.filter((todo) => todo.id !== task_id);

  localStorage.setItem()

  //console.log(result);
}

// sees how many tasks are added in the 'ul' tag, then adds 1 accordingly.
function countTasks() {
  let counter = document.getElementById('to-dos');
  let numberOfChildren = counter.getElementsByTagName('*').length;

  return numberOfChildren + 1;
}

function resetApp() {
  localStorage.clear();
  location.reload();
}

function IsEmpty(input) {
  if (input === '') {
    return false;
  }
  return true;
}
