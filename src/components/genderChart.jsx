import {Doughnut} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function GenderChart({genderData}) {
  const genderConfig = {
    labels: Object.keys(genderData),
    datasets: [
      {
        label: 'gender',
        backgroundColor: [
          '#2FDE00',
          '#00A6B4',
        ],
        hoverBackgroundColor: [
        '#175000',
        '#003350',
        ],
        data: Object.values(genderData)
      }
    ]
  }

  return (
    <Doughnut data={genderConfig}/>
  )
}

export default GenderChart