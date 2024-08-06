const createNewsletter = require('./newsLetter');
const nodemailer = require('nodemailer')


const sendMail = async (title,body,email)=>{
    try{
        const newsletterHTML = createNewsletter(title, body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_ID,
                pass: process.env.APP_PASSWORD,
            }
          });
          const mailOptions = {
            from: process.env.VITE_MAIL_ID,
            to: email,
            subject: title,
            html: newsletterHTML
          };
          const sentStatus = await transporter.sendMail(mailOptions);
          return sentStatus ;
    }catch(err){
        return err;
    }
}

module.exports = sendMail