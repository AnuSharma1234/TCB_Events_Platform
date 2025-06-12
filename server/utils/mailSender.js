import nodemailer from 'nodemailer'

const mailSender = async (email,title,body) =>{
    try{
        let transporter = nodemailer.createTransport({
           service : "Gmail",
           auth : {
                user : process.env.SMTP_USERNAME,
                pass : process.env.SMTP_PASS,
            }
        })

        let info = await transporter.sendMail({
            from : "anuragsharma5617@gmail.com",
            to : `${email}`,
            subject : `${title}`,
            html : `${body}`
        })

        return info
    }catch(error){
        console.log(error.message)
    }
}

export default mailSender