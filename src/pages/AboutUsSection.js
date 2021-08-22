import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: "14vh",
		padding: "0 5vw",
		textAlign: "center",
	},
}));
function AboutUsSection() {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Box>
				<Typography variant='h2'>Know more About Us</Typography>
				<Box
					style={{
						paddingTop: "20px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Box style={{ width: "70%" }}>
						<Typography variant='h6'>
							We have been in this field more than twenty-five years and have
							executed a vast variety of projects including showrooms, offices,
							household interiors, departmental stores, exhibitions, hotels,
							restaurants etc.
						</Typography>
						<br />
						<Typography variant='h6'>
							Our field of work includes wooden works, ceiling, flooring, civil,
							metal works & electrical works and all other kind of interiors. It
							will be a great opportunity for us if you give us a chance to
							serve you. Our work will be of high quality & as per design. We
							are having skilled & experienced manpower with all types of
							necessary machinery & equipment.
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default AboutUsSection;
