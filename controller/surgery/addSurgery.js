
import sendResponse from "../../helper/sendResponse.js";
import surgeryModel from "../../modules/surgery.js";

export const AddSurgery = async (req, res) => {

    try {

        const { surgery, surgeryIcon, surgeon } = req.body

        if (!surgery, !surgeryIcon) {
            return sendResponse(
                res,
                400,
                null,
                true,
                "empty feilds, Not Allowed "
            )
        }

        const surgeryExist = await surgeryModel.findOne({surgery});

        if (surgeryExist) {
                    return sendResponse(
                        res,
                        400,
                        null,
                        true,
                        "Aready exist");
                }
        
        const newSurgey = new surgeryModel({ surgery, surgeryIcon, surgeon })

        const newSurgeyData = await newSurgey.save()

        if (newSurgeyData) {
            return sendResponse(
                res,
                200,
                newSurgeyData,
                false,
                "Surgery Added Successfully"
            )
        }
        else {
            return sendResponse(
                res,
                500,
                null,
                true,
                "Can not add "
            )
        }

    }

    catch (errro) {
        return sendResponse(
            res,
            500,
            null,
            true,
            "unable to add "
        )
    }
}