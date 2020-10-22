const { genSaltSync, hashSync,compareSync } = require("bcrypt");
const express = require("express")


const router = express.Router();
const mysqlConnection = require("../daabase")
const {} = require("bcrypt")

router.post("/user",(req,res) => {

    const body = req.body
    const salt = genSaltSync(10);
    body.password = hashSync(body.password,salt)
    console.log(body.password)
    mysqlConnection.query('INSERT INTO main_account(username,password) VALUES (?,?)',
    [
    req.body.username,
    req.body.password
    ],
    (err,results,fields)=>{
        if(err){
         console.log(err)
        }else{
            res.json({
                'STATUS':"account created"
            })
        }
    })
   })

   router.post("/user/auth",(req,res) => {
    mysqlConnection.query('SELECT * FROM main_account where username = ?',
    [
    req.body.username,
    ],
    (err,results,fields)=>{
        if(err){
         return console.log(err)
        }
       
        if(!results){
            res.json({
                'status':'user not found'
            })
        }

        else{
            if(compareSync(req.body.password,  results[0].password)){
            res.json({
                'status':'success',
                'userid': results[0].userid
            })
            }
            else{
                res.json({
                    'status':'user not found'
                })

            }
        }
    })
   })

   router.post("/sites/:id",(req,res) => {
    mysqlConnection.query('INSERT into accounts_table(id,website,w_username,w_password) values(?,?,?,?)',
    [
    req.params.id,
    req.body.website,
    req.body.w_username,
    req.body.w_password


    ],
    (err,results,fields)=>{
        if(err){
         return console.log(err)
        }

        else{
            res.json({
                'status':'success',
            })
        }
    })
   })

   router.get("/sites/list/:id",(req,res) => {
    mysqlConnection.query('SELECT * from accounts_table where id = ?',
    [
    req.params.id,
    ],
    (err,results,fields)=>{
        if(err){
         return console.log(err)
        }

        else{
            res.json({
                'status':'success',
                 "response data":results
            })
        }
    })
   })







module.exports = router