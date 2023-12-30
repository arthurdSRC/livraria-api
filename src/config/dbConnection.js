import mongoose from "mongoose"


const connectDB = async () => {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection
}

export default connectDB