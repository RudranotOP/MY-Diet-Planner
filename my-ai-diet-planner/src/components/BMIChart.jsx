// BMIChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const BMIChart = () => {
  const data = {
    labels: ['6/26', '6/27', '6/28', '6/29', '6/30', '7/1', '7/2'],
    datasets: [
      {
        label: 'BMI History',
        data: [22.5, 22.3, 22.7, 22.6, 22.4, 22.5, 22.5],
        fill: false,
        borderColor: '#00a8ff',
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#f5f5f5',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#f5f5f5',
        },
      },
      y: {
        ticks: {
          color: '#f5f5f5',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default BMIChart;
