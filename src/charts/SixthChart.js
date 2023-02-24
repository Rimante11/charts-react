import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "../pages/chart.css";

const SixthChart = () => {
  let second = {
    chart: {
      renderTo: "container4",
      type: "line",
    },
    title: {
      text: "Chart zones",
    },

    series: [
      {
        name: "Zone coloring",
        data: [-10, -5, 0, 5, 10, 15, 10, 10, 5, 0, -5],
        zones: [
          {
            value: 0,
            color: "red",
          },
          {
            value: 10,
            color: "#7cb5ec",
          },
          {
            color: "#90ed7d",
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

export default SixthChart;
