import { Task } from "../src/task";
import * as functions from "../src/taskmanager";
import { test, expect } from "vitest";

test("Main functionality test", () => {
  // Test adding tasks
  const taskList = [];
  functions.addTask(
    taskList,
    new Task("Go grocery shopping", "Buy milk, bread, and eggs", "2024-04-25")
  );
  functions.addTask(
    taskList,
    new Task("Study for the exam", "Review chapters 1 to 5", "2024-04-30")
  );
  expect(taskList.length).toBe(2);

  // Test showing incomplete tasks
  let incompleteTasks = functions.showIncompleteTasks(taskList);
  expect(incompleteTasks.length).toBe(2);

  // Test marking a task as completed
  functions.markTaskCompleted(taskList, 0);
  incompleteTasks = functions.showIncompleteTasks(taskList);
  expect(incompleteTasks.length).toBe(1);

  // Test showing completed tasks
  const completedTasks = functions.showCompletedTasks(taskList);
  expect(completedTasks.length).toBe(1);

  // Test removing a task
  functions.removeTask(taskList, 0);
  expect(taskList.length).toBe(1);
});
