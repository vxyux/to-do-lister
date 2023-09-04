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

    let taskName = 'task-' + nextTaskId;
    let newLocal = localStorage.setItem(taskName, userInput.value);

    var x = localStorage.getItem('task-2');

    console.log(taskName);

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

function controlTasks() {
  var element = document.getElementById('to-dos');
  var numberOfChildren = element.getElementsByTagName('*').length;

  return numberOfChildren + 1;
}
