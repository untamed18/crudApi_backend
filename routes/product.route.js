const express = require ('express')
const router = express.Router();
const {getProduct, getProducts, createProduct, updateProduct, deleteProduct } = require('../controller/product.controller.js')



router.get('/:id',getProduct)//get single product
router.get('/', getProducts) //get all products
router.post('/', createProduct)//create product
router.put('/:id/', updateProduct)//update product
router.delete('/:id/', deleteProduct)//delete product 

 

module.exports = 
    router
