
const multer = require("multer");

// creating a storage for multer
const storageEngine = multer.diskStorage({
    destination: "./images",
    filename: (req: any, file: any, cb: any) => {
        cb(null, '${file.originalname}');
    },
});

// declaring multer with storage engine 
const upload = multer({
    storage: storageEngine, //storage engine just deals with the file once they are parsed (storing, deleting, and modifying the original file)
    fileFilter: (req: any, file: any, cb: any) => {
        checkFileType(file, cb);
    }
});

//file filter logic
const path = require("path");
const checkFileType = function (file: any, cb: any) {
    //these types of files are allowed
    const fileTypes = /jpeg|jpg|png|gif|svg/;

    const extName = fileTypes.test(path.extName(file.originalname).toLowerCase()); //

    const mimeType = fileTypes.test(file.mimeType);

    if (mimeType && extName) {
        return cb(null, true);
    } else {
        cb("Error: You can Only Upload Images!!");
    }
};


module.exports = { upload };