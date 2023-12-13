import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

function LandingScreen() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <TopNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LandingScreen;
