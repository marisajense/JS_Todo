// Intro Examples

// ALERT('');
// Show an alert box on the screen
// stops execution on JS Code
// alert('JS Working!');

// CONSOLE.LOG('');
//Outputs text in your browser console
// Mac: option + cmd + j to open JS Console
// debugging purposes only - never put important info!!!
// console.log('My name is Marisa Jense');

// CONFIRM('');
// if else statement
// Shows a dialog box in the browser
// it has a 'cancel' and 'okay' option
// returns a boolean (t/f) value

// var learning = confirm('Are we learning JS?');
// if(learning) {
// console.log("We are learning JS");
// } else {
//   console.log("Why not? JS is the FUTURE!");
// }


// PROMPT('');
// shows a JS dialog that grabs info from the user
// it returns the info as a string
// var name = prompt('What is your name?');
// alert('Welcome to the TODO List ' + name + "!");
//
// var userAge = prompt("What is your age?");
//
// // Getting the last of a string
// var short = 'short'
// short.charAt(short.length -1)

//------------------------------LOOPS------------------------
// JS LOOPS
// var numbers = [1,2,3,4,5,6,7,8,9,10];
//-----------------
// RUBY
// numbers.each do |number|
// puts number + 10
//end
//------------------
// JS -FOR LOOP WAY (i for index in Jake's example)
// for(var index = 0; index < numbers.length; index++) {
//   var number = numbers[index];
//   console.log(number);
//   // or console.log(numbers[index]);
// }
// JS FOR EACH LOOP
// numbers.forEach(function(number) {
//   console.log(number);
// });
//--------------------------FUNCTIONS-------------------------
// FUNCTIONS (METHODS IN RUBY)
// RUBY METHOD
// def some_numbers(num_1, num_2) do
//  num_1 + num_2
// end

// JS - Sum 2 numbers FUNCTION
// NOTE - Every FUNCTION needs a return keyword!
// function sumNumbers(num1, num2) {
//   return num1 + num2
// }
// console.log(sumNumbers(6,4));
// FUNCTION that has no arguments:
// function helloWorld() {
//   return "Hello World!";
// }
// console.log(helloWorld());


// RUBY method that has default params
// def defaults(name, age = 27)
// end

// JS FUNCTION with defaults (ES5 version - must write out if's)
// function nameAndAge(name, age) {
//   if(name === undefined) {
//     name = 'Default Name';
//   }
//   if(age === undefined) {
//     age = 30;
//   }
//   console.log(name);
//   console.log(age);
// }
// // nameAndAge('Marisa', 30);
// nameAndAge('Marisa');
// nameAndAge('Ryan', 34);
// nameAndAge('Jake', 27);
// nameAndAge();
