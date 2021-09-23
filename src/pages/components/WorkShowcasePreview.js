import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
	preview: {
		margin: "0 30px",
		[theme.breakpoints.down("sm")]: {
			margin: "10px 10px",
		},
	},
	image: {
		"width": "100%",
		"objectFit": "cover",
		"height": "400px",
		"borderRadius": "40px",
		"transition": "all 0.2s ease-in-out",

		"&:hover": {
			filter: "grayscale(0)",
			border: "4px solid #454CFF",
		},
	},
	imageVertical: {
		width: "100%",
		objectFit: "cover",
		height: "400px",
		borderRadius: "10px",
		transition: "all 0.2s ease-in-out",
	},
}));

function WorkShowcasePreview({ imagePreview, type }) {
	const classes = useStyles();
	return (
		<div className={classes.preview}>
			<img
				src={imagePreview.location}
				alt=''
				className={type === "mobile" ? classes.imageVertical : classes.image}
			/>
		</div>
	);
}

export default WorkShowcasePreview;
