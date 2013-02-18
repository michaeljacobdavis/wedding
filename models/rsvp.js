var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var rsvpSchema = new Schema({
  name: String,
  coming: Boolean,
  howMany: Number
});

exports.Rsvp = mongoose.model('Rsvp', rsvpSchema);
