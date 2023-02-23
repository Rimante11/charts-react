import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "../pages/chart.css";

const SecondChart = () => {
  let myData = {
    chart: {
      renderTo: "container4",
      type: "line",
    },
    title: {
      text: "Fourth Chart / Title & Subtitle",
    },
    subtitle: {
      text: "This is my custom subtitle",
    },
    xAxis: {
      title: {
        text: "Cities",
      },
    },
    yAxis: {
      title: {
        text: "Temperature (F)",
      },
    },
    series: [
      {
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 194.1, 95.6,
          54.4,
        ],
        name: "London",
        color: "#556B2F",
        lineWidth: 5,
      },
      {
        data: [
          79.9, 21.5, 86.4, 29.2, 44.0, 76.0, 105.6, 48.5, 94.1, 145.6, 154.4,
        ],
        name: "Tokyo",
        color: "#DAA520",
      },
      {
        data: [
          89.9, 41.5, 96.4, 99.2, 144.0, 66.0, 95.6, 58.5, 84.1, 105.6, 104.4,
        ],
        name: "Paris",
        color: "blue",
        dashStyle: "longdash",
      },
    ],
    plotOptions: {
      series: {
        allowPointSelect: true,
      },
    },
    tooltip: {
      backgroundColor: "#FCFFC5",
      //backgroundColor: "rgba(0,0,0,0.5)",
      borderColor: "white",
      borderRadius: 10,
      borderWidth: 1,
      color: "white",
    },
  };

  return (
    <div className="chartsContainer">
      <div className="chart-card">
        <HighchartsReact highcharts={Highcharts} options={myData} />
      </div>
    </div>
  );
};

export default SecondChart;
