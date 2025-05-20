
import mongoose from "mongoose";

const surgerySchema = new mongoose.Schema({

    surgery: {
        type: String,
        required: true,
    },

    surgeryIcon: {
        type: String,
        required: true
    },

    surgeon: {
        type: [
            {
                name: { type: String, required: true },
                education: { type: String, required: true },
                experience: { type: String, required: true },
                fees: { type: String, required: true },
                image: { type: String },
                employID: {type: String, required: true, unique: true},
            }
        ],
        default: []
    }
},
    {
        timestamps: true
    })

const surgeryModel = mongoose.models.surgeries || mongoose.model("surgeries", surgerySchema)
export default surgeryModel