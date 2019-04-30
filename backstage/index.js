const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const app =express();
//DB config
const db =require("./config/keys").mongoURI;


const users = require("./routes/api/users")

//连接DB
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
mongoose.connect(db)
    .then(() => console.log("------数据库连接成功！------  asdasd"))
    .catch(error => console.log("数据库连接失败 ：" + error))

app.get("/",(req,res)=>{
    res.send("Hello 11")
})

app.use("/api/users",users)

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Sever run ${port}`)
})