import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/taskManager`)
        console.log(`\n Database Connected, DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error while connecting the DB: ", error)
    }
}


export default connectDB;