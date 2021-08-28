import { Typography, Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import heroImage from "../images/heroImage.png";
const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: "10vh",
		padding: "0 5vw",
		height: "60vh",
	},
	input: {
		outline: "none",
		border: "none",
		flexGrow: 1,
		background: "none",
		color: "white",
		fontSize: "1rem",
		fontFamily: "Sora, sans-serif",
		paddingLeft: "15px",
	},
	emailBox: {
		display: "flex",
		alignItems: "center",
		marginTop: "30px",
		width: "90%",
		border: "2px solid #7272F4",
	},
}));
function HeroSection() {
	const classes = useStyles();
	return (
		<Box className={classes.root} id="hero">
			<Grid container spacing={6}>
				<Grid
					item
					xs={12}
					md={6}
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Box>
						<Typography variant='h1'>Design Your Confort Zone</Typography>
						<Typography variant='h6' style={{ marginTop: "5px" }}>
							Bringing your dreams to reality since 1976
						</Typography>
						<Box className={classes.emailBox}>
							<input
								type='email'
								name=''
								id=''
								placeholder='Enter Your Email'
								className={classes.input}
							/>
							<Button style={{ height: "auto" }}>BOOK NOW</Button>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} md={6} style={{}}>
					<Box>
						<img
							src={heroImage}
							alt=''
							style={{ width: "100%", objectFit: "contain" }}
						/>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default HeroSection;
