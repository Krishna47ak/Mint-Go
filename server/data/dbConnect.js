import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const dbUri = "mongodb+srv://admin:admin@cluster0.cnu6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" || process.env.MONGO_URI;
    await mongoose.connect(dbUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
