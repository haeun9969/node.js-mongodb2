const mongoose = require('mongoose');

const interSchema = new mongoose.Schema({
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
  collection: '연예'
}, );


interSchema.statics.create = function (payload) {
  const inter = new this(payload);
  return inter.save();
};

interSchema.statics.findAll = function () {
  return this.find({});
};

interSchema.statics.findOneByInterid = function (interid) {
  return this.findOne({ interid });
};

interSchema.statics.updateByInterid = function (interid, payload) {
  return this.findOneAndUpdate({ interid }, payload, { new: true });
};

interSchema.statics.deleteByInterid = function (interid) {
  return this.remove({ interid });
};

module.exports = mongoose.model('Inter', interSchema);