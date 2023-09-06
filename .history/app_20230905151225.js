function newTask() {
  // get the data provided by the user from the input field
  var userInput = document.getElementById('userInput');
  let nextTaskId = controlTasks();

  if (IsEmpty(userInput)) {
    // not empty
  } else {
    // indeed empty
    alert('You must type something in before submitting!');
  }

  // if provided input is empty
  if (userInput === null || userInput === ' ') {
    alert('You must type something in before submitting!');
  } else {
    

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
    tasks.push(localStorage.getItem('task-' + i));

    console.log(tasks);
  }
  var element = document.getElementById('to-dos');
  var numberOfChildren = element.getElementsByTagName('*').length;

  return numberOfChildren + 1;
}

function resetApp() {
  localStorage.clear();
  location.reload();
}

function IsEmpty(input) {
  if (input.value === '') {
    return false;
  }
  return true;
}
