
import mongoose from "mongoose";
import sendResponse from "../../helper/sendResponse.js";
import categoriesMoodel from "../../modules/categories.js";


export const addCatagories = async (req, res) => {

try{

    const {categoryTitle, categoryIcon, categoryStatus} = req.body
    if(!categoryTitle || !categoryIcon || !categoryStatus){
        
        return sendResponse(
            res,
            400,
            null,
            true,
            "All fields are required")
    }
    const catagories = new categoriesMoodel({
        categoryTitle,
        categoryIcon,
        categoryStatus
    })
    const categoriesData = await catagories.save()  
    if(categoriesData){
        return sendResponse(
            res,
            200,
            categoriesData,
            false,
            "Catagories added successfully")
    }
    else{
        return sendResponse(
            res,
            400,
            null,
            true,
            "Catagories not added")
    }

}
catch(err){
     return sendResponse(
                res,
                500,
                null,
                true,
                "unable to add"
            )
    
}

}