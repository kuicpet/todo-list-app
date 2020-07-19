const addButton = document.querySelector(".addTodo");
let input = document.querySelector(".todoInput");
const container = document.querySelector(".container");
const itemContainer = document.querySelector(".item-container");
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
        completeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check" id="check"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        completeButton.classList.add("completeTodo");
        
        
        

        let editButton = document.createElement("button");
        editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4111aa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3" id="edit"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>';
        editButton.classList.add("editTodo");

       let deleteButton = document.createElement("button");
       deleteButton.innerHTML ='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2" id="delete"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
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


