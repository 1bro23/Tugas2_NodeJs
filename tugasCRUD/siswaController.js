Contact = require('./siswaModel');

exports.index = function(req,res){
  Contact.get(function(err,contact){
    if(err)
    res.send(err)
    res.json({
      status:"success",
      message:"data siswa berhasil diambil dong!!!",
      data:contact
    })
  })
}

exports.new = function(req,res){
  var contact = new Contact();
  contact.nama = req.body.nama;
  contact.tanggallahir = req.body.tanggallahir;
  contact.jeniskelamin = req.body.jeniskelamin;
  contact.hobi = req.body.hoi;

  contact.save(function(err){
    res.json({
      message:"siswa berhasil ditambahkan loh!!!",
      data:contact
    })
  });
}
