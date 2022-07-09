const mongoose = require('mongoose');

const traSchema = new mongoose.Schema({
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
  collection: '문화'
}, );


traSchema.statics.create = function (payload) {
  const tra = new this(payload);
  return tra.save();
};

traSchema.statics.findAll = function () {
  return this.find({});
};

traSchema.statics.findOneByTraid = function (traid) {
  return this.findOne({ traid });
};

traSchema.statics.updateByTraid = function (traid, payload) {
  return this.findOneAndUpdate({ traid }, payload, { new: true });
};

traSchema.statics.deleteByTraid = function (traid) {
  return this.remove({ traid });
};

module.exports = mongoose.model('Tra', traSchema);