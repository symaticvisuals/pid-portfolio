import { makeStyles } from "@material-ui/styles";
import React from "react";
import logo from "../images/logo.png";
const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "10vh",
		backgroundColor: "#E8ECF6",
		marginTop: "40px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "20px",
	},
}));
function Footer() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<img src={logo} alt='' />
		</div>
	);
}

export default Footer;
