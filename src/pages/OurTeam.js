import { Typography, Grid } from "@material-ui/core";
import React from "react";
import { teamMembers } from "../Content";
import MemberCard from "./components/MemberCard";

function OurTeam() {
	return (
		<div style={{ marginTop: "10vh" }} id='team'>
			<Typography variant='h4' style={{ textAlign: "center" }}>
				Our Team
			</Typography>
			<Typography variant='h2' style={{ textAlign: "center" }}>
				Meet Our Team
			</Typography>
			<Grid container style={{ display: "flex", justifyContent: "center" }}>
				{teamMembers.map((member, idx) => {
					return (
						<Grid item xs={12} sm={4} md={3} key={idx}>
							<MemberCard member={member} />
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}

export default OurTeam;
