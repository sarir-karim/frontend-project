import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SmallLineChart = () => {
  const series = [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 100]
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: 'area',
      background: "transparent",
      toolbar: {
        show: false,
      },

    },
    stroke: {
      curve: 'smooth',
      colors: ["#000000"] ,
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.0,
        opacityTo: 0.0
      }
      
    },
    yaxis:{
        show: false,
    },
    grid:{
        show: false,
    },
    xaxis: {
        show: false,
      type: 'datetime',
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z"
      ],
      labels: {
        show: false // Hide x-axis labels
      },
    },
    dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        marker: {
          show: false
        },
        fixed: {
          enabled: true,
          position: 'topRight',
          offsetY: -20
        }
      }
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={100}
        width={80}
      />
    </div>
  );
};

export default SmallLineChart;
