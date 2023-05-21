  import React, { useState } from "react";
  import ReactApexChart from "react-apexcharts";

  const ApexChart = () => {
    const [selection, setSelection] = useState("yearly");
    const [series, setSeries] = useState([
      {
        data: [
          [1, 8000],
          [2, 5500],
          [3, 3000],
          [4, 6500],
          [5, 4000],
          [6, 2500],
          [7, 5000],
          [8, 8500],
          [9, 6000],
          [10, 5500],
          [11, 3000],
          [12, 4500],
        ],
      },
    ]);
    const [options, setOptions] = useState({
      chart: {
        id: "area-datetime",
        type: "area",
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        style: "hollow",
      },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
      },
      tooltip: {
        x: {
          format: "MMM",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    });

    const updateData = (timeline) => {
      setSelection(timeline);

      switch (timeline) {
        case "monthly":
          setSeries([
            {
              data: [
                [1, 2000],
                [2, 2200],
                [3, 1900],
                [4, 2400],
                [5, 2800],
                [6, 3000],
                [7, 2700],
                [8, 2500],
                [9, 2300],
                [10, 2600],
                [11, 2900],
                [12, 3100],
              ],
            },
          ]);
          setOptions((prevOptions) => ({
            ...prevOptions,
            xaxis: {
              ...prevOptions.xaxis,
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          }));
          break;
        case "weekly":
          setSeries([
            {
              data: [
                [1, 2000],
                [2, 2100],
                [3, 3200],
                [4, 5300],
                [5, 7400],
                [6, 2500],
                [7, 5600],
                [8, 7700],
                [9, 4800],
                [10, 2900],
                [11, 3000],
                [12, 2100],
              ],
            },
          ]);
          setOptions((prevOptions) => ({
            ...prevOptions,
            xaxis: {
              ...prevOptions.xaxis,
              categories: [
                "Week 1",
                "Week 2",
                "Week 3",
                "Week 4",
                "Week 5",
                "Week 6",
                "Week 7",
                "Week 8",
                "Week 9",
                "Week 10",
                "Week 11",
                "Week 12",
              ],
            },
          }));
          break;
        case "daily":
          setSeries([
            {
              data: [
                [1, 2000],
                [2, 2005],
                [3, 5010],
                [4, 2015],
                [5, 7020],
                [6, 3025],
                [7, 2030],
                [8, 1035],
                [9, 6040],
                [10, 3045],
                [11, 2050],
                [12, 7055],
              ],
            },
          ]);
          setOptions((prevOptions) => ({
            ...prevOptions,
            xaxis: {
              ...prevOptions.xaxis,
              categories: [
                "Day 1",
                "Day 2",
                "Day 3",
                "Day 4",
                "Day 5",
                "Day 6",
                "Day 7",
                "Day 8",
                "Day 9",
                "Day 10",
                "Day 11",
                "Day 12",
              ],
            },
          }));
          break;
        default:
          setSeries([
            {
              data: [
                [1, 2000],
                [2, 2500],
                [3, 3000],
                [4, 3500],
                [5, 4000],
                [6, 4500],
                [7, 5000],
                [8, 5500],
                [9, 6000],
                [10, 6500],
                [11, 7000],
                [12, 7500],
              ],
            },
          ]);
          setOptions((prevOptions) => ({
            ...prevOptions,
            xaxis: {
              ...prevOptions.xaxis,
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          }));
          break;
      }
    };

    return (
      <div id="chart ">
        <div className="flex items-center justify-between px-4">
          <span className="font-semibold">Sales Revenue</span>
        <div className="toolbar flex gap-3 text-sm">
          <button
            id="monthly"
            onClick={() => updateData("monthly")}
            className={selection === "monthly" ? "btn bg-white btn-outline text-[11px] text-black rounded-[15px] btn-sm pt-4 pb-4 pl-4 pr-4 pb-6" : ""}
          >
            Monthly
          </button>
          &nbsp;
          <button
            id="weekly"
            onClick={() => updateData("weekly")}
            className={
              selection === "weekly"
                ? "btn bg-white btn-outline text-[11px] text-black rounded-[15px] btn-sm pt-4 pb-4 pl-4 pr-4 pb-6"
                : ""
            }
          >
            Weekly
          </button>
          &nbsp;
          <button
            id="daily"
            onClick={() => updateData("daily")}
            className={selection === "daily" ? "btn bg-white btn-outline text-[11px] text-black rounded-[15px] btn-sm pt-4 pb-4 pl-4 pr-4 pb-6" : ""}
          >
            Daily
          </button>
        </div>
        </div>

        <div id="chart-timeline">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
          />
        </div>
      </div>
    );
  };

  export default ApexChart;
