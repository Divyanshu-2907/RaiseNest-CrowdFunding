import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectDb = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("✅ Already connected to MongoDB.");
            return mongoose.connection;
        }

        console.log("Attempting to connect to MongoDB...");
        console.log("MongoDB URI:", process.env.MONGODB_URI);

        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        return conn;

    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};

export default connectDb;
