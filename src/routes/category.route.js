import { Router } from "express";
import { createCategory, getAllCategories, deleteCategory } from "../controllers/category.controller.js";


const router = Router()

router.route("/add").post(createCategory)
router.route("/").get(getAllCategories)
router.route("/:id").delete(deleteCategory)


export default router;