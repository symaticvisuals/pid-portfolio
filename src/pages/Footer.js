import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

import logo from "../images/logo/imageLogo.png";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import MapRoundedIcon from "@material-ui/icons/MapRounded";
import { Instagram } from "@material-ui/icons";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "10vh",
		height: "auto",
		width: "100%",
		backgroundColor: "#E7ECF6",
		padding: "5vh 12vw",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-evenly",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			padding: "5vh 5vw",
		},
	},
	title: {
		color: "#fff",
		fontWeight: "500",
		fontSize: "1.2rem",
	},
	info: {
		color: "#fff",
		fontSize: "0.8rem",
		fontWeight: "400",
		width: "60%",
	},
	socialMedia: {
		fontSize: "30px",
		marginRight: "10px",
		color: "#0e0e0e",
	},
	divider: {
		// margin: "10px 0",
		backgroundColor: "#0e0e0e",
	},
	footerNav: {
		fontSize: "1rem",
	},
	contactInfo: {
		display: "flex",
		// [theme.breakpoints.down("sm")]: {
		// 	justifyContent: "center",
		// },
	},
	phoneNumber: {
		textDecoration: "none",
		color: "black",
		fontWeight: "500",
		cursor: "pointer",
		padding: "0 10px",
	},
	touch: {
		marginBottom: "10px",
		[theme.breakpoints.down("sm")]: {
			marginTop: "20px",
			marginBottom: "0",
		},
	},
}));
// 9810194111, 9810260760, 9818079110;
// 	projects@pidprojects.in
// 	142, Mundka Industrial Area, New Delhi
function Footer() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<img
					src={logo}
					alt=''
					style={{
						height: "100%",
						width: "130px",
						objectFit: "contain",
						marginRight: "30px",
					}}
				/>
				<div>
					<div
						style={{
							display: "flex",
						}}
					>
						<a
							href='https://www.instagram.com/pidprojects/'
							target='_blank'
							rel='noreferrer'
						>
							<Instagram className={classes.socialMedia} />
						</a>
					</div>
					<div>
						<Link to='about' spy={true} smooth={true}>
							<Typography variant='h6' className={classes.footerNav}>
								About Us
							</Typography>
						</Link>
						<Link to='services' spy={true} smooth={true}>
							<Typography variant='h6' className={classes.footerNav}>
								Services
							</Typography>
						</Link>
						<Link to='works' spy={true} smooth={true}>
							<Typography variant='h6' className={classes.footerNav}>
								Our Works
							</Typography>
						</Link>
					</div>
				</div>
			</div>
			<div>
				<Typography variant='h5' style={{}} className={classes.touch}>
					Contact Us
				</Typography>
				<div>
					<div className={classes.contactInfo}>
						<CallRoundedIcon />
						<Typography>
							<a href='tel:+91818079110' className={classes.phoneNumber}>
								+91 9818079110
							</a>
						</Typography>
					</div>
					<div className={classes.contactInfo}>
						<EmailRoundedIcon />
						<Typography>
							<a
								href='mailto:mb@pidprojects.in'
								className={classes.phoneNumber}
							>
								mb@pidprojects.in
							</a>
						</Typography>
					</div>
					<div className={classes.contactInfo}>
						<MapRoundedIcon />
						<Typography className={classes.phoneNumber}>
							25B/2, Khasra Number 83/11/2, Mundka Udyog Nagar
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
