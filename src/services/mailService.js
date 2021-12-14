const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const { tokengenerator } = require('./authService');


const sendingmail = async(email, mailText) =>{
    try{
        let transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            authentication: 'plain',
            port: 587,
            enable_starttls_auto: true,
            host: 'smtp.gmail.com',
            auth: {
              user: process.env.GMAIL_ACC,
              pass: process.env.GMAIL_PASS,
            }
          }));
          transporter.set('oauth2_provision_cb', (user, renew, callback)=>{
            let accessToken = userTokens[user];
            if(!accessToken){
                return callback(new Error('Unknown user'));
            }else{
                return callback(null, accessToken);
            }
        });
        let mailOptions = {
            from: process.env.GMAIL_ACC,
            to: email,
            subject: 'Sending Email using Node.js[nodemailer]',
            text: mailText
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