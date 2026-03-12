import express from "express";
import auth_router from "./routes/auth_router.mjs";
import task_router from "./routes/task_router.mjs";

const main_router = express.Router();

main_router.use("/user", auth_router);

main_router.use("/tasks", task_router);

export default main_router;
