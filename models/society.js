const mongoose = require('mongoose');

const societySchema = new mongoose.Schema({
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
  collection: '사회'
}, );


societySchema.statics.create = function (payload) {
  const society = new this(payload);
  return society.save();
};

societySchema.statics.findAll = function () {
  return this.find({});
};

societySchema.statics.findOneBySocietyid = function (societyid) {
  return this.findOne({ societyid });
};

societySchema.statics.updateBySocietyid = function (societyid, payload) {
  return this.findOneAndUpdate({ societyid }, payload, { new: true });
};

societySchema.statics.deleteBySocietyid = function (societyid) {
  return this.remove({ societyid });
};

module.exports = mongoose.model('Society', societySchema);