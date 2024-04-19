import * as functions from "../src/taskmanager";
import { Task } from "../src/task";
import { test, expect } from "vitest";

test("Test adding a task to a list", () => {
  const taskList = [];
  const newTask = new Task(
    "Go grocery shopping",
    "Buy milk, bread, and eggs",
    "2024-04-25"
  );
  functions.addTask(taskList, newTask);
  expect(taskList).toContain(newTask);
});

test("Test removing a task from a list", () => {
  // remove from a list containing elements with a correct index
  const taskList = [
    new Task("Task 1", "Description 1", "2024-04-25"),
    new Task("Task 2", "Description 2", "2024-04-26"),
    new Task("Task 3", "Description 3", "2024-04-27"),
  ];
  functions.removeTask(taskList, 1);
  expect(taskList.length).toBe(2);
  expect(taskList[0].title).toBe("Task 1");
  expect(taskList[1].title).toBe("Task 3");

  // remove from an empty list
  const emptyList = [];
  expect(() => functions.removeTask(emptyList, 0)).toThrowError(
    "The list is empty, cannot remove an element."
  );

  // try to remove a task with a non existing index
  expect(() => functions.removeTask(taskList, 7)).toThrowError(
    "Index is out of bounds, cannot remove an element."
  );
});
test("test marking a task as completed", () => {
  // mark a task with an existing index as completed
  const taskList = [
    new Task("Task 1", "Description 1", "2024-04-25"),
    new Task("Task 2", "Description 2", "2024-04-26"),
    new Task("Task 3", "Description 3", "2024-04-27"),
  ];
  functions.markTaskCompleted(taskList, 1);
  expect(taskList[1].completed).toBeTruthy();

  // mark an unexisting index as completed
  expect(() => functions.markTaskCompleted(taskList, 7)).toThrowError(
    "Index is out of bounds, cannot mark the task as completed."
  );
});

test("test showing completed tasks", () => {
  const taskList = [
    new Task("Task 1", "Description 1", "2024-04-25"),
    new Task("Task 2", "Description 2", "2024-04-26"),
    new Task("Task 3", "Description 3", "2024-04-27"),
    new Task("Task 4", "Description 4", "2024-04-28"),
  ];
  taskList[0].markCompleted();
  taskList[2].markCompleted();
  const completedTasks = functions.showCompletedTasks(taskList);
  expect(completedTasks.length).toBe(2);
  expect(completedTasks[0].title).toBe("Task 1");
  expect(completedTasks[1].title).toBe("Task 3");
});

test("test showing incomplete tasks", () => {
  const taskList = [
    new Task("Task 1", "Description 1", "2024-04-25"),
    new Task("Task 2", "Description 2", "2024-04-26"),
    new Task("Task 3", "Description 3", "2024-04-27"),
    new Task("Task 4", "Description 4", "2024-04-28"),
  ];
  taskList[0].markCompleted();
  taskList[2].markCompleted();
  const incompleteTasks = functions.showIncompleteTasks(taskList);

  expect(incompleteTasks.length).toBe(2);
  expect(incompleteTasks[0].title).toBe("Task 2");
  expect(incompleteTasks[1].title).toBe("Task 4");
});
