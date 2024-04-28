import mongoose from "mongoose";

export const connectMongo = () => {
  // const url = "mongodb://localhost:27017/blog";
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB connected!"))
    .catch((err) => console.error(err));
};
