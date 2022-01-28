const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
require('../db/conn');
const Order = require("../models/orderSchema");
router.post('/orders',(req,res)=>{
    const {name,address,city,country,postalCode}=req.body;
    try{
        const order = new Order({ name,address,city,country,postalCode });

            await user.save();
    }
    catch(err){
        console.log(err);
    }
});

const mailer = (emailAddress, code) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user:'farhatkhan.neosoft@gmail.com',
            pass: process.env.PASSWORD
        }
    });

    var mailOptions = {
        from : 'farhatkhan.neosoft@gmail.com',
        to : emailAddress,
        subject:'Order Details',
        text: `Your OTP for reset password is ${code}`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else {
            console.log('Email sent :' +info.response);
        }
    });

}
module.exports = router;