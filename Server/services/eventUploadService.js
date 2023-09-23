const multer = require('multer');
const moment = require('moment');
const path = require('path');

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads');
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    callback(null, `image-${uniqueSuffix}.${file.originalname}`);
  },
});

// Image filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true);
  } else {
    callback(Error('Only image files are allowed'));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

module.exports = {
  upload,
};