import express from 'express';
import { createProduct, getProduct, getProducts, removeProduct, updateProduct } from '../controllers/productController.js';
import { checkFile, updateFile } from '../middlewares/fileCheck.js';
import { productShchema, productUpdateSchema, validatorJoi } from '../utils/validator.js';




const router = express.Router();

//getAllProducts,getTopRatedProducts, searchProduct,productAdd, 
router.route('/products').get(getProducts).post(validatorJoi.body(productShchema), checkFile, createProduct);


//   getProductById, deleteProduct, updateProduct, 
router.route('/products/:id').get(getProduct).patch(validatorJoi.body(productUpdateSchema), updateFile,
  updateProduct).delete(removeProduct);

export default router;

