let express = require("express");

let app = express();

let port = process.env.port || 8080;



let bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({
  extended:true
}));
app.use(bodyparser.json());

let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tugasCRU",{ useUnifiedTopology: true,useNewUrlParser: true });
var db = mongoose.connection;

let router = require('./api-routes');

app.use("/api",router);

app.get("/",function(req,res){
  res.send("welcome")
})

app.listen(port, function(){
  console.log("server start at localhost:"+port)
})
