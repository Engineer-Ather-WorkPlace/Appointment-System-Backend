import express from "express"
import Feedbacks from "../controller/feedback/feedback.js"


const feedbackRoutes = express.Router()

feedbackRoutes.post("/addFeedback", Feedbacks)


export default feedbackRoutes