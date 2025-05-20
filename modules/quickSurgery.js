
import mongoose from "mongoose";

const quickSurgeryBookingSchema = new mongoose.Schema({

    patientName: { type: String, required:true },
    contactNumber: {
        type: String,
        required: true,
        match: [/^03[0-9]{9}$/, 'Please enter a valid Pakistani mobile number']
    },
    resuestForSurgery: {
        type: String, required: true
    }
},{
    timestamps:true
})

const quickSurgeryBookingModal = mongoose.models.requestForSurgeryBooking || mongoose.model("requestForSurgeryBooking", quickSurgeryBookingSchema)

export default quickSurgeryBookingModal