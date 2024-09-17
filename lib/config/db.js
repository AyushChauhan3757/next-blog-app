import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
    await mongoose.connect('mongodb+srv://devrajkohli255:Dk123456@cluster0.4qxqf.mongodb.net/blog-app');
    console.log('DB Connected');
};

export default connectDB;