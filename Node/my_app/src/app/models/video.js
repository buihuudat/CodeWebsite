const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const video = new Schema({
  name: {type: String, require: true},
  description: {type: String},
  image: {type: String},
  VideoID: {type: String},
  slug: {type: String, slug:'name', unique: true},
}, {
  timestamps: true,
})

mongoose.plugin(slug);
video.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports =  mongoose.model('video', video);
