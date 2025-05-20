
import sendResponse from "../../helper/sendResponse.js";
import surgeryBookingModel from "../../modules/surgeryBooking.js";

export const quickSurgeryBooking = async (req, res) => {
    try {
        const { patientName, contactNumber, surgery } = req.body

        if (!patientName || !contactNumber || !surgery) {
            return sendResponse(
                res,
                400,
                null,
                true,
                "empty feilds, Not Allowed "
            )
        }

        const newSurgeryBooking = new surgeryBookingModel({ patientName, contactNumber, surgery })

        const saveSurgeryBooking = await newSurgeryBooking.save()

        return sendResponse(
            res,
            200,
            saveSurgeryBooking,
            false,
            "Request submitted successfully"
        )

    }
    catch (error) {
       
        if (error.name === 'ValidationError') {
            return sendResponse(
                res,
                400,
                null,
                true,
                error.message 
            );
        }

        return sendResponse(
            res,
            500,
            null,
            true,
            "Unable to add booking"
        );
    }

}