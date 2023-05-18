import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const TicketMainChart = () => {
  const [selection, setSelection] = useState("yearly");

  const series = [
    {
      data: [
        [1, 8000],
        [2, 7500],
        [3, 6000],
        [4, 5500],
        [5, 4000],
        [6, 4500],
        [7, 5000],
        [8, 5500],
        [9, 6000],
        [10, 6500],
        [11, 5000],
        [12, 7500],
      ],
    },
  ];

  const options = {
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    xaxis: {
      type: 'category',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yaxis: {
      title: {
        text: 'Revenue',
      },
    },
    tooltip: {
      x: {
        format: 'MMM',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  };

  const updateData = (timeline) => {
    setSelection(timeline);
    // Additional logic to handle different intervals (monthly, weekly, daily)
    switch (timeline) {
      case 'monthly':
        // Logic for monthly interval
        break;
      case 'weekly':
        // Logic for weekly interval
        break;
      case 'daily':
        // Logic for daily interval
        break;
      default:
        // Default logic for yearly interval
        break;
    }
  };

  return (
    <div id="chart">
      <div className="toolbar">
        <button
          id="monthly"
          onClick={() => updateData('monthly')}
          className={selection === 'monthly' ? 'active' : ''}
        >
          Monthly
        </button>
        &nbsp;
        <button
          id="weekly"
          onClick={() => updateData('weekly')}
          className={selection === 'weekly' ? 'active' : ''}
        >
          Weekly
        </button>
        &nbsp;
        <button
          id="daily"
          onClick={() => updateData('daily')}
          className={selection === 'daily' ? 'active' : ''}
        >
          Daily
        </button>
      </div>

      <div id="chart-timeline">
        <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
    </div>
  );
};


export default TicketMainChart;
