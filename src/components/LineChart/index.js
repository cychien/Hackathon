import React from 'react'
import Paper from 'components/Paper'
import { Line } from 'react-chartjs-2'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'PM2.5 (%)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(0, 122, 206, 0.4)',
      borderColor: 'rgba(0, 122, 206, 1)',
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(0, 122, 206, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(0, 122, 206, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'Humidity (%)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(156, 106, 222, 0.4)',
      borderColor: 'rgba(156, 106, 222, 1)',
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(156, 106, 222, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(156, 106, 222, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [65, 55, 77, 80, 33, 22, 33]
    },
    {
      label: 'Temperature (℃)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(238, 194, 0, 0.4)',
      borderColor: 'rgba(238, 194, 0, 1)',
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(238, 194, 0, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(238, 194, 0, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [50, 59, 50, 71, 62, 58, 43]
    },
    {
      label: 'Filter',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(80, 184, 60, 0.4)',
      borderColor: 'rgba(80, 184, 60, 1)',
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(80, 184, 60, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(80, 184, 60, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [61, 54, 87, 61, 55, 45, 30]
    }
  ]
}

const LineChart = () => {
  return (
    <Paper>
      <label>Overview</label>
      <Line data={data} />
    </Paper>
  )
}

export default LineChart