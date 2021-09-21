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
			<Companies />
			<AboutUsSection />
			<ServiceSection />
			<SectionChangeContext.Provider
				value={{ selected, setSelected, work, setWork }}
			>
				{selected && work ? <WorkShowcase work={work} /> : <OurWorksNew />}
			</SectionChangeContext.Provider>

			<Footer />
		</Box>
	);
}

export { Hero, SectionChangeContext };
