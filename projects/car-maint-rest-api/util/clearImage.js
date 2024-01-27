"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearImage = void 0;
//API 0.2 - images
const fs = require("fs");
const path = require("path");
//want to trigger the clearImage function
//whenever uploaded a new image
const clearImage = (filePath) => {
    console.log("clearing image");
    //up one folder as we are in the controllers folder now
    filePath = path.join(__dirname, "..", filePath);
    //unlink removes the file
    fs.unlink(filePath, (err) => { if (err)
        console.log(err); });
};
exports.clearImage = clearImage;
