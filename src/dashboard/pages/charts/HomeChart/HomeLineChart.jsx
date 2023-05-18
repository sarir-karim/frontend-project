import React from 'react';
import ReactApexChart from 'react-apexcharts';

const generateDayWiseTimeSeries = (baseTimestamp, count, range) => {
  const series = [];
  for (let i = 0; i < count; i++) {
    const x = baseTimestamp + i * 86;
    const y = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    series.push([x, y]);
  }
  return series;
};

const HomeLineChart = () => {
  const series = [
    {
      name: 'South',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    
  ];

  const options = {
    chart: {
      type: 'area',
      height: 350,
      stacked: true,
      events: {
        selection: (chart, e) => {
          console.log(new Date(e.xaxis.min));
        }
      },
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#000000' ],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      color: '#000000'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.0,
        opacityTo: 0.0
      }
      
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      show: false,
    },
    grid:{
        show: false
    },
    xaxis: {
      type: 'datetime',
      labels: {
        show: false
      }
    },
    yaxis: {
        labels: {
          show: false
        }
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
      <ReactApexChart options={options} series={series} type="area" height={120} />
    </div>
  );
};

export default HomeLineChart;
