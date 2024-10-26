import React, { useState } from 'react';
import axios from 'axios';

const AIPrescription = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [condition, setCondition] = useState('');
  const [prescription, setPrescription] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePrescription = async () => {
    setLoading(true);
    setError('');
    setPrescription('');

    try {
      const response = await axios.post('/api/ai-prescription', {
        age,
        weight,
        condition
      });
      setPrescription(response.data.prescription);
    } catch (error) {
      setError('Error retrieving prescription. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-prescription">
      <h2>AI Prescription</h2>
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Medical Condition"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        required
      />
      <button onClick={handlePrescription} disabled={loading}>
        {loading ? 'Processing...' : 'Get Prescription'}
      </button>
      {prescription && <p><strong>Prescription:</strong> {prescription}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AIPrescription;
