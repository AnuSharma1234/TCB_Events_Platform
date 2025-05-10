import User from "../models/user.model.js"

export const getProfile = async (req,res,next) =>{
    
    try{
        const user = await User.findOne(req.params.id)

        if(!user){
            const error = new Error('User does not exist')
            res.status(400)
            throw error
        }

        res.status(200).json({
            success : true,
            message : 'User found succesfully',
            data : {
                user
            }
        })

    }catch(error){
       next(error) 
    }
}

export const updateStatus = async (req,res,next) =>{

    try{
        const updateStatus = User.findByIdAndUpdate(req.params.id , {isActive : true})

        if(!updateStatus){
            const error = new Error('Cannot update user status')
            error.statusCode = 400
            throw error
        }

        res.status(200).json({
            success : true,
            message : 'User status updated succesfully'
        })

    }catch(error){
        console.log(error)
        res.status(400).json({message : 'Cannot update user status' , error : error.message})
    }
}