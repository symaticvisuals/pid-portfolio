import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import logo from "../../images/logo.png";
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";

import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ListItemText from "@material-ui/core/ListItemText";

import facebook from "../../images/logo/fb.png";
import twitter from "../../images/logo/twitter.png";
import instagram from "../../images/logo/instagram.png";

const useStyles = makeStyles({
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
						<ListItem button key='About' className={classes.listLayout}>
							<ListItemText
								primary='About'
								classes={{ primary: classes.text }}
							></ListItemText>
						</ListItem>

						<ListItem button key='Services' className={classes.listLayout}>
							<ListItemText
								primary='Services'
								classes={{ primary: classes.text }}
							></ListItemText>
						</ListItem>
						<ListItem button key='Out Work' className={classes.listLayout}>
							<ListItemText
								primary='Our Work'
								classes={{ primary: classes.text }}
							></ListItemText>
						</ListItem>

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
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "20px 20px",
						background: "#E7ECF6",
						alignItems: "center",
					}}
				>
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
