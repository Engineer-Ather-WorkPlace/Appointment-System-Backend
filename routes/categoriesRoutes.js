
import express from 'express';
import { addCategories } from '../controller/categories/addCategories.js';
import { getAllCategories } from '../controller/categories/getAllCategories.js';
import { getSameCategoryDoctors } from '../controller/categories/getSameCatagoryDoctor.js';

const categories = express.Router()

categories.post("/addCatagories", addCategories)

categories.get("/getAllCategories", getAllCategories)

categories.get("/doctorWithSameCatagory", getSameCategoryDoctors)


export default categories