import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
	preview: {
		margin: "0 30px",
	},
	image: {
		width: "100%",
		objectFit: "contain",
	},
}));
function WorkShowcaseThumbnail({ work }) {
	const classes = useStyles();
	return (
		<div className={classes.preview}>
			<img src={work.bestImage} alt='' className={classes.image} />
		</div>
	);
}

export default WorkShowcaseThumbnail;
