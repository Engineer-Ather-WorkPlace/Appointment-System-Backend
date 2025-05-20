
// import sendResponse from "../../helper/sendResponse.js";
// import surgeryModel from "../../modules/surgery.js";

// export const AddSurgery = async (req, res) => {

//     try {

//         const { surgery, surgeryIcon, surgeon } = req.body

//         if (!surgery || !surgeryIcon) {
//             return sendResponse(
//                 res,
//                 400,
//                 null,
//                 true,
//                 "empty feilds, Not Allowed "
//             )
//         }

//         const surgeryExist = await surgeryModel.findOne({surgery});

//         if (surgeryExist) {
//                     return sendResponse(
//                         res,
//                         400,
//                         null,
//                         true,
//                         "Aready exist");
//                 }
        
//         const newSurgey = new surgeryModel({ surgery, surgeryIcon, surgeon })

//         const newSurgeyData = await newSurgey.save()

//         if (newSurgeyData) {
//             return sendResponse(
//                 res,
//                 200,
//                 newSurgeyData,
//                 false,
//                 "Surgery Added Successfully"
//             )
//         }
//         else {
//             return sendResponse(
//                 res,
//                 500,
//                 null,
//                 true,
//                 "Can not add "
//             )
//         }

//     }

//     catch (errro) {
//         return sendResponse(
//             res,
//             500,
//             null,
//             true,
//             "unable to add "
//         )
//     }
// }
// --------------------------


import sendResponse from "../../helper/sendResponse.js";
import surgeryModel from "../../modules/surgery.js";

export const AddSurgery = async (req, res) => {
  try {
    const { surgery, surgeryIcon, surgeon } = req.body;

    // ✅ Basic field validation
    if (!surgery || !surgeryIcon || !Array.isArray(surgeon) || surgeon.length === 0) {
      return sendResponse(res, 400, null, true, "All fields are required, and surgeon must be a non-empty array.");
    }

    // ✅ Check if surgery already exists
    const existingSurgery = await surgeryModel.findOne({ surgery });

    if (existingSurgery) {
      // ✅ Add new surgeon(s) to existing array
      existingSurgery.surgeon.push(...surgeon);

      const updatedSurgery = await existingSurgery.save();

      return sendResponse(
        res,
        200,
        updatedSurgery,
        false,
        "New surgeon(s) added to existing surgery"
      );
    }

    // ✅ Create new surgery
    const newSurgery = new surgeryModel({ surgery, surgeryIcon, surgeon });

    const savedSurgery = await newSurgery.save();

    return sendResponse(
      res,
      200,
      savedSurgery,
      false,
      "New surgery created successfully"
    );

  } catch (error) {
    // ✅ Show validation errors clearly
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(err => err.message);
      return sendResponse(res, 400, null, true, messages.join(", "));
    }

    return sendResponse(res, 500, null, true, "Server error while adding surgery");
  }
};
