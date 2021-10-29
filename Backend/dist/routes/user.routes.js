"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const user_middleware_1 = require("../middleware/user.middleware");
const router = (0, express_1.Router)();
router.post("/register", user_middleware_1.confirmPasswordFn, user_middleware_1.checkUserPresentFn, user_middleware_1.checkDesignationFn, user_controller_1.registerUser);
router.post("/", user_controller_1.loginUser);
exports.default = router;
