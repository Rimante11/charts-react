import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "../pages/chart.css";

const ZoomingChart = () => {
  let zooming = {
    chart: {
      // renderTo: "container4",
      type: "column",
    },
    title: {
      text: "Zooming Chart / Responsive Chart",
    },
    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: "vertical",
    },
    xAxis: {
      categories: ["2020", "2021", "2022"],
    },
    yAxis: {
      title: {
        text: "Amount",
      },
    },
    series: [
      {
        name: "Christmas Eve",
        data: [1, 4, 3],
      },
      {
        name: "Christmas Day before dinner",
        data: [6, 4, 2],
      },
      {
        name: "Christmas Day after dinner",
        data: [8, 4, 3],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: "center",
              verticalAlign: "bottom",
              layout: "horizontal",
            },
          },
        },
      ],
    },
  };

  const largeBtnHandler = () => {
    zooming.setSize(400, 300);
  };

  const smallBtnHandler = () => {
    zooming.setSize(600, 300);
  };

  return (
    <div className="zoomContainer">
      <HighchartsReact highcharts={Highcharts} options={zooming} />
      <button className="sizeBtnZoomChart" onClick={largeBtnHandler}>
        Large
      </button>
      <button className="sizeBtnZoomChart" onClick={smallBtnHandler}>
        Small
      </button>
    </div>
    // <div className="chartsContainer">
    //   <div className="chart-card">
    //     <HighchartsReact highcharts={Highcharts} options={zooming} />
    //     <button className="sizeBtnZoomChart">Large</button>
    //     <button className="sizeBtnZoomChart">Small</button>
    //   </div>
    // </div>
  );
};

export default ZoomingChart;
