"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { validationResult } = require("express-validator");
// (req: Request, res:Response, next: NextFunction)
exports.getPosts = (req, res, next) => {
    const user = {
        name: "sheriff"
    };
    res.status(200).json(user);
};
