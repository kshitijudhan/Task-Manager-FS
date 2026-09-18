import { Router } from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import { validateTask } from "../middlewares/validateTask.js";

const router = Router();

router.post("/", validateTask, createTask);

router.get("/", getTasks);

router.get("/:id", getTaskById);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
