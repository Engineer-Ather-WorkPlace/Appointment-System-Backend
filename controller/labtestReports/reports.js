import sendResponse from "../../helper/sendResponse.js";
import Reports from "../../modules/reports.js";

// const LabtestReports = async (req, res) => {
//   try {
//     const { phoneNumber: UphoneNumber, reports: Ureports } = req.body;
//     const checkIfNumberExists = await Reports.findOne({
//       phoneNumber: UphoneNumber,
//     });
//     if (!checkIfNumberExists) {
//       const userReports = new Reports({
//         phoneNumber: UphoneNumber,
//         reports: Ureports,
//       });
//       await userReports.save();
//       sendResponse(
//         res,
//         200,
//         userReports,
//         false,
//         `The Report is Submitted for ${UphoneNumber}`
//       );
//     } else {
//       const existingPatient = await Reports.findOneAndUpdate(
//         { phoneNumber: UphoneNumber },
//         { $push: { reports: Ureports } },
//         { new: true }
//       );
//       sendResponse(
//         res,
//         200,
//         existingPatient,
//         false,
//         `The Report is Submitted for esixting number : ${UphoneNumber}`
//       );
//     }
//   } catch (error) {
//     sendResponse(res, 404, null, true, "Error Submitting Report");
//   }
// };

// export default LabtestReports;


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

// export const AddNewPayment = async (req, res) => {
//   try {
//     const { projectID, newPayment } = req.body; // Get all fields from request body
//     const { amount, date, purpose} = newPayment

//     // Validate required fields
//     if (!projectID) {
//       return sendResponse(res, 400, null, true, "Project ID is required");
//       console.log("Project not found");
//     }
//     console.log("projectID : ", projectID);

//     const updateRecord =  await ProjectSalesModel.findOneAndUpdate(
//       { projectID },                              //searching project
//       { $push: { paymentDetails: newPayment } }, // Add to array
//       { new: true }                              //this returns the updated document
//     );

//     if (!updateRecord) {
//       return sendResponse(res, 404, null, true, "Project not found");
//     }

//     sendResponse(res, 200, updateRecord, false, "Payment added successfully");
//     console.log("Payment added successfully");

//   } catch (error) {
//     sendResponse(res, 500, null, true, error.message);
//   }
// };
