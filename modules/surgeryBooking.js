
import mongoose, { Schema } from "mongoose";

const surgeryBookingSchema = new mongoose.Schema({

    patientName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true,
        match: [/^03[0-9]{9}$/, 'Please enter a valid Pakistani mobile number']
    },
    surgery: {
        type: String,
        required: true,
        // enum: {
        //     values: ['Appendix', 'Heart', 'Kidney', 'Eye'], 
        //     message: '{VALUE} is not an available surgery' ,
        // }
    }
},
    {
        timestamps: true,
    })

const surgeryBookingModel = mongoose.models.surgeryBooking || mongoose.model("surgeryBooking", surgeryBookingSchema)

export default surgeryBookingModel;