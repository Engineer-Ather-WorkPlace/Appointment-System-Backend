
import express from "express"
import signupAsaDoctor from "../controller/auth/signupDoctor.js"
import { getAllDoc } from "../controller/user/getAllDoctors.js"
import { getSpecificDoctor } from "../controller/user/getSpecificDoctor.js"


export const doctorRoute = express.Router()

doctorRoute.post("/addDoctor", signupAsaDoctor)

doctorRoute.get("/getDoctorList", getAllDoc)

doctorRoute.get("/getSpecificDotor", getSpecificDoctor)

// doctorRoute.get("/docotorWithSameCatagory", getSameCatagoryDoctor)