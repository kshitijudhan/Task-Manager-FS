import express from "express";
import taskRouter from "./routes/task.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/tasks", taskRouter);

app.use(errorHandler);

export default app;
