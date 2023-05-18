import React from 'react'
import ReactApexChart from 'react-apexcharts'

const ColumnChart = () => {
    const seriesData = [
        {
          name: 'PRODUCT A',
          data: [44, 55, 41, 47, 22, 43,1],
        },
        {
          name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27,1],
        },
        {
          name: 'PRODUCT C',
          data: [11, 17, 15, 15, 21, 14,1],
        },
      ];
    
      const options = {
       
      chart: {
          type: 'bar',
          height: 150,
          stacked: true,
          toolbar: {
            show: false,
            
          },
          
          
          zoom: {
            enabled: false
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        
        plotOptions: {
          bar: {
            
            horizontal: false,
            columnWidth: '20%',
            borderRadius: 10,
            
            dataLabels: {
              total: {
                enabled: false,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            },
            
          }
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '01/01/2011 GMT',
            '01/02/2011 GMT',
            '01/03/2011 GMT',
            '01/04/2011 GMT',
            '01/05/2011 GMT',
            '01/06/2011 GMT',
          ]
        },
        yaxis:{
            show:false,
        },
        legend: {
            show: false,
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 2
        },
        dataLabels: {
            enabled: false // Set dataLabels to false to hide the labels
          },
          grid: {
            show: false // Hide the grid lines
          }
      };
  return (
    <div className='rounded-chart-container'>
       <ReactApexChart options={options} series={seriesData} type="bar" height={250} />
    </div>
  )
}

export default ColumnChart
