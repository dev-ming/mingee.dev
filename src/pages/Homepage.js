import React from "react";
import Lottie from "react-lottie";
import JennaAnimation from "../assets/animation/jenna.json";
import "./style.css";

function Homepage(props) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: JennaAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="main-page">
      <div className="main-text-container">
        <Lottie
          style={{ marginLeft: "5%" }}
          options={defaultOptions}
          height={800}
          width={1000}
        />
      </div>
    </div>
  );
}

export default Homepage;
