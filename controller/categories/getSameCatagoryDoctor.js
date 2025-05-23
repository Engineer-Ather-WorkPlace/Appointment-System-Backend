import sendResponse from "../../helper/sendResponse.js";
import doctorModel from "../../modules/addDoctor.js";

export const getSameCategoryDoctors = async (req, res) => {
    try {
        const { catagory } = req.body;

        const doctorsWithSameCategory = await doctorModel.find({
            "specialization.catagory": catagory,
        }).select("-password");

        if (doctorsWithSameCategory.length === 0) {
            return sendResponse(res, 404, [], true, "No doctors found in this category");
        }

        return sendResponse(res, 200, doctorsWithSameCategory, false, "Doctors fetched successfully");
    } catch (error) {
        return sendResponse(res, 500, null, true, error.message);
    }
};
