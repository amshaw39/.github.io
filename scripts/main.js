
let myVariable = document.querySelector('h1');


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Finally, a website for ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Finally, a website for' + " " + storedName;
}

myButton.onclick = function() {
	setUserName(); 
}