
import mongoose from "mongoose";
import sendResponse from "../../helper/sendResponse.js";
import surgeryModel from "../../modules/addNewSurgery.js";

export const getAllSurgeries = async(req, res)=>{

    try{
        const allSeugeries = await surgeryModel.find()
        return sendResponse (res, 200, allSeugeries, false, "Fetched data Successfully")
    }
    catch(error){
        return sendResponse(res, 500, null, true, error.message)
    }
}