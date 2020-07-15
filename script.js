const addButton = document.querySelector(".addTodo");
let input = document.querySelector(".todoInput");
const itemContainer = document.querySelector(".container");


class todo{
    constructor(itemName){
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('todoItem','px-3');
        input.type = "text";

        let itemBox = document.createElement("div");
        itemBox.classList.add("item")

        let completeButton = document.createElement("button");
        completeButton.innerHTML = "<img src='/check.svg'>";
        completeButton.classList.add("completeTodo");
        
        

        let editButton = document.createElement("button");
        editButton.innerHTML = "<img src='/edit-3.svg'>";
        editButton.classList.add("editTodo");

       let deleteButton = document.createElement("button");
       deleteButton.innerHTML = "<img src='/trash-2.svg'>";
       deleteButton.classList.add("deleteTodo");

       itemContainer.appendChild(itemBox);

       itemBox.appendChild(completeButton);
       itemBox.appendChild(input);
       itemBox.appendChild(editButton);
       itemBox.appendChild(deleteButton);
       
       completeButton.addEventListener('click',() => this.complete(input));
       editButton.addEventListener('click',() => this.edit(input));
       deleteButton.addEventListener('click',() => this.delete(itemBox));
    }

    complete(input){
        if(this.input = true){
            input.classList.add("done");
        } else {
           input.classList.remove("done");
        }
        
    }

    edit(input){
        input.disabled = !input.disabled
    }
    delete(item){
        itemContainer.removeChild(item);
    }
}

function check(){
    if(input != ""){
        new todo(input.value.trim());
        input.value = "";
    }
}

addButton.addEventListener('click', check);
