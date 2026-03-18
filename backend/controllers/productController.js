import { v2 as cloudinary } from 'cloudinary';
import ProductModel from '../models/productModel.js';

// function for add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
        console.log("body", req.body);
        console.log("files", req.files);

        let images = [];

        for (let key in req.files) {
            images.push(req.files[key][0]);
        }

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {
                    resource_type: "image"
                });
                return result.secure_url;
            })
        );

        const productData = {
            name,
            description,
            price: Number(price),
            image: imagesUrl,
            category,
            subcategory: subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === "true" ? true : false,
            date: Date.now()
        }

        const product = new ProductModel(productData);
        console.log("product save in db", product);

        await product.save();

        res.json({ success: true, message: "Product added successfully" });

    }

    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//function for list products
const listProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.json({ success: true, products })
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }

}


//function remove product
const removeProduct = async (req, res) => {

    try {

        await ProductModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product removed successfully" });
    }


    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


//function for single product info
const singleProduct = async (req, res) => {
    try {

        const { productId } = req.body;

        const product = await ProductModel.findById(productId);

        res.json({ success: true, product });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//function for update product
const updateProduct = async (req, res) => {
    try {
        const { id, name, description, price, category, subcategory } = req.body;
        await ProductModel.findByIdAndUpdate(id, { name, description, price, category, subcategory });
        res.json({ success: true, message: "Product updated successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addProduct, listProducts, removeProduct, singleProduct, updateProduct }



