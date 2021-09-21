import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-scroll";
import logo from "../images/logo/logo-v2.png";
import facebook from "../images/logo/fb.png";
import twitter from "../images/logo/twitter.png";
import instagram from "../images/logo/instagram.png";
const useStyles = makeStyles((theme) => ({
	root: {
		padding: "20px",
		color: "black",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		background: "#E7ECF6",
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
	socialMedia: {
		width: "20px",
		margin: "0 10px",
	},
}));
function Navbar() {
	const classes = useStyles();

	return (
		<Box justifyContent='center'>
			<Box p={4} className={classes.root}>
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
					<Link to='about' spy={true} smooth={true}>
						<Typography className={classes.navLinks}>About</Typography>
					</Link>
					<Link to='services' spy={true} smooth={true}>
						<Typography className={classes.navLinks}>Services</Typography>
					</Link>

					<Link to='works' spy={true} smooth={true}>
						<Typography className={classes.navLinks}>Our Work</Typography>
					</Link>

					<Typography className={classes.navLinks}>Contact Us</Typography>
				</Box>
				<Box display='flex'>
					<img
						src={facebook}
						alt='facebook'
						className={classes.socialMedia}
					></img>
					<img
						src={twitter}
						alt='twitter'
						className={classes.socialMedia}
					></img>
					<img
						src={instagram}
						alt='instagram'
						className={classes.socialMedia}
					></img>
				</Box>
			</Box>
		</Box>
	);
}

export default Navbar;
