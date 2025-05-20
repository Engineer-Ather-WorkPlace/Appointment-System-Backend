

import express from "express"
import { quickSurgeryBooking } from "../controller/surgery/quickSurgeryBooking.js"
// import { quickSurgeryBooking } from "../controller/surgery/quickSurgeryBooking.js"

export const surgeryBokingRoute = express.Router()

surgeryBokingRoute.post ("/requestForSurgery", quickSurgeryBooking)