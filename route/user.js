
const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const userrouter=express.Router()
const {usermodel} =require("../model/user")

userrouter.post("/signup",async(req,res)=>{
    const{email,password,confirmpassword}=req.body
    try{
        const hashedpassword=await bcrypt.hash(password,10)
        const user=new usermodel({email,password:hashedpassword,confirmpassword})
        await user.save()
        res.send({msg:"user register"})
    }catch(error){
        console.log(error)
        res.send({msg:"error"})
    }

}
)
userrouter.post("/login",async(req,res)=>{
    const{email,password}=req.body
    try{
        const user= await usermodel.findOne({email})
        if(!user){
            res.send({msg:"please register first"})
        }
        const pass=await bcrypt.compare(password,user.password)
        if(!pass){
            res.send({msg:"wrong credentials"})
        }
        const token=jwt.sign({userid:user._id},"kavita")
        res.send({token})
    }catch(error){
        console.log(error)
        res.send({msg:"eroor"})
    }
})


module.exports={
   userrouter
}