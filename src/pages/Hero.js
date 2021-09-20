import { Box, useMediaQuery } from "@material-ui/core";
import React from "react";
import ServiceSection from "./ServiceSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import AboutUsSection from "./AboutUsSection";
import OurWorks from "./OurWorks";
import Footer from "./Footer";
import Companies from "./Companies";

import MobileNavbar from "./components/MobileNavbar";
import OurWorksNew from "./OurWorksNew";

function Hero() {
	const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
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
			{isSm ? <MobileNavbar /> : <Navbar />}

			<HeroSection />
			<Companies />
			<AboutUsSection />
			<ServiceSection />
			<OurWorksNew />
			{/* <OurTeam /> */}
			<Footer />
		</Box>
	);
}

export default Hero;
