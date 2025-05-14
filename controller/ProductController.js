import { products } from "../dummyData/data.js";
import Joi from "joi";
import _ from "lodash";

// get all products -- done
// add -- done , read, update, delete
// store in mongodb

// console.log(products.map(pro => _.pick(pro, ['id','category','name','price','inStock','description'])))

export const getAllProducts = (req, res) => {
  res.send(products);
};
export const addProduct = (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { category, name, price, inStock, description } = req.body;

  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    category: category,
    name: name,
    price: price,
    inStock: inStock,
    description: description,
  };
  products.push(newProduct);
  res.send(newProduct);
};

export const updateProduct = (req, res) => {
    const { category, name, price, inStock, description } = req.body;
    const { id } = req.params;
  
    const product = products.find((pro) => pro.id == id);
  
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    
    product.name = name;
    product.price = price;
    product.category = category;
    product.inStock = inStock;
    product.description = description;
  
    res.json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  };
  

export function validateProduct(product) {
  const schema = Joi.object({
    category: Joi.string().min(2).max(50).required(),
    name: Joi.string().min(2).max(55).required(),
    price: Joi.number().required(),
    inStock: Joi.boolean().required(),
    description: Joi.string().min(2).max(255).required(),
  });

  return schema.validate(product);
}
