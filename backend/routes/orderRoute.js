
import express from 'express'
import {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus, verifyStrip,verifyRazorpay} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js';

const orderRouter= express.Router()

// Admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//User feature
orderRouter.post('/userorders',authUser,userOrders)

//Verify Payment
orderRouter.post('/verifyStripe',authUser, verifyStrip)
orderRouter.post('/verifyRazorpay',authUser, verifyRazorpay)

export default orderRouter;