
import express from "express"
import { quickSurgeryBooking } from "../controller/surgery/quickSurgeryBooking.js"

const quickSurgeryRoute = express.Router()

quickSurgeryRoute.post("/requestForQuickSurgery", quickSurgeryBooking)

export default quickSurgeryRoute