import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Category } from "../models/category.model.js";


const createCategory = AsyncHandler(async (req, res, next) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return next(new ApiError(404, "All fields are required"))
    }

    // * Check if category name already exist *
    const getCategory = await Category.findOne({ name })
    if (getCategory) {
        return next(new ApiError(404, "Category with the same name already exist"))
    }

    const newCategory = await Category.create(
        { name, description }
    )

    return res.status(201).json(
        new ApiResponse(201, newCategory, "Category created successfully")
    )

})


const getAllCategories = AsyncHandler(async (req, res, next) => {
    const categories = await Category.find()

    return res.status(200).json(
        new ApiResponse(200, categories, "Categories retrieved successfully")
    )
})


const deleteCategory = AsyncHandler(async (req, res, next) => {
    const { id } = req.params
    await Category.findByIdAndDelete(id)

    return res.status(201).json(
        new ApiResponse(201, {}, "Category deleted successfully")
    )

})


export {
    createCategory,
    getAllCategories,
    deleteCategory
}