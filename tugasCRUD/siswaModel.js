let mongoose = require("mongoose");

let modelnya = mongoose.Schema({
  create_date:{
    type:Date,
    default:Date.now
  },
  nama:{
    type:String,
    required:true
  },
  tanggallahir:String,
  jeniskelamin:String,
  hobi:String
})

var Contact = module.exports = mongoose.model("kontak",modelnya);
module.exports.get = function(callback,limit){
  Contact.find(callback).limit(limit)
} ;
