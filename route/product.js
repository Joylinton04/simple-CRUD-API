import express from 'express'
import { addProduct, getAllProducts, updateProduct } from '../controller/ProductController.js';

const prodRoute = express.Router()

prodRoute.get('/', getAllProducts)
prodRoute.post('/product', addProduct)
prodRoute.put('/product/:id', updateProduct)




export default prodRoute;