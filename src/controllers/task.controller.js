import { AsyncHandler } from "../utils/AsyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Task } from "../models/task.model.js"
import { Category } from "../models/category.model.js"


const createTask = AsyncHandler(async (req, res, next) => {
    const { title, description, dueDate, categoryId } = req.body

    // * Check for empty fields *
    if (!title || !description || !dueDate) {
        return next(new ApiError(404, "field can't be empty"))
    }

    // * check if the category exist *
    const category = await Category.findById(categoryId)
    if (!category) {
        return next(new ApiError(404, "category not found"))
    }

    // * Check if title field already exist *
    const findTitle = await Task.findOne({ title })
    if (findTitle) {
        return next(new ApiError(401, "Task with the same title already exist"))
    }

    const newTask = await Task.create(
        { title, description, dueDate, categoryId }
    )

    return res.status(201).json(
        new ApiResponse(201, newTask, "Task created successfully")
    )
})


const getAllTasks = AsyncHandler(async (req, res, next) => {
    const allTask = await Task.find()

    return res.status(200).json(
        new ApiResponse(200, allTask, "All tasks fetched successfully")
    )
})


const taskComplete = AsyncHandler(async (req, res, next) => {
    const { id } = req.params
    const task = await Task.findById(id)
    if (!task) {
        return next(new ApiError(404, "Task not found"))
    }

    // * Check if task is already completed *
    if (task.isCompleted === true) {
        return next(new ApiError(401, "Task is already set to completed"))
    }

    // * Update task to completed *
    task.isCompleted = true
    await task.save()

    return res.status(201).json(
        new ApiResponse(201, task, "Task completed successfully")
    )

})


const editTask = AsyncHandler(async (req, res, next) => {
    const { id } = req.params
    const { title, description } = req.body

    if (!title || !description) {
        return next(new ApiError(404, "All fields are required"))
    }

    const getTask = await Task.findById(id)

    if (!getTask) {
        return next(new ApiError(401, "Task is not exits"))
    }

    const newTask = await Task.findByIdAndUpdate(
        { _id: id },
        { $set: { title, description, isCompleted: false } },
        { new: true }
    )

    return res.status(201).json(
        new ApiResponse(201, newTask, "Task details updated successfully")
    )
})


const updateTaskDueDate = AsyncHandler(async (req, res, next) => {
    const { id } = req.params
    const { dueDate } = req.body

    const getTask = await Task.findById(id)
    if (!getTask) {
        return next(new ApiError(401, "Task is not exits"))
    }

    const newDateTask = await Task.findByIdAndUpdate(
        { _id: id },
        { $set: { dueDate } },
        { new: true }
    )

    return res.status(201).json(
        new ApiResponse(201, newDateTask, "Due date of the task updated successfully")
    )

})


const deleteTask = AsyncHandler(async (req, res, next) => {
    const { id } = req.params

    // * Check if task exist *
    const task = await Task.findById(id)
    if (!task) {
        return next(new ApiError(404, "Task not found"))
    }

    await Task.findByIdAndDelete(id)

    return res.status(200).json(
        new ApiResponse(200, {}, "Task deleted successfully")
    )
})


export {
    createTask,
    getAllTasks,
    taskComplete,
    editTask,
    updateTaskDueDate,
    deleteTask
}