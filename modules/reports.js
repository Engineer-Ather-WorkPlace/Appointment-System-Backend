import mongoose from "mongoose";

const reports = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
      match: [/^03[0-9]{9}$/, "Please enter a Valid Pakistani Mobile Number"],
    },
    reports: {
      type: [String],
      required: true,
      match: [
        /^https?:\/\/res\.cloudinary\.com\/.*$/,
        "Invalid URL",
      ],
    },
  },
  { timestamps: true }
);

const Reports = mongoose.models.reports || mongoose.model("reports", reports);

export default Reports;
