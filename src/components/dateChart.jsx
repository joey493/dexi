import { Line } from "react-chartjs-2"


function DateChart({registerdDate}) {
  const dateConfig = {
    labels: Object.keys(registerdDate),
    datasets: [
      {
        label: 'registration date',
        backgroundColor: '#2FDE00',
        hoverBackgroundColor: '#175000',
        data: Object.values(registerdDate)
      }
    ]
  }
  return (
    <Line data={dateConfig}/>
  )
}

export default DateChart