import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Logo from "../../assets/image/ming-logo-white.png";
import "./Header.css";

function Header(props) {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const menuToggle = () => {
    if (isActive) setIsActive(false);
    else setIsActive(true);
    console.log(isActive);
  };

  // 반응형 웹
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  // const isTablet = useMediaQuery({
  //   query: "(min-width:768px) and (max-width:1023px)",
  // });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <>
      {isPc && (
        <div className="Header">
          <div className="nav-container">
            <img
              style={{
                height: "100%",
                padding: "20px",
                boxSizing: "border-box",
              }}
              src={Logo}
              alt="logo"
              onClick={() => {
                navigate("/");
              }}
            />
            <nav>
              <ul className="navigation-menu">
                <li
                  style={{ color: "#00FF58" }}
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About
                </li>
                <li
                  style={{ color: "#FFFF00" }}
                  onClick={() => {
                    navigate("/project");
                  }}
                >
                  Project
                </li>
                <li
                  style={{ color: "#00CEFF" }}
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="Header">
          <div className="nav-container">
            <img
              style={{
                height: "80%",
                padding: "20px",
                boxSizing: "border-box",
              }}
              src={Logo}
              alt="logo"
              onClick={() => {
                navigate("/");
              }}
            />
            <div style={{ width: "10%" }}>
              <svg
                className="ham"
                viewBox="0 0 100 100"
                width="80"
                onClick={menuToggle}
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                />
              </svg>
            </div>

            <nav>
              <ul className="navigation-menu">
                <li
                  style={{ color: "#00FF58" }}
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About
                </li>
                <li
                  style={{ color: "#FFFF00" }}
                  onClick={() => {
                    navigate("/project");
                  }}
                >
                  Project
                </li>
                <li
                  style={{ color: "#00CEFF" }}
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
