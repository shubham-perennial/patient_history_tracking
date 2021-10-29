import { Router } from "express";
import { loginUser, registerUser } from "../controller/user.controller";
import {
  checkDesignationFn,
  checkUserPresentFn,
  confirmPasswordFn,
} from "../middleware/user.middleware";

const router = Router();

router.post(
  "/register",
  confirmPasswordFn,
  checkUserPresentFn,
  checkDesignationFn,
  registerUser
);
router.post("/", loginUser);

export default router;
