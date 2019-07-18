// Source: https://www.youtube.com/watch?v=NB71vyCj2X4

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sharma.jay95@gmail.com',
        pass:''
    }
});

var mailOptions = {
    from:'sharma.jay95@gmail.com',
    to:'jay.sharma@dal.ca',
    subject:'Sending email using Node.js',
    text:'Thanks for reserving an item'
};

transporter.sendMail(mailOptions, function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent: '+info.response);
    }
});