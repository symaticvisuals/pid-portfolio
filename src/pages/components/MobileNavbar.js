import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import logo from "../../images/logo/logo-v2.png";
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";

import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ListItemText from "@material-ui/core/ListItemText";

import facebook from "../../images/logo/fb.png";
import twitter from "../../images/logo/twitter.png";
import instagram from "../../images/logo/instagram.png";
import { Link } from "react-scroll";

const useStyles = makeStyles({
	root: {
		display: "flex",
		justifyContent: "space-between",
		padding: "20px",
		background: "transparent",
		alignItems: "center",
		zIndex: "1000",
		position: "fixed",
		width: "100%",
		transition: "all 0.2s ease-in-out",
	},
	scrollEff: {
		display: "flex",
		justifyContent: "space-between",
		padding: "15px",
		background: "#E7ECF6",
		zIndex: "1000",
		position: "fixed",
		width: "100%",
		alignItems: "center",
		transition: "all 0.2s ease-in-out",
	},
	list: {
		width: 270,
		display: "flex",

		flexDirection: "column",
		alignItems: "center",
	},
	fullList: {
		// background: "#1C1D21",
		// padding: "15px 20px",
	},
	text: {
		fontWeight: "700",
		fontSize: "1.3rem",
		fontFamily: "Sora, sans-serif",
	},
	socialMedia: {
		width: "20px",
		marginRight: "10px",
	},
	listLayout: {
		display: "flex",
		justifyContent: "center",
		textAlign: "center",
	},
});

export default function MobileNavbar() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		right: false,
	});
	const [navbar, setNavbar] = useState(false);
	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	window.addEventListener("scroll", changeBackground);
	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div style={{ display: "flex", alignItems: "center", height: "100%" }}>
			<div
				className={clsx(classes.list, {
					[classes.fullList]: anchor === "top" || anchor === "bottom",
				})}
				role='presentation'
				onClick={toggleDrawer(anchor, false)}
				onKeyDown={toggleDrawer(anchor, false)}
			>
				<div>
					<List>
						<Link to='about' spy={true} smooth={true}>
							<ListItem button key='About' className={classes.listLayout}>
								<ListItemText
									primary='About'
									classes={{ primary: classes.text }}
								></ListItemText>
							</ListItem>
						</Link>
						<Link to='services' spy={true} smooth={true}>
							<ListItem button key='Services' className={classes.listLayout}>
								<ListItemText
									primary='Services'
									classes={{ primary: classes.text }}
								></ListItemText>
							</ListItem>
						</Link>
						<Link to='works' spy={true} smooth={true}>
							<ListItem button key='Out Work' className={classes.listLayout}>
								<ListItemText
									primary='Our Work'
									classes={{ primary: classes.text }}
								></ListItemText>
							</ListItem>
						</Link>

						<ListItem button key='Contact Us' className={classes.listLayout}>
							<ListItemText
								primary='Contact US'
								classes={{ primary: classes.text }}
							></ListItemText>
						</ListItem>
					</List>
				</div>

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
			</div>
		</div>
	);

	return (
		<div>
			<React.Fragment key={"left"}>
				<div className={navbar === true ? classes.scrollEff : classes.root}>
					<div>
						<img
							src={logo}
							alt='brand logo'
							width='180px'
							height='auto'
							style={{ cursor: "pointer" }}
						></img>
					</div>
					<MenuRoundedIcon
						onClick={toggleDrawer("right", true)}
						style={{ color: "black" }}
					/>
				</div>
				<Drawer
					anchor={"right"}
					open={state["right"]}
					onClose={toggleDrawer("right", false)}
					classes={{ paper: classes.fullList }}
				>
					{list("right")}
				</Drawer>
			</React.Fragment>
		</div>
	);
}
