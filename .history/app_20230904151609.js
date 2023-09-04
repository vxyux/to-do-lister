function newTask() {
  // get the data provided by the user from the input field
  var userInput = document.getElementById('userInput').value;

  // if provided input is empty
  if (userInput === '') {
    alert('You must type something in before submitting!');
  } else {
    var tag = document.createElement("li");
    var content = document.createTextNode(userInput);
    tag.appendChild(content);
    var element = document.getElementById("task");
    element.appendChild

  }

  //console.log('The button has been clicked!');
  //alert(userInput);
}
