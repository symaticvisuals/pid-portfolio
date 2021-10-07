import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		padding: "15px 15px",
		margin: "10px 5px",
		background: "#E7ECF6",
		height: "180px",
		width: "190px",
		borderRadius: "20px",
		[theme.breakpoints.down("sm")]: {
			height: "160px",
			width: "180px",
		},
	},
	heading: {
		fontSize: "2rem",
		fontWeight: 600,
	},
	description: {
		textAlign: "center",
	},
}));
function Couters({ number, description }) {
	const classes = useStyles();
	const [count, setCount] = React.useState(0);

	const duration = 2;
	useEffect(() => {
		let start = number / 2;

		const end = number;

		if (start === end) return;

		let incrementTime = 0.001;

		let timer = setInterval(() => {
			if (number > 1000) {
				start += 1000;
			} else {
				start += 1;
			}
			setCount(start);
			if (start === end) clearInterval(timer);
		}, incrementTime);
	}, [number, duration]);

	return (
		<div className={classes.root}>
			<Typography variant='h6' className={classes.heading}>
				{count}+
			</Typography>
			<Typography variant='body1' className={classes.description}>
				{description}
			</Typography>
		</div>
	);
}

export default Couters;
