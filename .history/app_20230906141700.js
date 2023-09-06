// gets localstorage for todos else create a new array
let todolist = JSON.parse(localStorage.getItem('todos')) || [];
let count = 0;

let todaysDate = new Date().toISOString().slice(0, 10);

let toDoTitle = document.getElementById('userInput');
let DueDate = document.getElementById('datePickerId');

// set minimum attribute for datePickerId as today
DueDate.min = todaysDate;

// when page is loading, run retrieveTasks function
retrieveTasks();

function newTask() {
  // get the data provided by the user from the input field
  let userInput = document.getElementById('userInput').value;
  let dueInput = document.getElementById('datePickerId').value;

  if (IsEmpty(userInput) && dueInput >= todaysDate) {
    // not empty
    let fullDate = new Intl.DateTimeFormat(
      'en-GB',
      { dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(dueInput);

    const todo = { id: Date.now(), task: userInput, due: fullDate };

    // push the new task to the todolist JSON
    todolist.push(todo);

    localStorage.setItem('todos', JSON.stringify(todolist));

    console.log(JSON.stringify(todolist, null, 2));

    // call to function that creates a new 'li' element
    output(todo);

    // increment count and save into localStorage
    count++;
    localStorage.setItem('count-todos', count);
  } else {
    // indeed empty
    alert('There seems to be something wrong with your data...');
  }
}

function output(todo) {
  // define tag that creates a new element under the tag 'li'
  let tag = document.createElement('li');
  // adding class 'task_item', id as the next number, and onclick on the corresponding function to that tag.
  tag.classList.add('task_item');
  tag.setAttribute('id', todo.id);
  /*
    stands rather the same as tag.onclick = function () {}
  */
  tag.onclick = () => completeTask(todo.id);
  // assign the userInput let with content
  let content = document.createTextNode(todo.task);
  tag.appendChild(content); // make tag the content's parent

  let due = document.createElement('div');
  due.innerHTML = todo.due;
  tag.appendChild(due);

  // define the element tag with the to-dos list ul
  let element = document.getElementById('to-dos');

  // make element the tag's parent
  element.appendChild(tag);
}

function completeTask(task_id) {
  //remove it from front-end
  let completedTask = document.getElementById(task_id);
  completedTask.remove();

  // as the name suggest, it filters out the filter where it takes out the completed task id
  todolist = todolist.filter((todo) => todo.id !== task_id);

  // in order to save data in localStorage, the object 'todolist' must be converted to string
  localStorage.setItem('todos', JSON.stringify(todolist));

  count--;
  localStorage.setItem('count-todos', count);

  //console.log(result);
}

function retrieveTasks() {
  //todolist.forEach((element) => console.log(element));

  todolist.forEach((element) => output(element));
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
