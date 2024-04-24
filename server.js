import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import taskRouter from "./src/routers/taskRouter.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(cors());

app.use("/api/posts", taskRouter);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
