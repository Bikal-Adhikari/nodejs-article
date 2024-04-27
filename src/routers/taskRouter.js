import express from "express";
import {
  getTasks,
  insertTask,
  updateTask,
  deleteTask,
} from "../models/task/taskModel.js";

const router = express.Router();

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json({
      status: "success",
      message: "Here are the tasks",
      tasks: tasks,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "failure",
      message: "Error fetching tasks",
    });
  }
});

// Insert a new task
router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    if (result) {
      res.json({
        status: "success",
        message: "New task has been added",
        task: result,
      });
    } else {
      res.status(400).json({
        status: "failure",
        message: "Failed to add new task",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "failure",
      message: "Error inserting task",
    });
  }
});

// Update a task
router.put("/:id", async (req, res) => {
  const taskId = req.params.id;
  const { title, content, author } = req.body;
  try {
    const result = await updateTask({ _id: taskId, title, content, author });
    if (result) {
      res.json({
        status: "success",
        message: "Task has been updated",
      });
    } else {
      res.status(404).json({
        status: "failure",
        message: "Task not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "failure",
      message: "Error updating task",
    });
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  const taskId = req.params.id;
  try {
    const result = await deleteTask(taskId);
    if (result) {
      res.json({
        status: "success",
        message: "Task has been deleted",
      });
    } else {
      res.status(404).json({
        status: "failure",
        message: "Task not found",
      });
    }
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({
      status: "failure",
      message: "Error deleting task",
    });
  }
});

export default router;
