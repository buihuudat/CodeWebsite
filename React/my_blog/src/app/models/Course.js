import mongoose from "mongoose"
const Schema = mongoose.Schema;

const Course = new Schema({
  name: {type: String, required: true},
  description: String,
  image: {type: String},
  slug: String,
}, {timestamps: true})

export default mongoose.model('course', Course );
