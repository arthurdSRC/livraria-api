import mongoose from "mongoose"
import { env } from "process";

const connectDB = async() => {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection
}

export default connectDB