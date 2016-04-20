import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';


const Schema = mongoose.Schema;


/*user collection schema*/
const commentSchema = new Schema({
    _author_id:  {type: Schema.ObjectId, required:true, ref: 'User'},
    _target_id: {type: Schema.ObjectId, required:true, ref: 'User'},
    body: { type: 'String' },
    dateAdded: { type: 'Date', default: Date.now, required: true },
    confirmed: { type: 'Boolean', default: false },
});



export default mongoose.model('Comment', commentSchema);
