var mongoose = require('mongoose');
var doaSchema = mongoose.Schema({
  nama:{
    type:String,
    required:true
  },
  arab:String,
  latin:String,
  keterangan:String,
  kategori:String,
});

var Doa = module.exports = mongoose.model('doa',doaSchema);
module.exports.get = function(callback,limit){
  Doa.find(callback).limit(limit);
};
