let validFormFieldInput = (data) =>
{
    //grabbing the name from the form
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const name = newTaskNameInput.value;
    console.log("name:  " + name);

    //grabbing the description from the form
    const newTaskDescriptionInput = document.querySelector('#newTaskDescriptionInput');
    const description = newTaskDescriptionInput.value;
    console.log("name:  " + description);

    //grabbing the AssignedTo from the form
    const newTaskAssignedToInput = document.querySelector
    ("#newTaskAssignedToInput");
    const assignedTo = newTaskAssignedToInput.value;
    console.log("name:  " + assignedTo);

    //grabbing the Due Date from the form
    const newTaskDueDateInput = document.querySelector("#newTaskAssignedToInput");
    const dueDate = newTaskDueDateInput.value;
    console.log("name:  " + dueDate);
}
validFormFieldInput();
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
const taskHtml = createTaskHtml("Groceries", "description", "Vishva", "09/27/2021")

console.log(taskHtml);