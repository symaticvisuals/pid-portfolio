import { makeStyles } from "@material-ui/core";
import React from "react";
import Counters from "../components/Couters";
import ScrollAnimation from "react-animate-on-scroll";
const useStyles = makeStyles((theme) => ({
	root: {
		height: "auto",
		width: "100%",
		background: "#1C202F",
		marginBottom: "50px",
		padding: "30px 0",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));
function AboutUsCounter() {
	const classes = useStyles();
	return (
		<ScrollAnimation animateIn='fadeIn' animateOnce={true}>
			<div className={classes.root}>
				<Counters number={500} description={"Projects done over 3+ decades"} />
				<Counters number={75} description={"Sq. ft. of Civil & Interiors"} />
				<Counters number={20} description={"Sq. ft. of  General Contracting"} />
				<Counters number={5} description={"Sq. ft. of Design & Build"} />
			</div>
		</ScrollAnimation>
	);
}

export default AboutUsCounter;
