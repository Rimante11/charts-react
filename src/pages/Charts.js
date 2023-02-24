import FirstChart from "../charts/FirstChart";
import SecondChart from "../charts/SecondChart";
import ThirdChart from "../charts/ThirdChart";
import FourthChart from "../charts/FourthChart";
import FivthChart from "../charts/FivthChart";
import SixthChart from "../charts/SixthChart";
import SeventhChart from "../charts/SeventhChart";
import EighthChart from "../charts/EighthChart";
import ScrollChart from "../charts/ScrollChart";
import ZoomingChart from "../charts/ZoomingChart";

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
          <SixthChart />
        </div>
        <div className="chartBox">
          <SeventhChart />
        </div>
        <div className="chartBox">
          <EighthChart />
        </div>
        <div className="chartBox">
          <ScrollChart />
        </div>
        <div className="zoomContainer">
          <ZoomingChart />
        </div>
      </div>
    </div>
  );
};

export default MyChart;
