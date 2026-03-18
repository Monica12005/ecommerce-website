import orderModel from "../models/orderModel.js"
import userModel from "../models/userModels.js"

//placing orders using COD Methos


const placeOrder = async (req , res) =>{
 try {
    const {userId , items , amount , address}=req.body

    const orderData ={
        userId ,
        items,
        amount,
        address,
        paymentMethod : "COD",
        payment : false ,
        date : Date.now()

    }

    const newOrder = new orderModel (orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId,{cartData:{}})

    res.json ({success:true , message:"order placed"})

      
 } catch (error) {
    console.log (error)
    res.json({success: false, message: error.message})
 
 }
}

import razorpay from 'razorpay'

// Initializing Razorpay
const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_YourKey',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'YourSecret',
})

//placing orders using stripe method
const placeOrderStripe = async (req , res) =>{

}

//placing orders using Razorpay Method method
const placeOrderRazorpay = async (req , res) =>{
    try {
        const { userId, items, amount, address } = req.body;
        
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "Razorpay",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const options = {
            amount: amount * 100, // amount in the smallest currency unit
            currency: "INR",
            receipt: newOrder._id.toString()
        };

        const order = await razorpayInstance.orders.create(options);
        res.json({ success: true, order });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// verify razorpay
const verifyRazorpay = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        // Verify signature here in a real app, but for simplicity assuming valid if we get here
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
        if (orderInfo.status === 'paid') {
            await orderModel.findByIdAndUpdate(orderInfo.receipt, { payment: true });
            await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
            res.json({ success: true, message: "Payment Successful" });
        } else {
            res.json({ success: false, message: "Payment Failed" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//All orders data for admin panel

const allOrders = async (req , res) =>{
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//All orders data for frontend

const userOrders = async (req , res) =>{
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


//update order status from Admin pane;

const updateStatus = async (req , res) =>{
    try {
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: 'Status Updated' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


export {placeOrder , placeOrderRazorpay , placeOrderStripe,allOrders,userOrders ,updateStatus, verifyRazorpay}
 
