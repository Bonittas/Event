import multer, { diskStorage } from 'multer';
import { extname } from 'path';

// Configure the storage for file uploadss
const storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'sugg/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  },
});

const uploads = multer({ storage });

export default uploads;