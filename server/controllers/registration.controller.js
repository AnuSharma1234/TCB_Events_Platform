import Team from '../models/team.model.js'

export const registerEvent = async (req,res) =>{

    const newRegistration = Team(req.body)

    const existingTeam = await newRegistration.findOne({newRegistration.leaderEmail})

    if(existingTeam){
        res.status(400).json({
            success : false,
            message : 'leaders email is already linked with another team'
        })
    }

    try{
        const newTeam = await newRegistration.save()

        res.status(200).json({
            success : 'true',
            message : 'Successfully registered for the event',
            team : newTeam
        })

    }catch(error){
        res.status(200).json({
            success : false,
            message : 'Failed to register for the event'
        })
    }
}

export const getAllRegistrations = async (req,res) =>{
    try{
        const allRegistrations = await Team.find()
        res.status(200).json({
            success : true,
            message : 'All registrations fetched successfully',
            count : allRegistrations.length,
            data : allRegistrations,
        })

    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
}

