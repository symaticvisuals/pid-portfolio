import {
	Typography,
	Box,
	Grid,
	Button,
	TextField,
	InputBase,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import heroImage from "../images/heroImage.png";
const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: "10vh",
		padding: "0 5vw",
	},
}));
function HeroSection() {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
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
						<Typography variant='h6' style={{ marginTop: "30px" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</Typography>
						<Box
							display='flex'
							style={{ alignItems: "center", marginTop: "30px", width: "90%" }}
						>
							<InputBase
								placeholder='Enter your Email ID'
								style={{ width: "15em", flexGrow: 1 }}
							/>
							<Button style={{ width: "15em" }}>BOOK NOW</Button>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} md={6} style={{}}>
					<Box
						style={{
							"backgroundImage": `url(${heroImage})`,
							"backgroundSize": "cover",
							"height": "55vh",
							"boxShadow": "-12px 12px 0px 4px rgba(108,117,251,1)",
							"-webkit-box-shadow": "-12px 12px 0px 4px rgba(108,117,251,1)",
							"-moz-box-shadow": "-12px 12px 0px 4px rgba(108,117,251,1)",
						}}
					></Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default HeroSection;
