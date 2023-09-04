function newTask() {
  // get the data provided by the user from the input field
  var userInput = document.getElementById('userInput').value;

  // if provided input is empty
  if (userInput === '') {
    alert('You must type something in before submitting!');
  } else {
    // define tag that creates a new element under the tag 'li'
    var tag = document.createElement('li');

    // assign the userInput var with content
    var content = document.createTextNode(userInput);
    tag.appendChild(content); // make tag the content's parent

    // define the element tag 
    var element = document.getElementById('to-dos');
    element.appendChild(tag);
  }

  //console.log('The button has been clicked!');
  //alert(userInput);
}
