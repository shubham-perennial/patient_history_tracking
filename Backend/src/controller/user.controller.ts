import { Request, Response } from "express";
import Register from "../model/user.model";

const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await Register.create(req.body);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: "please check your connection" });
  }
};

const loginUser = async (req: Request, res: Response) => {
  let user;
  try {
    user = await Register.findOne({ email: req.body.email });
  } catch (err) {
    return res.status(500).json({ message: "please check your connection" });
  }
  if (user) {
    if (req.body.password === user.password) {
      return res
        .status(200)
        .json({ message: "you are successfully logged in" });
    } else {
      return res.status(404).json({ message: "please check your password" });
    }
  } else {
    return res
      .status(404)
      .json({ message: "user is not found please register first" });
  }
};

export { registerUser, loginUser };
