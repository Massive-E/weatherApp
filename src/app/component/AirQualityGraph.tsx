import { Bar } from 'react-chartjs-2';

type AirQualityGraphProps = {
  co: number;
  o3: number;
  no2: number;
};

const AirQualityGraph: React.FC<AirQualityGraphProps> = ({ co, o3, no2 }) => {
  const chartData = {
    labels: ["CO", "O3", "NO2"],
    datasets: [
      {
        label: "Air Quality",
        data: [co, o3, no2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        precision: 0,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
  },
};

  return <Bar data={chartData} options={options} style={{ width: "150px" , height:"150px" }}/>;
};

export default AirQualityGraph;