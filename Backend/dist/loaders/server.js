"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const db_1 = __importDefault(require("../config/db"));
index_1.default.listen(2244, async () => {
    await (0, db_1.default)();
    console.log("server is running on 2244 port");
});
