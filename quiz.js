
// Create an object with key/value pairs for height and character; set height to 0 (number) and character to an empty string.

var treeSpecs = {
	height: 0,
	char: ""
}

// Create a variable "button" that references the DOM element with the button to run the program.
// Create variables to hold the DOM elements of both text input fields.

var button = document.getElementById('run');
var enterKeyNum = document.getElementById('number');
var enterKeyChar = document.getElementById('char');

// Add event listeners to look for the click or keyup and run the function named tree() or the key verifier keycheck().
// Create a function that checks for the return key and runs tree() if return is pressed.

button.addEventListener("click", tree);
enterKeyNum.addEventListener("keyup", keycheck);
enterKeyChar.addEventListener("keyup", keycheck);

function keycheck(keyPress) {
	if (keyPress.which === 13) {
		tree();
	}
}

// Create the function tree() with the parameter "event".
// Prevent the button click from refreshing the page.

function tree(event) {
	if (event === "click") {
		event.preventDefault();
	}

// Pull in values for height and character from the HTML form.

	treeSpecs.height = document.getElementById('number').value;
	treeSpecs.char = document.getElementById('char').value;

// Define an array to hold the characters that build the tree.
// Pull in the value treeSpecs.char to begin.

	var leaves = [treeSpecs.char];

// Create conditions that will stop the program from moving forward if
	// a. one or both of the form fields is empty
	// b. the height field is NaN

	if (treeSpecs.height === "" || treeSpecs.char === "") {
		alert('Please enter a value in both form fields.');
		return;
	}

	if ( isNaN(treeSpecs.height) === true ) {
		alert('Please enter a number greater than 0 for the height value.');
		return;
	}

// Add spaces to the beginning of the array "leaves" to make room for the tree to grow.

	for (var i = 0; i < treeSpecs.height; i++) {
		leaves.unshift(" ");
	}

// Output "leaves" as the first line of the pine tree.

	console.log(leaves.join(""));

// Define a counter that will cap the tree-building loop; set it to leaves.length, minus 1 for the first line logged above,
// and minus one because leaves.length currently has height (h) + 1 values (h spaces and one character).

	var count = (leaves.length - 1 - 1);

// Build the array by pushing two characters to the end and shifting one space out of the beginning; console.log each iteration.

	for (var i = 0; i < count; i++) {
		leaves.push(treeSpecs.char, treeSpecs.char);
		leaves.shift();
		console.log(leaves.join(""));
	}
}




