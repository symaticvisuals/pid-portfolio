import { Box } from "@material-ui/core";
import React from "react";
import ServiceSection from "./ServiceSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import AboutUsSection from "./AboutUsSection";
import OurWorks from "./OurWorks";
import Footer from "./Footer";
import Companies from "./Companies";

function Hero() {
  return (
    <Box
      style={{
        background: "#fff",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <HeroSection />
      <Companies />
      <AboutUsSection />
      <ServiceSection />
      <OurWorks />
      <Footer />
    </Box>
  );
}

export default Hero;
