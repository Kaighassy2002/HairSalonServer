const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    
    date:{
        type:String,
        required:true  
    },
    time:{
        type:String,
        required:true 
    },
    cutting:{
        type:String,
        
    },
    coloring:{
        type:String,
        
    },
    styling:{
        type:String,
        
    },
    userId:{
        type:String,
        required:true  
    }
})

const bookings = mongoose.model("booking",bookingSchema)

module.exports = bookings