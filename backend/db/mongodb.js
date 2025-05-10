import mongoose from "mongoose"

const connectDB = async() =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`MongoDb Connected succesfully`)
    }catch(error){
        console.log(`An error occured while connecting to the database !!`)
        console.log(`ERROR : ${error}`)
        process.on('exit', (code) => {
            console.log(`Exiting the process with code : ${code}`)
        })
    }
}

export default connectDB