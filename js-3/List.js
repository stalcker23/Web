(function() {
	var text = document.getElementById('Text'),
		color = document.getElementById('Color'),
		type = document.getElementById('Type'),
		createButton = document.getElementById('CreateButton'),
		changeButton = document.getElementById('ChangeButton'),
		deleteButton = document.getElementById('DeleteButton'),
		myList = document.getElementById('MyList'),
		currentElement,
		nodesList = [],
		nodeListLength;
		
	createButton.onclick = function() {
		var newLi = document.createElement('li'),
			nodesListLength;
		newLi.innerHTML = text.value;
		newLi.style.color = color.value;
		newLi.style.listStyle = type.value;
		newLi.onclick = function() {
			nodeListLength = nodesList.length;
			for (var i = 0; i < nodeListLength; i++) {
				nodesList[i].style.border = '0 solid blue';
			}
			
			this.style.border = '1px solid blue';
			text.value = this.innerHTML;
			type.value = this.style.listStyle;
			color.value = this.style.color;
			currentElement = this;
		};
		
		nodesList.push(newLi);
		myList.appendChild(newLi);
	};
		
		
	deleteButton.onclick = function() {
		myList.removeChild(currentElement);
	};
		
	changeButton.onclick = function() {
			currentElement.innerHTML = text.value;
			currentElement.style.color = color.value;
			currentElement.style.listStyle = type.value;
		};
})();