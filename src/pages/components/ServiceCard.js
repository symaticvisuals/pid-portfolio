import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles((theme) => ({
	root: {
		"background": "linear-gradient(#1C2226, #13171A)",
		"width": "350px",
		"height": "auto",
		"margin": "10px",
		"padding": "20px",
		"display": "flex",
		"flexDirection": "column",
		"&:hover": {
			boxShadow: "0px 0px 70px rgb(13, 16, 18)",

			transition: "all .2s ease-in",
			transform: "scale(1.1)",

			// background: "#e5e5e5",
			// border: "1px solid #7074F7",
			background: "rgb(13, 16, 18)",
			cursor: "pointer",
		},
	},
}));
function ServiceCard(props) {
	const classes = useStyles();
	return (
		<Grid item xs={12} sm={6} md={3}>
			<ScrollAnimation animateIn='fadeIn' animateOnce={true}>
				<div className={classes.root}>
					<div style={{ display: "flex", alignItems: "flex-start" }}>
						<div
							style={{
								width: "100%",
								height: "5px",
								background:
									"linear-gradient(to right, #6777FF 0%, #FF386E 100%)",
							}}
						/>
					</div>
					<div style={{ display: "flex", justifyContent: "flex-end" }}>
						<Typography
							variant='h5'
							style={{
								color: "#38454D",
								fontFamily: "Sora, sans-serif",
								fontWeight: "bold",
								marginTop: "10px",
							}}
						>
							0{props.index + 1}
						</Typography>
					</div>
					<div>
						<Typography variant='h4'>{props.title}</Typography>
						<Typography
							variant='body2'
							style={{ marginTop: "8px", textAlign: "justify" }}
						>
							{props.description}
						</Typography>
					</div>
				</div>
			</ScrollAnimation>
		</Grid>
	);
}
export default ServiceCard;
