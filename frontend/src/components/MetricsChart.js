import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

function MetricsChart({ metrics }) {
  const data = {
    labels: metrics.timestamps || [],
    datasets: [
      {
        label: 'Build Duration',
        data: metrics.durations || [],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Metrics Chart</h2>
      <Line data={data} />
    </div>
  );
}

export default MetricsChart;
