const addBtn=document.querySelector("#todo-button");
const newTaskInput=document.querySelector("#addtask input");
const taskContainer=document.querySelector("#todo-contain");
const addTask=()=>{
    const taskName=newTaskInput.value;
    if(!taskName)
    {
        window.alert("Please enter a task");
        return;
    }


    const task=`<div class="task">
    <div class="content">
    <input type="checkbox" class="task-check">
    <span class="taskname">${taskName}</span>
    </div>
    <div class="actions">
    <button class="edit"><ion-icon name="create"></ion-icon></button>
    <button class="delete"><ion-icon name="trash"></ion-icon></button>
    </div>
    </div>`;
    taskContainer.insertAdjacentHTML("beforeend",task);
    newTaskInput.value="";
    const deleteButtons=document.querySelectorAll(".delete");
    deleteButtons.forEach(button=>{
        button.onclick=()=>
        button.parentNode.parentNode.remove();
    });
    const taskcheck=document.querySelectorAll(".task-check");
    taskcheck.forEach((checkbox)=>{
        checkbox.onchange=()=>{
            checkbox.nextElementSibling.classList.toggle("completed");

        }
    });
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((button) => {
      button.onclick = () => {
        const taskText = button.parentNode.previousElementSibling.querySelector(".taskname");
        const newTaskText = prompt("Edit task:", taskText.innerText);
        if (newTaskText !== null) {
          taskText.innerText = newTaskText;
        }
      };
    });
};
const editButton=document.querySelectorAll(".edit");


addBtn.addEventListener("click",addTask);