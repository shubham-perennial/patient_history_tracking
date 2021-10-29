import mongoose from "mongoose";

require("dotenv").config();

const userName = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://${userName}:${password}@cluster0.py9qv.mongodb.net/patient_mngmt?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );
};

export default connect;
