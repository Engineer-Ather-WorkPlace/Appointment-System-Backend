
import express from "express"
// import signupStaff from "../controller/auth/addDoctor.js"
import signupAsaDoctor from "../controller/auth/addDoctor.js"


export const doctorRoute = express.Router()

doctorRoute.post("/addDoctor", signupAsaDoctor)

