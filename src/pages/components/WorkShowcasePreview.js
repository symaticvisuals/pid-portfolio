import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
	preview: {
		margin: "0 30px",
	},
	image: {
		"width": "100%",
		"objectFit": "cover",
		"height": "400px",
		"borderRadius": "40px",
		"transition": "all 0.2s ease-in-out",
		"filter": "grayscale(100%)",
		"&:hover": {
			filter: "grayscale(0)",
			border: "4px solid #454CFF",
		},
	},
}));
function WorkShowcasePreview({ imagePreview }) {
	const classes = useStyles();
	return (
		<div className={classes.preview}>
			<img src={imagePreview.location} alt='' className={classes.image} />
		</div>
	);
}

export default WorkShowcasePreview;
