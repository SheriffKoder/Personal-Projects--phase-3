"use strict";
const fs = require("fs");
const deleteFile = (filePath) => {
    //unlink, deletes the file connected to this path
    //exe an error if it fails
    fs.unlink(filePath, (err) => {
        if (err) {
            throw (err);
        }
    });
};
exports.deleteFile = deleteFile;
