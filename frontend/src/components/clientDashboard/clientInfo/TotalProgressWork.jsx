import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const TotalProgressWork = () => {
  // Sample data for the chart
  const data = {
    labels: ['Completed', 'In Progress', 'Pending'], // Categories
    datasets: [
      {
        label: 'Progress Distribution',
        data: [70, 20, 10], // Sample data representing percentage of each category
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <>
      <div className="totalProgressWorkContainer">
        <div className="container">
          <h3>Total Progress Work</h3>
          <div style={{ width: '100%', height: '400px' }}> {/* Adjust height as needed */}
            <Doughnut data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalProgressWork;
