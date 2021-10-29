import { NextFunction, Response, Request } from "express";
import Register from "../model/user.model";

const confirmPasswordFn = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.password === req.body.confirmPassword) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "please check your password again" });
  }
};

const checkUserPresentFn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await Register.findOne({ email: req.body.email });
  if (user) {
    return res
      .status(403)
      .json({ message: "user is already registered, please login" });
  }
  next();
};

const checkDesignationFn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    ["reception staff", "doctor", "assistant doctor", "admin"].includes(
      req.body.designation
    )
  ) {
    next();
  } else {
    return res.status(400).json({ message: "choose valid designation" });
  }
};

export { confirmPasswordFn, checkUserPresentFn, checkDesignationFn };
