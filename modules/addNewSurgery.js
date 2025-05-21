
import mongoose from "mongoose";

const surgerySchema = new mongoose.Schema({

    surgeryTitle: {
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
                name: { type: String, },
                education: { type: String, },
                experience: { type: String, },
                fees: { type: String, },
                image: { type: String },
                employID: {type: String,},
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