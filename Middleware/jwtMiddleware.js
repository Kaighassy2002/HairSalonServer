const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    // step to verify token
    console.log("inside JWT middlewaer");
    const token = req.headers["authorization"].split(" ")[1]
    if (token) {
        console.log(token);
        try{const jswResponse=jwt.verify(token,process.env.JWT_SECRET)
        console.log(jswResponse);
        req.payload = jswResponse.userId
        next()
       }
        catch{
            res.status(401).json("Authorization failed ... Please login!!!")
        }
    }else{
        res.status(406).json("please provide token")
    }
}

module.exports = jwtMiddleware  