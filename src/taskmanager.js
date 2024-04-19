function addTask(list, task) {
  list.push(task);
}

function showIncompleteTasks(list) {
  return list.filter((task) => !task.completed);
}

function showCompletedTasks(list) {
  return list.filter((task) => task.completed);
}

function removeTask(list, index) {
  if (list.length === 0) {
    throw new Error("The list is empty, cannot remove an element.");
  }
  if (index < 0 || index >= list.length) {
    throw new Error("Index is out of bounds, cannot remove an element.");
  }
  list.splice(index, 1);
}

function markTaskCompleted(list, index) {
  if (index < 0 || index >= list.length) {
    throw new Error(
      "Index is out of bounds, cannot mark the task as completed."
    );
  }
  list[index].markCompleted();
}

module.exports = {
  addTask,
  showIncompleteTasks,
  showCompletedTasks,
  removeTask,
  markTaskCompleted,
};
