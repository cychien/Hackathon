import React from 'react'
import Paper from 'components/Paper'
import { Line } from 'react-chartjs-2'

const options = {
  scales: {
    xAxes: [{
      type: 'time',
      time: {
        unit: 'month'
      }
    }]
  }
}

const LineChart = ({main}) => {
  const {pm25Arr, humidityArr, tempArr, filterArr} = main
  const data = {
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
        data: pm25Arr.map(item => {
          return {
            x: new Date(item.time),
            y: item.value[0]
          }
        })
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
        data: humidityArr.map(item => {
          return {
            x: new Date(item.time),
            y: item.value[0]
          }
        })
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
        data: tempArr.map(item => {
          return {
            x: new Date(item.time),
            y: item.value[0]
          }
        })
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
        data: filterArr.map(item => {
          return {
            x: new Date(item.time),
            y: item.value[0]
          }
        })
      }
    ]
  }

  return (
    <Paper>
      <label>Overview</label>
      <Line data={data} options={options} />
    </Paper>
  )
}

export default LineChart