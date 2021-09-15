import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import facebook from "../../images/logo/fb.png";
import twitter from "../../images/logo/twitter.png";
import instagram from "../../images/logo/instagram.png";
const useStyles = makeStyles((theme) => ({
	root: {
		"padding": "20px",
		"margin": "0 10px",
		"borderRadius": "10px",
		"&:hover": {
			boxShadow: "0px 30px  40px #ccc",
			transition: "all 0.4s",
		},
	},
	imageBox: {
		display: "flex",
		justifyContent: "center",
	},
	image: {
		"objectFit": "cover",
		"height": "300px",
		"width": "100%",
		"borderRadius": "10px",
		"filter": "grayscale(50%)",
		"&:hover": {
			filter: "grayscale(0)",
		},
	},
	title: {
		fontSize: "1rem",

		color: "#454CFF",
	},
	description: {
		fontSize: "0.8rem",
		color: "#A2BAF6",
	},
	socialMedia: {
		width: "20px",
		marginRight: "15px",
	},
	name: {
		marginTop: "10px",
	},
}));
function MemberCard({ member }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.imageBox}>
				<img src={member.image} alt='avatar' className={classes.image} />
			</div>
			<Typography variant='h4' className={classes.name}>
				{member.name}
			</Typography>
			<Typography variant='subtitle1' className={classes.title}>
				{member.title}
			</Typography>
			<div>
				<img
					src={facebook}
					alt='facebook'
					className={classes.socialMedia}
				></img>
				<img src={twitter} alt='twitter' className={classes.socialMedia}></img>
				<img
					src={instagram}
					alt='instagram'
					className={classes.socialMedia}
				></img>
			</div>
		</div>
	);
}

export default MemberCard;
