import React, { useState } from 'react';

const HealthTracking = () => {
  const [metric, setMetric] = useState('');

  const handleSave = () => {
    localStorage.setItem('healthMetric', metric);
    alert('Health metric saved');
  };

  return (
    <div>
      <h2>Health Tracking</h2>
      <input
        type="text"
        value={metric}
        onChange={(e) => setMetric(e.target.value)}
        placeholder="Enter your health metric"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default HealthTracking;
