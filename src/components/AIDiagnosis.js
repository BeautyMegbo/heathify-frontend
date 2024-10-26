import React, { useState } from 'react';
import axios from 'axios';

const AIDiagnosis = () => {
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const handleDiagnosis = async () => {
    try {
      const response = await axios.post('/api/diagnose', { symptoms });
      setDiagnosis(response.data.diagnosis);
    } catch (error) {
      setDiagnosis('Error retrieving diagnosis. Please try again.');
    }
  };

  return (
    <div className="ai-diagnosis">
      <h2>AI Diagnosis</h2>
      <textarea
        placeholder="Describe your symptoms..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
      ></textarea>
      <button onClick={handleDiagnosis}>Get Diagnosis</button>
      {diagnosis && <p>{diagnosis}</p>}
    </div>
  );
};

export default AIDiagnosis;
