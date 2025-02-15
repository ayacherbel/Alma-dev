const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

// recieve les list des produits 
router.get('/', getProducts);
// receive produit selon id 
router.get("/:id", getProduct);

//create and save new produit 
router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);




module.exports = router;