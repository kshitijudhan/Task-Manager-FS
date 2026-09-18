import { asyncHandler } from "../middlewares/asyncHandler.js";
import { Task } from "../models/task.model.js";

export const createTask = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  const task = await Task.create({
    title,
    description,
  });

  res.status(201).json({
    success: true,
    message: "Task created suyccessfully",
    task,
  });
});

export const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();

  res.status(200).json({
    success: true,
    tasks,
  });
});

export const getTaskById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const task = await Task.findById(id);

  res.status(200).json({
    success: true,
    task,
  });
});

export const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const task = await Task.findByIdAndUpdate(
    id,
    {
      title,
      description,
      completed,
    },
    {
      new: true,
    },
  );

  res.status(200).json({
    success: true,
    task,
  });
});

export const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: "Task Deleted",
    task,
  });
});
