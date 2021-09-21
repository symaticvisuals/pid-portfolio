import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { services } from "../Content";
import ServiceCard from "./components/ServiceCard";
const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "10vh",
	},
	title: {
		textAlign: "center",
	},

	grid: {
		marginTop: "6vh",
		marginLeft: "7vw",
		marginRight: "7vw",
	},
}));

function ServiceSection() {
	const classes = useStyles();
	return (
		<div className={classes.root} id='services'>
			<Typography variant='h2' className={classes.title}>
				Services
			</Typography>
			<div className={classes.grid}>
				<Grid
					container
					style={{
						display: "flex",
						// alignItems: "center",
						justifyContent: "center",
					}}
				>
					{services.map((service, index) => {
						return (
							<ServiceCard
								index={index}
								title={service.title}
								description={service.description}
							/>
						);
					})}
				</Grid>
			</div>
		</div>
	);
}

export default ServiceSection;
