import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from './config/cloudinary.js';
import UserRouter from './routes/userRoutes.js';
import ProductRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';


//app config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user', UserRouter);
app.use('/api/product', ProductRouter);
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// only start server if not running in a serverless environment (like Vercel)
if (process.env.NODE_ENV !== 'production' || port) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

export default app;
