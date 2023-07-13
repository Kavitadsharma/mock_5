const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:String,
    password:String,
    confirmpassword:String

})
const usermodel=mongoose.model("user",userSchema)


module.exports={usermodel

}