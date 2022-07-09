const mongoose = require('mongoose');

const itSchema = new mongoose.Schema({
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
  collection: 'IT'
}, );


itSchema.statics.create = function (payload) {
  const it = new this(payload);
  return it.save();
};

itSchema.statics.findAll = function () {
  return this.find({});
};

itSchema.statics.findOneByItid = function (itid) {
  return this.findOne({ itid });
};

itSchema.statics.updateByItid = function (itid, payload) {
  return this.findOneAndUpdate({ itid }, payload, { new: true });
};

itSchema.statics.deleteByItid = function (itid) {
  return this.remove({ itid });
};

module.exports = mongoose.model('It', itSchema);