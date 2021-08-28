import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import { ourWorks } from "../Content";

import ImageCarousel from "./components/ImageCarousel";

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};
function a11yProps(index) {
	return {
		"id": `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

function OurWorks() {
	const [value, setValue] = useState(0);

	const handleChange = (event, index) => {
		setValue(index);
	};
	return (
		<div style={{ marginTop: "10vh" }} id='works'>
			<Typography variant='h2' style={{ textAlign: "center" }}>
				Our Works
			</Typography>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div style={{ width: "80%" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label='simple tabs example'
						variant='scrollable'
						scrollButtons='auto'
						style={{
							color: "white",
							textTransform: "none",
							padding: "1em 2em",
						}}
					>
						{ourWorks.map((work, index) => {
							return (
								<Tab
									label={work.title}
									{...a11yProps(0)}
									style={{
										textTransform: "none",
										fontFamily: "Sora",
									}}
								/>
							);
						})}
					</Tabs>
					{ourWorks.map((work, index) => {
						return (
							<TabPanel value={value} index={index}>
								{console.log(work)}
								<ImageCarousel Images={work.locations} />
							</TabPanel>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default OurWorks;
