const bookings = require("../Models/bookingModel");


// add booking
exports.bookingdetails = async (req,res)=>{
console.log("inside booking request");
console.log(req.payload);
 console.log(req.body);
const {date,time,cutting,coloring,styling}= req.body
const userId  = req.payload
console.log(date,time,cutting,coloring,styling);
// res.status(200).json("newUser")
try{
  const exisitingBooking = await bookings.findOne({ date, time })
  if (exisitingBooking) {
      res.status(406).json("Booking already available in our systam, kindly Booking another!!!")
  }else{
      const newbooking = new bookings({
        date,time,cutting,coloring,styling,userId
      })
      await newbooking.save()
      res.status(200).json(newbooking) 
  }
}catch(err){
  res.status(401).json(err)
}
}
// try{
//     const newBooking = new bookings({
        
//         date,
//         time,
//         cutting,
//         coloring,
//         styling
        
//     });
//     // Save the booking to the database
//     const savedBooking = await newBooking.save();

//     // Send success response
//     res.status(200).json(savedBooking);
// }catch(err){
//     res.status(401).json(err)
// }



//get user booking
exports.getUserbooking = async (req,res)=>{
    const userId = req.payload
    try{
      const userbooking = await bookings.find({userId})
      res.status(200).json(userbooking)
    }catch(err){
      res.status(401).json(err)
    }
}