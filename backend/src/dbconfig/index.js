import mongoose from "mongoose";
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        dbName: "formDB",
      });
      console.log("✅ MongoDB Connected");
    } catch (error) {
      console.error("❌ MongoDB Connection Failed", error);
      process.exit(1);
    }
  };

export {connectDB};