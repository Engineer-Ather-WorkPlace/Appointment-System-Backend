
import sendResponse from "../../helper/sendResponse.js";
import surgeryModel from "../../modules/addNewSurgery.js";

export const AddNewSurgeon = async (req, res) => {

    try {

        const { surgeryTitle, newSurgeonDetails } = req.body

        // Validate 
        if (!surgeryTitle || !newSurgeonDetails) {
            return sendResponse(res, 400, null, true, "Empty feilds are not allowed")
        }

        // find surgery in db
        const surgeryExist = await surgeryModel.findOne({ surgeryTitle })

        // if surgery doesnt exisit 
        if (!surgeryExist) {
            return sendResponse(res, 400, null, true, "Surgery not found")
        }

        // if surgery exist then find surgon
        const findSurgon = surgeryExist.surgeon.some((s) =>  s.employID === newSurgeonDetails.employID )

        // if surgon exist
        if (findSurgon) { return sendResponse(res, 400, null, true, "Surgeon with this employID already exists") }

        // Add Surgon if doesnot exist
        const addNewSurgon = await surgeryModel.findOneAndUpdate(
            { surgeryTitle },
            { $push: { surgeon: newSurgeonDetails } },
            { new: true }
        )

        return sendResponse(
            res,
            200,
            addNewSurgon,
            false,
            "Surgeon added successfully"
        );

    }
    catch (error) {
        return sendResponse(
            res,
            500,
            null,
            true,
            "Internal Server Error"
        )
    }

}