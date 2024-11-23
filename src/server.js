import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config(
    { path: "./.env" }
)

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("ERROR: ", err)
        })

        app.listen(process.env.PORT || 8001, () => {
            console.log(`Server is running on ${process.env.PORT}`)
        })
    }).catch((err) => {
        console.log("Database connection failed: ", err)
    })


app.get("/", (req, res) => {
    return res.send("Task Management Platform.");

})