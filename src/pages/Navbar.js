import { makeStyles, Typography, Box } from "@material-ui/core";
import React from "react";
import logo from "../images/logo.png";
const useStyles = makeStyles((theme) => ({
	root: {
		padding: "30px",
		color: "white",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		width: "100%",
	},
	navLinks: {
		fontWeight: "500",
		fontSize: "1.3em",
		padding: "0 30px",
		fontFamily: "Sora, sans-serif",
	},
}));
function Navbar() {
	const classes = useStyles();
	return (
		<Box justifyContent='center'>
			<Box p={4} className={classes.root}>
				<Box display='flex'>
					<Typography className={classes.navLinks}>About</Typography>
					<Typography className={classes.navLinks}>Services</Typography>
				</Box>
				<img src={logo} alt='brand logo' width='180px' height='auto'></img>
				<Box display='flex'>
					<Typography className={classes.navLinks}>Our Work</Typography>
					<Typography className={classes.navLinks}>Contact Us</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default Navbar;
