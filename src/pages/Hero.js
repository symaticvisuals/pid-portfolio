import { Box } from "@material-ui/core";
import React from "react";

import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

function Hero() {
  return (
    <Box
      style={{
        background: "#13171A",
        height: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <HeroSection />
      {/* <AboutUsSection /> */}
    </Box>
  );
}

export default Hero;
