import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SalesSummeryChart = () => {
  const [series, setSeries] = useState([42, 47, 52, 58]);
  const [options] = useState({
    chart: {
      width: 380,
      type: 'polarArea'
    },
    labels: ['Vip A (30%)', 'Exclusive (30%)', 'Regular (30%)', 'Economic (30%)',],
    fill: {
      opacity: 1,
      colors: [ '#F3F3F3','#707070', '#0F172A','#BFBFBF',]
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      position: 'bottom'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        },
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 0.6,
    },
}
  });

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="polarArea" width={250} height={280} />
     
    </div>
  );
};

export default SalesSummeryChart;
