
const express = require("express")
const bodyParser = require("body-parser")
const peopleRoutes = require("./routes/people")
const mysqlConnection = require("./daabase")



mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Connected")
    }
    else{
        console.log(err)

    }
})

const app = express()
app.use(bodyParser.json())



app.listen(3000,(err)=>{
    console.log("server started")
})



app.use("/app",peopleRoutes)

module.exports = mysqlConnection