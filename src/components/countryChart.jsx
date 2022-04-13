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


function CountryChart({countryData}) {
  const countryConfig = {
    labels: Object.keys(countryData),
    datasets: [
      {
        label: 'country',
        backgroundColor: '#2FDE00',
        hoverBackgroundColor: '#175000',
        data: Object.values(countryData)
      }
    ]
  }
  return (
    <Line data={countryConfig}/>
  )
}

export default CountryChart