function newTask() {
  // get the data provided by the user from the input field
  var userInput = document.getElementById('userInput');

  // if provided input is empty
  if (userInput === '') {
    alert('You must type something in before submitting!');
  } else {

    controlTasks();

    // define tag that creates a new element under the tag 'li'
    var tag = document.createElement('li');
    // add the class 'task_item' to that tag.
    tag.classList.add('task_item');
    tag.setAttribute('id', '2');
    tag.setAttribute('onclick', 'completeTask(this.id)');

    // assign the userInput var with content
    var content = document.createTextNode(userInput.value);
    tag.appendChild(content); // make tag the content's parent

    // define the element tag with the to-dos list ul
    var element = document.getElementById('to-dos');

    // make element the tag's parent
    element.appendChild(tag);

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

  console.log(numberOfChildren);
}
