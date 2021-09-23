import { Box, useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import ServiceSection from "./ServiceSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import AboutUsSection from "./AboutUsSection";

import Footer from "./Footer";
import Companies from "./Companies";

import MobileNavbar from "./components/MobileNavbar";
import OurWorksNew from "./OurWorksNew";
import WorkShowcase from "./WorkShowcase";
import HeroCarousel from "./HeroCarousel";
import ContactUs from "./ContactUs";

const SectionChangeContext = React.createContext();

function Hero() {
	const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	const [selected, setSelected] = useState(false);
	const [work, setWork] = useState({});
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
			<div style={{ display: "flex", justifyContent: "center" }}>
				<HeroCarousel />
			</div>
			<Companies />
			<AboutUsSection />
			<ServiceSection />
			<SectionChangeContext.Provider
				value={{ selected, setSelected, work, setWork }}
			>
				{selected && work ? <WorkShowcase work={work} /> : <OurWorksNew />}
			</SectionChangeContext.Provider>
			<ContactUs />
			<Footer />
		</Box>
	);
}

export { Hero, SectionChangeContext };
