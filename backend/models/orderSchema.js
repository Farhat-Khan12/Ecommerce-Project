const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    Name: String,
    Address: String,
    City: String,
    Counrty: String,
    PostalCode: String,
    OrderItems: Array,
    TotalAmount: Number

}, { timestamps: true })

const Orders = mongoose.model('orders', orderSchema);
module.exports = Orders;
