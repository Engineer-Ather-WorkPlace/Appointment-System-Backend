import sendResponse from "../../helper/sendResponse.js";
import Feedback from "../../modules/feedback.js";

const deleteFeedback = async (req, res) => {
  try {
    const { _id } = req.body;
    const feedback = await Feedback.findByIdAndDelete(_id);
    sendResponse(res, 200, feedback, false, "Feedback Deleted Successfully");
  } catch (error) {
    sendResponse(res, 404, null, true, "Error Deleting Feedback");
  }
};

export default deleteFeedback;
