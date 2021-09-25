import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import company1 from "../images/company/blackberry1.png";
import company2 from "../images/company/crocs1.png";
import company3 from "../images/company/diwan1.png";
import company4 from "../images/company/stanmax1.png";
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "4vh 7vw 0 7vw",
		[theme.breakpoints.down("sm")]: {
			padding: "4vh 0vw 0 0vw",
		},
	},
	container: {
		// height: "20vh",
		width: "100%",
		backgroundColor: "#E7ECF6",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		borderRadius: "20px",
		padding: "2vh 0",
		[theme.breakpoints.down("sm")]: {
			borderRadius: "0px",
			padding: "4vh 0",
		},
	},
	company__image: {
		width: "14vw",
		height: "auto",
		[theme.breakpoints.down("sm")]: {
			width: "25vw",
		},
	},
	heading: {
		fontFamily: "Alex Brush",
		color: "#909AB3",
		fontSize: "2rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.6rem",
		},
	},
	imageContainer: {
		display: "flex",
		justifyContent: "space-around",
		width: "100%",
	},
}));

function Companies() {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Box className={classes.container}>
				<Typography variant='h4' className={classes.heading}>
					companies we have worked with
				</Typography>
				<Box className={classes.imageContainer}>
					<img
						src={company1}
						alt='company1'
						className={classes.company__image}
					/>
					<img
						src={company2}
						alt='company2'
						className={classes.company__image}
					/>
					<img
						src={company3}
						alt='company3'
						className={classes.company__image}
					/>
					<img
						src={company4}
						alt='company4'
						className={classes.company__image}
					/>
				</Box>
			</Box>
		</Box>
	);
}
export default Companies;
