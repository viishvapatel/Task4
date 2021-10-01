const tasksList = document.getElementById("tasksList");
let createTaskHtml = (id, name, description, assignedTo, dueDate, status) => {
    // constructor(name, description, assignedTo, dueDate, status){
      let doneButtonVisibility = 'visible';
    if (status === 'Done') {
        doneButtonVisibility = 'invisible';
    };
        return `
    <li class="list-group-item" data-task-id="${id}">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>Take out ${description}</h5>
            <span class="badge badge-danger">TODO</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>AssignedTo: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>Take out the trash to the front of the house</p>
        <button type="button" class="btn    
        done-button
        btn-dark ${doneButtonVisibility}">Mark as Done</button>
        <button type="button" class="btn    
        delete-button
        btn-dark ${doneButtonVisibility}">Delete</button>


    </li>
`;
        

        
}
class TaskManager {
  constructor(currentId = 0) {
    this.task = [];{
      this.currentId = currentId;
    }
  }
    
    addTask(name, description, assignedTo, dueDate, status)
    {
      const task = {
        id: this.currentId++, 
        name: name,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: 'TODO'
      };
      this.task.push(task);
    
      // this.status = "TODO";
    // }
    // push.this.task();
     }

     deleteTask(taskId){
     console.log(taskId);
     for (let i = 0; i < this.task.length; i++) {
       let task = this.task[i];
       if (task.id === taskId) {
         this.task.splice(i, 1);
       }
     }
     }
     getTaskById(taskId){
       console.log(taskId);
       let foundTask;
       for (let i = 0; i < this.task.length; i++) {
         let task = this.task[i];
         if (task.id === taskId) {
           foundTask = task;
         } 
       }
       return foundTask;
     }
     save(){
      let tasksJson = JSON.stringify(this.task);
      localStorage.setItem("tasks",tasksJson);
      let currentId = JSON.stringify(this.currentId);
      localStorage.setItem("currentId", currentId);
     }

     load(){
       let tasksJson = localStorage.getItem("tasks");
       let currentId = localStorage.getItem("currentId");
       this.task = JSON.parse(tasksJson);
       this.currentId = JSON.parse(currentId);

     }
    render()
    {
     let tasksHtmlList = new Array();
     
     for(let i=0;i<this.task.length;i++){
       let task = this.task[i]
       let taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, task.dueDate, task.status)
       tasksHtmlList.push(taskHtml)
     }
     let tasksHtml = tasksHtmlList.join("\n")
     console.log(tasksHtml);
     tasksList.innerHTML = tasksHtml
    //  let formattedDate = 'date' 
    }
  

}
