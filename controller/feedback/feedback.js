import sendResponse from "../../helper/sendResponse.js";
import Feedback from "../../modules/feedback.js";

const Feedbacks = async (req, res) => {
  try {
    const { name, feedback } = req.body;
    if (!name || !feedback) {
      return sendResponse(res, 400, null, true, "Empty feilds, Not Allowed ");
    }
    const userFeedback = new Feedback({ name, feedback });
    await userFeedback.save();
    sendResponse(
      res,
      200,
      userFeedback,
      false,
      "Your Feedback is Submitted Successfully"
    );
  } catch (error) {
    sendResponse(res, 404, null, true, "Error Submitting Feedback");
  }
};

export default Feedbacks;
