import sendResponse from "../../helper/sendResponse.js";
import Reports from "../../modules/reports.js";

const getLabtestReports = async (req, res) => {
  try {
    const { _id } = req.body;
    const report = await Reports.findById(_id);
    if (!report) {
      return sendResponse(res, 402, null, true, "Report not found");
    }
    sendResponse(res, 200, report, false, `Report Retrieved Sucessfully`);
  } catch (error) {
    sendResponse(res, 404, null, true, "Error Finding Report");
  }
};

export default getLabtestReports;
