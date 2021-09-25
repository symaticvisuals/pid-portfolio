import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
	preview: {
		margin: "0 30px",
		marginTop: "40px",
		[theme.breakpoints.down("sm")]: {
			margin: "10px 10px",
			marginTop: "30px",
		},
	},
	image: {
		"width": "100%",
		"objectFit": "cover",
		"height": "450px",
		// "borderRadius": "40px",
		"transition": "all 0.2s ease-in-out",

		"&:hover": {
			filter: "grayscale(0)",
			// border: "4px solid #454CFF",
		},
		[theme.breakpoints.down("xs")]: {
			height: "200px",
		},
	},
}));
function HeroCarouselPreview({ imagePreview }) {
	const classes = useStyles();
	return (
		<div className={classes.preview}>
			<img src={imagePreview.location} alt='' className={classes.image} />
		</div>
	);
}

export default HeroCarouselPreview;
