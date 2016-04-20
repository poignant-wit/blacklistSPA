const config = {
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/BlackListOfficial',
    port: process.env.PORT || 8000,
    secret: 'adfhdghjkhaef',

    smtpConfig: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'silaprod@gmail.com',
            pass: 'fyfnjkbq'
        }
    }


};

export default config;
