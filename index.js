let express = require('express');
let app = express();
let apiRouter = require('./Routing');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

var port = process.env.PORT || 8080;

//konfigurasi body parser
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());

//connect mongoose db and connection variable
mongoose.connect('mongodb+srv://yosieam:25051997am@mukhtaruldakwat-4xais.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

app.get('/',(req,res)=> res.send("data api mukhtarul dakwat"));
app.listen(port,function(){
  console.log("wanna one");
})

app.use('/api',apiRouter)

module.export = app;
