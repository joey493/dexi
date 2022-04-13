import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function AgeChart({ageData}) {

    const AgeConfig = {
    labels: Object.keys(ageData),
    datasets: [
      {
        label: 'age',
        backgroundColor: '#2FDE00',
        hoverBackgroundColor: '#175000',
        data: Object.values(ageData)
      }
    ]
  }


  return (
    <Line data={AgeConfig}/>
  )
}

export default AgeChart