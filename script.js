const addButton = document.querySelector(".addTodo");
let input = document.querySelector(".todoInput");
const itemContainer = document.querySelector(".container");
const clearBox = document.querySelector(".clear");
const clearButton = document.querySelector(".clearButton");


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
        completeButton.innerHTML = "<img src='/check.svg' title='Todo Complete'>";
        completeButton.classList.add("completeTodo");
        
        
        

        let editButton = document.createElement("button");
        editButton.innerHTML = "<img src='/edit-3.svg' title='Edit Todo'>";
        editButton.classList.add("editTodo");

       let deleteButton = document.createElement("button");
       deleteButton.innerHTML = "<img src='/trash-2.svg' title='Delete Todo'>";
       deleteButton.classList.add("deleteTodo");

       
       itemContainer.appendChild(itemBox);

       itemBox.appendChild(completeButton);
       itemBox.appendChild(input);
       itemBox.appendChild(editButton);
       itemBox.appendChild(deleteButton);
       
      

       completeButton.addEventListener('click',() => this.complete(input));
       editButton.addEventListener('click',() => this.edit(input));
       deleteButton.addEventListener('click',() => this.delete(itemBox));
       clearButton.addEventListener('click',()=> this.delete(itemBox));
    }

    complete(input){
        if(this.input = true){
            input.classList.add("done");
        } else {
           return
        }
        
    }

    edit(input){
        input.disabled = !input.disabled;
    }
    delete(item){
        itemContainer.removeChild(item);
    }
   
}

function check(){
    if(input.value != ""){
        new todo(input.value.trim());
        input.value = "";
        clearBox.classList.remove('clear');
    }
}

addButton.addEventListener('click',(e) => {
    e.preventDefault();
    check();
    
});


