import Event from '../models/event.model.js'
import cloudinary from 'cloudinary'
import cloudinaryConnect from '../utils/cloudinary.js'
import uploadImageToCloudinary from '../utils/imageUploader.js'


export const createEvent = async (req,res) => {
    try{
        const {
            title,
            date,
            day,
            venue,
            teamSize,
            otherDesc
        } = req.body

        const eventBanner = req?.files?.eventBanner;

        let eventBannerUrl = ""
        if(eventBanner){
            try{
                cloudinaryConnect()
                const result = await uploadImageToCloudinary(eventBanner,process.env.CLOUD_NAME , 1000 , 1000)

                eventBannerUrl = result.secure_url
            }catch(error){
                console.log("Event Banner could not be uploaded")
            }
        }

        const savedEvent = await Event.create({
            title,
            eventBanner : eventBannerUrl,
            date,
            day,
            venue,
            teamSize,
            otherDesc,
        })

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

export const updateEvent = async (req,res) =>{
    const id = req.params.id

    try{
        const event  = await Event.findById(id)

        if(!event){
            res.status(400).json({
                success : false,
                message : "Event does not exists !!"
            })
        }

        await cloudinary.uploader.destroy(event.cloudinary_id)

        let result;
        if(req.file){
            result = await cloudinary.uploader.upload(req.file.path)
        }

        const data = {
            title : req.body.title || event.title,
            eventBanner : result?.secure_url || event.eventBanner,
            cloudinary_id : result?.public_id || event.cloudinary_id,
            date : req.body.date || event.date,
            day : req.body.day || event.day,
            venue : req.body.venue || event.venue,
            teamSize : req.body.teamSize || event.teamSize,
            otherDesc : req.body.otherDesc || event.otherDesc,
            isLive : req.body.isLive || event.isLive,
            isFull : req.body.isFull || event.isFull,
            registrations : req.body.registrations || event.registrations
        }

        event = await Event.findByIdAndUpdate(id , data, {new : true})

        res.status(200).json({
            success : true,
            message : 'Event updated succesfully',
            data : event
        })

    }catch(error){
        res.status(400).json({
            success : false,
            message : 'Failed to update the event'
        })
    }
}

export const deleteEvent = async (req,res) =>{
    const id = req.params.id

    const event = await Event.findById(id)

    if(!event){
        res.status(400).json({
            success : false,
            message : 'Event does not exists'
        })
    }

    try{
        await cloudinary.uploader.destroy(event.cloudinary_id)

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

export const closeEvent = async (req,res) => {
    const id  = req.params.id
    try{
        const event = findById(id)

        if(!event){
            res.status(400).json({
                message : 'Event does not exists'
            })
        }

        event = findByIdAndUpdate(id , event.isLive = false , {new : true})

        res.status(200).json({
            success : true,
            message : 'Event closed succesfully'
        })

    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
}
