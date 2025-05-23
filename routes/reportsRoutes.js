import express from "express";
import LabtestReports from "../controller/labtestReports/reports.js";
import getLabtestReports from "../controller/labtestReports/getReports.js";

const reportRoutes = express.Router();

reportRoutes.post("/addReport", LabtestReports);

reportRoutes.get("/getReport", getLabtestReports);

export default reportRoutes;
