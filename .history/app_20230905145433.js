function newTask() {
  // get the data provided by the user from the input field
  var userInput = document.getElementById('userInput');
  let nextTaskId = controlTasks();

  // if provided input is empty
  if (userInput === ' ') {
    alert('You must type something in before submitting!');
  } else {
    // define tag that creates a new element under the tag 'li'
    var tag = document.createElement('li');
    // adding class 'task_item', id as the next number, and onclick on the corresponding function to that tag.
    tag.classList.add('task_item');
    tag.setAttribute('id', nextTaskId);
    tag.setAttribute('onclick', 'completeTask(this.id)');

    // assign the userInput var with content
    var content = document.createTextNode(userInput.value);
    tag.appendChild(content); // make tag the content's parent

    // define the element tag with the to-dos list ul
    var element = document.getElementById('to-dos');

    // make element the tag's parent
    element.appendChild(tag);

    // create dynamic ids for the tasks that the user would create
    let taskName = 'task-' + nextTaskId;

    // insert into the localstorage
    let newLocal = window.localStorage.setItem(
      taskName,
      userInput.value
    );

    let x = localStorage.getItem(taskName);

    console.log(x);

    //document.getElementById('form').reset();
  }

  //console.log('The button has been clicked!');
  //alert(userInput);
}

function completeTask(task_id) {
  //alert(task_id);
  var completedTask = document.getElementById(task_id);
  completedTask.remove();
}

// sees how many tasks are added in the 'ul' tag, then adds 1 accordingly.
function controlTasks() {
  for (let i = 1; i < localStorage.length; i++) {
    const tasks = [];
    tasks localStorage.getItem('task-' + i);
  }
  var element = document.getElementById('to-dos');
  var numberOfChildren = element.getElementsByTagName('*').length;

  return numberOfChildren + 1;
}
