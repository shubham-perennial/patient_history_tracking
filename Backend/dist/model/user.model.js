"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true, maxLength: 20 },
    email: { type: String, required: true, maxLength: 20 },
    age: { type: Number, required: true, maxLength: 3 },
    gender: { type: String, required: true, maxLength: 15 },
    password: { type: String, required: true, maxLength: 25 },
    designation: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
});
const Register = (0, mongoose_1.model)("user", userSchema);
exports.default = Register;
