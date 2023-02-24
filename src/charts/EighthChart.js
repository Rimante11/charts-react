import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "../pages/chart.css";

const EighthChart = () => {
  let second = {
    chart: {
      renderTo: "container4",
      type: "line",
    },
    title: {
      text: "Simple chart of type line",
    },
    xAxis: {
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
    series: [
      {
        name: "Months",
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
        zone: [
          {
            value: 0,
            color: "#f7a35c",
          },
          {
            value: 100,
            color: "#f7a35c",
          },
        ],
      },
    ],
  };

  return (
    <div className="chartsContainer">
      <div className="chart-card">
        <HighchartsReact highcharts={Highcharts} options={second} />
      </div>
    </div>
  );
};

export default EighthChart;
