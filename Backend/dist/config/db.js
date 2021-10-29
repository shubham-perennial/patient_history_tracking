"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
const userName = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const connect = () => {
    return mongoose_1.default.connect(`mongodb+srv://${userName}:${password}@cluster0.py9qv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
};
exports.default = connect;
