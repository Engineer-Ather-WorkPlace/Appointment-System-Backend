// import UserModel from '../../modules/userSchema';
import UserModel from '../../modules/userSchema.js';
import sendResponse from '../../helper/sendResponse.js';
import bcrypt from 'bcryptjs';

const signup = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            role,
            employID,
            phoneNumber,
            address,
            joiningDate,
            qualifications,
            specialization,
            experienceYears,
            schedule, 
            profileImage,
            icon,
            status,
        } = req.body;

        // Check if user exists (email or employID)
        const existingUser = await UserModel.findOne({
            $or: [{ email }, { employID }]
        });
        if (existingUser) {
            return sendResponse(res, 400, null, true, "User already exists");
        }

        // Validate required fields for Doctors
        // if (role === 'Doctor') {
        //     if (!specialization || !experienceYears || !qualifications || !schedule) {
        //         return sendResponse(
        //             res,
        //             400,
        //             null,
        //             true,
        //             "For Doctor role, specialization, experienceYears, qualifications, and schedule are required"
        //         );
        //     }
        // }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user object (conditionally include doctor fields)
        const userData = {
            name,
            email,
            password: hashedPassword,
            role,
            employID,
            phoneNumber,
            address,
            joiningDate,
            profileImage,
            icon,
            status,
            ...(role === 'Doctor' && {  // Only add these for doctors
                qualifications,
                specialization,
                experienceYears,
                schedule,
            }),
        };

        const newUser = new UserModel(userData);
        await newUser.save();
        
        sendResponse(res, 201, newUser, false, "Account created successfully");
    } catch (error) {
        sendResponse(res, 500, null, true, error.message);
    }
};

export default signup;