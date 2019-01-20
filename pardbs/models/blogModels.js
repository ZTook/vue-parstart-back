//连接mongodb数据
var pardb = require('../pardb');

var blogSchema = pardb.mongoose.Schema({
  blogid: String,
  blogtitle: String,
  blogcontent: String
})

var Blogs = pardb.mongoose.model('Blogs', blogSchema);

module.exports = Blogs;
