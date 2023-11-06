const fs = require("fs");

const deleteFile = (filePath: string) => {

    //unlink, deletes the file connected to this path
    //exe an error if it fails

    fs.unlink(filePath, (err: any) => {
        if (err) {
            throw (err);
        }
    })
}

exports.deleteFile = deleteFile;