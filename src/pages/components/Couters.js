import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		padding: "0 15px",
	},
	heading: {
		fontSize: "3rem",
	},
	description: {},
}));
function Couters({ number, description }) {
	const classes = useStyles();
	const [count, setCount] = React.useState(0);

	const duration = 2;
	useEffect(() => {
		let start = 0;

		const end = number;

		if (start === end) return;
		let totalMilSecDur = duration;
		let incrementTime = (totalMilSecDur / end) * 1000;

		let timer = setInterval(() => {
			start += 1;
			setCount(start + number);
			if (start === end) clearInterval(timer);
		}, incrementTime);
	}, [number, duration]);

	return (
		<div className={classes.root}>
			<Typography variant='h2' className={classes.heading}>
				{count}+
			</Typography>
			<Typography variant='h6' className={classes.description}>
				{description}
			</Typography>
		</div>
	);
}

export default Couters;
