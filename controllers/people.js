const mysqlConnection = require("../app")
const mysql = require("mysql")


exports.createUser = (req,res) => {

    let sql = 'INSERT INTO people SET ?'
    mysqlConnection.query(sql,[req.body],(err,results,fields)=>{
        if(err){
         console.log(err)
        }else{
            res.json(results)
        }
    })


}