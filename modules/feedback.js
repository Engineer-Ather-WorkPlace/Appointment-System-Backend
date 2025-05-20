import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    feedback: { type: String, required: true },
  },
  { timestamps: true }
);

const Feedback =
  mongoose.models.feedback || mongoose.model("feedback", feedbackSchema);

export default Feedback;
