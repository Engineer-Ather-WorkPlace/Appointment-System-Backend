import express from "express"
import LabtestReports from "../controller/labtestReports/reports.js"

const reportRoutes = express.Router()

reportRoutes.post("/addReport", LabtestReports)

export default reportRoutes