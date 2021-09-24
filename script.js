var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var del = document.getElementsByClassName("del");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var button = document.createElement("button");
	button.innerHTML = "x";
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
	li.onclick = doneTask;
	button.onclick = removeItem;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task) {
	task.target.classList.toggle("done");
}

function removeItem(task) {
	task.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

/*edit remove from current list*/
for (let i = 0; i < li.length; i++) {
	li[i].onclick = doneTask;
}

for(let i = 0; i < del.length; i++) {
	del[i].onclick = removeItem;
}



