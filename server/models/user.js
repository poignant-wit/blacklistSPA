import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import crypto from 'crypto';

const Schema = mongoose.Schema;


/*user collection schema*/
const userSchema = new Schema({
    name: {type: 'String'},
    email: {type: 'String', required: true, unique: true, lowercase: true},
    password: {type: 'String'},
    dateAdded: {type: 'Date', default: Date.now, required: true},
    confirmed: {type: 'Boolean', default: false},

    social: {
        linkedin: {
            id: String
        }
    }
});


/*verification tokens schema*/
const verificationTokenSchema = new Schema({
    _userId: {type: Schema.ObjectId, required: true, ref: 'User'},
    token: {type: String, required: true},
    createdAt: {type: Date, required: true, default: Date.now, expires: '4h'}
});

const VerificationToken = mongoose.model('VerificationToken', verificationTokenSchema);


/*action for encrypt password*/
userSchema.pre('save', function (next) {
    const user = this;

    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) {
                return next(err);
            }
            user.password = hash;

            next();
        })
    })
});

/*action for compare request password with stored one*/
userSchema.methods.comparePassword = function (candidatePassword, callback) {


        bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) {
            return callback(err);
        }

        callback(null, isMatch);




    });
};

/*method for generate temporary user verification token and put it into verificationTokens collection*/
userSchema.methods.generateConfirmToken = function (callback) {


    VerificationToken.findOne({user_ud: this._id}, (err, token) => {
        if (err) return callback(err);


        if (token) return callback(null, token.token);

        let randomString = crypto.randomBytes(32).toString('hex');
        //let VerificationToken = mongoose.model('VerificationToken');
        let verificationToken = new VerificationToken({
            _userId: this._id,
            token: randomString
        });


        verificationToken.save(function (err, token) {
            if (err) return callback(err);
            return callback(null, token.token);
        });
    });
};


userSchema.statics.findByConfirmationCode = (candidateToken, callback) => {

    //let VerificationToken = mongoose.model('VerificationToken');
    VerificationToken.findOne({token: candidateToken}, function (err, user) {

        if (err) return callback(err);

        let User = mongoose.model('User');
        User.findOne({_id: user._userId}, function (err, user) {
            if (err) return callback(err);
            return callback(null, user);
        });


    });

};

export default mongoose.model('User', userSchema);
