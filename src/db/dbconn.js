//该文件（公共文件）的功能：链接数据库的代码
const mongoose = require("mongoose");

module.exports = mongoose.createConnection("localhost","mydb");
