const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


const sendingmail = async(email, mailText) =>{
    try{
        let transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
              type: 'OAuth2',
              user: process.env.GMAIL_ACC,
              pass: process.env.GMAIL_PASS,
            },
            maxConnections: 5,
            maxMessages: 10
          }));
        let mailOptions = {
            from: process.env.GMAIL_ACC,
            to: email,
            subject: 'Welcome to our app',
            text: mailText,
            auth: {
              user: process.env.GMAIL_ACC,
          }
          };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log("abc")
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              return {message:"mail sent successfully"}
            }
          }); 
    }catch(error){
        console.log("here")
        console.log(error);
        return {error: {message: "Something went wrong, try again", code: 500}};
    }
} 

module.exports ={
    sendingmail
}