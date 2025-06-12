import cloudinary from 'cloudinary'

const connectCloudinary = () =>{
    try{
        cloudinary.config({
            cloud_name : process.env.CLOUD_NAME,
            api_key : process.env.CLOUD_API,
            api_secret : process.env.CLOUD_SECRET
        })

    }catch(error){
        console.log(error.message)
    }
}

export default connectCloudinary