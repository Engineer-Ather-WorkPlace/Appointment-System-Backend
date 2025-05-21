
import sendResponse from "../../helper/sendResponse.js";
import surgeryModel from "../../modules/addNewSurgery.js";

export const AddNewSurgery = async (req, res) => {
    try {
        const { surgeryTitle, surgeryIcon, surgeon } = req.body;

        // Validate 
        if (!surgeryTitle?.trim() || !surgeryIcon?.trim()) {
            return sendResponse(res, 400, null, true, "Surgery Title & Surgery Icon are required");
        }

        // Check existing surgery 
        const surgeryExist = await surgeryModel.findOne({surgeryTitle});

        if (surgeryExist) {
            return sendResponse(res, 400, null, true, "This surgery already exists");
        }

        // Create new surgery 
        const newSurgery = new surgeryModel({ 
            surgeryTitle: surgeryTitle.trim(), 
            surgeryIcon: surgeryIcon.trim(), 
            surgeon: surgeon || [] // Empty array if no surgeons provided
        });
        
        const savedSurgery = await newSurgery.save();
        
        return sendResponse(res, 201, savedSurgery, false, "Surgery added successfully" + 
            (surgeon?.length ? " with surgeons" : " (no surgeons added)"));
            
    } catch (error) {
        console.error("Error adding surgery:", error);
        return sendResponse(res, 500, null, true, "Internal Server Error");
    }
};
