// Get a single element by ID
var addItemButton = document.getElementById('add-item-btn');

// Get multiple elements by the class
var calcButtons = document.getElementsByClassName('calc-button');
// console.log(calcButtons);
// CALCULATOR HINT!!!
for(var i = 0; i < calcButtons.length; i++) {
  var calcButton = calcButtons[i];
  calcButton.addEventListener('click', function() {
    //this is same as self.
    //This is a STRING!
    // CHANGE TO INTEGER - parseInt(this.innerText);
    // CHANGE TO FLOAT - parseFloat(this.innerText);
    console.log(this.innerText);
  });
}

function getName() {
var name = prompt("Welcome, what is your name?");
  if(name === null || name === '') {
    alert('You need to give a valid name!');
    getName();
  } else {
    // grab the header off of the page
    var header = document.getElementById("main-header");
    // console.log(header.innerText);
    // header.innerText = 'Hello'; ---------Changes the h1 to 'Hello'
    // change the header text to the name that we were given
    header.innerText = 'Todo List For: ' + name;
  }
}

function addItem() {
  console.log('add an item!');
  // find the input off of the page - add ID to input
  var input = document.getElementById('item-input');
  // grab the value of the input
  // console.log(input.value); ---or ----
  var value = input.value;
  // find the <ul> -  add ID to ul as well
  var todoList = document.getElementById('todo-list');
  // add a new <li> inside of the <ul> with the text that user typed in
  var li = document.createElement('LI');
  var text = document.createTextNode(input.value);
  // Adds the text that the user typed in into the LI
  li.appendChild(text);
  // Add the LI element as a child inside of the UL
  //<li>Get Milk</li>
  todoList.appendChild(li);
}

// BEST PRACTICE to handle element events
//http://www.w3schools.com/js/js_events.asp
addItemButton.addEventListener('click', function() {
  addItem();
});

getName();
