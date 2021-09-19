import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		"objectFit": "cover",
		"height": "400px",
		"width": "97%",
		"borderRadius": "10px",
		
	},
}));
function ImageCard({ Location }) {
	const classes = useStyles();
	return (
		<div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
			<img className={classes.root} src={Location} alt='text'></img>
		</div>
	);
}

export default ImageCard;
