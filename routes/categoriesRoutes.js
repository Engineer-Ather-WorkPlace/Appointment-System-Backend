
import express from 'express';
import { addCategories } from '../controller/categories/addCategories.js';
import { getAllCategories } from '../controller/categories/getAllCategories.js';

const categories = express.Router()

categories.post("/addCatagories", addCategories)

categories.get("/getAllCategories", getAllCategories)


export default categories