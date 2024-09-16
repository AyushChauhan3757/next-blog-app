import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
    const accessKey = process.env.mongoDB;
    await mongoose.connect(accessKey);
    console.log('DB Connected');
};

export default connectDB;