import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../images/logo/logo-v2.png";

import instagram from "../images/logo/instagram.png";
const useStyles = makeStyles((theme) => ({
	root: {
		padding: "25px",
		color: "black",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		zIndex: "5",
		position: "fixed",
		width: "100%",
		top: 0,
		background: "transparent",
		transition: "all 0.2s ease-in-out",
	},
	scrollEff: {
		padding: "15px",
		color: "black",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		zIndex: "5",
		position: "fixed",
		width: "100%",
		top: 0,
		background: "#E7ECF6",
		transition: "all 0.2s ease-in-out",
	},
	navLinks: {
		"fontWeight": "500",
		"fontSize": "1em",
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

	buttonForm: {
		"all": "unset",
		"fontFamily": "Poppins",
		"display": "inline-block",
		"maxWidth": "100%",
		"whiteSpace": "nowrap",
		"overflow": "hidden",
		"textOverflow": "ellipsis",
		"backgroundColor": "#454CFF",
		"color": "#ffffff",
		"fontSize": "15px",
		"borderRadius": "25px",
		"padding": "0 15px",
		"fontWeight": "500",
		"height": "auto",
		"cursor": "pointer",
		"lineHeight": "40px",
		"textAlign": "center",
		"margin": 0,
		"textDecoration": "none",
		"&:hover": {
			backgroundColor: "#454CFF",
			boxShadow: "0px 10px 16px rgb(69, 76, 255, 0.3)",
		},
	},
}));
function Navbar() {
	const classes = useStyles();
	const [navbar, setNavbar] = useState(false);
	const changeBackground = () => {
		if (window.scrollY >= 50) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	window.addEventListener("scroll", changeBackground);
	return (
		<Box justifyContent='center'>
			<Box p={4} className={navbar === true ? classes.scrollEff : classes.root}>
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
						<Typography className={classes.navLinks}>Our Works</Typography>
					</Link>
				</Box>
				<Box display='flex' style={{ alignItems: "center" }}>
					<button data-tf-popup='ThdfiVdR' className={classes.buttonForm}>
						Contact Us
					</button>
					<a
						href='https://www.instagram.com/pidprojects/'
						target='_blank'
						rel='noreferrer'
					>
						<img
							src={instagram}
							alt='instagram'
							className={classes.socialMedia}
						></img>
					</a>
				</Box>
			</Box>
		</Box>
	);
}

export default Navbar;
