import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
	root: {
		"background": "#1C2226",
		"width": "400px",
		"minHeight": "210px",
		"margin": "10px",
		"padding": "20px",
		"display": "flex",
		"flexDirection": "column",
		"&:hover": {
			boxShadow: "0px 0px 70px rgb(13, 16, 18)",
			transition: "all .2s ease-in",
			transform: "scale(1.04)",
			// background: "#e5e5e5",
			border: "1px solid #7074F7",
			background: "rgb(13, 16, 18)",
			cursor: "pointer",
		},
	},
}));
function ServiceCard(props) {
	const classes = useStyles();
	return (
		<Grid item xs={12} sm={6} md={3}>
			<div className={classes.root}>
				<div style={{ display: "flex", justifyContent: "flex-end" }}>
					<Typography
						variant='h5'
						style={{
							color: "#38454D",
							fontFamily: "Sora, sans-serif",
							fontWeight: "bold",
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
				<div style={{ display: "flex", alignItems: "flex-end", flexGrow: 1 }}>
					<div
						style={{
							width: "100%",
							height: "5px",
							background: "linear-gradient(to right, #6777FF 0%, #FF386E 100%)",
						}}
					/>
				</div>
			</div>
		</Grid>
	);
}
export default ServiceCard;
