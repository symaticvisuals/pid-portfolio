import { makeStyles } from "@material-ui/core";
import React from "react";
import Counters from "../components/Couters";
import ScrollAnimation from "react-animate-on-scroll";
const useStyles = makeStyles((theme) => ({
	root: {
		height: "auto",
		width: "100%",

		padding: "30px 0",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			padding: "30px 0",
		},
	},
}));
function AboutUsCounter() {
	const classes = useStyles();
	return (
		<ScrollAnimation animateIn='fadeIn' animateOnce={true}>
			<div className={classes.root}>
				<div>
					<Counters
						number={1000}
						description={"Projects done over 3+ decades"}
					/>
					<Counters
						number={1000000}
						description={"Sq. ft. of Civil & Interiors"}
					/>
				</div>
				<div>
					<Counters
						number={2000000}
						description={"Sq. ft. of  General Contracting"}
					/>
					<Counters number={600000} description={"Sq. ft. of Design & Build"} />
				</div>
			</div>
		</ScrollAnimation>
	);
}

export default AboutUsCounter;
