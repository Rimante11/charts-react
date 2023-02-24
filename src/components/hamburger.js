import { Link } from "react-router-dom"; //Fär att kunna navigera
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";

import "./header.css";

const Hamburger = () => {
  const [openMenu, setOpenManu] = useState(false);
  console.log("Menu clicked", openMenu);

  const menuHandler = () => {
    setOpenManu(!openMenu);
  };

  return (
    <div className="hamburgerWrapper">
      <FontAwesomeIcon icon={faBars} className="faIcon" onClick={menuHandler} />
      {openMenu && (
        <ul className="hamburgerUl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/charts">Charts</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Hamburger;
