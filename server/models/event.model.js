import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
    title : {
        type : String,
        required : [true , 'Event title is required']
    },
    date : {
        type : String,
        required : [true , "Date of Event is required"],
    },
    day : {
        type : String,
        required : [true , "day of event is required"],
    },
    venue : {
        type : String,
        required : [true , "event venue is required"]
    },
    teamSize : {
        type : Number,
    },
    maxTeams : {
        type : Number
    },
    otherDesc : {
        type : String
    }
})

const Event = mongoose.model("Event",eventSchema)

export default Event
