import { getTasks } from "../models/task/taskModel";

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
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
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
