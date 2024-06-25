

const bcrypt = require('bcrypt');
const Usereve = require("../../modal/User");

const userSignUp = async(req,res)=>{
  const {firstname, lastname, email, password}=req.body;
  const existingCustomer = await Usereve.findOne({email});

if(existingCustomer){
  return res.status(400).json({error:'email alredy exist'})
}

  const salt=await bcrypt.genSalt(10)
  const hashedpassword =await bcrypt.hash(password,salt)
  
  const Customerdetails = await Usereve.create({
     firstname, lastname,email,password: hashedpassword,

})
// res.json(Customerdetails)
}
module.exports=userSignUp