const mongoose = require('mongoose');

const sportsSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  reporter: { type: String, required: true },
  date: { type: String, required: true },
  img: { type: String, required: true },
  publisher: { type: String, required: true },
  contents: { type: String, required: true },
},
{
  timestamps: true,
  collection: '스포츠'
}, );


sportsSchema.statics.create = function (payload) {
  const sports = new this(payload);
  return sports.save();
};

sportsSchema.statics.findAll = function () {
  return this.find({});
};

sportsSchema.statics.findOneBySportsid = function (sportsid) {
  return this.findOne({ sportsid });
};

sportsSchema.statics.updateBySportsid = function (sportsid, payload) {
  return this.findOneAndUpdate({ sportsid }, payload, { new: true });
};

sportsSchema.statics.deleteBySportsid = function (sportsid) {
  return this.remove({ sportsid });
};

module.exports = mongoose.model('Sports', sportsSchema);