import React from 'react';
import { Line } from 'react-chartjs-2';

const DataVisualization = ({ data }) => {
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Health Metric',
        data: data.values,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="data-visualization">
      <h2>Health Metrics Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default DataVisualization;
