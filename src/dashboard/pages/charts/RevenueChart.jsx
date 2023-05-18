import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RevenueChart = () => {
  const [series] = useState([
    {
      name: 'Desktops',
      data: [148,90, 41, 80, 21, 19, 12, 9, ]
    }
  ]);

  const [options] = useState({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar:{
        show: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      colors: ['#000000']
    },
    
    grid: {
      row: {
        opacity: 0.5
      }
    },
    xaxis: {
      categories: ['0:1', '0:2', '0:2', '0:3', '0:4', '0:5', '0:5', '0:6', '0:7']
    },
    yaxis: {
        labels: {
          formatter: function (value) {
            return '$' + value;
          }
        }
      }
  });

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default RevenueChart;
