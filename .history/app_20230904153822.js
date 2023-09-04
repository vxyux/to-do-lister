function newTask() {
  // get the data provided by the user from the input field
  var userInput = document.getElementById('userInput');

  // if provided input is empty
  if (userInput === '' || localStorage.getItem('new-task') == null) {
    alert('You must type something in before submitting!');
  } else {
    // define tag that creates a new element under the tag 'li'
    var tag = document.createElement('li');

    // assign the userInput var with content
    var content = document.createTextNode(userInput.value);
    tag.appendChild(content); // make tag the content's parent

    // define the element tag with the to-dos list ul
    var element = document.getElementById('to-dos');

    // make element the tag's parent
    element.appendChild(tag);

    localStorage.setItem('new-task', userInput.value);

    //document.getElementById('form').reset();
  }

  //console.log('The button has been clicked!');
  //alert(userInput);
}
