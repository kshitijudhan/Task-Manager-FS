import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
});

export const Task = mongoose.model("Task", taskSchema);
