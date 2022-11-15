import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

function Layout(props) {
  return (
    <div>
      <Header />
      <div style={{ position: "fixed", top: "70px" }}>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
