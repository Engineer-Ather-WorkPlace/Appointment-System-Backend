
import sendResponse from "../../helper/sendResponse.js";
import doctorModel from "../../modules/addDoctor.js";

export const getSpecificDoctor = async(req,res) =>{
    try{

        const {employID}= req.body

        const findDoctor  = await doctorModel.findOne({employID}).select('-password');

        if(!findDoctor){
            return sendResponse(
                res,
                404,
                null,
                true,
                "Doctor Not Found",
            )
        }

        return sendResponse (
            res,
            200,
            findDoctor,
            false,
            "data fetched successfully"
        )
    }
    catch(error){
        return sendResponse(
            res,
            500,
            null,
            true,
            error.message
        )
    }
}