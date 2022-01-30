'use strict';

const afterListText = document.getElementById('afterList');
const button = document.querySelector('.button');
const taskList = document.querySelector('#taskListArea');
const removeButton = document.querySelector('#removeItem');

// displayGuide gives instructions and cheers the user up //
function displayGuide() {
	if (taskList.childNodes.length == 0) {
		afterListText.textContent = 'You have no tasks to do! Well done!';
	} else {
		afterListText.textContent = `Click the task you want to delete, press 'Delete' and give yourself a high five!`;
	}
}
displayGuide();

// ADD-button's event listener:
button.addEventListener('click', () => {
	let item = document.createElement('li');
	item.setAttribute('class', 'not_clicked');
	item.addEventListener('click', (e) => {
		e.target.classList.toggle('clicked');
	});
	let input = document.querySelector('#addInput').value;
	item.textContent = input;
	taskList.appendChild(item);
	document.querySelector('#addInput').value = '';
	displayGuide();
});

// DELETE-button's event listener.//
removeButton.addEventListener('click', () => {
	let items = taskList.childNodes;
	for (let i = items.length - 1; i >= 0; i--) {
		if (items[i].classList.contains('clicked')) {
			items[i].remove();
		}
	}
	displayGuide();
});

// greeting gives the user a different cheer up -message depending on the time of the day. //
const time = new Date().getHours();
let greeting;
if (time < 11) {
	greeting = 'Good morning, have an excellent day!';
} else if (time < 17) {
	greeting = 'You are doing great, keep up the good work!';
} else {
	greeting = `You are doing so well, be proud of yourself!`;
}
document.getElementById('hello').textContent = greeting;
