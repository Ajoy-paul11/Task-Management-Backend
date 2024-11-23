import { Router } from "express";
import {
    createTask,
    getAllTasks,
    taskComplete,
    editTask,
    updateTaskDueDate,
    deleteTask
} from "../controllers/task.controller.js";

const router = Router()


router.route("/create").post(createTask)
router.route("/").get(getAllTasks)
router.route("/complete/:id").patch(taskComplete)
router.route("/date/:id").patch(updateTaskDueDate)
router.route("/:id")
    .patch(editTask)
    .delete(deleteTask)


export default router;