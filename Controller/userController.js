const users = require("../Models/userModel");
const jwt = require('jsonwebtoken')

//register
exports.register= async(req,res)=>{
    console.log("inside Register Request!!");
    const {username,email,password}= req.body
    console.log(username,email,password);
   try{
       // check mail is present db or not
       const exisitingUser = await users.findOne({email})
       //if mail is present then exisiting user
       if (exisitingUser) {
           res.status(406).json(" User Already exists!!!")  
       }else{
        //else store/ insert data to db
           const newUser = new users({
               username,email,password,mobile:""
           })
           //to store data to mongodb
          await newUser.save()
          res.status(200).json(newUser)
       }
   
   }catch(err){
       res.status(401).json(err)
   }
// res.status(200).json("newUser")
   }

// login 
exports.login = async(req,res)=>{
 console.log("inside login function");
 //get email password from req
 const {email,password}=req.body
    console.log(email,password);
   try{
    const exisitingUser = await users.findOne({email,password})
    if (exisitingUser) {
        // user can login
        //genarate token
        const token = jwt.sign({userId:exisitingUser._id},process.env.JWT_SECRET)
        res.status(200).json({
            exisitingUser,
            token
        })
    }else{
        //incorrecort email/password
        res.status(404).json("incorrecort email/password")
    }
   }catch(err){
    res.status(401).json(err)
   } 
}