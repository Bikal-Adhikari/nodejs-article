// db queries go inside this file

import TaskSchema from "./taskSchema.js";
import { format } from "date-fns";
// C

export const insertTask = async (taskObj) => {
  try {
    // Format the current date to dd/mm/yyyy format
    const currentDate = format(new Date(), "dd/MM/yyyy");
    taskObj.date = currentDate;

    const newTask = new Task(taskObj);
    const result = await newTask.save();
    return result;
  } catch (error) {
    throw new Error(`Error inserting task: ${error.message}`);
  }

  // return TaskSchema(taskObj).save();
};

//R

export const getTasks = () => {
  return TaskSchema.find();
};

//U

export const updateTask = ({ _id, type }) => {
  return TaskSchema.findByIdAndUpdate(_id, { type }, { new: true });
};

//D

//deleteMany
export const deleteTask = (ids) => {
  return TaskSchema.deleteMany({ _id: { $in: ids } });
};
