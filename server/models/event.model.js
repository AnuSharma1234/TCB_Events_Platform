import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
    date : {
        type : String,
        required : true,
    },
    day : {
        type : String,
        required : true,
    },


})

const Event = mongoose.model("Event",eventSchema)

export default Event
