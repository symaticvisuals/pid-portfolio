import { Box } from "@material-ui/core";
import React from "react";
import ServiceSection from "./ServiceSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import AboutUsSection from "./AboutUsSection";
import OurWorks from "./OurWorks";

function Hero() {
	return (
		<Box
			style={{
				background: "#13171A",
				minHeight: "100vh",
				width: "100%",
				margin: 0,
				padding: 0,
				overflowX: "hidden",
			}}
		>
			<Navbar />
			<HeroSection />
			<AboutUsSection />
			<ServiceSection />
			<OurWorks />
		</Box>
	);
}

export default Hero;