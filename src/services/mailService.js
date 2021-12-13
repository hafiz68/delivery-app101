const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const { tokengenerator } = require('./authService');

transporter.set('oauth2_provision_cb', (user, renew, callback)=>{
  let accessToken = userTokens[user];
  if(!accessToken){
      return callback(new Error('Unknown user'));
  }else{
      return callback(null, accessToken);
  }
});

transporter.on('token', token => {
  console.log('A new access token was generated');
  console.log('User: %s', token.user);
  console.log('Access Token: %s', token.accessToken);
  console.log('Expires: %s', new Date(token.expires));
});

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
              accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x'
            }
          }));
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