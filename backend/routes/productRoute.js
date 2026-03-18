import express from 'express'
import{addProduct, listProducts, removeProduct, singleProduct, updateProduct} from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminauth.js';

const ProductRouter = express.Router();

ProductRouter.post('/add',adminAuth,upload.fields([{name: "image1", maxCount: 1},{name: "image2", maxCount: 1},{name: "image3", maxCount: 1},{name: "image4", maxCount: 1}]), addProduct);
ProductRouter.post('/remove', adminAuth, removeProduct);
ProductRouter.post('/update', adminAuth, updateProduct);
ProductRouter.post('/single', singleProduct);
ProductRouter.get('/list', listProducts);

export default ProductRouter;