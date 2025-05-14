import { products } from "../dummyData/data.js"
import Joi from "joi"
import _ from 'lodash'


// get all products --
// add, read, update, delete
// store in mongodb

// console.log(products.map(pro => _.pick(pro, ['id','category','name','price','inStock','description'])))

export const getAllProducts = (req,res) => {
    res.send(products)
}

export const addProduct = (req,res) => {
    const {error} = validateProduct(req.body)
    if(error)
        return res.status(400).send(error.details[0].message);

    const {category, name, price, inStock, description} = req.body

    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        category: category,
        name: name,
        price: price,
        inStock: inStock,
        description: description
    }
    products.push(newProduct)
    res.send(newProduct)
}

export function validateProduct(product) {
    const schema = Joi.object({
        category: Joi.string().min(2).max(10).required(),
        name: Joi.string().min(2).max(55).required(),
        price: Joi.number().required(),
        inStock: Joi.boolean().required(),
        description: Joi.string().min(2).max(255).required(),
    })

    return schema.validate(product)
}