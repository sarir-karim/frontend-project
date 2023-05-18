
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const HomeBarChart = () => {
    const [series] = useState([
        {
          name: 'Servings',
          data: [44, 25, 41, 67,23,17,40,32,19,10],
        },
      ]);
    
      const [options] = useState({
        annotations: {
          points: [
            {
              x: 'Bananas',
              seriesIndex: 0,
              label: {
                borderColor: '#775DD0',
                offsetY: 0,
                style: {
                  color: '#fff',
                  background: '#775DD0',
                },
                text: 'Bananas are good',
              },
            },
          ],
        },
        chart: {
          height: 150,
          type: 'bar',
          toolbar: {
            show: false, // Hide the toolbar
          },
          zoom: {
            enabled: false, // Disable zooming
          },
        },
        colors: ['#0F172A'],
        
        plotOptions: {
          bar: {
            borderRadius: 3,
            columnWidth: '60%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
        },
        grid: {
            show: false,
         
        },
        xaxis: {
            show: false,
          labels: {
            rotate: -45,
            show: false,
          },
          
          tickPlacement: 'off',
        },
        yaxis: {
            show: false,
          title: {
            text: 'Servings',
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100],
          },
        },
      });
      const chartStyle = {
        margin: 0,
      };
    
  return (
    <div>
       <div id="chart" style={chartStyle}>
      <ReactApexChart options={options} series={series} type="bar" height={140} width={140}/>
    </div>
    </div>
  )
}

export default HomeBarChart
