const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
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
  collection: '정치'
}, );


dataSchema.statics.create = function (payload) {
  const data = new this(payload);
  return data.save();
};

dataSchema.statics.findAll = function () {
  return this.find({});
};

dataSchema.statics.findOneByDataid = function (dataid) {
  return this.findOne({ dataid });
};

dataSchema.statics.updateByDataid = function (dataid, payload) {
  return this.findOneAndUpdate({ dataid }, payload, { new: true });
};

dataSchema.statics.deleteByDataid = function (dataid) {
  return this.remove({ dataid });
};

module.exports = mongoose.model('Data', dataSchema);