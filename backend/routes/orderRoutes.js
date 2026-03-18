// import express from 'express'
// import {placeOrder , placeOrderRazorpay , placeOrderStripe,allOrders,userOrders ,updateStatus} from '../controllers/orderController.js'
// import adminAuth from '../middleware/adminAuth.js'
// import authUser from '../middleware/auth.js'

// const orderRouter = express.Router()
// //Admin Features
// orderRouter.post ('/list', adminAuth,allOrders)
// orderRouter.post ('/status', adminAuth,updateStatus)

// //payment features

// orderRouter.post('/place',authUser, placeOrder) 
// orderRouter.post ('/stripe',authUser,placeOrderStripe)
// orderRouter.post ('/razorpay',authUser,placeOrderRazorpay)


// //user Feature

// orderRouter.post('/userorders',authUser,userOrders) 

// export default orderRouter

import express from "express";

import {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
  verifyRazorpay
} from "../controllers/orderController.js";

import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin routes
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment routes
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay);

// User routes
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;