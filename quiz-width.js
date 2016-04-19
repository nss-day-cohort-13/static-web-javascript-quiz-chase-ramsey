
var treeSpecs = {
	width: 0,
	char: ""
}

function tree(clickEvent) {
	clickEvent.preventDefault();
	treeSpecs.width = document.getElementById('number').value;
	treeSpecs.char = document.getElementById('char').value;
	var leaves = [treeSpecs.char];
	if (treeSpecs.width === "" || treeSpecs.char === "") {
		alert('Please enter a value for the height.');
		return;
	}
	for (var i = 0; i < treeSpecs.width; i++) {
		leaves.unshift(" ");
	}
	console.log(leaves.join(""));
	var count = (leaves.length - 1 - 1);
	for (var i = 0; i < count; i++) {
		leaves.push(treeSpecs.char, treeSpecs.char);
		leaves.shift();
		console.log(leaves.join(""));
	}
}

var button = document.getElementById('run');
button.addEventListener("click", tree);


