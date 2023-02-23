import Hamburger from "./hamburger";

import "./header.css";

const Header = () => {
  return (
    <>
      <div className="headercontainer">
        <div className="headerwrapper">
          <div className="headerElements">
            <h1 className="header-title">React-Charts</h1>
            <div class="vl"></div>
          </div>
          <div className="hamburgare headerElements">
            <Hamburger />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
