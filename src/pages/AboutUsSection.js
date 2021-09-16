import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import AboutUsCounter from "./components/AboutUsCounter";
const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: "3vh",
		padding: "0 5vw",
		textAlign: "left",
		[theme.breakpoints.down("sm")]: {},
	},
	container: {
		width: "40vw",
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
		},
	},
	aboutSection: {
		paddingTop: "20px",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		width: "100%",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			textAlign: "center",
		},
	},
}));
function AboutUsSection() {
	const classes = useStyles();
	return (
		<Box className={classes.root} id='about'>
			<Box>
				<ScrollAnimation animateIn='fadeIn' animateOnce={true}>
					<Box className={classes.aboutSection}>
						<Box className={classes.container}>
							<Typography variant='h2'>About Us</Typography>
							<Typography variant='h6'>
								We have been in this field more than twenty-five years and have
								executed a vast variety of projects including showrooms,
								offices, household interiors, departmental stores, exhibitions,
								hotels, restaurants etc.
							</Typography>
							<br />
							<Typography variant='h6'>
								Our field of work includes wooden works, ceiling, flooring,
								civil, metal works & electrical works and all other kind of
								interiors. It will be a great opportunity for us if you give us
								a chance to serve you. Our work will be of high quality & as per
								design. We are having skilled & experienced manpower with all
								types of necessary machinery & equipment.
							</Typography>
						</Box>
						<Box style={{ display: "flex", alignItems: "center" }}>
							<AboutUsCounter />
						</Box>
					</Box>
				</ScrollAnimation>
			</Box>
		</Box>
	);
}

export default AboutUsSection;
