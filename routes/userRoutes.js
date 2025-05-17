
import express from "express"
import signup from "../controller/auth/signup.js"
import getAllUsers from "../controller/user/alluser.js"

const userRoute = express.Router()

userRoute.post ("/signup", signup )

userRoute.get("/getAllUsers", getAllUsers)

export default userRoute