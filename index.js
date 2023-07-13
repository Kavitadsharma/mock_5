const express=require("express")
const { connection } = require("./config/db")
const { employeerouter } = require("./route/employee")
const {userrouter}=require("./route/user")
const cors=require("cors")

require("dotenv").config()
const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("home page")
})
app.use('/auth',userrouter)
app.use('/employee',employeerouter)



app.listen(8080,async()=>{
    try{
        await connection
   console.log("connected to db")
    }catch(error){
        console.log("error")
    }
    console.log("connected to server")
})
