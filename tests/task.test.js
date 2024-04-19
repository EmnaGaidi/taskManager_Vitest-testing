import { Task } from "../src/task";
import { test, expect } from "vitest";
test("test constuctor", () => {
  // create a task with all correct informations
  const correcttask = new Task(
    "Go shopping",
    "Buy milk, bread and eggs",
    "2024-04-25"
  );
  expect(correcttask.title).toBe("Go shopping");
  expect(correcttask.description).toBe("Buy milk, bread and eggs");
  expect(correcttask.deadline).toBe("2024-04-25");
  expect(correcttask.completed).toBeFalsy();

  // create a task missing argument
  const task_missing_arg = () => new Task("arg1", "arg2");
  expect(task_missing_arg).toThrowError(
    new Error("Title, description, and deadline are required.")
  );

  // create empty task
  const empty_task = () => new Task();
  expect(empty_task).toThrowError(
    new Error("Title, description, and deadline are required.")
  );

  // test mark as completed
  correcttask.markCompleted();
  expect(correcttask.completed).toBeTruthy();
});
