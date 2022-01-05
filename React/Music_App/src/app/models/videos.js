const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const video = new Schema({
  name: String,
  description: String,
  image: String,
  id_yt: String,
  slug: {type: String, slug: 'name'}
}, {
  timestamps: true,
});

module.exports = mongoose.model('dataYT', video);
