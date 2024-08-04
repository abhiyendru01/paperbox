import nextConnect from 'next-connect';
import multer from 'multer';

const upload = multer({
  storage: multer.memoryStorage(),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post((req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  // You can process the file here or send it back to the client
  res.status(200).json({ message: 'File uploaded successfully.', file: req.file });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
