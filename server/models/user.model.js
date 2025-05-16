import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("User", userSchema)

export default User
