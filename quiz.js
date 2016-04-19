
// Create an object with key/value pairs for height and character; set height to 0 (number) and character to an empty string.

var treeSpecs = {
	height: 0,
	char: ""
}

// Create a variable "button" that references the DOM element with the button to run the program;
// add an event listener to look for the click and run the function named "tree".

var button = document.getElementById('run');
button.addEventListener("click", tree);


// Create the function "tree" with the parameter "clickEvent" (looking for the argument "click"
// from the event listener), and prevent the button click from refreshing the page.

function tree(clickEvent) {
	clickEvent.preventDefault();

// Pull in values for height and character from the HTML form.

	treeSpecs.height = document.getElementById('number').value;
	treeSpecs.char = document.getElementById('char').value;

// Define an array to hold the characters that build the tree; pull in the value treeSpecs.char to begin.

	var leaves = [treeSpecs.char];

// Create a condition that will stop the program from moving forward if one or both of the form fields is empty.

	if (treeSpecs.width === "" || treeSpecs.char === "") {
		alert('Please enter a value in both form fields.');
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




