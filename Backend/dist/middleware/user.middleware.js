"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDesignationFn = exports.checkUserPresentFn = exports.confirmPasswordFn = void 0;
const user_model_1 = __importDefault(require("../model/user.model"));
const confirmPasswordFn = (req, res, next) => {
    if (req.body.password === req.body.confirmPassword) {
        next();
    }
    else {
        return res
            .status(403)
            .json({ message: "please check your password again" });
    }
};
exports.confirmPasswordFn = confirmPasswordFn;
const checkUserPresentFn = async (req, res, next) => {
    const user = await user_model_1.default.findOne({ email: req.body.email });
    if (user) {
        return res
            .status(403)
            .json({ message: "user is already registered, please login" });
    }
    next();
};
exports.checkUserPresentFn = checkUserPresentFn;
const checkDesignationFn = async (req, res, next) => {
    if (["reception staff", "doctor", "assistant doctor", "admin"].includes(req.body.designation)) {
        next();
    }
    else {
        return res.status(400).json({ message: "choose valid designation" });
    }
};
exports.checkDesignationFn = checkDesignationFn;
