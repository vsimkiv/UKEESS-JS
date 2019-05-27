let list = document.getElementById("list");
let input = document.add_form.input;
    
function addName(e){
    let liElement = document.createElement("li");
    liElement.textContent = input.value;

    var deleteButton = document.createElement("input");
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('value', 'X');
    
    list.appendChild(liElement).appendChild(deleteButton);
}

var addButton = document.add_form.add;
addButton.addEventListener("click", addName);



