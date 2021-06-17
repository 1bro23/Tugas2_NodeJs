let router = require("express").Router();

router.get("/",function(req,res){
  res.send("ngetes")
})

let siswa = require("./siswaController");

router.route("/siswa")
  .get(siswa.index)
  .post(siswa.new);

module.exports = router;
