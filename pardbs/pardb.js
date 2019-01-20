//建立数据库中间件
var mongoose = require("mongoose");
//var bodyParser = require("body-parser");
var schema = mongoose.schema;
//这一句是连接上数据库
mongoose.connect('mongodb://localhost:27017/pardb', {useNewUrlParser: true});

const pardb = mongoose.connection;

pardb.on('error', console.error.bind(console, 'connection error:'))
     .once('open', (callback) => {
       console.log('connect ok!')
     });
//
module.exports = {mongoose, pardb};
