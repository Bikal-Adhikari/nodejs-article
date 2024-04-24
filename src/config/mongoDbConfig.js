import mongoose from "mongoose";

export const connectMongo = () => {
  const url = "mongodb://localhost:27017/blog";
  mongoose
    .connect(url)
    .then(() => console.log("DB connected!"))
    .catch((err) => console.error(err));
};
