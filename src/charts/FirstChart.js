import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "../pages/chart.css";

const MyChart = () => {
  let second = {
    chart: {
      renderTo: "container4",
      type: "column",
    },
    title: {
      text: "First Chart / Type column",
    },
    series: [
      {
        name: "Janni",
        data: [1, 0, 4],
      },
      {
        name: "Alexander",
        data: [2, 4, 1],
      },
      {
        name: "Jhonatan",
        data: [3, 2, 1],
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

export default MyChart;
