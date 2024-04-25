import mongoose from "mongoose";

export const connectMongo = () => {
  const url = "mongodb://localhost:27017/blog";
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, // Adjust the connection timeout (default is 30000 milliseconds)
    socketTimeoutMS: 45000, // Adjust the socket timeout (default is 45000 milliseconds)
  };

  mongoose
    .connect(url, options)
    .then(() => console.log("DB connected!"))
    .catch((err) => console.error(err));
};
