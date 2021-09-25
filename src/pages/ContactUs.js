import { Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "50px",

		padding: "20px 0",
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
		"fontSize": "20px",
		"borderRadius": "25px",
		"padding": "0 33px",
		"fontWeight": "bold",
		"height": "50px",
		"cursor": "pointer",
		"lineHeight": "50px",
		"textAlign": "center",
		"margin": 0,
		"textDecoration": "none",
		"&:hover": {
			backgroundColor: "#454CFF",
			boxShadow: "0px 10px 16px rgb(69, 76, 255, 0.3)",
		},
	},
}));

function ContactUs() {
	const classes = useStyles();
	return (
		<div className={classes.root} id='contact'>
			<Typography variant='h2'>Get in touch!</Typography>
			<Typography variant='h5' style={{ textAlign: "center" }}>
				Contact us for quotes, or to discuss your project.
			</Typography>
			<div
				style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
			>
				<button data-tf-popup='ThdfiVdR' className={classes.buttonForm}>
					Contact Us
				</button>
			</div>
		</div>
	);
}

export default ContactUs;
