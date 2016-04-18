
var treeSpecs = {
	width: 0,
	char: "*"
}

var leaves = [treeSpecs.char];

function tree(clickEvent) {
	clickEvent.preventDefault();
	treeSpecs.width = document.getElementById('number').value;
	for (var i = 0; i < treeSpecs.width; i++) {
		leaves.unshift(" ");
	}
	var count = (leaves.length - 1);
	console.log(leaves.join(""));
	for (var i = 0; i < count; i++) {
		leaves.push("*", "*");
		leaves.shift();
		console.log(leaves.join(""));
	}
}

var button = document.getElementById('run');
button.addEventListener("click", tree);
