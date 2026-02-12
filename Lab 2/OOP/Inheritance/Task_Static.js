class Task {
  static taskList = [];

  static printTaskList() {
    console.log(this.taskList);
  }

  static addTask(task) {
    this.taskList.push(task);
  }

  constructor(taskDetail) {
    this.taskDetail = taskDetail;
    Task.addTask(this);
  }
}

const laundry = new Task("laundry");
// console.log(laundry.taskList);
// console.log(Task.printTaskList());
Task.printTaskList();
