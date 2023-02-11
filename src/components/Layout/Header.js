import React from "react";
import "./Header.css";

function header(props) {
  return (
    <div className="Header">
      <div className="nav-container">
        <nav>
          <ul className="navigation-menu">
            <li style={{ color: "#00FF58" }}>About</li>
            <li style={{ color: "#FFFF00" }}>Project</li>
            <li style={{ color: "#00CEFF" }}>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default header;
