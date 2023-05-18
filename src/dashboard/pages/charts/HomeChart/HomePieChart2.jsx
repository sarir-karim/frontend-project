import React from 'react'
import ReactApexChart from "react-apexcharts";

const HomePieChart2 = () => {
    const series = [65];
  
    const options = {
      chart: {
        type: 'radialBar',
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 350,
          hollow: {
            margin: 0,
            size: '60%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
            //   color: '#888',
              fontSize: '13px'
            },
            value: {
                offsetY: -10,
              formatter: (val) => {
                return parseInt(val) + "%";;
              },
              color: '#111',
              fontSize: '14px',
              show: true,
            }
          }
        }
      },
      
      fill: {
        colors: ['#0F172A'],
      },
      stroke: {
        lineCap: 'round'
      },
      labels: [''],
    };
  return (
    <div id="card">
    <div id="chart">
      <ReactApexChart options={options} series={series} type="radialBar" height={110} width={100}/>
    </div>
  </div>
  )
}

export default HomePieChart2
