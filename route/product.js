import express from 'express'
import { addProduct, getAllProducts } from '../controller/ProductController.js';

const prodRoute = express.Router()

prodRoute.get('/', getAllProducts)
prodRoute.post('/product', addProduct)




export default prodRoute;