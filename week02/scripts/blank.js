const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');//reference the HTML element that is a unordered list element.
const li = document.createElement('li');//create a new list item element.
button.addEventListener('click', function() {
    const favchap = input.value;//get the value of the input field.
    const listItem = document.createElement('li');//create a new list item element.
    listItem.textContent = favchap;//set the text content of the list item to the value of the input field.
    list.appendChild(listItem);//add the new list item to the unordered list.
    input.value = '';//clear the input field after adding the item to the list.
});
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear List';
document.body.appendChild(clearButton);
clearButton.addEventListener('click', function() {
    list.innerHTML = '';//clear the list by setting its innerHTML to an empty string.
});
//Populate li element variable's textContent or innerHTML with the input value.
li.textContent = input.value;
//Append the li element to the ul element.
list.appendChild(li); 
input.value = '';//Clear the input field after adding the item to the list.
//Populate the button textContent with a X.
deleteButton.textContent = 'X';
//Append the deleteButton to the li element.
li.appendChild(deleteButton);
//Append the li element variable to the unordered list in the HTML.
list.appendChild(li);
//Add an event listener to the deleteButton to remove the li element when clicked.
deleteButton.addEventListener('click', function() {
    list.removeChild(li);
});  