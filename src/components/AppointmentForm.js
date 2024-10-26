import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/appointments', { date, time });
      alert('Appointment scheduled successfully');
    } catch (error) {
      alert('Error scheduling appointment');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Schedule Appointment</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Schedule</button>
    </form>
  );
};

export default AppointmentForm;
