import Event from '../models/event.model.js'
// 1 . To create a event 
export const createEvent = async (req,res) => {
    const newEvent = Event(req.body)

    try{
        const savedEvent = await newEvent.save()

        res.status(200).json({
            success : 'true',
            message : 'Event succesfully created',
            data : savedEvent
        })
    }catch(error){
        res.status(200).json({
            success : false,
            message : "Event cannot be created , Try Again"
        })
    }
}

// 2 . To update a event 

// 3 . TO delete a event 
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

//4 . to get event details 





