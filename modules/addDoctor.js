
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
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
        required: true,
        validate: {
        validator: function (numbers) {
            return numbers.every(num => /^03[0-9]{9}$/.test(num));
        },
        message: 'All phone numbers must be valid Pakistani numbers starting with 03 and 11 digits long.'
    }
    },
    address: {
        type: String,
        required: true
    },
    profileImage: {
        type: String
    },
    employID: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["Admin", "Doctor", "Nurse", "labStaff"],
        required: true,
    },
    education: {
        type: [
            {
                Qualification: { type: String, },
                passingYear: { type: String, },
                address: { type: String, },
            }
        ],
    },
    specialization: {
        type: [
            {
                field: { type: String, required: true },
                experience: { type: Number, required: true },
            }
        ]
    },

    schedule: {
        type: [
            {
                day: { type: String },
                timeSlot: { type: String }
            }
        ]
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },

},
    {
        timestamps: true,
    });

const doctorModel = mongoose.models.doctors || mongoose.model("doctors", doctorSchema);
export default doctorModel;



// ---------------------------------------------

// import mongoose from "mongoose";
// const doctorSchema = new mongoose.Schema({
//     // Basic info filled by admin
//     // name: { type: String },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     phoneNumber: { type: [String], required: true },
//     employID: { type: String, required: true, unique: true },
//     role: { type: String, enum: ["Admin", "Doctor", "Nurse", ], required: true },
//     schedule: {
//         type: [
//             {
//                 day: { type: String },
//                 timeSlot: { type: String }
//             }
//         ]
//     },
//     status: {
//         type: String,
//         enum: ["Active", "Inactive"],
//         default: "Active"
//     },

//     // Profile completion flag
//     isProfileCompleted: { type: Boolean, default: false },

//     // Optional fields doctor fills later
//     name: { type: String, required: function() { return this.isProfileCompleted; } },
//     address: { type: String, required: function() { return this.isProfileCompleted; } },
//     education: {
//         type: [
//             {
//                 Qualification: { type: String, required: function() { return this.isProfileCompleted; } },
//                 passingYear: { type: String, required: function() { return this.isProfileCompleted; } },
//                 address: { type: String, required: function() { return this.isProfileCompleted; } },
//             }
//         ],
//         required: function() { return this.isProfileCompleted; }
//     },
//     specialization: {
//         type: [
//             {
//                 field: { type: String, required: function() { return this.isProfileCompleted; } },
//                 experienceYears: { type: Number, required: function() { return this.isProfileCompleted; } },
//             }
//         ]
//     },
//     schedule: {
//         type: [
//             {
//                 day: { type: String },
//                 timeSlot: { type: String }
//             }
//         ]
//     },
//     status: {
//         type: String,
//         enum: ["Active", "Inactive"],
//         default: "Active"
//     },

// },
//     {
//         timestamps: true,
//     });

// const doctorModel = mongoose.models.doctors || mongoose.model("doctors", doctorSchema);
// export default doctorModel;
