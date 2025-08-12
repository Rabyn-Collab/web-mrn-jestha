import Product from "../models/Product.js"
import mongoose from "mongoose"



export const getProducts = async (req, res) => {





}


export const getProduct = (req, res) => {

}

export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    return res.status(201).json({ message: 'Product created successfully' });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }


}

export const updateProduct = (req, res) => {


}

export const removeProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'please provide valid id' });
    await Product.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Product deleted successfully' });

  } catch (err) {
    return res.status(400).json({ message: err.message });

  }
}