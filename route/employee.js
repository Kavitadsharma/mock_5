const express=require("express")
const {employeemodel}=require("../model/employee")
const employeerouter=express.Router()





employeerouter.get("/",async(req,res)=>{
    const employees= await employeemodel.find()
    res.send(employees)
})
employeerouter.post("/add",async(req,res)=>{
const {firstname,lastname,email,department,salary}=req.body
try{
    const employee=new employeemodel({firstname,lastname,department,email,department,salary})
    await employee.save()
    res.send({message:"employee created"})
}catch(error){
    console.log(error)
    res.send("error")
}
})



module.exports={
    employeerouter
}