import express from "express";
import Feedbacks from "../controller/feedback/feedback.js";
import deleteFeedback from "../controller/feedback/deleteFeedback.js";

const feedbackRoutes = express.Router();

feedbackRoutes.post("/addFeedback", Feedbacks);

feedbackRoutes.delete("/deleteFeedback", deleteFeedback);

export default feedbackRoutes;
