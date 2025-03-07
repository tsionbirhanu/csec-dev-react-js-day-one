import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const connectDB = async () => {
    try {
        if (!process.env.ATLAS_URI) {
            throw new Error("MONGO_URI is missing in the .env file");
        }

        const conn = await mongoose.connect(process.env.ATLAS_URI, {
            dbName: "jobDB", // Explicitly set DB name
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
