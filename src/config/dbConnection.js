import mongoose from "mongoose"

const connectDB = async() => {
  mongoose.connect("mongodb+srv://admin:admin123@cluster0.lezpoel.mongodb.net/?retryWrites=true&w=majority");
  return mongoose.connection
}

export default connectDB