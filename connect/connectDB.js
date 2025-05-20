import mongoose from "mongoose";
import "dotenv/config";

// Destructure the environment variables
const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@custom-softwear.vhrxrji.mongodb.net/${DB_NAME}`;

mongoose.connect(url);

export default mongoose;
