const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const passport = require('passport')
const app = express();
//DB config
const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users")

//bodyParser 中间件
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

//连接DB
mongoose.connect(db)
    .then(() => console.log("------数据库连接成功！------  asdasd"))
    .catch(error => console.log("数据库连接失败 ：" + error))


//passport 初始化
app.use(passport.initialize())
require('./config/passport')(passport)
app.use("/api/users", users)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Sever run ${port}`)
})