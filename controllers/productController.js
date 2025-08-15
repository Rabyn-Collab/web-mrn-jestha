import Product from "../models/Product.js"
import mongoose from "mongoose"
import fs from 'fs';
import { removeFile } from "../utils/removeFile.js";


export const getProducts = async (req, res) => {

  try {
    const products = await Product.find({}).select('title category');
    return res.status(200).json(products);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }




}


export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {

    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'please provide valid id' });
    const isExist = await Product.findById(id);
    if (!isExist) res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(isExist);

  } catch (err) {
    return res.status(400).json({ message: err.message });

  }
}

export const createProduct = async (req, res) => {
  try {
    await Product.create({
      ...req.body,
      image: req.imagePath
    });
    return res.status(201).json({ message: 'Product created successfully' });
  } catch (err) {
    fs.unlink(`./uploads/${req.imagePath}`, (error) => {
      return res.status(400).json({ message: err.message });
    })

  }

}



export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {

    if (!mongoose.isValidObjectId(id)) {
      if (req.imagePath) removeFile(req.imagePath);
      return res.status(400).json({ message: 'please provide valid id' });
    }
    const isExist = await Product.findById(id);

    if (!isExist) {
      if (req.imagePath) removeFile(req.imagePath);
      return res.status(404).json({ message: 'Product not found' });
    }



    isExist.title = req.body?.title || isExist.title;
    isExist.description = req.body?.description || isExist.description;
    isExist.brand = req.body?.brand || isExist.brand;
    isExist.price = req.body?.price || isExist.price;
    isExist.category = req.body?.category || isExist.category;
    if (req.imagePath) removeFile(isExist.image);
    isExist.image = req.imagePath || isExist.image;

    await isExist.save();
    return res.status(200).json({ message: 'product updated successfully' });

  } catch (err) {
    if (req.imagePath) removeFile(req.imagePath);
    return res.status(400).json({ message: err.message });
  }
}








export const removeProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'please provide valid id' });
    const isExist = await Product.findById(id);

    if (!isExist) res.status(404).json({ message: 'Product not found' });

    fs.unlink(`./uploads/${isExist.image}`, async (error) => {
      await isExist.deleteOne();
      return res.status(200).json({ message: 'Product deleted successfully' });
    });

  } catch (err) {
    return res.status(400).json({ message: err.message });

  }
}