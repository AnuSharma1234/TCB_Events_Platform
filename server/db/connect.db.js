import mongoose from "mongoose"

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDb Succesfully !!')
    } catch (error) {
        console.log("Error connecting to MongoDb !!, ERROR : ", error)
    }
}

export default connectDb
