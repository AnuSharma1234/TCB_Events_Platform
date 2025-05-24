import Event from '../models/event.model.js'


export const createEvent = async (req,res) => {
    const newEvent = Event(req.body)

    try{
        const savedEvent = await newEvent.save()

        res.status(200).json({
            success : 'true',
            message : 'Event succesfully created',
            event : savedEvent
        })
    }catch(error){
        res.status(200).json({
            success : false,
            message : "Failed to create a event , try again"
        })
    }
}

// 2 . To update a event 

export const deleteEvent = async (req,res) =>{
    const id = req.params.id

    try{
        await Event.findByIdAndDelete(id)
        res.status(200).json({
            success : true,
            message : 'Event was closed succesfully'
        })

    }catch(error){
        res.status(500).json({
            success : false,
            message : 'Failed to delete the event'
        })
    }
}

export const getEventDetails = async (req,res) =>{
    try{
        const events = await Event.find(req.params.id)
        res.status(200).json(events)
    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
}
