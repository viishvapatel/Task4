let createTaskHtml = (name, description, assignedTo, dueDate) => {
    // constructor(name, description, assignedTo, dueDate, status){
        const html = `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>Take out ${description}</h5>
            <span class="badge badge-danger">TODO</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>AssignedTo: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>Take out the trash to the front of the house</p>
    </li>
`
        return html;

        
}
class taskManager {
  constructor(currentId = 0) {
    this.task = [];{
      this.currentId = currentId;
    }
    
    addTask(name, description, assignedTo, dueDate)
    {
      const task = {
        id: this.currentId++, 
        name: name,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: 'TODO'
      };
      this.task.push(Task);
    
      // this.status = "TODO";
    // }
    // push.this.task();
     }
    render()
  }
}
