import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true , "Your username is required"]
    },
    email : {
        type : String,
        required : [true , "Your email is required"]
    },
    password : {
        type : String,
        required : [true , "Your password is required"]
    },
    role : String,
    isActive : Boolean
})

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password , 12)
})

const User = mongoose.model("User",userSchema)

export default User