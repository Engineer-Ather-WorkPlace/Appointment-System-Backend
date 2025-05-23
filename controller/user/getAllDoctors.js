
import sendResponse from "../../helper/sendResponse.js";
import doctorModel from "../../modules/addDoctor.js";


export const getAllDoc = async(req, res)=>{

    try{

        const allDoctors = await doctorModel.find()

        if (!allDoctors) {
                    return sendResponse(
                        res,
                        404,
                        null,
                        true,
                        "No Doctor found"
                    )
                }
                return sendResponse(
                    res,
                    200,
                    allDoctors,
                    false,
                    "Doctors List fetched successfully"
                )

    }
    catch(error){
        sendResponse(
            res,
            500,
            null,
            true,
            error.message
        )
    }
}