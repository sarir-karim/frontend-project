import React from 'react'
import ReactApexChart from "react-apexcharts";

const SmallPieChart = () => {
    const series = [76];
    const options = {
      chart: {
        height: 250,
        type: "radialBar",
        
      },
      stroke: {
        lineCap: 'round'
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 360,
        
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
            
          },
        },
      },
      colors: [ "#202020",  ],
      labels: ["Vimeo", "Messenger", "Facebook", ],
      legend: {
        show: false,
        floating: true,
        fontSize: "16px",
        position: 'bottom', // Change position to 'bottom'
        horizontalAlign: 'center', // Add horizontal alignment
        offsetX: 10,
        offsetY: 180,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    };
  return (
    <div>
      <ReactApexChart
                    options={options}
                    series={series}
                    type="radialBar"
                    height={100}
                    width={80}
                  />
    </div>
  )
}

export default SmallPieChart
