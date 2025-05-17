
import sendResponse from "../../helper/sendResponse.js"
import UserModel from "../../modules/userSchema.js"

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find().select("-password")

        if (!users) {
            return sendResponse(
                res,
                404,
                null,
                true,
                "No users found"
            )
        }
        return sendResponse(
            res,
            200,
            users,
            false,
            "Users fetched successfully"
        )
    }

    catch (err) {
        console.log(err)
        return sendResponse(
            res,
            500,
            null,
            true,
            "Internal server error"
        )
    }
}

export default getAllUsers
