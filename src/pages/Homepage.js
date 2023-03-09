import React, { useEffect } from "react";
import Lottie from "react-lottie";
import $ from "jquery";
import { useMediaQuery } from "react-responsive";
import JennaAnimation from "../assets/animation/jenna.json";
import "./style.css";

function Homepage(props) {
  // 메인페이지 애니메이션
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: JennaAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
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

  //파티클 랜덤함수
  const rnd = (m, n) => {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
  };

  const heartAnimation = () => {
    var heartCount = ($(".particle-heart").width() / 50) * 0.5;
    for (var i = 0; i < heartCount; i++) {
      var heartSize = rnd(160, 200) / 10;
      $(".particle-heart").append(
        '<span class="heart" style="top: ' +
          rnd(50, 100) +
          "%; left: " +
          rnd(20, 90) +
          "%; width: " +
          heartSize +
          "px; height: " +
          heartSize +
          "px ; animation-delay: -" +
          rnd(0, 3) +
          "s; animation-duration: " +
          rnd(2, 5) +
          's"></span>'
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      heartAnimation();
    }, 3000);
  });

  return (
    <div className="main-page">
      {isPc && (
        <div className="main-text-container">
          <div className="particle-heart">
            <Lottie
              style={{ height: "70vmin", width: "70vmin" }}
              options={defaultOptions}
              // height={800}
              // width={1000}
            />
          </div>
        </div>
      )}
      {isMobile && (
        <div className="main-text-container-mobile">
          <div className="particle-heart">
            <Lottie
              // style={{ marginLeft: "5%" }}
              options={defaultOptions}
              height={400}
              width={400}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
