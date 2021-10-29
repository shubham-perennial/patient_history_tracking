"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const user_model_1 = __importDefault(require("../model/user.model"));
const registerUser = async (req, res) => {
    try {
        const user = await user_model_1.default.create(req.body);
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(500).json({ message: "please check your connection" });
    }
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    let user;
    try {
        user = await user_model_1.default.findOne({ email: req.body.email });
    }
    catch (err) {
        return res.status(500).json({ message: "please check your connection" });
    }
    if (user) {
        if (req.body.password === user.password) {
            return res
                .status(200)
                .json({ message: "you are successfully logged in" });
        }
        else {
            return res.status(404).json({ message: "please check your password" });
        }
    }
    else {
        return res
            .status(404)
            .json({ message: "user is not found please register first" });
    }
};
exports.loginUser = loginUser;
