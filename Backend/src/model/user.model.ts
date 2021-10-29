import { Schema, Document, Model, model } from "mongoose";

interface IUser extends Document {
  name: string;
  age: number;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
  designation: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, maxLength: 20 },
    email: { type: String, required: true, maxLength: 20 },
    age: { type: Number, required: true, maxLength: 3 },
    gender: { type: String, required: true, maxLength: 15 },
    password: { type: String, required: true, maxLength: 25 },
    designation: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Register: Model<IUser> = model("user", userSchema);

export default Register;
