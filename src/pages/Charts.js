import FirstChart from "../charts/FirstChart";
import SecondChart from "../charts/SecondChart";
import ThirdChart from "../charts/ThirdChart";
import FourthChart from "../charts/FourthChart";
import FivthChart from "../charts/FivthChart";

import "./chart.css";

const MyChart = () => {
  return (
    <div className="chartsContainer">
      <h2 className="chartsTitle">Examples of different charts</h2>
      <div className="chart-card">
        <div className="chartBox">
          <FirstChart />
        </div>
        <div className="chartBox">
          <SecondChart />
        </div>
        <div className="chartBox">
          <ThirdChart />
        </div>
        <div className="chartBox">
          <FourthChart />
        </div>
        <div className="chartBox">
          <FivthChart />
        </div>
        <div className="chartBox">
          <FirstChart />
        </div>
        <div className="chartBox">
          <FirstChart />
        </div>
      </div>
    </div>
  );
};

export default MyChart;
