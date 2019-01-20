//连接mongodb数据
var pardb = require('../pardb');

var userSchema = pardb.mongoose.Schema({
  userid: String,
  password: String
})

var Users = pardb.mongoose.model('Users', userSchema);

module.exports = Users;
