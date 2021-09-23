import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: "3vh",
		marginTop: "10vh",
		padding: "0 5vw",
		// height: "70vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			height: "auto",
			marginTop: "10vh",
		},
	},
	text: {
		textAlign: "center",
	},
	t1: {
		fontFamily: "Alex Brush",
		fontSize: "1.9rem",
		fontWeight: "600",
		color: "#474BFF",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.7rem",
		},
	},
	t2: {
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.9rem",
		},
	},
	t3: {
		fontWeight: "600",
		lineHeight: "0.9em",
		[theme.breakpoints.down("sm")]: {
			fontSize: "2.8rem",
		},
	},
	t4: {
		[theme.breakpoints.down("sm")]: {
			fontSize: "1rem",
		},
	},
	companies: {
		background: "#E7ECF6",
		display: "flex",
		justifyContent: "center",
	},
	heroImage: {
		height: "40vh",
		[theme.breakpoints.down("sm")]: {
			height: "25vh",
		},
	},
}));
function HeroSection() {
	const classes = useStyles();
	return (
		<Box className={classes.root} id='hero'>
			<Box className={classes.text}>
				<Typography variant='h4' className={classes.t1}>
					Customize your Personal Space
				</Typography>
				<Typography variant='h1' className={classes.t2}>
					DESIGN YOUR
				</Typography>
				<Typography variant='h1' className={classes.t3}>
					COMFORT ZONE
				</Typography>
				<Typography variant='h5' className={classes.t4}>
					INTERIOR SOLUTIONS PROVIDER
				</Typography>
			</Box>
		</Box>
	);
}

export default HeroSection;
