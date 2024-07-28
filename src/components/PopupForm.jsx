import React, { useState } from 'react';
import '../assets/css/PopupForm.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function PopupForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    subject: '',
    semester: '',
    notesType: '',
    description: '',
    file: null,
    fileName: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file: file, fileName: file.name });
  };

  const handleRemoveFile = () => {
    setFormData({ ...formData, file: null, fileName: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('subject', formData.subject);
    data.append('semester', formData.semester);
    data.append('notesType', formData.notesType);
    data.append('description', formData.description);
    data.append('file', formData.file);

    try {
      await axios.post('http://localhost:5000/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      onClose(); // Close the form immediately upon successful upload

      MySwal.fire({
        icon: 'success',
        title: 'Upload Successful',
        text: 'Your file has been uploaded successfully.',
        confirmButtonText: 'OK',
        background: '#1d1d1d', // Dark background
        color: '#fffae4', // Text color
        confirmButtonColor: '#fffae4af', // Custom button color
      });
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Upload Failed',
        text: 'There was an error uploading your file.',
        confirmButtonText: 'OK',
        background: '#1d1d1d', // Dark background
        color: '#fffae4', // Text color
        confirmButtonColor: '#fffae4af', // Custom button color
      });
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Upload Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Subject:
            <input
              type="text"
              name="subject"
              placeholder="Enter subject code"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </label>

          <label>
            Semester:
            <select name="semester" required value={formData.semester} onChange={handleChange}>
              <option value="sem1">Semester 1</option>
              <option value="sem2">Semester 2</option>
              <option value="sem3">Semester 3</option>
              <option value="sem4">Semester 4</option>
              <option value="sem5">Semester 5</option>
              <option value="sem6">Semester 6</option>
              <option value="sem7">Semester 7</option>
              <option value="sem8">Semester 8</option>
            </select>
          </label>

          <label>
            Type of Notes:
            <select name="notesType" required value={formData.notesType} onChange={handleChange}>
              <option value="study-material">Study Material</option>
              <option value="papers">Papers</option>
            </select>
          </label>

          <label>
            Description:
            <textarea
              name="description"
              placeholder="Enter description"
              required
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </label>

          <label className="file-upload-label">
            <div className="file-upload-design">
              <svg viewBox="0 0 640 512" height="1em">
                <path
                  d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                ></path>
              </svg>
              <p>Drag and Drop</p>
              <p>or</p>
              <span className="browse-button">Browse file</span>
            </div>
            <input type="file" name="file" onChange={handleFileChange} required />
          </label>

          {formData.file && (
            <div className="file-info">
              <p>{formData.fileName}</p>
              <button type="button" onClick={handleRemoveFile}>Remove</button>
            </div>
          )}

          <button type="submit">
            <b>Upload</b>
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
