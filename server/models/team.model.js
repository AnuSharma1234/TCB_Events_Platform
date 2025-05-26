import mongoose from 'mongoose'

const teamSchema = mongoose.Schema({
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
    mem1Name : {
        type : String
    },
    mem2Name : {
        type : String
    },
    mem3Name : {
        type : String
    }
})

const Team = mongoose.model('Team',teamSchema)

export default Team