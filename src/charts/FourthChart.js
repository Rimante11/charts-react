import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";

import "../pages/chart.css";

const FourthChart = () => {
  HC_more(Highcharts); //annars ser inte bubble chart

  let bubbleChart = {
    chart: {
      type: "bubble",
    },
    title: {
      text: "Bubble Chart",
    },
    subtitle: {
      text: "Chart with Bubbles and added extra imports in file",
    },
    legend: {
      bubblelegend: {
        enabled: true,
      },
    },
    yAxis: {
      title: {
        text: "Values of bubbles",
      },
    },
    series: [
      {
        name: "Bubble 1",
        data: [
          [16, 71, 23], //[x,y, size of the bubble]
          [98, 5, 79],
          [51, 50, 63],
          [48, 42, 14],
          [58, 24, 20],
        ],
        color: "#EE82EE",
      },
      {
        name: "Bubble 2",
        data: [
          [8, 15, 69],
          [19, 61, 73],
          [91, 60, 83],
          [81, 12, 24],
          [90, 74, 10],
        ],
        color: "#FF6347",
      },
    ],
  };
  return (
    <div className="chartsContainer">
      <div className="chart-card">
        <HighchartsReact highcharts={Highcharts} options={bubbleChart} />
      </div>
    </div>
  );
};

export default FourthChart;
