const Task = require("./task");
const {
  addTask,
  showIncompleteTasks,
  showCompletedTasks,
  removeTask,
  markTaskCompleted,
} = require("./taskmanager");

const taskList = [];

addTask(
  taskList,
  new Task("Go grocery shopping", "Buy milk, bread, and eggs", "2024-04-25")
);
addTask(
  taskList,
  new Task("Study for the exam", "Review chapters 1 to 5", "2024-04-30")
);

console.log("Incomplete tasks:");
console.log(showIncompleteTasks(taskList));

markTaskCompleted(taskList, 0);

console.log("\nIncomplete tasks after marking one as completed:");
console.log(showIncompleteTasks(taskList));

console.log("\nCompleted tasks:");
console.log(showCompletedTasks(taskList));

removeTask(taskList, 0);

console.log("\nIncomplete tasks after removal:");
console.log(showIncompleteTasks(taskList));
