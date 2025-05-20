
import sendResponse from "../../helper/sendResponse.js";
import quickSurgeryBookingModal from "../../modules/quickSurgery.js";

export const quickSurgeryBooking = async (req, res) => {
    try {
        const { patientName, contactNumber, resuestForSurgery } = req.body

        if (!patientName || !contactNumber || !resuestForSurgery) {
            return sendResponse(
                res,
                400,
                null,
                true,
                "empty feilds, Not Allowed "
            )
        }

        const newSurgeryBooking = new quickSurgeryBookingModal({ patientName, contactNumber, resuestForSurgery })

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