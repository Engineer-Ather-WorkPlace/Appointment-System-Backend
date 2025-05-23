import sendResponse from "../../helper/sendResponse.js";
import Reports from "../../modules/reports.js";

const LabtestReports = async (req, res) => {
  try {
    const { phoneNumber: UphoneNumber, reports } = req.body;
    const checkIfNumberExists = await Reports.findOne({
      phoneNumber: UphoneNumber,
    });
    if (checkIfNumberExists) {
      checkIfNumberExists.reports.push(reports);
      await checkIfNumberExists.save();
      sendResponse(
        res,
        200,
        checkIfNumberExists,
        false,
        `The Report is Submitted for existing number : ${UphoneNumber}`
      );
    } else {
      const userReports = new Reports({ phoneNumber: UphoneNumber, reports });
      await userReports.save();
      sendResponse(
        res,
        200,
        userReports,
        false,
        `The Report is Submitted for ${UphoneNumber}`
      );
    }
  } catch (error) {
    sendResponse(res, 404, null, true, "Error Submitting Report");
  }
};

export default LabtestReports;
