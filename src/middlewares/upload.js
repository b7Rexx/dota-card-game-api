const multer = require('multer');

const upload = multer({
  limits: {
    fileSize: 8 * 1024 * 1024,
  },
});

export default upload;
