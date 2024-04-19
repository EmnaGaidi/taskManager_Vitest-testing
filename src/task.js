class Task {
  constructor(title, description, deadline) {
    if (!title || !description || !deadline) {
      throw new Error("Title, description, and deadline are required.");
    }
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.completed = false;
  }

  markCompleted() {
    this.completed = true;
  }
}

module.exports = { Task };
