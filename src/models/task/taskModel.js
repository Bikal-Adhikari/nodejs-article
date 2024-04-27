import TaskSchema from "./taskSchema.js";
import { format } from "date-fns";

// Create
export const insertTask = async (taskObj) => {
  try {
    // Format the current date to dd/mm/yyyy format
    const currentDate = format(new Date(), "dd/MM/yyyy");
    taskObj.date = currentDate;

    const newTask = new TaskSchema(taskObj);
    const result = await newTask.save();
    return result;
  } catch (error) {
    throw new Error(`Error inserting task: ${error.message}`);
  }
};

// Read
export const getTasks = async () => {
  try {
    const tasks = await TaskSchema.find();
    return tasks;
  } catch (error) {
    throw new Error(`Error fetching tasks: ${error.message}`);
  }
};

// Update
export const updateTask = async ({ _id, title, content, author }) => {
  try {
    const updatedTask = await TaskSchema.findByIdAndUpdate(
      _id,
      { title, content, author },
      { new: true }
    );
    return updatedTask;
  } catch (error) {
    throw new Error(`Error updating task: ${error.message}`);
  }
};

// Delete
export const deleteTask = async (id) => {
  try {
    const result = await TaskSchema.findByIdAndDelete(id);
    return result;
  } catch (error) {
    throw new Error(`Error deleting task: ${error.message}`);
  }
};
