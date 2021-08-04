import React from "react";
import AboutUsSection from "./AboutUsSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

function Hero() {
	return (
		<div style={{ background: "black", minHeight: "100vh", width: "100%" }}>
			<Navbar />
			<HeroSection />
			<AboutUsSection />
		</div>
	);
}

export default Hero;
