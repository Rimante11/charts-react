import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "../pages/chart.css";

const SeventhChart = () => {
  let second = {
    chart: {
      renderTo: "container4",
      type: "column",
    },
    title: {
      text: "Series in Charts",
    },
    subtitle: {
      text: "(In this chart objects are point configuration objects as seen under options point)",
    },
    xAxis: {
      title: {
        text: "You can set in series for y axis points/values ex y: 5",
      },
      categories: ["Green", "Pink"],
    },
    series: [
      {
        name: "Colors data",
        data: [
          {
            name: "Point 1",
            color: "#00FF00",
            y: 1,
          },
          {
            name: "Point 2",
            color: "#FF00FF",
            y: 5,
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

export default SeventhChart;
