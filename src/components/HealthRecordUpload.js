import React, { useState } from 'react';
import axios from 'axios';

const HealthRecordUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('healthRecord', file);

    try {
      await axios.post('/api/upload-health-record', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Health record uploaded successfully!');
    } catch (error) {
      alert('Failed to upload health record. Please try again.');
    }
  };

  return (
    <div className="health-record-upload">
      <h2>Upload Health Record</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default HealthRecordUpload;
