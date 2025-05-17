
import express from 'express';
import { addCatagories } from '../controller/catagories/addCategories.js';
import { getAllCategories } from '../controller/catagories/getAllCategories.js';

const categories = express.Router()

categories.post("/addCatagories", addCatagories)

categories.get("/getAllCategories", getAllCategories)


export default categories