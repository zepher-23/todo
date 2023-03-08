const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

const countElement = document.getElementById("count");

countElement.textContent = 0;
let listCount = taskList.childElementCount;
const done = document.getElementById("done");
const pending = document.getElementById("pending")
done.textContent = 0;
pending.textContent = listCount - done.textContent;



// Add event listener to the add task button
addTaskButton.addEventListener("click", function() {
  const newTaskText = newTaskInput.value;
  
  
  // Check if input is not empty
  if (newTaskText.trim() !== "") {
    const newTaskItem = document.createElement("li");
    const newTaskCheckbox = document.createElement("input");
    newTaskCheckbox.type = "checkbox";
    newTaskItem.appendChild(newTaskCheckbox);
    var div = document.createElement('p');
    div.innerHTML = newTaskText;
    newTaskItem.appendChild(div);
    
    const newTaskRemoveButton = document.createElement("button");
    newTaskRemoveButton.textContent = "Remove";
    newTaskRemoveButton.addEventListener("click", function() {
      taskList.removeChild(newTaskItem);
      
    listCount = taskList.childElementCount;
    countElement.textContent = listCount;

    updateCount();
    });
    newTaskItem.appendChild(newTaskRemoveButton);
    taskList.appendChild(newTaskItem);
    updateCount();
    newTaskInput.value = "";
  }
   listCount = taskList.childElementCount;
    countElement.textContent = listCount;
    updateCount();
});

// Add event listener to the task list to handle clicks on tasks
taskList.addEventListener("click", function(event) {
  if (event.target.tagName === "INPUT") {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle("completed");
    updateCount();
  }
});

function updateCount () {
  done.textContent = 0;
  for (let i = 0; i < taskList.children.length; i++) {
    const childElement = taskList.children[i];
    const checkbox = childElement.querySelector('input[type="checkbox"]');
    listCount = taskList.childElementCount;
    if (checkbox && checkbox.checked) {
      done.textContent++;
      
     
    }

  }
  listCount = taskList.childElementCount;
  pending.textContent = listCount - done.textContent;
}