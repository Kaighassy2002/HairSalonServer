require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router =require('./Routes/router')
require('./DB/connection')


const HSServer = express()


HSServer.use(cors())
HSServer.use(express.json())
HSServer.use(router)




const PORT = 3000 || process.env.PORT

HSServer.listen(PORT,()=>{
    console.log(`Hair Salon Server start at port :${PORT}`);
})

HSServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:red">Hair Salon Server start and waiting for client Request!!!</h1>`)
})

