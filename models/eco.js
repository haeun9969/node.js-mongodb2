const mongoose = require('mongoose');

const ecoSchema = new mongoose.Schema({
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
  collection: '경제'
}, );


ecoSchema.statics.create = function (payload) {
  const eco = new this(payload);
  return eco.save();
};

ecoSchema.statics.findAll = function () {
  return this.find({});
};

ecoSchema.statics.findOneByEcoid = function (ecoid) {
  return this.findOne({ ecoid });
};

ecoSchema.statics.updateByEcoid = function (ecoid, payload) {
  return this.findOneAndUpdate({ ecoid }, payload, { new: true });
};

ecoSchema.statics.deleteByEcoid = function (ecoid) {
  return this.remove({ ecoid });
};

module.exports = mongoose.model('Eco', ecoSchema);