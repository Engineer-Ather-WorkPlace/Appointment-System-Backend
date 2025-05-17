
import mongoose from "mongoose";

const surgerySchema = new mongoose.Schema({
    
    surgery:{
        type:String,
        required:true,
    },

    surgeryIcon:{
        type:String,
        required:true
    },

    surgeon:{
        type:[
            {
                name:{type:String, required:true},
                education:{type:String, required:true},
                experience:{type:String, required:true},
                fees:{type:String, required:true},
                image:{type:String}
            }
            ],
        default: []
    }
},
{
    timestamps:true
})

const surgeryModel = mongoose.models.surgerySchema || mongoose.model("surgerySchema", surgerySchema)
export default surgeryModel