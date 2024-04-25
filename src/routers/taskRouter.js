import { getTasks, insertTask } from "../models/task/taskModel.js";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await getTasks();
    console.log(result);
    res.json({
      status: "success",
      message: `Here are the tasks`,
      task: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failure",
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: `New data has been added`,
        })
      : res.json({
          status: "failure",
          message: `Failed to add new data`,
        });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failure",
      message: error.message,
    });
  }
});

export default router;
