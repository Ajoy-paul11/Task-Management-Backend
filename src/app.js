import express from "express"
import cors from "cors"
import { errorHandler } from "./middleware/error.middleware.js"


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "*", credentials: true, }))


// * import routes *
import taskRoutes from "./routes/task.route.js"
import categoryRoutes from "./routes/category.route.js"


// * declare routes *
app.use("/api/v1/tasks", taskRoutes)
app.use("/api/v1/category", categoryRoutes)


// * Error middleware *
app.use(errorHandler)


export { app }