import mongoose from 'mongoose';
const Schema = mongoose.Schema;


/*comment collection schema*/
const commentSchema = new Schema({
    //_author_id:  {type: Schema.ObjectId, required:true },  //todo edit schema
    _author_id:  {type: String, required:true },
    //_target_id: {type: Schema.ObjectId, required:true },
    body: { type: 'String' },
    dateAdded: { type: 'Date', default: Date.now, required: true },
    confirmed: { type: 'Boolean', default: false },
});



export default mongoose.model('Comment', commentSchema);
