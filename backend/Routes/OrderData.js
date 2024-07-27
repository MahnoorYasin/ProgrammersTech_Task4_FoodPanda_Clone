const express = require('express');
const router = express.Router();
const Order = require("../models/Order");

router.post('/orderData', async (req, res) => {
    try {
        const { order_data, email, order_date } = req.body;  // Destructure request body

        if (!email) {
            return res.status(400).send({ error: "Email is required" });  // Validate email presence
        }

        console.log('Order data received:', order_data);
        console.log('Email:', email);

        // Add order_date to order_data
        order_data.unshift({ Order_date: order_date });

        let existingOrder = await Order.findOne({ email });
        console.log('Existing user:', existingOrder);

        if (!existingOrder) {
            try {
                await Order.create({
                    email,
                    order_data: [order_data]
                });
                return res.json({ success: true });
            } catch (error) {
                console.error('Error creating order:', error.message);
                return res.status(500).send({ error: "Server error while creating order", message: error.message });
            }
        } else {
            try {
                await Order.findOneAndUpdate(
                    { email },
                    { $push: { order_data: order_data } }
                );
                return res.json({ success: true });
            } catch (error) {
                console.error('Error updating order:', error.message);
                return res.status(500).send({ error: "Server error while updating order", message: error.message });
            }
        }
    } catch (error) {
        console.error('Server error:', error.message);
        return res.status(500).send({ error: "Server error", message: error.message });
    }
});

router.post('/myorderData',async (req,res)=>{
    try{
        let myData = await Order.findOne({'email':req.body.email})
        res.json({orderData : myData})
    }catch(error)
    {
        res.send("Server Error",error.message)
    }
})
module.exports = router;
