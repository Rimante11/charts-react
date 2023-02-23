import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "../pages/chart.css";

const FivthChart = () => {
  let options = {
    chart: {
      renderTo: "container4",
      type: "bar",
    },
    title: {
      text: "Fruit Consumption",
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges", "Kiwis"],
    },
    series: [
      {
        name: "Jane",
        data: [1, 0, 4, 2],
      },
      {
        name: "Alex",
        data: [2, 4, 1, 3],
      },
    ],
  };

  return (
    <div className="chartsContainer">
      <div className="chart-card">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default FivthChart;
