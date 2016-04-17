import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: { type: 'String', required: true },
    email: { type: 'String', required: true, unique: true, lowercase:true },
    password: { type: 'String' },
    dateAdded: { type: 'Date', default: Date.now, required: true },
});

userSchema.pre('save', function(next){
    const user = this;

    bcrypt.genSalt(10, function(err, salt){
        if (err){ return next(err); }

        bcrypt.hash(user.password, salt, null, function (err, hash){
            if (err){ return next(err); }
            user.password = hash;
            next();
        })
    })
});

userSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){

        if(err){ return callback(err); }
        callback(null, isMatch);
        });
};

export default mongoose.model('User', userSchema);
