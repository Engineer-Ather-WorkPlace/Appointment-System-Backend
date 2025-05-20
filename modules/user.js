import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    phoneNumber: { 
        type: [String], 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    joiningDate: { 
        type: Date, 
        required: true 
    },
    employID: { 
        type: String, 
        required: true, 
        unique: true 
    },
    role: {
        type: String,
        enum: ["Admin", "Doctor", "Staff"], 
        required: true,
    },
    specialization: {
        type: String,
        required: function () { return this.role === 'Doctor'; },
        // enum: [
        //     "Cardiology", "Neurology", "Dermatology", 
        //     "Pediatrics", "Orthopedics", "General" 
        // ]
    },
    qualifications: { 
        type: [String], 
        required: function () { return this.role === 'Doctor'; } 
    },
    experienceYears: { 
        type: Number, 
        required: function () { return this.role === 'Doctor'; } 
    },
    // schedule: {
    //     type: [{
    //         day: {
    //             type: String,
    //             enum: [
    //                 "Monday", "Tuesday", "Wednesday", 
    //                 "Thursday", "Friday", "Saturday", "Sunday"
    //             ],
    //             required: true
    //         },
    //         slots: [{
    //             start: { 
    //                 type: String, 
    //                 required: true,
    //                 validate: {
    //                     validator: (v) => /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/.test(v),
    //                     message: "Invalid time format (use 'HH:MM AM/PM')"
    //                 }
    //             },
    //             end: { 
    //                 type: String, 
    //                 required: true,
    //                 validate: {
    //                     validator: (v) => /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/.test(v),
    //                     message: "Invalid time format (use 'HH:MM AM/PM')"
    //                 }
    //             }
    //         }]
    //     }],
    //     required: function () { return this.role === 'Doctor'; }
    // },
    
    schedule:{
        type: [String], 
    },
    profileImage: { 
        type: String 
    },
    icon: { 
        type: String 
    },
    status: { 
        type: String, 
        enum: ["Active", "Inactive"], 
        default: "Active" 
    },

}, {
    timestamps: true,
});

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;