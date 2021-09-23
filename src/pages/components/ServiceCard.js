import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import line from "../../images/line.png";
const useStyles = makeStyles((theme) => ({
	root: {
		"background": "linear-gradient(#E7ECF6, #FFF)",
		"width": "auto",
		"height": "auto",
		"margin": "10px",
		"padding": "20px",
		"display": "flex",
		"flexDirection": "column",
		"borderRadius": "30px",
		// "background": "#E7ECF6",
		"&:hover": {
			boxShadow: "0px 0px 70px rgb(255, 255, 255)",

			transition: "all .2s ease-in",
			transform: "scale(1.1)",

			// background: "#e5e5e5",
			// border: "1px solid #7074F7",
			// background: "rgb(13, 16, 18)",
			cursor: "pointer",
		},
		[theme.breakpoints.down("sm")]: {
			padding: "10px",
		},
	},
	image: {
		width: "200px",
		objectFit: "cover",

		// position: "absolute",
	},
	heading: {
		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	},
}));
function ServiceCard(props) {
	const classes = useStyles();
	return (
		<Grid item xs={12} sm={6} md={4} xl={3}>
			<ScrollAnimation animateIn='fadeIn' animateOnce={true}>
				<div className={classes.root}>
					<div style={{ display: "flex", justifyContent: "flex-end" }}></div>
					<div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<Typography variant='h4' className={classes.heading}>
								{props.title}
							</Typography>
							<img src={line} alt='' className={classes.image} />
						</div>
						<Typography
							variant='body2'
							style={{
								marginTop: "8px",
								textAlign: "justify",
								color: "black",
								padding: "10px",
							}}
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
