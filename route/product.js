import express from 'express'
import { addProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controller/ProductController.js';

const prodRoute = express.Router()

prodRoute.get('/', getAllProducts)
prodRoute.get('/product/:id', getProduct)
prodRoute.post('/product', addProduct)
prodRoute.put('/product/:id', updateProduct)
prodRoute.delete('/product/:id', deleteProduct)




export default prodRoute;