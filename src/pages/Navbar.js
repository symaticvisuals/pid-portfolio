import { makeStyles, Typography, Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-scroll";
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
		"fontWeight": "500",
		"fontSize": "1.3em",
		"padding": "0 30px",
		"fontFamily": "Sora, sans-serif",
		"cursor": "pointer",
		"&:hover": {
			borderBottom: "2px solid #4A55FF",
		},
	},
}));
function Navbar() {
	const classes = useStyles();
	return (
		<Box justifyContent='center'>
			<Box p={4} className={classes.root}>
				<Box display='flex'>
					<Link to='about' spy={true} smooth={true}>
						<Typography className={classes.navLinks}>About</Typography>
					</Link>
					<Link to='services' spy={true} smooth={true}>
						<Typography className={classes.navLinks}>Services</Typography>
					</Link>
				</Box>
				<Link to='hero' spy={true} smooth={true}>
					<img
						src={logo}
						alt='brand logo'
						width='180px'
						height='auto'
						style={{ cursor: "pointer" }}
					></img>
				</Link>
				<Box display='flex'>
					<Link to='works' spy={true} smooth={true}>
						<Typography className={classes.navLinks}>Our Work</Typography>
					</Link>

					<Typography className={classes.navLinks}>Contact Us</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default Navbar;
