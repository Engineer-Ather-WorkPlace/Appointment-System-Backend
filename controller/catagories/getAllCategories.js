
import sendResponse from "../../helper/sendResponse.js";
import categoriesMoodel from "../../modules/categories.js";

export const getAllCategories = async(req, res)=>{

    try{

        const allCategories = await categoriesMoodel.find()

        if(!allCategories){
            return sendResponse(
                res,
                404,
                null,
                true,
                "no data found"

            )
        }
        return sendResponse(
            res,
            200,
            allCategories,
            false,
            "all categories fetch successfully"
        )

    }
    catch(error){
        return sendResponse(
            res,
            500,
            null,
            true,
            "unable to get "
        )
    }
}