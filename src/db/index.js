import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected !!! :-)");
  } catch (error) {
    console.error("DB is not connect due to : " + error);
    throw error;
  }
}
