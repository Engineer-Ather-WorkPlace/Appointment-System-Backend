import staffModel from "../../modules/addDoctor.js"
import sendResponse from "../../helper/sendResponse.js";
import bcrypt from 'bcryptjs';

const signupAsaDoctor = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            phoneNumber,
            address,
            employID,
            role,
            specialization,
            education,
            schedule, 
            profileImage,
            status,
        } = req.body;

        // Check if user exists (email or employID)
        const staffExist = await staffModel.findOne({
            $or: [{ email }, { employID }]
        });


        if (staffExist) {
            return sendResponse(res, 400, null, true, "Staff Member already exists");
        }


        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user object (conditionally include doctor fields)
        const userData = {
           name,
            email,
            password: hashedPassword,
            phoneNumber,
            address,
            employID,
            role,
            education,
            schedule, 
            profileImage,
            status,
            specialization,
        };
        
        const newUser = new staffModel(userData);
        await newUser.save();
        
        sendResponse(res, 201, newUser, false, "Account created successfully");
    } catch (error) {
        sendResponse(res, 500, null, true, error.message);
    }
};

export default signupAsaDoctor;