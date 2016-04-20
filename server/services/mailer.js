import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

export default (smtpConfig, mailOptions, callback) => {
    const transporter = nodemailer.createTransport(smtpConfig);
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return callback(error);
        }
        callback(null, info);

        //res.json({
        //    token: tokenForUser(req.user),
        //    send: 'success'
        //
        //});
    });


}
