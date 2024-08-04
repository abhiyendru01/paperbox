import { IncomingForm } from 'formidable';
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(process.cwd(), 'uploads');

// Ensure the uploads directory exists
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

export default async (req, res) => {
  if (req.method === 'POST') {
    const form = new IncomingForm();
    
    form.uploadDir = uploadDir;
    form.keepExtensions = true;
    
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error parsing the file:', err);
        return res.status(500).json({ error: 'Error parsing the file.' });
      }
      
      if (!files.file) {
        return res.status(400).send('No file uploaded.');
      }
      
      res.status(200).send('File uploaded successfully.');
    });
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
