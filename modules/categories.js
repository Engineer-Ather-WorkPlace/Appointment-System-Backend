
import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({

    categoryTitle: { 
        type: String, 
        required: true 
    },
    categoryIcon: { 
        type: String, 
        required: true 
    },
    categoryStatus:{
        type:String,
        enum: ["Active", "Inactive"],
        default: "Active",
    }
})


const categoriesMoodel = mongoose.models.categoriesSchema || mongoose.model("categoriesSchema", categoriesSchema);  
export default categoriesMoodel;  