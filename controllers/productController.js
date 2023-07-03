const Product = require('../models/Product');


// Get all products
const getProducts = async (req, res) => {};

// Save a product
const saveProduct = async (req, res) => {};

// Update a product
const updateProduct = async (req, res) => {
  const productId= req.params.id
  try{
    const updateProduct = await Product.findByIdAndUpdate(productId, req.body, {new:true})
    res.status(200).json({
      message:"Update product success",
      data: updateProduct
    })
  } catch(error){
    res.status(500).json({
      message:"Update product failed",
      data: error
    })
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try{
    const deleteProduct = await Product.findByIdAndDelete(productId, req.body)

    res.status(200).json({
      message:"Delete product success",
    })
  } catch(error){

  }
};

module.exports = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}