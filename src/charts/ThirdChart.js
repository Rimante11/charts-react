import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "../pages/chart.css";

const ThirdChart = () => {
  let newChart = {
    chart: {
      renderTo: "container",
      type: "scatter",
    },
    title: {
      text: "Food that was eaten",
    },
    subtitle: {
      text: "Chart with Axes / (The axis title, showing next to the axis line)",
    },
    xAxis: {
      title: {
        text: "Dishes",
      },
      tickInterval: 1,
      categories: ["Pasta", "Pizza", "Tacos", "Pastel de nata"],
      type: "logarithmic",
      min: 2,
      max: 10,
      endOnTick: true,
      minorTickInterval: 0.1,
      gridLineWidth: 1,
    },
    yAxis: {
      title: {
        text: "Food eaten",
      },
      tickInterval: 2,
      type: "logarithmic",
      min: 1,
      max: 10,
      minorTickInterval: 0.1,
    },
    series: [
      {
        name: "Jane",
        data: [
          [1, 2, 4, 3],
          [5, 4, 2, 4],
          [3, 1, 4, 5],
          [6, 2, 3, 5],
        ],
        color: "#DEB887",
      },
      {
        name: "David",
        data: [
          [5, 4, 2, 4],
          [2, 1, 0, 3],
          [1, 4, 5, 3],
          [4, 6, 2, 5, 9],
        ],
        color: "rgb(46, 45, 45);",
      },
      {
        name: "Agnes",
        data: [
          [3, 1, 4, 5],
          [4, 2, 2, 0],
          [2, 6, 3, 4],
          [2, 5, 4, 6],
        ],
        color: "#4682B4",
      },
    ],
  };

  return (
    <div className="chartsContainer">
      <div className="chart-card">
        <HighchartsReact highcharts={Highcharts} options={newChart} />
      </div>
    </div>
  );
};

export default ThirdChart;
