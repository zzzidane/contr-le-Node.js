const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport ({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

const mailOptions = {
    from: '',
    to: '',
    subject: "", 
    text: 'Email envoyé avec sendmail'
};

transport.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Erreur:', error);
    } else {
        console.log('Email envoyé:', info.response);
    }
});
