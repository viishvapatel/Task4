const taskManager = new TaskManager();
let validFormFieldInput = (data) =>
{
    //grabbing the name from the form
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const name = newTaskNameInput.value;
    console.log("name:  " + name);

    //grabbing the description from the form
    const newTaskDescriptionInput = document.querySelector('#newTaskDescriptionInput');
    const description = newTaskDescriptionInput.value;
    console.log("description:  " + description);

    //grabbing the AssignedTo from the form
    const newTaskAssignedToInput = document.querySelector
    ("#newTaskAssignedToInput");
    const assignedTo = newTaskAssignedToInput.value;
    console.log("assignedTo:  " + assignedTo);

    //grabbing the Due Date from the form
    const newTaskDueDateInput = document.querySelector("#newTaskDueDateInput");
    const dueDate = newTaskDueDateInput.value;
    console.log("dueDate:  " + dueDate);
    taskManager.addTask(name, description, assignedTo, dueDate);
    taskManager.render();
    taskManager.save();
    taskManager.render();
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

tasksList.addEventListener("click", (event) => {
    if(event.target.classList.contains
        ('done-button'))
        {
        let parentTask = event.target.parentNode;
        let taskId = parseInt(parentTask.getAttribute("data-task-id"));
        console.log(taskManager.task);
        let task = taskManager.getTaskById(taskId);
        task.status = 'Done';
        if (task.status === "Done") {
          event.target.classList.remove("visible");
          event.target.classList.add("invisible");
        }
        console.log(parentTask)
        console.log('clicked button')
        taskManager.save();
        // do something 
    }
    if (event.target.classList.contains("delete-button")) {
      let parentTask = event.target.parentNode;
      let taskId = parseInt(parentTask.getAttribute("data-task-id"));
      console.log(taskManager.task);
      taskManager.deleteTask(taskId);
    //   task.status = "Delete";
    //   task.status = "Done";
    //   if (task.status === "Done") {
    //     event.target.classList.remove("visible");
    //     event.target.classList.add("invisible");
    //   }
      console.log(parentTask);
      console.log("clicked button");
      taskManager.save();
      // do something
    }
    taskManager.deleteTask();
    taskManager.render();
    taskManager.load();
  // "event" here is the event parameter
});
// const taskHtml = createTaskHtml("Groceries", "description", "Vishva", "09/27/2021")