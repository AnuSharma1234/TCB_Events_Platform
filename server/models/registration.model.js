import mongoose from 'mongoose'

const registrationSchema = mongoose.Schema({
    teamName : {
        type : String,
        required : [true, 'team name is required']
    },
    leaderName : {
        type : String,
        required : [true , 'leader name is required']
    },
    leaderEmail : {
        type : String,
        required : [true , 'leader email is required']
    },
    year : {
        type : Number,
        required : [true , 'your team year is required']
    },
    teamMembers : [{
        name : String,
        email : String,
    }],
    event : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Event',
        required : true
    },
})

const Registration = mongoose.model('Team',registrationSchema)

export default Registration