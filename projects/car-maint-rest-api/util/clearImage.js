"use strict";
//API 0.2 - images
const fs = require("fs");
const path = require("path");
//want to trigger the clearImage function
//whenever uploaded a new image
const clearImage = (filePath) => {
    //up one folder as we are in the controllers folder now
    filePath = path.join(__dirname, "..", filePath);
    //unlink removes the file
    fs.unlink(filePath, (err) => console.log(err));
};
